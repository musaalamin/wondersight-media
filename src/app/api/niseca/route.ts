import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';
import { getWeatherData } from '../../../lib/weather';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File;
    const latStr = formData.get('lat') as string;
    const lonStr = formData.get('lon') as string;

    if (!image) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    const lat = latStr ? parseFloat(latStr) : null;
    const lon = lonStr ? parseFloat(lonStr) : null;

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Using a stable, always-on model
    const model = process.env.NEXT_PUBLIC_NISECA_MODEL || "microsoft/resnet-50";

    const [diagnosis, weather] = await Promise.all([
      hf.imageClassification({
        model: model,
        inputs: buffer,
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