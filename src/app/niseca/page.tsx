'use client';
import React, { useState, useEffect } from 'react';
import { cropAdvice } from '../../lib/agri-advice';

export default function NisecaPage() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState<{lat: number, lon: number} | null>(null);
  const [localWeather, setLocalWeather] = useState<any>(null);
  const [selectedSoil, setSelectedSoil] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setCoords({lat, lon});
        try {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c1b15d1e849ffd1308a5c4dd3d15ba5&units=metric`);
          const wData = await res.json();
          setLocalWeather(wData);
        } catch (e) { console.error("Weather load failed"); }
      });
    }
  }, []);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setData(null); // Clear old results
    
    const formData = new FormData();
    formData.append('image', file);
    if (coords) {
      formData.append('lat', coords.lat.toString());
      formData.append('lon', coords.lon.toString());
    }

    try {
      const res = await fetch('/api/niseca', { method: 'POST', body: formData });
      const result = await res.json();
      if (result.error) throw new Error(result.error);
      setData(result);
    } catch (err: any) {
      alert("AI Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#120B21] text-white font-sans pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full flex flex-col items-center justify-center border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <h1 className="relative text-4xl md:text-5xl font-black text-[#75C9B7] mb-2 tracking-tight text-center">NISECA <span className="text-white">AI</span></h1>
        <p className="relative text-gray-400 font-medium italic text-center px-4">Precision Agriculture for Northern Nigeria</p>
      </div>

      <div className="max-w-4xl mx-auto -mt-16 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Weather Widget */}
          <div className="md:col-span-1">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
              <p className="text-xs font-bold text-[#75C9B7] uppercase mb-4">
                Local Weather {localWeather?.name ? `in ${localWeather.name}` : ''}
              </p>
              {localWeather ? (
                <div>
                  <h2 className="text-4xl font-bold">{Math.round(localWeather.main.temp)}°C</h2>
                  <p className="text-sm text-gray-300 capitalize">{localWeather.weather[0].description}</p>
                  <p className="mt-2 text-[10px] text-gray-500 font-bold tracking-tighter uppercase">📍 {localWeather.name}, {localWeather.sys.country}</p>
                </div>
              ) : <p className="text-sm animate-pulse">Locating...</p>}
            </div>
          </div>

          {/* Analysis Card */}
          <div className="md:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold mb-6">Crop Health Analysis</h3>
              
              <div className="relative w-full h-48 border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center mb-6 overflow-hidden">
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                <p className="text-sm text-gray-500">{file ? file.name : "Tap to upload plant photo"}</p>
              </div>

              <button onClick={handleUpload} disabled={loading || !file} className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E91E63] to-[#FF5722] font-black text-lg disabled:opacity-50">
                {loading ? 'AI IS THINKING...' : 'RUN DIAGNOSIS'}
              </button>

              {/* SUCCESS RESULTS AND WHATSAPP HOOK */}
              {data?.diagnosis && (
                <div className="mt-10 space-y-6">
                  {data.diagnosis.map((item: any, i: number) => {
                    const advice = cropAdvice[item.label] || { chemical: "Check local stores.", organic: "Prune infected areas.", contact: "+2349031761998" };
                    return (
                      <div key={i} className="p-6 bg-[#75C9B7]/10 rounded-2xl border-l-8 border-[#75C9B7]">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="text-2xl font-bold text-[#FF5722]">{item.label}</h4>
                           <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">{(item.score * 100).toFixed(0)}% MATCH</span>
                        </div>
                        <div className="space-y-4 mb-6">
                          <p className="text-sm"><strong className="text-[#75C9B7] block mb-1 uppercase text-[10px]">Chemical:</strong> {advice.chemical}</p>
                          <p className="text-sm"><strong className="text-[#75C9B7] block mb-1 uppercase text-[10px]">Organic:</strong> {advice.organic}</p>
                        </div>
                        <a href={`https://wa.me/2349031761998?text=Hello Dr. Nana, my plant was diagnosed with ${item.label}.`} className="w-full inline-block text-center py-3 bg-[#25D366] rounded-xl font-extrabold text-sm shadow-lg hover:scale-[1.02] transition">
                          WHATSAPP DR. NANA ANKA
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Soil Section */}
        <section className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/10">
          <h3 className="text-[#75C9B7] text-xl font-bold mb-4">Soil & Planting Guide</h3>
          <select onChange={(e) => setSelectedSoil(e.target.value)} className="w-full bg-[#120B21] border border-white/10 rounded-xl p-4 text-sm outline-none">
            <option value="">Select soil...</option>
            <option value="sandy">Sandy (Jir)</option>
            <option value="loamy">Loamy (Laka)</option>
            <option value="clay">Clay (Yambo)</option>
          </select>
          {selectedSoil && (
            <div className="mt-4 p-4 bg-white/5 rounded-xl border-l-4 border-[#75C9B7] text-sm text-gray-300">
              {selectedSoil === 'sandy' && "Drought-resistant crops like Pearl Millet/Groundnuts are best."}
              {selectedSoil === 'loamy' && "Excellent for Maize, Sorghum, and Vegetables."}
              {selectedSoil === 'clay' && "Best for Rice or Sugarcane. Ensure good drainage."}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}