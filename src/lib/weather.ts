import { z } from 'zod';

// Schema for input validation (Sanitized inputs)
const coordsSchema = z.object({
  lat: z.number().min(-90).max(90),
  lon: z.number().min(-180).max(180),
});

export async function getWeatherData(lat: number, lon: number) {
  // Validate coordinates using Zod
  const validated = coordsSchema.safeParse({ lat, lon });
  if (!validated.success) throw new Error("Invalid coordinates");

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Weather fetch failed");

  return response.json();
}