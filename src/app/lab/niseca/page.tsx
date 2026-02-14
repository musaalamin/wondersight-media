'use client';
import React, { useState } from 'react';

// Pilot Location Registry for Northern Nigeria
const PILOT_LOCATIONS: Record<string, { lat: number, lon: number }> = {
  "gusau": { lat: 12.1622, lon: 6.6614 },
  "sokoto": { lat: 13.0059, lon: 5.2476 },
  "birnin kebbi": { lat: 12.4539, lon: 4.1975 },
  "katsina": { lat: 12.9894, lon: 7.6171 },
  "kano": { lat: 12.0022, lon: 8.5920 },
  "zaria": { lat: 11.0855, lon: 7.7199 }
};

export default function NisecaLab() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Case Study Content
  const sections = [
    { id: "Problem", content: "Farmers in Gusau lose up to 40% of their maize crop to rust and leaf blight because they lack access to affordable agronomists." },
    { id: "Approach", content: "We trained a TensorFlow model on 2,000 images of local crops to identify disease signatures from smartphone photos." },
    { id: "Lessons", content: "Lighting conditions in open fields and the quality of low-end smartphone cameras significantly affect AI accuracy." },
    { id: "Next Phase", content: "Developing an offline-first mobile app and improving the dataset with more 'Healthy' crop samples for balance." }
  ];

  const fetchAgData = async (cityName: string) => {
    const city = cityName.toLowerCase();
    if (!PILOT_LOCATIONS[city]) return;

    setLoading(true);
    const { lat, lon } = PILOT_LOCATIONS[city];

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=rain_sum,temperature_2m_max&timezone=Africa%2FLagos&forecast_days=7`;
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-16">
          <h1 className="text-4xl font-black mb-4 text-[#75C9B7]">NISECA <span className="text-white">LAB</span></h1>
          <p className="text-gray-400">Seasonal Agricultural Intelligence Pilot</p>
        </header>

        {/* --- SEASONAL ADVISORY DASHBOARD --- */}
        <section className="mb-20 p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem]">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-ping' : 'bg-[#75C9B7]'}`}></div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Research Advisory Dashboard</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-4">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Pilot Location</label>
              <select 
                onChange={(e) => fetchAgData(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-[#75C9B7] outline-none transition appearance-none"
              >
                <option value="">Select a State/City...</option>
                {Object.keys(PILOT_LOCATIONS).map(loc => (
                  <option key={loc} value={loc} className="bg-[#120B21]">{loc.toUpperCase()}</option>
                ))}
              </select>
              <p className="text-[10px] text-gray-600 leading-relaxed italic">
                Data is pulled in real-time from Open-Meteo research nodes.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[9px] font-black text-[#75C9B7] uppercase block mb-2">Rainfall (Next 7 Days)</span>
                <p className="text-2xl font-bold">
                  {weatherData ? `${weatherData.daily.rain_sum.reduce((a:number, b:number) => a + b, 0).toFixed(1)}mm` : '--'}
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[9px] font-black text-[#75C9B7] uppercase block mb-2">Avg. Max Temp</span>
                <p className="text-2xl font-bold">
                  {weatherData ? `${(weatherData.daily.temperature_2m_max.reduce((a:number, b:number) => a + b, 0) / 7).toFixed(1)}°C` : '--'}
                </p>
              </div>
              <div className="sm:col-span-2 p-5 bg-[#FF5722]/5 rounded-2xl border border-[#FF5722]/20">
                <span className="text-[9px] font-black text-[#FF5722] uppercase block mb-2">Risk Advisory</span>
                <p className="text-sm text-gray-300">
                  {!weatherData && "Select a location to see research-based risk factors."}
                  {weatherData && weatherData.daily.rain_sum.reduce((a:number, b:number) => a + b, 0) < 2.0 && "Low moisture detected. Delay planting of high-sensitivity seeds."}
                  {weatherData && weatherData.daily.rain_sum.reduce((a:number, b:number) => a + b, 0) >= 2.0 && "Moisture onset detected. Monitor soil for consistent saturation before full planting."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/5">
             <p className="text-[10px] text-gray-500 italic">
                <strong>Source:</strong> Open-Meteo Non-Commercial Ag-Data. This tool is part of the Wonder Sight Lab research framework and is not for commercial forecasting.
             </p>
          </div>
        </section>

        {/* Original Case Study Notes */}
        <div className="space-y-12">
          <h3 className="text-xl font-bold uppercase tracking-widest border-b border-white/10 pb-4">Lab Findings & Case Study</h3>
          {sections.map(s => (
            <div key={s.id} className="border-l-2 border-white/10 pl-8">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-[#75C9B7]">{s.id}</h3>
              <p className="text-gray-400 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}