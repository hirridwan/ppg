import React, { useEffect, useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

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
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100' : 'bg-gradient-to-br from-sky-100 via-indigo-50 to-fuchsia-100 text-slate-900'}`}>
      
      {/* HEADER */}
      <header className={`backdrop-blur-2xl border-b fixed top-0 left-0 w-full z-50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-colors duration-300 ${darkMode ? 'bg-slate-900/60 border-slate-700/50' : 'bg-white/40 border-white/60'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className={`text-lg md:text-xl font-extrabold tracking-tight text-center md:text-left transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Ridwan Maulana, S.Kom.
            </h1>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <nav className={`flex flex-wrap justify-center backdrop-blur-md border p-1 rounded-xl flex-1 md:flex-none shadow-inner transition-colors duration-300 ${darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white/40 border-white/50'}`}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${
                    activeSection === item.id
                      ? darkMode
                        ? 'text-blue-400 bg-slate-700/70 shadow-sm'
                        : 'text-blue-700 bg-white/70 shadow-sm backdrop-blur-md'
                      : darkMode
                        ? 'text-slate-400 hover:text-blue-400 hover:bg-slate-700/50'
                        : 'text-slate-600 hover:text-blue-700 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* DARK MODE TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-sm ${darkMode ? 'bg-slate-700/70 border-slate-600 text-yellow-300 hover:bg-slate-600' : 'bg-white/50 border-white/60 text-slate-600 hover:bg-white/80'}`}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 6.106a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 00-1.06-1.061l-1.591 1.59z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-8 md:pb-12 pt-32 md:pt-28 flex flex-col gap-24">
        
        {/* BERANDA */}
        <section id="beranda" className="scroll-mt-32">
          <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center backdrop-blur-xl border rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-colors duration-300 ${darkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/40 border-white/60'}`}>
            <div className="order-2 md:order-1 text-center md:text-left">
              <span className={`inline-block px-4 py-1.5 backdrop-blur-md border text-xs font-bold uppercase tracking-wider rounded-full mb-6 transition-colors duration-300 ${darkMode ? 'bg-blue-900/40 border-blue-700/50 text-blue-300' : 'bg-blue-100/60 border-white/50 text-blue-700'}`}>
                Mahasiswa PPG Prajabatan Informatika
              </span>
              <h2 className={`text-4xl md:text-5xl font-black leading-tight mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Membangun Karakter Melalui <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Pendidikan Digital.</span>
              </h2>
              <p className={`text-base md:text-lg leading-relaxed mb-8 transition-colors duration-300 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                E-Portfolio ini disusun sebagai bentuk refleksi akhir PPL Terbimbing di SMA Negeri 1 Bandung, 
                menggambarkan fondasi karakter, analisis produk pembelajaran, dan komitmen profesional 
                menjadi pendidik Informatika.
              </p>
            </div>
            <div className="relative order-1 md:order-2 w-2/3 md:w-full mx-auto">
              <div className={`absolute -inset-4 rounded-full blur-3xl opacity-50 ${darkMode ? 'bg-blue-700/30' : 'bg-blue-300/40'}`}></div>
              <img 
                src="https://i.imgur.com/oYLaroL.jpeg" 
                alt="Ridwan Maulana" 
                loading="lazy"
                className={`relative rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 w-full object-cover object-top aspect-square border-4 ${darkMode ? 'border-slate-600/70' : 'border-white/70'}`}
              />
            </div>
          </div>
          
          {/* IDENTITAS: 6 KOTAK */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", label: "Nama Saya", value: "Ridwan Maulana, S.Kom." },
              { icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2", label: "NIM", value: "2531031" },
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: "Guru Pamong", value: "Irman Margino, S.T." },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Sekolah PPL", value: "SMAN 1 Bandung" },
              { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", label: "Dosen Pembimbing Lapangan", value: "Dr. Eki Nugraha, S.Pd., M.Kom." },
              { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "LPTK", value: "Universitas Pendidikan Indonesia" },
            ].map((item, i) => (
              <div key={i} className={`p-6 md:p-8 backdrop-blur-xl border rounded-2xl md:rounded-[2rem] text-center shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 ${darkMode ? 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600' : 'bg-white/40 border-white/60 hover:border-white/80'}`}>
                <svg className={`w-6 h-6 mx-auto mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                <h3 className={`font-bold text-xs uppercase mb-2 tracking-widest ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{item.label}</h3>
                <p className={`text-lg md:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROFIL */}
        <section id="profil" className="scroll-mt-32">
          <header className="text-center mb-8 md:mb-12">
            <h2 className={`text-3xl md:text-4xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Profil Mahasiswa</h2>
            <div className="h-1.5 w-16 md:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </header>
          
          <div className={`backdrop-blur-xl border p-6 md:p-12 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-colors duration-300 ${darkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/40 border-white/60'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Latar Belakang</h3>
            <div className={`prose prose-sm md:prose-base max-w-none leading-relaxed text-justify space-y-4 mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>
                Hallo! Nama Saya RIDWAN MAULANA. Saya berasal dari Tasikmalaya, sebuah kota yang dikenal dengan julukan "Kota Santri" serta pusat kerajinan kreatif dan UMKM yang tangguh. Keunikan daerah asal inilah yang menanamkan nilai-nilai religius, ketekunan, dan semangat inovasi dalam diri saya sebagai fondasi karakter pendidik.
              </p>
            </div>

            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Inspirasi & Tujuan</h3>
            <div className={`prose prose-sm md:prose-base max-w-none leading-relaxed text-justify space-y-4 mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>
                Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis dalam menggunakan teknologi, tetapi juga bijak, kritis, dan beretika di era digital.
              </p>
            </div>

            <blockquote className={`p-6 md:p-8 border-l-4 border-blue-500 backdrop-blur-md border rounded-r-2xl italic text-base md:text-lg font-medium shadow-inner transition-colors duration-300 ${darkMode ? 'bg-slate-700/30 border-slate-600/40 text-slate-300' : 'bg-white/30 border-white/40 text-slate-700'}`}>
              "Teknologi hanyalah sebuah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling penting." - Bill Gates
            </blockquote>
          </div>
        </section>

        {/* ARTIFAK */}
        <section id="artifak" className="scroll-mt-32">
          <header className="text-center mb-8 md:mb-12">
            <h2 className={`text-3xl md:text-4xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Analisis Artifak</h2>
            <div className="h-1.5 w-16 md:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </header>

          <div className="grid gap-6 md:gap-8">
            <div className={`backdrop-blur-xl border rounded-[2rem] p-6 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-colors duration-300 ${darkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/40 border-white/60'}`}>
              <div className={`flex flex-col mb-8 border-b pb-6 ${darkMode ? 'border-slate-700/50' : 'border-white/50'}`}>
                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>1. Perangkat Pembelajaran & Dokumentasi Praktik</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: "https://drive.google.com/drive/folders/dummy-link-rpp", label: "Modul Ajar (RPP) →" },
                    { href: "https://drive.google.com/drive/folders/dummy-link-media", label: "Media Pembelajaran →" },
                    { href: "https://drive.google.com/drive/folders/dummy-link-hasil", label: "Contoh Hasil Kerja Siswa →" },
                    { href: "https://youtube.com/dummy-link-video", label: "Video Praktik Mengajar →" },
                  ].map((btn, i) => (
                    <a key={i} href={btn.href} target="_blank" rel="noreferrer" className={`px-6 py-3 backdrop-blur-md border rounded-xl font-bold text-sm text-center transition-all shadow-sm ${darkMode ? 'bg-blue-900/30 border-blue-700/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-transparent' : 'bg-blue-100/50 border-white/60 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-transparent'}`}>{btn.label}</a>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Konteks & Kajian Teori Pedagogi</h4>
                <p className={`leading-relaxed text-justify ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Produk dan artifak pembelajaran ini disusun dengan mengadopsi model <strong className={darkMode ? 'text-slate-200' : ''}>Project Based Learning (PjBL)</strong>. Pendekatan ini dianalisis melalui kajian teori pada mata kuliah integrasi <strong className={darkMode ? 'text-slate-200' : ''}>Pemahaman Peserta Didik dan Pembelajarannya</strong> serta <strong className={darkMode ? 'text-slate-200' : ''}>Prinsip Pengajaran dan Asesmen</strong>, yang secara komprehensif selaras dengan upaya peningkatan literasi digital dan keterampilan <em>problem-solving</em> peserta didik melalui proyek berbasis teknologi nyata.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { title: "Faktor Keberhasilan", text: "Keberhasilan penerapan produk ini didukung oleh kesiapan guru untuk terus belajar yang berjalan beriringan dengan fasilitas fisik seperti proyektor yang memadai. Selain itu, infrastruktur teknologi seperti kapasitas server dan jaringan internet yang stabil di sekolah juga menjadi faktor pendukung utama." },
                  { title: "Kendala & Perubahan Masa Depan", text: "Kendala utama yang terjadi selama proses pembelajaran berkaitan dengan kecepatan literasi informasi dan kendala teknis digital, serta keterbatasan teknologi saat mengakomodasi fitur yang kompleks. Untuk situasi kelas yang mungkin memiliki literasi teknologi lebih rendah, perubahan difokuskan pada penambahan waktu bimbingan teknis (Bimtek) operasional atau modifikasi sintaks PjBL menjadi lebih sederhana dengan pendekatan kelompok tutor sebaya." },
                ].map((card, i) => (
                  <div key={i} className={`backdrop-blur-md p-6 rounded-2xl border shadow-inner transition-colors duration-300 ${darkMode ? 'bg-slate-700/30 border-slate-600/50' : 'bg-white/30 border-white/50'}`}>
                    <h4 className={`font-bold mb-3 text-sm uppercase tracking-wide ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>{card.title}</h4>
                    <p className={`text-sm leading-relaxed text-justify ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`backdrop-blur-xl border rounded-[2rem] p-6 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-colors duration-300 ${darkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/40 border-white/60'}`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-4 border-b pb-6 ${darkMode ? 'text-blue-400 border-slate-700/50' : 'text-blue-900 border-white/50'}`}>2. Penilaian Guru Pamong (GP) & DPL (L7 & L8)</h3>
              <p className={`mb-6 leading-relaxed text-justify ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Berikut adalah rekapitulasi penilaian rancangan pembelajaran dan praktik mengajar selama 3 siklus secara komprehensif yang telah dievaluasi oleh Guru Pamong (Bapak Irman Margino, S.T.) dan Dosen Pembimbing Lapangan (Bapak Dr. Eki Nugraha, S.Pd., M.Kom.).
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { siklus: "Siklus 1", nilai: "77", rancangan: "Perlu penyesuaian pada alokasi waktu PjBL agar lebih realistis untuk diterapkan.", praktik: "Penguasaan kelas sudah baik, namun perlu lebih interaktif dan merata saat membimbing kelompok." },
                  { siklus: "Siklus 2", nilai: "85", rancangan: "Sintaks PjBL sudah tergambar dengan sangat jelas dan terstruktur pada modul ajar.", praktik: "Bimbingan teknis operasional ke siswa lebih terarah, penggunaan media interaktif sangat memfasilitasi pemahaman." },
                  { siklus: "Siklus 3", nilai: "90", rancangan: "Asesmen formatif terintegrasi dengan sangat baik dan komprehensif dalam langkah pembelajaran.", praktik: "Manajemen kelas dan waktu sangat efektif, siswa mampu menghasilkan produk digital sesuai target proyek." },
                ].map((s, i) => (
                  <div key={i} className={`backdrop-blur-md border p-5 rounded-2xl shadow-inner transition-colors duration-300 ${darkMode ? 'bg-slate-700/30 border-slate-600/50' : 'bg-white/30 border-white/50'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>{s.siklus}</h4>
                      <span className={`px-3 py-1 backdrop-blur-sm border text-xs font-bold rounded-full shadow-sm ${darkMode ? 'bg-slate-600/50 border-slate-500 text-blue-300' : 'bg-white/50 border-white/60 text-blue-800'}`}>Nilai: {s.nilai}</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <strong className={darkMode ? 'text-slate-200' : 'text-slate-700'}>Rancangan Pembelajaran:</strong> {s.rancangan}<br/>
                      <strong className={darkMode ? 'text-slate-200' : 'text-slate-700'}>Praktik Mengajar:</strong> {s.praktik}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {["Siklus 1", "Siklus 2", "Siklus 3"].map((s, i) => (
                  <a key={i} href={`https://drive.google.com/file/d/dummy-link-${s.toLowerCase().replace(' ', '')}`} className={`px-6 py-3 backdrop-blur-md border rounded-xl font-bold text-sm text-center transition-all shadow-sm ${darkMode ? 'bg-blue-900/30 border-blue-700/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-transparent' : 'bg-blue-100/50 border-white/60 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-transparent'}`}>Unduh Lampiran {s}</a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REFLEKSI */}
        <section id="refleksi" className="scroll-mt-32">
          <header className="text-center mb-8 md:mb-12">
            <h2 className={`text-3xl md:text-4xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Refleksi Akhir</h2>
            <div className="h-1.5 w-16 md:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </header>

          <div className="grid gap-6 md:gap-8">
            <div className={`backdrop-blur-xl p-6 md:p-12 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border text-justify transition-colors duration-300 ${darkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/40 border-white/60'}`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Model Guru yang Dituju</h3>
              <p className={`leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Model guru yang saya tuju adalah pendidik yang adaptif terhadap perkembangan teknologi dan mampu memfasilitasi pembelajaran bermakna secara inovatif. Berdasarkan observasi di lapangan, kompetensi dan karakter yang ingin saya bangun adalah integrasi antara pemahaman pedagogi yang mendalam dan penguasaan literasi digital yang tinggi, sehingga siap membimbing siswa generasi abad 21 secara profesional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className={`backdrop-blur-xl p-6 md:p-10 border rounded-[2rem] shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] transition-colors duration-300 ${darkMode ? 'bg-emerald-900/20 border-emerald-800/40' : 'bg-emerald-100/30 border-white/60'}`}>
                <div className={`w-12 h-12 backdrop-blur-md border rounded-xl flex items-center justify-center mb-6 shadow-sm ${darkMode ? 'bg-slate-700/60 border-slate-600 text-emerald-400' : 'bg-white/60 border-white/50 text-emerald-600'}`}>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-900'}`}>Kekuatan Diri</h3>
                <ul className={`list-disc list-inside space-y-3 leading-relaxed text-left ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>
                  <li>Penguasaan yang baik dalam merancang media berbasis teknologi.</li>
                  <li>Mampu mengadopsi model pembelajaran Project Based Learning (PjBL) secara relevan.</li>
                  <li>Mudah beradaptasi dengan sistem digital sekolah (LMS).</li>
                </ul>
              </div>

              <div className={`backdrop-blur-xl p-6 md:p-10 border rounded-[2rem] shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] transition-colors duration-300 ${darkMode ? 'bg-orange-900/20 border-orange-800/40' : 'bg-orange-100/30 border-white/60'}`}>
                <div className={`w-12 h-12 backdrop-blur-md border rounded-xl flex items-center justify-center mb-6 shadow-sm ${darkMode ? 'bg-slate-700/60 border-slate-600 text-orange-400' : 'bg-white/60 border-white/50 text-orange-600'}`}>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-orange-400' : 'text-orange-900'}`}>Area Pengembangan</h3>
                <ul className={`list-disc list-inside space-y-3 leading-relaxed text-left ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                  <li>Manajemen alokasi waktu ketika siswa mengalami kendala teknis saat mengerjakan proyek.</li>
                  <li>Asesmen formatif terkadang belum mencakup evaluasi proses kognitif secara menyeluruh.</li>
                </ul>
              </div>
            </div>

            <div className={`backdrop-blur-xl p-6 md:p-12 rounded-[2rem] border shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-colors duration-300 ${darkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/40 border-white/60'}`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Rencana Tindak Lanjut</h3>
              <p className={`leading-relaxed text-justify ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Sebagai upaya pengembangan diri, saya akan menyusun Rencana Pelaksanaan Pembelajaran (RPP) yang lebih rinci dengan mempersiapkan Rencana B (Plan B) untuk memitigasi jika terjadi kendala teknis jaringan atau perangkat di kelas. Selain itu, saya berencana untuk mendalami instrumen evaluasi formatif berbasis game atau kuiz interaktif yang dapat mengukur pemahaman siswa di tengah berjalannya proyek (PjBL) tanpa mengurangi alokasi waktu yang signifikan.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={`backdrop-blur-2xl border-t mt-12 py-10 shadow-[0_-4px_30px_rgba(0,0,0,0.02)] transition-colors duration-300 ${darkMode ? 'bg-slate-900/60 border-slate-700/50' : 'bg-white/40 border-white/60'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ridwan Maulana, S.Kom.</h3>
            <p className={`text-sm mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>Mahasiswa PPG Prajabatan Informatika - Universitas Pendidikan Indonesia</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
            <a href="mailto:ridwanguru@student.upi.edu" className={`flex items-center gap-2 transition-colors backdrop-blur-md px-5 py-2.5 rounded-full border shadow-sm ${darkMode ? 'text-slate-400 hover:text-blue-400 bg-slate-800/40 border-slate-700/50 hover:bg-slate-700/50' : 'text-slate-600 hover:text-blue-700 bg-white/40 border-white/60 hover:bg-white/60'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ridwanguru@student.upi.edu
            </a>
            <a href="tel:085860565852" className={`flex items-center gap-2 transition-colors backdrop-blur-md px-5 py-2.5 rounded-full border shadow-sm ${darkMode ? 'text-slate-400 hover:text-blue-400 bg-slate-800/40 border-slate-700/50 hover:bg-slate-700/50' : 'text-slate-600 hover:text-blue-700 bg-white/40 border-white/60 hover:bg-white/60'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              085860565852
            </a>
          </div>
        </div>
        <div className={`max-w-6xl mx-auto px-4 md:px-6 mt-8 pt-8 border-t text-center ${darkMode ? 'border-slate-700/50' : 'border-white/50'}`}>
            <p className={`text-xs ${darkMode ? 'text-slate-600' : 'text-slate-500'}`}>© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
