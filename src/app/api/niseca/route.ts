import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';
import { getWeatherData } from '../../../lib/weather';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File;
    const lat = parseFloat(formData.get('lat') as string);
    const lon = parseFloat(formData.get('lon') as string);

    if (!image) {
      return NextResponse.json({ error: "No image" }, { status: 400 });
    }

    // We convert the image to a Blob, which Hugging Face production requires
    const blob = new Blob([await image.arrayBuffer()], { type: image.type });
    const model = process.env.NEXT_PUBLIC_NISECA_MODEL || "microsoft/resnet-50";

    const [diagnosis, weather] = await Promise.all([
      hf.imageClassification({
        model: model,
        inputs: blob, // Changed from buffer to blob
        // @ts-ignore
        parameters: { wait_for_model: true },
      }),
      (lat && lon) ? getWeatherData(lat, lon) : null
    ]);

    return NextResponse.json({ diagnosis, weather });
  } catch (error: any) {
    console.error("NISECA_CRITICAL_ERROR:", error.message);
    return NextResponse.json({ 
      error: "AI server is warming up. Please try again in 30 seconds." 
    }, { status: 503 });
  }
}