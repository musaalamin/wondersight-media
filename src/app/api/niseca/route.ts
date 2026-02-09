import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';
import { getWeatherData } from '../../../lib/weather';

// The new version of the library requires "inputs" instead of "data"
    const [diagnosis, weather] = await Promise.all([
      hf.imageClassification({
        model: model,
        inputs: buffer, // Change "data" to "inputs"
        // @ts-ignore
        parameters: { wait_for_model: true }, // Correct way to pass parameters
      }),
      (lat && lon) ? getWeatherData(lat, lon) : null
    ]);

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