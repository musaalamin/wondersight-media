import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File;

    if (!image) return NextResponse.json({ error: "No image" }, { status: 400 });

    const blob = new Blob([await image.arrayBuffer()], { type: image.type });
    const model = process.env.NEXT_PUBLIC_NISECA_MODEL || "google/vit-base-patch16-224";

    const diagnosis = await hf.imageClassification({
      model: model,
      inputs: blob,
      // @ts-ignore
      parameters: { wait_for_model: true },
    });

    return NextResponse.json({ diagnosis });
  } catch (error: any) {
    // This helps us see the real error in Vercel Logs
    console.error("HF_DEBUG_LOG:", error.message);
    
    if (error.message.includes("loading") || error.message.includes("503")) {
       return NextResponse.json({ error: "AI is waking up. Please retry in 20 seconds." }, { status: 503 });
    }
    return NextResponse.json({ error: "AI Error: " + error.message }, { status: 500 });
  }
}