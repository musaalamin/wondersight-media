'use client';
import React, { useState, useRef } from 'react';

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const t = {
    EN: {
      disclaimerTitle: "⚠ Research-Based Advisory Notice",
      disclaimerText: "This dashboard provides research-based seasonal climate insights and does not replace official meteorological guidance. Consult local extension services before planting.",
      title: "Seasonal Agricultural Intelligence – Pilot",
      detect: "Use My Exact Location (3km Accuracy)",
      select: "Or Select Research Zone...",
      rainfall: "7-Day Cumulative Rainfall",
      confidence: "Confidence Level",
      risk: "Research Advisory",
      noData: "Select a location to see research-based risk factors.",
      low: "Moisture likely insufficient for planting.",
      mod: "Early moisture onset possible. Monitor soil consistency.",
      high: "Consistent moisture likely. Prepare planting activities.",
      basis: "Data Basis & Limitations",
      download: "Download Field Report Card"
    },
    HA: {
      disclaimerTitle: "⚠ Sanarwar Binciken Noma",
      disclaimerText: "Wannan shafi yana bayar da bayanan bincike ne kawai. Ba madadin rahoton yanayi ba ne. A tuntubi jami'an gona kafin shuka.",
      title: "Binciken Hikimar Yanayin Noma – Gwaji",
      detect: "Gano Inda Nake Yanzu (3km)",
      select: "Ko Zabi Wajen Bincike...",
      rainfall: "Ruwan Kwanaki 7 (Jimilla)",
      confidence: "Matakin Amincewa",
      risk: "Shawarar Bincike",
      noData: "Zabi gari domin ganin shawarar bincike.",
      low: "Mai yiwuwa ruwan bai isa shuka ba tukuna.",
      mod: "Akwai alamun farkon ruwa. A lura da yanayin kasar gona.",
      high: "Akwai yiwuwar samun ruwa mai karko. A fara shirin shuka.",
      basis: "Tushen Bayanai da Kasawa",
      download: "Sauke Taswirar Rahoto"
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
    } catch (e) {
      console.error(e);
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

  const totalRain = weatherData?.daily.rain_sum.reduce((a: number, b: number) => a + b, 0) || 0;
  
  const getAdvisory = () => {
    if (totalRain < 10) return { text: t[lang].low, conf: "Low", color: "#F87171" };
    if (totalRain >= 10 && totalRain <= 25) return { text: t[lang].mod, conf: "Moderate", color: "#FBBF24" };
    return { text: t[lang].high, conf: "High", color: "#34D399" };
  };

  const generateCard = () => {
    const canvas = canvasRef.current;
    if (!canvas || !weatherData) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#120B21';
    ctx.fillRect(0, 0, 400, 500);
    ctx.fillStyle = '#75C9B7';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('NISECA LAB REPORT', 30, 50);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px sans-serif';
    ctx.fillText(`Location: ${locName}`, 30, 90);
    ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, 30, 115);
    
    ctx.strokeStyle = '#333';
    ctx.strokeRect(20, 140, 360, 1);

    ctx.fillStyle = '#75C9B7';
    ctx.fillText(t[lang].rainfall.toUpperCase(), 30, 180);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText(`${totalRain.toFixed(1)}mm`, 30, 220);

    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = getAdvisory().color;
    ctx.fillText(`${t[lang].confidence}: ${getAdvisory().conf}`, 30, 260);

    ctx.fillStyle = '#999';
    ctx.font = 'italic 14px sans-serif';
    const advisoryText = getAdvisory().text;
    const words = advisoryText.split(' ');
    let line = '';
    let y = 310;
    words.forEach(word => {
      if ((line + word).length > 35) { ctx.fillText(line, 30, y); line = word + ' '; y += 20; }
      else { line += word + ' '; }
    });
    ctx.fillText(line, 30, y);

    ctx.fillStyle = '#333';
    ctx.fillRect(0, 450, 400, 50);
    ctx.fillStyle = '#666';
    ctx.font = '10px sans-serif';
    ctx.fillText('WONDER SIGHT LAB | APPLIED INNOVATION PILOT', 80, 480);

    const link = document.createElement('a');
    link.download = `Niseca-Report-${locName}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black text-[#75C9B7]">NISECA <span className="text-white">LAB</span></h1>
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            {(['EN', 'HA'] as const).map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-4 py-2 rounded-lg text-[10px] font-black transition ${lang === l ? 'bg-[#75C9B7] text-black' : 'text-gray-500'}`}>{l === 'EN' ? 'ENGLISH' : 'HAUSA'}</button>
            ))}
          </div>
        </div>

        <div className="mb-10 p-6 border-2 border-amber-500/50 bg-amber-500/5 rounded-3xl">
          <h2 className="text-amber-500 font-black text-xs mb-3 uppercase tracking-widest">{t[lang].disclaimerTitle}</h2>
          <p className="text-amber-200/70 text-sm leading-relaxed">{t[lang].disclaimerText}</p>
        </div>

        <section className="mb-12 p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem]">
          <h2 className="text-2xl font-black uppercase mb-8">{t[lang].title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="space-y-4">
              <button onClick={detectLocation} className="w-full py-4 bg-[#75C9B7] text-black font-black text-[10px] uppercase rounded-xl hover:bg-white transition-all">
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

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[9px] font-black text-[#75C9B7] uppercase block mb-1">{t[lang].rainfall}</span>
                <p className="text-3xl font-bold mt-2">{weatherData ? `${totalRain.toFixed(1)}mm` : '--'}</p>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <span className="text-[9px] font-black text-[#75C9B7] uppercase block mb-1">{t[lang].confidence}</span>
                <p className="text-xl font-bold mt-2">{weatherData ? getAdvisory().conf : '--'}</p>
              </div>
              <div className="sm:col-span-2 p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-[9px] font-black text-gray-500 uppercase block mb-2">{t[lang].risk} {locName && `[${locName}]`}</span>
                <p className={`text-sm leading-relaxed font-bold ${weatherData ? '' : 'text-gray-600'}`} style={{color: weatherData ? getAdvisory().color : ''}}>
                  {weatherData ? getAdvisory().text : t[lang].noData}
                </p>
                {weatherData && (
                  <button onClick={generateCard} className="mt-6 text-[9px] font-black uppercase tracking-widest border-b border-[#75C9B7] pb-1 hover:text-[#75C9B7] transition">
                    {t[lang].download} ↓
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <canvas ref={canvasRef} width="400" height="500" className="hidden" />

        <section>
          <button onClick={() => setShowLimits(!showLimits)} className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 hover:text-white transition">
            {t[lang].basis} {showLimits ? '▲' : '▼'}
          </button>
          {showLimits && (
            <div className="mt-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-[11px] text-gray-500 leading-relaxed space-y-2">
              <p>• <strong>Data Source:</strong> Open-Meteo API</p>
              <p>• <strong>Accuracy:</strong> 3km radius via Browser Geolocation</p>
              <p>• <strong>Limitation:</strong> Does not predict full seasonal rainfall patterns.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}