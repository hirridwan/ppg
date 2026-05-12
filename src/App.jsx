import React, { useEffect, useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.title = "E-Portfolio | Ridwan Maulana, S.Kom.";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "E-Portfolio PPG Prajabatan UPI - Refleksi PPL Terbimbing di SMAN 1 Bandung.";
    
    const ogTags = [
      { property: 'og:title', content: 'E-Portfolio | Ridwan Maulana, S.Kom.' },
      { property: 'og:description', content: 'E-Portfolio PPG Prajabatan UPI - Refleksi PPL Terbimbing di SMAN 1 Bandung.' },
      { property: 'og:image', content: 'https://i.imgur.com/gK53z6G.jpeg' },
      { property: 'og:url', content: 'https://ppg.rmfhd.my.id/' },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });

    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } 
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'artifak', label: 'Artifak' },
    { id: 'refleksi', label: 'Refleksi' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111111] font-sans text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
      
      {/* HEADER - Clean White Floating/Sticky Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-[#1A1A1A] dark:text-white">
              Ridwan Maulana.
            </h1>
          </div>
          
          <nav className="flex flex-wrap justify-center space-x-2 md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 text-sm font-bold transition-all rounded-full ${
                  activeSection === item.id
                    ? 'text-[#1A1A1A] dark:text-white bg-slate-100 dark:bg-slate-800'
                    : 'text-slate-500 hover:text-[#1A1A1A] dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="border-2 border-[#1A1A1A] dark:border-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#1A1A1A] hover:text-white dark:hover:bg-white dark:hover:text-[#1A1A1A] transition-all flex items-center gap-2"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </header>

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
              { label: "LPTK", val: "Universitas Pendidikan Indonesia", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400" }
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

        {/* PROFIL */}
        <section id="profil" className="scroll-mt-32">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-12 tracking-tight">Profil Mahasiswa</h2>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A] dark:text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#E1FA43] flex items-center justify-center text-[#1A1A1A] text-lg">✨</span>
                  Latar Belakang
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

        {/* ARTIFAK */}
        <section id="artifak" className="scroll-mt-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] dark:text-white tracking-tight">Analisis Artifak</h2>
          </div>

          <div className="grid gap-8">
            {/* Bagian 1 */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-8">1. Perangkat Pembelajaran & Dokumentasi Praktik</h3>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="https://drive.google.com/drive/folders/dummy-link-rpp" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Modul Ajar (RPP) →</a>
                <a href="https://drive.google.com/drive/folders/dummy-link-media" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Media Pembelajaran →</a>
                {/* <a href="https://drive.google.com/drive/folders/dummy-link-hasil" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Contoh Hasil Kerja Siswa →</a> */}
                <a href="https://youtube.com/dummy-link-video" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Video Praktik Mengajar →</a>
              </div>
              
              <div className="mb-12">
                <h4 className="font-extrabold text-[#1A1A1A] dark:text-white mb-4 text-xl">Konteks & Kajian Teori Pedagogi</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg">
                  Produk dan artifak pembelajaran ini disusun dengan mengadopsi model <strong>Project Based Learning (PjBL)</strong>. Pendekatan ini dianalisis melalui kajian teori pada mata kuliah integrasi <strong>Pemahaman Peserta Didik dan Pembelajarannya</strong> serta <strong>Prinsip Pengajaran dan Asesmen</strong>, yang secara komprehensif selaras dengan upaya peningkatan literasi digital dan keterampilan <em>problem-solving</em> peserta didik melalui proyek berbasis teknologi nyata.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 text-lg flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#8234E6]"></div>
                    Faktor Keberhasilan
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    Keberhasilan penerapan produk ini didukung oleh kesiapan guru untuk terus belajar yang berjalan beriringan dengan fasilitas fisik seperti proyektor yang memadai. Selain itu, infrastruktur teknologi seperti kapasitas server dan jaringan internet yang stabil di sekolah juga menjadi faktor pendukung utama.
                  </p>
                </div>
                <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 text-lg flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#E1FA43]"></div>
                    Kendala & Perubahan Masa Depan
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    Kendala utama yang terjadi selama proses pembelajaran berkaitan dengan kecepatan literasi informasi dan kendala teknis digital, serta keterbatasan teknologi saat mengakomodasi fitur yang kompleks. Untuk situasi kelas yang mungkin memiliki literasi teknologi lebih rendah, perubahan difokuskan pada penambahan waktu bimbingan teknis (Bimtek) operasional atau modifikasi sintaks PjBL menjadi lebih sederhana dengan pendekatan kelompok tutor sebaya.
                  </p>
                </div>
              </div>
            </div>

            {/* Bagian 2 */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6">2. Penilaian Guru Pamong (GP) & DPL (L7 & L8)</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-10 text-lg">
                Berikut adalah rekapitulasi penilaian rancangan pembelajaran dan praktik mengajar selama 3 siklus secara komprehensif yang telah dievaluasi oleh Guru Pamong (Bapak Irman Margino, S.T.) dan Dosen Pembimbing Lapangan (Bapak Dr. Eki Nugraha, S.Pd., M.Kom.).
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { s: "Siklus 1", n: "77", text: <><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Perlu penyesuaian pada alokasi waktu PjBL agar lebih realistis untuk diterapkan.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Penguasaan kelas sudah baik, namun perlu lebih interaktif dan merata saat membimbing kelompok.</>},
                  { s: "Siklus 2", n: "85", text: <><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Sintaks PjBL sudah tergambar dengan sangat jelas dan terstruktur pada modul ajar.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Bimbingan teknis operasional ke siswa lebih terarah, penggunaan media interaktif sangat memfasilitasi pemahaman.</>},
                  { s: "Siklus 3", n: "90", text: <><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Asesmen formatif terintegrasi dengan sangat baik dan komprehensif dalam langkah pembelajaran.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Manajemen kelas dan waktu sangat efektif, siswa mampu menghasilkan produk digital sesuai target proyek.</>}
                ].map((item, i) => (
                  <div key={i} className="bg-[#fafafa] dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-8 rounded-3xl flex flex-col h-full">
                    <h4 className="font-black text-xl text-[#1A1A1A] dark:text-white mb-4">{item.s}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">{item.text}</p>
                    <div className="mt-auto">
                      <span className="inline-block bg-[#8EF1F5] text-[#1A1A1A] font-bold px-4 py-2 rounded-full text-sm">
                        Nilai: {item.n}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://drive.google.com/file/d/dummy-link-siklus1" className="px-8 py-4 bg-[#8234E6] text-white rounded-full font-bold text-sm text-center hover:bg-[#6c28c4] transition-colors">Unduh Lampiran Siklus 1</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus2" className="px-8 py-4 bg-[#8234E6] text-white rounded-full font-bold text-sm text-center hover:bg-[#6c28c4] transition-colors">Unduh Lampiran Siklus 2</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus3" className="px-8 py-4 bg-[#8234E6] text-white rounded-full font-bold text-sm text-center hover:bg-[#6c28c4] transition-colors">Unduh Lampiran Siklus 3</a>
              </div>
            </div>
          </div>
        </section>

        {/* REFLEKSI */}
        <section id="refleksi" className="scroll-mt-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] dark:text-white tracking-tight">Refleksi Akhir</h2>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6">Model Guru yang Dituju</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-justify">
                Model guru yang saya tuju adalah pendidik yang adaptif terhadap perkembangan teknologi dan mampu memfasilitasi pembelajaran bermakna secara inovatif. Berdasarkan observasi di lapangan, kompetensi dan karakter yang ingin saya bangun adalah integrasi antara pemahaman pedagogi yang mendalam dan penguasaan literasi digital yang tinggi, sehingga siap membimbing siswa generasi abad 21 secara profesional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mb-8">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] dark:text-white">Kekuatan Diri</h3>
                <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <li>Penguasaan yang baik dalam merancang media berbasis teknologi.</li>
                  <li>Mampu mengadopsi model pembelajaran Project Based Learning (PjBL) secara relevan.</li>
                  <li>Mudah beradaptasi dengan sistem digital sekolah (LMS).</li>
                </ul>
              </div>

              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
                <div className="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 flex items-center justify-center mb-8">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] dark:text-white">Area Pengembangan</h3>
                <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <li>Manajemen alokasi waktu ketika siswa mengalami kendala teknis saat mengerjakan proyek.</li>
                  <li>Asesmen formatif terkadang belum mencakup evaluasi proses kognitif secara menyeluruh.</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#8234E6] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Rencana Tindak Lanjut</h3>
              <p className="text-purple-100 text-lg leading-relaxed text-justify relative z-10">
                Sebagai upaya pengembangan diri, saya akan menyusun Rencana Pelaksanaan Pembelajaran (RPP) yang lebih rinci dengan mempersiapkan Rencana B (Plan B) untuk memitigasi jika terjadi kendala teknis jaringan atau perangkat di kelas. Selain itu, saya berencana untuk mendalami instrumen evaluasi formatif berbasis game atau kuiz interaktif yang dapat mengukur pemahaman siswa di tengah berjalannya proyek (PjBL) tanpa mengurangi alokasi waktu yang signifikan.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER - Minimalist Clean */}
      <footer className="bg-white dark:bg-[#1a1a1a] border-t border-slate-100 dark:border-slate-800 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black tracking-tight text-[#1A1A1A] dark:text-white">Ridwan Maulana, S.Kom.</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">Mahasiswa PPG Prajabatan Informatika - Universitas Pendidikan Indonesia</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:ridwanguru@student.upi.edu" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-[#E1FA43] hover:text-[#1A1A1A] transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ridwanguru@student.upi.edu
            </a>
            <a href="tel:085860565852" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-[#E1FA43] hover:text-[#1A1A1A] transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              085860565852
            </a>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-400 font-bold text-sm">© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;