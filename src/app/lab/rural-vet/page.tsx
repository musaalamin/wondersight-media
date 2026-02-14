import React from 'react';

export default function RuralVetLab() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Rural <span className="text-[#E91E63]">Vet</span> experiment</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h3 className="text-[#75C9B7] font-bold mb-2 uppercase text-xs">The Vision</h3>
              <p className="text-gray-300">Reducing livestock mortality by connecting rural poultry farmers with rapid diagnostic support via WhatsApp and digital symptom checklists.</p>
            </section>
            <section>
              <h3 className="text-[#75C9B7] font-bold mb-2 uppercase text-xs">Research Status</h3>
              <p className="text-gray-300">Currently in the <strong>UX Design & Prototyping</strong> phase. We are observing how farmers describe symptoms in local dialects (Hausa) to build a better translation layer for veterinarians.</p>
            </section>
          </div>

          <div className="bg-[#E91E63]/5 border border-[#E91E63]/20 p-6 rounded-3xl h-fit">
            <h4 className="font-bold text-sm mb-4">Beta Features Under Test:</h4>
            <ul className="text-xs space-y-3 text-gray-500 font-medium">
              <li>• Hausa-English Symptom Mapping</li>
              <li>• Low-Bandwidth Report Generation</li>
              <li>• Automated Referral Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}