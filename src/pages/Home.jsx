import React from 'react';

const Home = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-8 pb-10 flex flex-col gap-10">
      
      {/* BERANDA - Blue and White Modern Design */}
      <section id="beranda" className="scroll-mt-32">
        <div className="bg-[#0052b4] dark:bg-[#002855] rounded-[40px] md:rounded-[60px] p-10 md:p-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative overflow-hidden">
          
          {/* Decorative Elements from Reference */}
          <div className="absolute top-10 right-10 text-white/10 font-black text-8xl leading-none hidden md:block">::</div>
          <div className="absolute bottom-10 left-10 text-white/10 font-black text-8xl leading-none hidden md:block">::</div>

          <div className="order-2 lg:order-1 flex flex-col items-start text-left relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
              Membangun Karakter Melalui <br className="hidden md:block"/>
              <span className="text-[#e6f0fa]">Pendidikan Digital.</span>
            </h2>
            
            <p className="text-[1.1rem] md:text-xl text-white/90 leading-relaxed mb-10 max-w-xl font-medium">
              E-Portfolio ini disusun sebagai bentuk refleksi akhir PPL Terbimbing di SMA Negeri 1 Bandung, 
              menggambarkan fondasi karakter, analisis produk pembelajaran, dan komitmen profesional 
              menjadi pendidik Informatika.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <span className="inline-block px-10 py-5 bg-white text-[#0052b4] text-[0.9rem] font-black uppercase tracking-widest rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] cursor-default">
                Mahasiswa PPG Prajabatan Informatika
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative z-10 flex justify-center lg:justify-end">
            <img 
              src="https://i.imgur.com/oYLaroL.jpeg" 
              alt="Ridwan Maulana" 
              loading="lazy"
              className="w-full max-w-[420px] aspect-square object-cover object-top rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
        
        {/* IDENTITAS - Modern Blue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { label: "Nama Saya", val: "Ridwan Maulana, S.Kom.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
            { label: "NIM", val: "2531031", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
            { label: "Guru Pamong", val: "Irman Margino, S.T.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            { label: "Sekolah PPL", val: "SMAN 1 Bandung", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { label: "Dosen Pembimbing Lapangan", val: "Dr. Eki Nugraha, S.Pd., M.Kom.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
            { label: "LPTK", val: "Universitas Pendidikan Indonesia", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }
          ].map((box, i) => (
            <div key={i} className="bg-[#e6f0fa] dark:bg-[#001b3d] p-8 rounded-[30px] border-none flex items-center gap-5 transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-[#0052b4] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={box.icon}></path></svg>
              </div>
              <div>
                <h3 className="text-[#0052b4] dark:text-[#e6f0fa] font-black text-lg mb-1 leading-snug">{box.val}</h3>
                <p className="text-[#333333] dark:text-white/70 text-[0.95rem] font-bold uppercase tracking-wider">{box.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROFIL - Alternating Design Base */}
      <section id="profil" className="scroll-mt-32">
        <div className="bg-[#e6f0fa] dark:bg-[#002855] rounded-[40px] md:rounded-[60px] p-10 md:p-20 relative overflow-hidden">
          
          <div className="absolute top-10 left-10 text-[#0052b4]/10 dark:text-white/5 font-black text-8xl leading-none">:: ::</div>

          <h2 className="text-4xl md:text-5xl font-black text-[#0052b4] dark:text-white mb-16 tracking-tighter relative z-10 capitalize">Profil Mahasiswa</h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
            <div>
              <h3 className="text-3xl font-black mb-6 text-[#333333] dark:text-[#e6f0fa]">
                Latar Belakang & Keunikan
              </h3>
              <div className="w-16 h-2 bg-[#0052b4] mb-8 rounded-full"></div>
              <p className="text-[#333333] dark:text-white/90 leading-relaxed text-justify text-lg font-medium">
                Hallo! Nama Saya RIDWAN MAULANA. Saya berasal dari Tasikmalaya, sebuah kota yang dikenal dengan julukan "Kota Santri" serta pusat kerajinan kreatif dan UMKM yang tangguh. Keunikan daerah asal inilah yang menanamkan nilai-nilai religius, ketekunan, dan semangat inovasi dalam diri saya sebagai fondasi karakter pendidik.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6 text-[#333333] dark:text-[#e6f0fa]">
                Inspirasi & Tujuan
              </h3>
              <div className="w-16 h-2 bg-[#0052b4] mb-8 rounded-full"></div>
              <p className="text-[#333333] dark:text-white/90 leading-relaxed text-justify text-lg font-medium">
                Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis dalam menggunakan teknologi, tetapi juga bijak, kritis, dan beretika di era digital.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t-4 border-white dark:border-[#001b3d] relative z-10">
            <blockquote className="text-2xl md:text-3xl font-bold text-[#0052b4] dark:text-white text-center max-w-4xl mx-auto leading-tight">
              "Teknologi hanyalah sebuah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling penting." <br/>
              <span className="text-[#333333] dark:text-[#e6f0fa] text-lg md:text-xl mt-6 block font-black uppercase tracking-widest">- Bill Gates</span>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;