import React, { useEffect, useState } from 'react';

const App = () => {
  // Menambahkan state untuk melacak bagian yang sedang aktif (Active State)
  const [activeSection, setActiveSection] = useState('');

  // Mengatur Title, Meta Description, efek smooth scroll, dan Open Graph Fallback
  useEffect(() => {
    document.title = "E-Portfolio | Ridwan Maulana, S.Kom.";
    
    // Meta Description standar
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "E-Portfolio PPG Prajabatan UPI - Refleksi PPL Terbimbing di SMAN 1 Bandung.";
    
    // Meta Open Graph untuk tampilan saat link di-share
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

  // Efek untuk mendeteksi posisi scroll dengan Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Aktif saat 30% area section terlihat
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* HEADER V2 - Fixed & Responsive */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 fixed top-0 left-0 w-full z-50 shadow-sm">
        {/* REVISI 1: py-4 diubah menjadi py-2 md:py-4 agar header versi mobile lebih proporsional */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 text-center md:text-left">
              Ridwan Maulana, S.Kom.
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center bg-slate-100 p-1 rounded-xl w-full md:w-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                // REVISI 2 & 3: Warna teks dasar diubah ke slate-600 dan penambahan gaya khusus saat state menu aktif
                className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all hover:shadow-sm ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-white shadow-sm'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-8 md:pb-12 pt-32 md:pt-28 flex flex-col gap-24">
        
        {/* BERANDA */}
        <section id="beranda" className="scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 shadow-sm border border-slate-100">
            <div className="order-2 md:order-1 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                Mahasiswa PPG Prajabatan Informatika
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                Membangun Karakter Melalui <span className="text-blue-600">Pendidikan Digital.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                E-Portfolio ini disusun sebagai bentuk refleksi akhir PPL Terbimbing di SMA Negeri 1 Bandung, 
                menggambarkan fondasi karakter, analisis produk pembelajaran, dan komitmen profesional 
                menjadi pendidik Informatika.
              </p>
            </div>
            <div className="relative order-1 md:order-2 w-2/3 md:w-full mx-auto">
              <div className="absolute -inset-4 bg-blue-200/50 rounded-full blur-3xl opacity-30"></div>
              {/* REVISI 4: Menambahkan loading="lazy" pada gambar */}
              <img 
                src="https://i.imgur.com/oYLaroL.jpeg" 
                alt="Ridwan Maulana" 
                loading="lazy"
                className="relative rounded-[2rem] shadow-xl transition-all duration-500 w-full object-cover object-top aspect-square border-4 border-white"
              />
            </div>
          </div>
          
          {/* IDENTITAS: 4 KOTAK */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-[2rem] text-center shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <svg className="w-6 h-6 mx-auto mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <h3 className="text-slate-400 font-bold text-xs uppercase mb-2 tracking-widest">Nama Saya</h3>
              <p className="text-lg md:text-xl font-bold text-slate-900">Ridwan Maulana, S.Kom.</p>
            </div>
            <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-[2rem] text-center shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <svg className="w-6 h-6 mx-auto mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
              <h3 className="text-slate-400 font-bold text-xs uppercase mb-2 tracking-widest">NIM</h3>
              <p className="text-lg md:text-xl font-bold text-slate-900">2531031</p>
            </div>
            <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-[2rem] text-center shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <svg className="w-6 h-6 mx-auto mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <h3 className="text-slate-400 font-bold text-xs uppercase mb-2 tracking-widest">Guru Pamong</h3>
              <p className="text-lg md:text-xl font-bold text-slate-900">Irman Margino, S.T.</p>
            </div>
            <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-[2rem] text-center shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <svg className="w-6 h-6 mx-auto mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              <h3 className="text-slate-400 font-bold text-xs uppercase mb-2 tracking-widest">Sekolah PPL</h3>
              <p className="text-lg md:text-xl font-bold text-slate-900">SMAN 1 Bandung</p>
            </div>
          </div>
        </section>

        {/* PROFIL */}
        <section id="profil" className="scroll-mt-32">
          <header className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Profil Mahasiswa</h2>
            <div className="h-1.5 w-16 md:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </header>
          
          <div className="bg-white p-6 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Latar Belakang
            </h3>
            <div className="prose prose-sm md:prose-base prose-slate max-w-none text-slate-600 leading-relaxed text-justify space-y-4 mb-10">
              <p>
                Hallo! Nama Saya RIDWAN MAULANA. Saya berasal dari Tasikmalaya, sebuah kota yang dikenal dengan julukan "Kota Santri" serta pusat kerajinan kreatif dan UMKM yang tangguh. Keunikan daerah asal inilah yang menanamkan nilai-nilai religius, ketekunan, dan semangat inovasi dalam diri saya sebagai fondasi karakter pendidik.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Inspirasi & Tujuan
            </h3>
            <div className="prose prose-sm md:prose-base prose-slate max-w-none text-slate-600 leading-relaxed text-justify space-y-4 mb-10">
              <p>
                Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis dalam menggunakan teknologi, tetapi juga bijak, kritis, dan beretika di era digital.
              </p>
            </div>

            <blockquote className="p-6 md:p-8 border-l-4 border-blue-600 bg-slate-50 rounded-r-2xl italic text-slate-700 text-base md:text-lg font-medium">
              "Teknologi hanyalah sebuah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling penting." - Bill Gates
            </blockquote>
          </div>
        </section>

        {/* ARTIFAK */}
        <section id="artifak" className="scroll-mt-32">
          <header className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Analisis Artifak</h2>
            <div className="h-1.5 w-16 md:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </header>

          <div className="grid gap-6 md:gap-8">
            {/* Card 1 - Varian Artifak & Analisis Terintegrasi */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-12 shadow-sm">
              <div className="flex flex-col mb-8 border-b border-slate-100 pb-6">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">1. Perangkat Pembelajaran & Dokumentasi Praktik</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://drive.google.com/drive/folders/dummy-link-rpp" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl font-bold text-sm text-center transition-colors">
                    Modul Ajar (RPP) →
                  </a>
                  <a href="https://drive.google.com/drive/folders/dummy-link-media" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl font-bold text-sm text-center transition-colors">
                    Media Pembelajaran →
                  </a>
                  <a href="https://drive.google.com/drive/folders/dummy-link-hasil" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl font-bold text-sm text-center transition-colors">
                    Contoh Hasil Kerja Siswa →
                  </a>
                  <a href="https://youtube.com/dummy-link-video" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl font-bold text-sm text-center transition-colors">
                    Video Praktik Mengajar →
                  </a>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-slate-800 mb-2">Konteks & Kajian Teori Pedagogi</h4>
                <p className="text-slate-600 leading-relaxed text-justify">
                  Produk dan artifak pembelajaran ini disusun dengan mengadopsi model <strong>Project Based Learning (PjBL)</strong>. Pendekatan ini dianalisis melalui kajian teori pada mata kuliah integrasi <strong>Pemahaman Peserta Didik dan Pembelajarannya</strong> serta <strong>Prinsip Pengajaran dan Asesmen</strong>, yang secara komprehensif selaras dengan upaya peningkatan literasi digital dan keterampilan <em>problem-solving</em> peserta didik melalui proyek berbasis teknologi nyata.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Faktor Keberhasilan</h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Keberhasilan penerapan produk ini didukung oleh kesiapan guru untuk terus belajar yang berjalan beriringan dengan fasilitas fisik seperti proyektor yang memadai. Selain itu, infrastruktur teknologi seperti kapasitas server dan jaringan internet yang stabil di sekolah juga menjadi faktor pendukung utama.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Kendala & Perubahan Masa Depan</h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Kendala utama yang terjadi selama proses pembelajaran berkaitan dengan kecepatan literasi informasi dan kendala teknis digital, serta keterbatasan teknologi saat mengakomodasi fitur yang kompleks. Untuk situasi kelas yang mungkin memiliki literasi teknologi lebih rendah, perubahan difokuskan pada penambahan waktu bimbingan teknis (Bimtek) operasional atau modifikasi sintaks PjBL menjadi lebih sederhana dengan pendekatan kelompok tutor sebaya.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Evaluasi GP dan DPL */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-12 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 border-b border-slate-100 pb-6">2. Penilaian Guru Pamong (GP) & DPL (L7 & L8)</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-justify">
                Berikut adalah rekapitulasi penilaian penyusunan perangkat pembelajaran dan praktik mengajar selama 3 siklus secara komprehensif yang telah dievaluasi oleh Guru Pamong (Bapak Irman Margino, S.T.) dan Dosen Pembimbing Lapangan (Bapak Dr. Eki Nugraha, S.Pd., M.Kom.).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://drive.google.com/file/d/dummy-link-siklus1" className="px-6 py-3 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl font-bold text-sm text-center transition-colors">Unduh Siklus 1</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus2" className="px-6 py-3 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl font-bold text-sm text-center transition-colors">Unduh Siklus 2</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus3" className="px-6 py-3 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl font-bold text-sm text-center transition-colors">Unduh Siklus 3</a>
              </div>
            </div>
          </div>
        </section>

        {/* REFLEKSI */}
        <section id="refleksi" className="scroll-mt-32">
          <header className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Refleksi Akhir</h2>
            <div className="h-1.5 w-16 md:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </header>

          <div className="grid gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-12 rounded-[2rem] shadow-sm border border-slate-100 text-justify">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Model Guru yang Dituju</h3>
              <p className="text-slate-600 leading-relaxed">
                Model guru yang saya tuju adalah pendidik yang adaptif terhadap perkembangan teknologi dan mampu memfasilitasi pembelajaran bermakna secara inovatif. Berdasarkan observasi di lapangan, kompetensi dan karakter yang ingin saya bangun adalah integrasi antara pemahaman pedagogi yang mendalam dan penguasaan literasi digital yang tinggi, sehingga siap membimbing siswa generasi abad 21 secara profesional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* KEKUATAN DIRI - HIJAU */}
              <div className="bg-emerald-50 p-6 md:p-10 border border-emerald-100 rounded-[2rem] shadow-sm">
                <div className="w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-6 text-emerald-900">Kekuatan Diri</h3>
                <ul className="list-disc list-inside text-emerald-800 space-y-3 leading-relaxed text-left">
                  <li>Penguasaan yang baik dalam merancang media berbasis teknologi.</li>
                  <li>Mampu mengadopsi model pembelajaran Project Based Learning (PjBL) secara relevan.</li>
                  <li>Mudah beradaptasi dengan sistem digital sekolah (LMS).</li>
                </ul>
              </div>

              {/* AREA PENGEMBANGAN - KUNING/ORANYE */}
              <div className="bg-orange-50 p-6 md:p-10 border border-orange-100 rounded-[2rem] shadow-sm">
                <div className="w-12 h-12 bg-white text-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-6 text-orange-900">Area Pengembangan</h3>
                <ul className="list-disc list-inside text-orange-800 space-y-3 leading-relaxed text-left">
                  <li>Manajemen alokasi waktu ketika siswa mengalami kendala teknis saat mengerjakan proyek.</li>
                  <li>Asesmen formatif terkadang belum mencakup evaluasi proses kognitif secara menyeluruh.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Rencana Tindak Lanjut</h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                Sebagai upaya pengembangan diri, saya akan menyusun Rencana Pelaksanaan Pembelajaran (RPP) yang lebih rinci dengan mempersiapkan Rencana B (Plan B) untuk memitigasi jika terjadi kendala teknis jaringan atau perangkat di kelas. Selain itu, saya berencana untuk mendalami instrumen evaluasi formatif berbasis game atau kuiz interaktif yang dapat mengukur pemahaman siswa di tengah berjalannya proyek (PjBL) tanpa mengurangi alokasi waktu yang signifikan.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER REVISI */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900">Ridwan Maulana, S.Kom.</h3>
            <p className="text-slate-500 text-sm mt-1">Mahasiswa PPG Prajabatan Informatika - Universitas Pendidikan Indonesia</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
            <a href="mailto:ridwanguru@student.upi.edu" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors bg-slate-50 px-5 py-2.5 rounded-full border border-slate-200 hover:border-blue-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ridwanguru@student.upi.edu
            </a>
            <a href="tel:085860565852" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors bg-slate-50 px-5 py-2.5 rounded-full border border-slate-200 hover:border-blue-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              085860565852
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs">© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;