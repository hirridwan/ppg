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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200 overflow-x-hidden transition-colors duration-300">
      
      {/* FLOATING COLORFUL NAVBAR */}
      <header className="fixed top-4 left-0 w-full z-50 px-4">
        <div className="max-w-5xl mx-auto bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg shadow-xl shadow-indigo-500/10 dark:shadow-indigo-500/5 rounded-full px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-4 border border-indigo-50 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 dark:from-indigo-400 dark:to-fuchsia-400">
              Ridwan Maulana, S.Kom.
            </h1>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-full">
            <nav className="flex space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                    activeSection === item.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 text-amber-500 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 pt-40 flex flex-col gap-32">
        
        {/* BERANDA - VIBRANT HERO */}
        <section id="beranda" className="scroll-mt-32 relative">
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-fuchsia-300/30 dark:bg-fuchsia-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-start text-left">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-full mb-8 shadow-lg shadow-indigo-500/30">
                Mahasiswa PPG Prajabatan Informatika
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Membangun Karakter Melalui <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">Pendidikan Digital.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                E-Portfolio ini disusun sebagai bentuk refleksi akhir PPL Terbimbing di SMA Negeri 1 Bandung, 
                menggambarkan fondasi karakter, analisis produk pembelajaran, dan komitmen profesional 
                menjadi pendidik Informatika.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 rounded-[3rem] transform rotate-3 scale-105 opacity-20 dark:opacity-40 blur-xl"></div>
              <img 
                src="https://i.imgur.com/oYLaroL.jpeg" 
                alt="Ridwan Maulana" 
                loading="lazy"
                className="relative z-10 w-full h-[500px] object-cover object-top rounded-[3rem] shadow-2xl border-4 border-white dark:border-slate-800"
              />
            </div>
          </div>
          
          {/* IDENTITAS - COLORFUL BENTO CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20">
            {/* Box 1 - Blue */}
            <div className="p-8 bg-blue-100 dark:bg-blue-900/30 rounded-[2rem] border border-blue-200 dark:border-blue-800/50 hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <h3 className="text-blue-800 dark:text-blue-300 font-bold text-xs uppercase mb-2 tracking-widest">Nama Saya</h3>
              <p className="text-lg font-black text-blue-950 dark:text-blue-100">Ridwan Maulana, S.Kom.</p>
            </div>
            {/* Box 2 - Violet */}
            <div className="p-8 bg-violet-100 dark:bg-violet-900/30 rounded-[2rem] border border-violet-200 dark:border-violet-800/50 hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-8 h-8 mb-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
              <h3 className="text-violet-800 dark:text-violet-300 font-bold text-xs uppercase mb-2 tracking-widest">NIM</h3>
              <p className="text-lg font-black text-violet-950 dark:text-violet-100">2531031</p>
            </div>
            {/* Box 3 - Emerald */}
            <div className="p-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-[2rem] border border-emerald-200 dark:border-emerald-800/50 hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-8 h-8 mb-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <h3 className="text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase mb-2 tracking-widest">Guru Pamong</h3>
              <p className="text-lg font-black text-emerald-950 dark:text-emerald-100">Irman Margino, S.T.</p>
            </div>
            {/* Box 4 - Amber */}
            <div className="p-8 bg-amber-100 dark:bg-amber-900/30 rounded-[2rem] border border-amber-200 dark:border-amber-800/50 hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-8 h-8 mb-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              <h3 className="text-amber-800 dark:text-amber-300 font-bold text-xs uppercase mb-2 tracking-widest">Sekolah PPL</h3>
              <p className="text-lg font-black text-amber-950 dark:text-amber-100">SMAN 1 Bandung</p>
            </div>
            {/* Box 5 - Rose */}
            <div className="p-8 bg-rose-100 dark:bg-rose-900/30 rounded-[2rem] border border-rose-200 dark:border-rose-800/50 hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-8 h-8 mb-4 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              <h3 className="text-rose-800 dark:text-rose-300 font-bold text-xs uppercase mb-2 tracking-widest">Dosen Pembimbing Lapangan</h3>
              <p className="text-lg font-black text-rose-950 dark:text-rose-100">Dr. Eki Nugraha, S.Pd., M.Kom.</p>
            </div>
            {/* Box 6 - Cyan */}
            <div className="p-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-[2rem] border border-cyan-200 dark:border-cyan-800/50 hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-8 h-8 mb-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <h3 className="text-cyan-800 dark:text-cyan-300 font-bold text-xs uppercase mb-2 tracking-widest">LPTK</h3>
              <p className="text-lg font-black text-cyan-950 dark:text-cyan-100">Universitas Pendidikan Indonesia</p>
            </div>
          </div>
        </section>

        {/* PROFIL */}
        <section id="profil" className="scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Profil Mahasiswa</h2>
            <div className="h-2 w-24 bg-gradient-to-r from-indigo-500 to-fuchsia-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-8 md:p-14 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="inline-block p-3 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-2xl mb-6">
                  <h3 className="text-2xl font-bold text-fuchsia-700 dark:text-fuchsia-400">Latar Belakang</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-justify">
                  Hallo! Nama Saya RIDWAN MAULANA. Saya berasal dari Tasikmalaya, sebuah kota yang dikenal dengan julukan "Kota Santri" serta pusat kerajinan kreatif dan UMKM yang tangguh. Keunikan daerah asal inilah yang menanamkan nilai-nilai religius, ketekunan, dan semangat inovasi dalam diri saya sebagai fondasi karakter pendidik.
                </p>
              </div>

              <div>
                <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-6">
                  <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">Inspirasi & Tujuan</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-justify">
                  Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis dalam menggunakan teknologi, tetapi juga bijak, kritis, dan beretika di era digital.
                </p>
              </div>
            </div>

            <blockquote className="mt-12 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl text-white text-xl md:text-2xl font-medium italic text-center shadow-lg shadow-indigo-500/20">
              "Teknologi hanyalah sebuah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling penting." - Bill Gates
            </blockquote>
          </div>
        </section>

        {/* ARTIFAK */}
        <section id="artifak" className="scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Analisis Artifak</h2>
            <div className="h-2 w-24 bg-gradient-to-r from-fuchsia-500 to-rose-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-12">
            {/* Bagian 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-2xl flex items-center justify-center text-xl">1</span>
                Perangkat Pembelajaran & Dokumentasi Praktik
              </h3>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="https://drive.google.com/drive/folders/dummy-link-rpp" target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-50 dark:bg-slate-700 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 text-slate-700 dark:text-slate-200 rounded-2xl font-bold transition-colors shadow-sm">Modul Ajar (RPP) →</a>
                <a href="https://drive.google.com/drive/folders/dummy-link-media" target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-50 dark:bg-slate-700 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 text-slate-700 dark:text-slate-200 rounded-2xl font-bold transition-colors shadow-sm">Media Pembelajaran →</a>
                <a href="https://drive.google.com/drive/folders/dummy-link-hasil" target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-50 dark:bg-slate-700 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 text-slate-700 dark:text-slate-200 rounded-2xl font-bold transition-colors shadow-sm">Contoh Hasil Kerja Siswa →</a>
                <a href="https://youtube.com/dummy-link-video" target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-50 dark:bg-slate-700 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 text-slate-700 dark:text-slate-200 rounded-2xl font-bold transition-colors shadow-sm">Video Praktik Mengajar →</a>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 p-8 rounded-3xl mb-8">
                <h4 className="font-black text-amber-800 dark:text-amber-400 mb-3 text-lg">Konteks & Kajian Teori Pedagogi</h4>
                <p className="text-amber-900/80 dark:text-amber-100/80 leading-relaxed text-justify">
                  Produk dan artifak pembelajaran ini disusun dengan mengadopsi model <strong>Project Based Learning (PjBL)</strong>. Pendekatan ini dianalisis melalui kajian teori pada mata kuliah integrasi <strong>Pemahaman Peserta Didik dan Pembelajarannya</strong> serta <strong>Prinsip Pengajaran dan Asesmen</strong>, yang secara komprehensif selaras dengan upaya peningkatan literasi digital dan keterampilan <em>problem-solving</em> peserta didik melalui proyek berbasis teknologi nyata.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 dark:bg-slate-700/50 p-8 rounded-3xl">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                    Faktor Keberhasilan
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">
                    Keberhasilan penerapan produk ini didukung oleh kesiapan guru untuk terus belajar yang berjalan beriringan dengan fasilitas fisik seperti proyektor yang memadai. Selain itu, infrastruktur teknologi seperti kapasitas server dan jaringan internet yang stabil di sekolah juga menjadi faktor pendukung utama.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 p-8 rounded-3xl">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-rose-500 rounded-full"></span>
                    Kendala & Perubahan Masa Depan
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">
                    Kendala utama yang terjadi selama proses pembelajaran berkaitan dengan kecepatan literasi informasi dan kendala teknis digital, serta keterbatasan teknologi saat mengakomodasi fitur yang kompleks. Untuk situasi kelas yang mungkin memiliki literasi teknologi lebih rendah, perubahan difokuskan pada penambahan waktu bimbingan teknis (Bimtek) operasional atau modifikasi sintaks PjBL menjadi lebih sederhana dengan pendekatan kelompok tutor sebaya.
                  </p>
                </div>
              </div>
            </div>

            {/* Bagian 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-4">
                <span className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-xl">2</span>
                Penilaian Guru Pamong (GP) & DPL (L7 & L8)
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-10 text-lg">
                Berikut adalah rekapitulasi penilaian rancangan pembelajaran dan praktik mengajar selama 3 siklus secara komprehensif yang telah dievaluasi oleh Guru Pamong (Bapak Irman Margino, S.T.) dan Dosen Pembimbing Lapangan (Bapak Dr. Eki Nugraha, S.Pd., M.Kom.).
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-50 dark:bg-slate-700/50 p-6 rounded-3xl">
                  <div className="bg-blue-500 text-white w-24 h-24 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Siklus 1</span>
                    <span className="text-3xl font-black">77</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Perlu penyesuaian pada alokasi waktu PjBL agar lebih realistis untuk diterapkan.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Penguasaan kelas sudah baik, namun perlu lebih interaktif dan merata saat membimbing kelompok.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-50 dark:bg-slate-700/50 p-6 rounded-3xl">
                  <div className="bg-indigo-500 text-white w-24 h-24 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Siklus 2</span>
                    <span className="text-3xl font-black">85</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Sintaks PjBL sudah tergambar dengan sangat jelas dan terstruktur pada modul ajar.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Bimbingan teknis operasional ke siswa lebih terarah, penggunaan media interaktif sangat memfasilitasi pemahaman.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-50 dark:bg-slate-700/50 p-6 rounded-3xl">
                  <div className="bg-fuchsia-500 text-white w-24 h-24 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-500/30">
                    <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Siklus 3</span>
                    <span className="text-3xl font-black">90</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Asesmen formatif terintegrasi dengan sangat baik dan komprehensif dalam langkah pembelajaran.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Manajemen kelas dan waktu sangat efektif, siswa mampu menghasilkan produk digital sesuai target proyek.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://drive.google.com/file/d/dummy-link-siklus1" className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-bold text-center hover:shadow-lg hover:shadow-indigo-500/30 transition-all">Unduh Lampiran Siklus 1</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus2" className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-fuchsia-600 text-white rounded-2xl font-bold text-center hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all">Unduh Lampiran Siklus 2</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus3" className="px-6 py-4 bg-gradient-to-r from-fuchsia-500 to-rose-500 text-white rounded-2xl font-bold text-center hover:shadow-lg hover:shadow-rose-500/30 transition-all">Unduh Lampiran Siklus 3</a>
              </div>
            </div>
          </div>
        </section>

        {/* REFLEKSI */}
        <section id="refleksi" className="scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Refleksi Akhir</h2>
            <div className="h-2 w-24 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-10">
            <div className="bg-white dark:bg-slate-800 p-10 md:p-14 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-black text-cyan-600 dark:text-cyan-400 mb-6">Model Guru yang Dituju</h3>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-justify">
                Model guru yang saya tuju adalah pendidik yang adaptif terhadap perkembangan teknologi dan mampu memfasilitasi pembelajaran bermakna secara inovatif. Berdasarkan observasi di lapangan, kompetensi dan karakter yang ingin saya bangun adalah integrasi antara pemahaman pedagogi yang mendalam dan penguasaan literasi digital yang tinggi, sehingga siap membimbing siswa generasi abad 21 secara profesional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-emerald-500 text-white p-10 rounded-[3rem] shadow-xl shadow-emerald-500/20 transform hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-2xl font-black mb-6">Kekuatan Diri</h3>
                <ul className="list-disc list-inside space-y-4 text-emerald-50 text-lg">
                  <li>Penguasaan yang baik dalam merancang media berbasis teknologi.</li>
                  <li>Mampu mengadopsi model pembelajaran Project Based Learning (PjBL) secara relevan.</li>
                  <li>Mudah beradaptasi dengan sistem digital sekolah (LMS).</li>
                </ul>
              </div>

              <div className="bg-orange-500 text-white p-10 rounded-[3rem] shadow-xl shadow-orange-500/20 transform hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h3 className="text-2xl font-black mb-6">Area Pengembangan</h3>
                <ul className="list-disc list-inside space-y-4 text-orange-50 text-lg">
                  <li>Manajemen alokasi waktu ketika siswa mengalami kendala teknis saat mengerjakan proyek.</li>
                  <li>Asesmen formatif terkadang belum mencakup evaluasi proses kognitif secara menyeluruh.</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-black text-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-black text-indigo-400 mb-6 relative z-10">Rencana Tindak Lanjut</h3>
              <p className="text-slate-300 text-lg leading-relaxed text-justify relative z-10">
                Sebagai upaya pengembangan diri, saya akan menyusun Rencana Pelaksanaan Pembelajaran (RPP) yang lebih rinci dengan mempersiapkan Rencana B (Plan B) untuk memitigasi jika terjadi kendala teknis jaringan atau perangkat di kelas. Selain itu, saya berencana untuk mendalami instrumen evaluasi formatif berbasis game atau kuiz interaktif yang dapat mengukur pemahaman siswa di tengah berjalannya proyek (PjBL) tanpa mengurangi alokasi waktu yang signifikan.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER - VIBRANT */}
      <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-12 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">Ridwan Maulana, S.Kom.</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">Mahasiswa PPG Prajabatan Informatika - Universitas Pendidikan Indonesia</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:ridwanguru@student.upi.edu" className="flex items-center gap-3 px-6 py-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ridwanguru@student.upi.edu
            </a>
            <a href="tel:085860565852" className="flex items-center gap-3 px-6 py-3 bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 rounded-full font-bold hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              085860565852
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-700 text-center">
            <p className="text-slate-400 dark:text-slate-500 font-bold text-sm tracking-widest uppercase">© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;