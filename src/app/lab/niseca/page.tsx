'use client';
import React, { useState, useEffect } from 'react';

const PILOT_LOCATIONS: Record<string, { lat: number, lon: number, hausa: string }> = {
  "gusau": { lat: 12.1622, lon: 6.6614, hausa: "Gusau" },
  "sokoto": { lat: 13.0059, lon: 5.2476, hausa: "Sakkwato" },
  "birnin kebbi": { lat: 12.4539, lon: 4.1975, hausa: "Birnin Kebbi" },
  "katsina": { lat: 12.9894, lon: 7.6171, hausa: "Katsina" },
  "kano": { lat: 12.0022, lon: 8.5920, hausa: "Kano" },
  "zaria": { lat: 11.0855, lon: 7.7199, hausa: "Zariya" }
};

export default function NisecaLab() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState<'EN' | 'HA'>('EN');
  const [showLimits, setShowLimits] = useState(false);
  const [locName, setLocName] = useState('');

  const t = {
    EN: {
      disclaimerTitle: "⚠ Research-Based Advisory Notice",
      disclaimerText: "This dashboard provides research-based seasonal climate insights and does not replace official meteorological guidance. Farmers are advised to consult local agricultural extension services before making major planting decisions.",
      title: "Seasonal Agricultural Intelligence – Pilot",
      detect: "Use My Exact Location",
      select: "Or Select Research Zone...",
      rainfall: "7-Day Cumulative Rainfall",
      temp: "Estimated Max Temp",
      confidence: "Confidence Level",
      risk: "Research Advisory",
      low: "Moisture likely insufficient for planting.",
      mod: "Early moisture onset possible. Monitor soil consistency.",
      high: "Consistent moisture likely. Prepare planting activities if soil condition permits.",
      basis: "Data Basis & Limitations",
      source: "Source: Open-Meteo API (Short-term forecast aggregation). Does not predict full seasonal patterns."
    },
    HA: {
      disclaimerTitle: "⚠ Sanarwar Binciken Noma",
      disclaimerText: "Wannan shafi yana bayar da bayanan binciken yanayi ne kawai, ba madadin rahoton hukumomin yanayi ba ne. Manoma su tuntubi jami'an gona kafin yanke shawarar shuka.",
      title: "Binciken Hikimar Yanayin Noma – Gwaji",
      detect: "Gano Inda Nake Yanzu",
      select: "Ko Zabi Wajen Bincike...",
      rainfall: "Ruwan Kwanaki 7 (Jimilla)",
      temp: "Yanayin Zafi",
      confidence: "Matakin Amincewa",
      risk: "Shawarar Bincike",
      low: "Mai yiwuwa ruwan bai isa shuka ba tukuna.",
      mod: "Akwai alamun farkon ruwa. A lura da yanayin kasar gona.",
      high: "Akwai yiwuwar samun ruwa mai karko. A fara shirin shuka idan kasa ta bada dama.",
      basis: "Tushen Bayanai da Kasawa",
      source: "Madogara: Open-Meteo API. Wannan bincike ne na kwanaki 7, ba na dukkan lokacin damina ba."
    }
  };

  const fetchAgData = async (lat: number, lon: number, label: string) => {
    setLoading(true);
    setLocName(label);
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

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchAgData(pos.coords.latitude, pos.coords.longitude, lang === 'EN' ? "Current Coordinates" : "Inda kake yanzu");
      });
    }
  };

  // Logic for 7-day cumulative rainfall
  const totalRain = weatherData?.daily.rain_sum.reduce((a: number, b: number) => a + b, 0) || 0;
  
  const getAdvisory = () => {
    if (totalRain < 10) return { text: t[lang].low, color: "text-red-400", conf: "Low" };
    if (totalRain >= 10 && totalRain <= 25) return { text: t[lang].mod, color: "text-yellow-400", conf: "Moderate" };
    return { text: t[lang].high, color: "text-green-400", conf: "High" };
  };

  const advisory = getAdvisory();

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Language & Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black text-[#75C9B7]">NISECA <span className="text-white">LAB</span></h1>
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            {['EN', 'HA'].map((l) => (
              <button key={l} onClick={() => setLang(l as any)} className={`px-4 py-2 rounded-lg text-[10px] font-black transition ${lang === l ? 'bg-[#75C9B7] text-black' : 'text-gray-500'}`}>{l === 'EN' ? 'ENGLISH' : 'HAUSA'}</button>
            ))}
          </div>
        </div>

        {/* 1️⃣ ADVISORY NOTICE (Amber Box) */}
        <section className="mb-10 p-6 border-2 border-amber-500/50 bg-amber-500/5 rounded-3xl">
          <h2 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-3">{t[lang].disclaimerTitle}</h2>
          <p className="text-amber-200/70 text-sm leading-relaxed">{t[lang].disclaimerText}</p>
        </section>

        {/* 3️⃣ SECTION TITLE */}
        <section className="mb-12 p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem]">
          <h2 className="text-2xl font-black uppercase mb-8">{t[lang].title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Location Selectors */}
            <div className="md:col-span-1 space-y-4">
              <button onClick={detectLocation} className="w-full py-3 bg-[#75C9B7] text-black font-black text-[10px] uppercase rounded-xl hover:bg-white transition">
                {t[lang].detect}
              </button>
              <select onChange={(e) => {
                const loc = PILOT_LOCATIONS[e.target.value];
                if (loc) fetchAgData(loc.lat, loc.lon, lang === 'EN' ? e.target.value.toUpperCase() : loc.hausa.toUpperCase());
              }} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:border-[#75C9B7] outline-none">
                <option value="">{t[lang].select}</option>
                {Object.keys(PILOT_LOCATIONS).map(k => <option key={k} value={k} className="bg-[#120B21]">{k.toUpperCase()}</option>)}
              </select>
            </div>

            {/* Data Cards */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[9px] font-black text-[#75C9B7] uppercase block mb-1">{t[lang].rainfall}</span>
                <p className="text-2xl font-bold">{weatherData ? `${totalRain.toFixed(1)}mm` : '--'}</p>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[9px] font-black text-[#75C9B7] uppercase block mb-1">{t[lang].confidence}</span>
                <p className={`text-xl font-bold ${weatherData ? '' : 'text-gray-700'}`}>
                   {weatherData ? advisory.conf : '--'}
                </p>
              </div>
              
              {/* 2️⃣ RISK ADVISORY (7-Day Logic) */}
              <div className="sm:col-span-2 p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-[9px] font-black text-gray-500 uppercase block mb-2">{t[lang].risk} {locName && `[${locName}]`}</span>
                <p className={`text-sm leading-relaxed font-bold ${weatherData ? advisory.color : 'text-gray-600'}`}>
                  {weatherData ? advisory.text : t[lang].noData}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ DATA BASIS (Collapsible) */}
        <section className="mb-12">
          <button onClick={() => setShowLimits(!showLimits)} className="text-xs font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
            {t[lang].basis} {showLimits ? '▲' : '▼'}
          </button>
          {showLimits && (
            <div className="mt-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-[11px] text-gray-500 space-y-3 leading-relaxed">
              <p>• <strong>Data Source:</strong> Open-Meteo API</p>
              <p>• <strong>Forecast Range:</strong> 7 Days</p>
              <p>• <strong>Model Type:</strong> Short-term forecast aggregation</p>
              <p>• <strong>Limitation:</strong> Does not predict full seasonal rainfall patterns.</p>
              <p>• <strong>Future Integration:</strong> Seasonal modeling layer planned for pilot phase 2.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}