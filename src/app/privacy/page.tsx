'use client';
import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-[#FF5722]">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">1. Introduction</h2>
            <p>
              Welcome to Wonder Sight Group. We are committed to protecting your personal information and your right to privacy. This policy applies to all information collected through our website (wondersightgroup.com) and our services, including NISECA AI and the Jobs Portal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">2. Information Collection</h2>
            <p>
              We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products. This includes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Images uploaded for crop diagnosis (processed via AI and not stored personally).</li>
              <li>Professional data provided via the Jobs Portal.</li>
              <li>Location data for weather-based agricultural advice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3. Cookies & Third-Party Ads</h2>
            <p>
              We use third-party advertising companies to serve ads when you visit our Website. These companies (including Google AdSense and Adsterra) may use information about your visits to this and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">4. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may contact our Zamfara headquarters at: <br />
              <span className="text-white font-bold">Email:</span> wondersightgallery@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}