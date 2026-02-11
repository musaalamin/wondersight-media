import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File;
    if (!image) return NextResponse.json({ error: "No image" }, { status: 400 });

    const arrayBuffer = await image.arrayBuffer();
    // This is the active community model we chose
    const model = process.env.NEXT_PUBLIC_NISECA_MODEL || "linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification";

    // UPDATED URL: Using the modern 'router' endpoint which is more stable
    const response = await fetch(
      `https://router.huggingface.co/hf-inference/models/${model}`,
      {
        headers: { 
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/octet-stream",
        },
        method: "POST",
        body: arrayBuffer,
      }
    );

    const diagnosis = await response.json();
    
    if (!response.ok) {
      // Catch 'Model Loading' state
      if (diagnosis.error?.includes("loading")) {
        return NextResponse.json({ error: "AI is waking up (1/2). Please retry in 20 seconds." }, { status: 503 });
      }
      throw new Error(diagnosis.error || "Hugging Face API Error");
    }

    return NextResponse.json({ diagnosis });
  } catch (error: any) {
    console.error("NISECA_DEBUG:", error.message);
    return NextResponse.json({ error: "AI Error: " + error.message }, { status: 500 });
  }
}