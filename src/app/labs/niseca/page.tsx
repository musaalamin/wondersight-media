import React from 'react';

export default function NisecaLab() {
  const sections = [
    { id: "Problem", content: "Farmers in Gusau lose up to 40% of their maize crop to rust and leaf blight because they lack access to affordable agronomists." },
    { id: "Approach", content: "We trained a TensorFlow model on 2,000 images of local crops to identify disease signatures from smartphone photos." },
    { id: "Lessons", content: "Lighting conditions in open fields and the quality of low-end smartphone cameras significantly affect AI accuracy." },
    { id: "Next Phase", content: "Developing an offline-first mobile app and improving the dataset with more 'Healthy' crop samples for balance." }
  ];

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-4 text-[#75C9B7]">NISECA <span className="text-white">AI Case Study</span></h1>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-12">
          <h2 className="text-xs font-black uppercase text-[#E91E63] mb-4">Current Status: Field Research Phase</h2>
          <p className="text-gray-300 leading-loose text-lg">
            NISECA was designed to be the "Doctor for every farm." While our initial accuracy reached 92% in controlled environments, real-world deployment taught us that hardware limitations and network latency are bigger hurdles than the AI itself.
          </p>
        </div>

        <div className="space-y-12">
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