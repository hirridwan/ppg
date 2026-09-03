import React from 'react';

const Home = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-24">
      {/* BERANDA - Vibrant Purple Hero Section */}
      <section id="beranda" className="scroll-mt-32">
        <div className="bg-[#8234E6] dark:bg-[#6c28c4] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative overflow-hidden shadow-[0_20px_50px_rgba(130,52,230,0.3)]">
          
          {/* Soft background texture/noise effect placeholder */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none mix-blend-overlay"></div>

          <div className="order-2 lg:order-1 flex flex-col items-start text-left relative z-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Membangun Karakter Melalui <br className="hidden md:block"/>
              <span className="relative inline-block mt-3 md:mt-4">
                {/* Yellow Highlight Rectangle */}
                <span className="absolute -inset-y-1 -inset-x-4 bg-[#E1FA43] rounded-xl transform -rotate-2 -z-10 shadow-sm"></span>
                <span className="relative z-10 text-[#1A1A1A] px-2 font-black tracking-tight">Pendidikan Digital.</span>
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed mb-10 max-w-xl font-medium">
              E-Portfolio ini disusun sebagai bentuk refleksi akhir PPL Terbimbing di SMA Negeri 1 Bandung, 
              menggambarkan fondasi karakter, analisis produk pembelajaran, dan komitmen profesional 
              menjadi pendidik Informatika.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <span className="inline-block px-8 py-4 bg-[#E1FA43] text-[#1A1A1A] text-sm font-extrabold uppercase tracking-widest rounded-full shadow-lg hover:scale-105 transition-transform cursor-default">
                Mahasiswa PPG Prajabatan Informatika
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative z-10 flex justify-center">
            <img 
              src="https://i.imgur.com/oYLaroL.jpeg" 
              alt="Ridwan Maulana" 
              loading="lazy"
              className="w-full max-w-[450px] aspect-square object-cover object-top rounded-[3rem] shadow-[20px_20px_60px_rgba(0,0,0,0.3)] border-4 border-white/20 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* IDENTITAS - Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
          {[
            { label: "Nama Saya", val: "Ridwan Maulana, S.Kom.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" },
            { label: "NIM", val: "2531031", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
            { label: "Guru Pamong", val: "Irman Margino, S.T.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
            { label: "Sekolah PPL", val: "SMAN 1 Bandung", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
            { label: "Dosen Pembimbing Lapangan", val: "Dr. Eki Nugraha, S.Pd., M.Kom.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
            { label: "LPTK", val: "Universitas Pendidikan Indonesia", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400" }
          ].map((box, i) => (
            <div key={i} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 flex items-center gap-5 hover:-translate-y-1 transition-transform">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${box.color}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={box.icon}></path></svg>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">{box.val}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{box.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROFIL (Sesuai rubrik: Profil mahasiswa, asal, keunikan, inspirasi, kutipan) */}
      <section id="profil" className="scroll-mt-32">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-12 tracking-tight">Profil Mahasiswa</h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A] dark:text-white flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#E1FA43] flex items-center justify-center text-[#1A1A1A] text-lg">✨</span>
                Latar Belakang & Keunikan
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg">
                Hallo! Nama Saya RIDWAN MAULANA. Saya berasal dari Tasikmalaya, sebuah kota yang dikenal dengan julukan "Kota Santri" serta pusat kerajinan kreatif dan UMKM yang tangguh. Keunikan daerah asal inilah yang menanamkan nilai-nilai religius, ketekunan, dan semangat inovasi dalam diri saya sebagai fondasi karakter pendidik.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A] dark:text-white flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#8EF1F5] flex items-center justify-center text-[#1A1A1A] text-lg">🚀</span>
                Inspirasi & Tujuan
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg">
                Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis dalam menggunakan teknologi, tetapi juga bijak, kritis, dan beretika di era digital.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800">
            <blockquote className="text-xl md:text-2xl font-bold italic text-slate-800 dark:text-slate-200 text-center max-w-4xl mx-auto leading-relaxed">
              "Teknologi hanyalah sebuah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling penting." <br/>
              <span className="text-[#8234E6] dark:text-[#E1FA43] text-lg mt-4 block not-italic font-black">- Bill Gates</span>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;