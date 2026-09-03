import React from 'react';

const Home = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 flex flex-col gap-16">
      
      {/* BERANDA - Asymmetrical Modern Layout */}
      <section id="beranda" className="scroll-mt-32 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Kolom Kiri: Hero Text Card */}
          <div className="lg:col-span-7 bg-[#0052b4] dark:bg-[#002855] rounded-[48px] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-9xl leading-none pointer-events-none hidden md:block">::</div>
            
            <div className="relative z-10 mb-10">
              <span className="inline-block px-6 py-2.5 bg-white text-[#0052b4] text-[0.85rem] font-black uppercase tracking-widest rounded-full shadow-md mb-6">
                Mahasiswa PPG Prajabatan Informatika
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Membangun Karakter Melalui <span className="text-[#e6f0fa] underline decoration-white/30">Pendidikan Digital.</span>
              </h2>
            </div>

            <div className="relative z-10">
              <p className="text-[1.05rem] md:text-lg text-white/90 leading-relaxed font-medium">
                E-Portfolio ini disusun sebagai bentuk refleksi akhir PPL Terbimbing di SMA Negeri 1 Bandung, 
                menggambarkan fondasi karakter, analisis produk pembelajaran, dan komitmen profesional 
                menjadi pendidik Informatika.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil Card */}
          <div className="lg:col-span-5 bg-[#e6f0fa] dark:bg-[#001b3d] rounded-[48px] p-6 md:p-8 flex flex-col justify-center items-center relative overflow-hidden shadow-xl border-4 border-[#0052b4]/10">
            <div className="w-full h-full max-h-[460px] rounded-[36px] overflow-hidden shadow-2xl relative">
              <img 
                src="https://i.imgur.com/oYLaroL.jpeg" 
                alt="Ridwan Maulana" 
                loading="lazy"
                className="w-full h-full object-cover object-top scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
        
        {/* IDENTITAS - Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { label: "Nama Saya", val: "Ridwan Maulana, S.Kom.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
            { label: "NIM", val: "2531031", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
            { label: "Guru Pamong", val: "Irman Margino, S.T.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            { label: "Sekolah PPL", val: "SMAN 1 Bandung", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { label: "Dosen Pembimbing Lapangan", val: "Dr. Eki Nugraha, S.Pd., M.Kom.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
            { label: "LPTK", val: "Universitas Pendidikan Indonesia", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }
          ].map((box, i) => (
            <div key={i} className="bg-[#e6f0fa] dark:bg-[#002855] p-6 rounded-[32px] flex flex-col justify-between shadow-md hover:shadow-xl transition-all border border-[#0052b4]/10 group">
              <div className="w-14 h-14 rounded-2xl bg-[#0052b4] flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={box.icon}></path></svg>
              </div>
              <div>
                <p className="text-[#333333]/70 dark:text-white/60 text-[0.85rem] font-extrabold uppercase tracking-widest mb-1">{box.label}</p>
                <h3 className="text-[#0052b4] dark:text-[#e6f0fa] font-black text-lg leading-snug">{box.val}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROFIL - Split Showcase Layout */}
      <section id="profil" className="scroll-mt-32">
        <div className="bg-[#e6f0fa] dark:bg-[#002855] rounded-[48px] p-8 md:p-16 relative overflow-hidden shadow-xl">
          
          <div className="absolute -top-10 -right-10 text-[#0052b4]/5 dark:text-white/5 font-black text-9xl leading-none pointer-events-none">:: ::</div>

          <div className="mb-12 border-b-2 border-[#0052b4]/20 pb-6">
            <span className="text-[#0052b4] dark:text-[#e6f0fa] font-black text-sm uppercase tracking-widest block mb-2">Kenali Lebih Dekat</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0052b4] dark:text-white tracking-tight">Profil Mahasiswa</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="bg-white dark:bg-[#001b3d] p-8 md:p-10 rounded-[36px] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0052b4] text-white flex items-center justify-center font-black text-xl mb-6 shadow-md">01</div>
                <h3 className="text-2xl font-black mb-4 text-[#0052b4] dark:text-[#e6f0fa]">
                  Latar Belakang & Keunikan
                </h3>
                <p className="text-[#333333] dark:text-white/90 leading-relaxed text-justify text-[1.05rem] font-medium">
                  Hallo! Nama Saya RIDWAN MAULANA. Saya berasal dari Tasikmalaya, sebuah kota yang dikenal dengan julukan "Kota Santri" serta pusat kerajinan kreatif dan UMKM yang tangguh. Keunikan daerah asal inilah yang menanamkan nilai-nilai religius, ketekunan, dan semangat inovasi dalam diri saya sebagai fondasi karakter pendidik.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#001b3d] p-8 md:p-10 rounded-[36px] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0052b4] text-white flex items-center justify-center font-black text-xl mb-6 shadow-md">02</div>
                <h3 className="text-2xl font-black mb-4 text-[#0052b4] dark:text-[#e6f0fa]">
                  Inspirasi & Tujuan
                </h3>
                <p className="text-[#333333] dark:text-white/90 leading-relaxed text-justify text-[1.05rem] font-medium">
                  Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis dalam menggunakan teknologi, tetapi juga bijak, kritis, dan beretika di era digital.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#0052b4] dark:bg-[#001b3d] text-white p-8 md:p-12 rounded-[36px] text-center shadow-xl relative overflow-hidden">
            <blockquote className="text-xl md:text-2xl font-bold leading-relaxed max-w-3xl mx-auto relative z-10">
              "Teknologi hanyalah sebuah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling penting." <br/>
              <span className="text-[#e6f0fa] text-base md:text-lg mt-4 block font-black uppercase tracking-widest">- Bill Gates</span>
            </blockquote>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;