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

    if (!image) return NextResponse.json({ error: "No image" }, { status: 400 });

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // This is the most stable 'Always-On' model for image classification
    const model = "microsoft/resnet-50"; 

    const [diagnosis, weather] = await Promise.all([
      hf.imageClassification({
        model: model,
        data: buffer,
        // @ts-ignore
        wait_for_model: true,
      }),
      (lat && lon) ? getWeatherData(lat, lon) : null
    ]);

    return NextResponse.json({ diagnosis, weather });
  } catch (error: any) {
    console.error("NISECA_CRITICAL_ERROR:", error.message);
    // If the provider fails, we return a clear user message
    return NextResponse.json({ 
      error: "The AI server is currently updating. Please try again in 5 minutes." 
    }, { status: 503 });
  }
}