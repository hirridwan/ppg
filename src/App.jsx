import React, { useEffect } from 'react';

const App = () => {
  // Mengatur Title, Meta Description, dan efek smooth scroll
  useEffect(() => {
    document.title = "E-Portfolio | Ridwan Maulana";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "E-Portfolio Refleksi PPL Terbimbing di SMAN 1 Bandung oleh Ridwan Maulana, S.Kom.";
    
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'artifak', label: 'Artifak' },
    { id: 'refleksi', label: 'Refleksi' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* HEADER V2 - Fixed & Responsive */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg shrink-0"></div>
            <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 text-center md:text-left">
              E-Portfolio <span className="text-blue-600">|</span> Ridwan Maulana
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center bg-slate-100 p-1 rounded-xl w-full md:w-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all text-slate-500 hover:text-blue-600 hover:bg-white hover:shadow-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-8 md:pb-12 pt-32 md:pt-28 flex flex-col gap-24">
        
        {/* BERANDA V2 - HERO SECTION */}
        <section id="beranda" className="scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16">
            <div className="order-2 md:order-1 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                Mahasiswa PPG Informatika
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                Membangun Karakter Melalui <span className="text-blue-600">Pendidikan Digital.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                E-Portfolio ini disusun sebagai bentuk refleksi akhir PPL Terbimbing di SMA Negeri 1 Bandung, 
                menggambarkan fondasi karakter, analisis produk pembelajaran, dan komitmen profesional 
                menjadi pendidik Informatika.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600 font-bold text-sm">SMAN 1</div>
                  <div className="text-xs md:text-sm font-semibold text-slate-700 pr-2">Mitra PPL Terbimbing</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2 w-2/3 md:w-full mx-auto">
              <div className="absolute -inset-4 bg-blue-200/50 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://i.imgur.com/gK53z6G.jpeg" 
                alt="Ridwan Maulana" 
                className="relative rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover aspect-square border-4 border-white"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl text-center md:text-left shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-slate-400 font-bold text-xs uppercase mb-2 md:mb-4 tracking-widest">NIM</h3>
              <p className="text-xl md:text-2xl font-bold text-slate-900">2531031</p>
            </div>
            <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl text-center md:text-left shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-slate-400 font-bold text-xs uppercase mb-2 md:mb-4 tracking-widest">Guru Pamong</h3>
              <p className="text-xl md:text-2xl font-bold text-slate-900">Irman Margino, S.T.</p>
            </div>
            <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-3xl text-center md:text-left shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <h3 className="text-slate-400 font-bold text-xs uppercase mb-2 md:mb-4 tracking-widest">Kontak</h3>
              <p className="text-sm font-bold text-slate-900 break-words">ridwanguru@student.upi.edu</p>
              <p className="text-sm text-slate-500 mt-1">085860565852</p>
            </div>
          </div>
        </section>

        {/* PROFIL V2 */}
        <section id="profil" className="max-w-3xl mx-auto space-y-8 md:space-y-12 scroll-mt-32">
          <header className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Profil Mahasiswa</h2>
            <div className="h-1.5 w-16 md:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </header>
          
          <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-700 flex items-center gap-2">
              <span className="w-2 h-6 md:h-8 bg-blue-600 rounded-full"></span> Latar Belakang
            </h3>
            <div className="prose prose-sm md:prose-base prose-slate max-w-none text-slate-700 leading-relaxed text-justify space-y-4 mb-8">
              <p>
                Saya berasal dari Tasikmalaya, sebuah kota yang dikenal dengan julukan "Kota Santri" serta pusat kerajinan kreatif dan UMKM yang tangguh. Keunikan daerah asal inilah yang menanamkan nilai-nilai religius, ketekunan, dan semangat inovasi dalam diri saya sebagai fondasi karakter pendidik.
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-700 flex items-center gap-2 mt-8">
              <span className="w-2 h-6 md:h-8 bg-blue-600 rounded-full"></span> Inspirasi & Tujuan
            </h3>
            <div className="prose prose-sm md:prose-base prose-slate max-w-none text-slate-700 leading-relaxed text-justify space-y-4">
              <p>
                Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis dalam menggunakan teknologi, tetapi juga bijak, kritis, dan beretika di era digital.
              </p>
            </div>

            <blockquote className="mt-8 md:mt-10 p-5 md:p-6 border-l-4 border-blue-600 bg-white rounded-r-2xl shadow-sm italic text-slate-600 text-base md:text-lg">
              "Teknologi hanyalah sebuah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling penting." - Bill Gates
            </blockquote>
          </div>
        </section>

        {/* ARTIFAK V2 */}
        <section id="artifak" className="space-y-8 md:space-y-12 scroll-mt-32">
          <header className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Analisis Artifak</h2>
              <p className="text-slate-500 font-medium font-mono text-xs md:text-sm uppercase tracking-tighter">Pembelajaran | SMA Negeri 1 Bandung</p>
            </div>
          </header>

          <div className="grid gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 shadow-sm hover:border-blue-200 hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                <div className="lg:w-1/3">
                  <span className="text-blue-600 font-black text-5xl md:text-6xl opacity-20">01</span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-2 mb-4">Modul Ajar & Rencana Pembelajaran</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed text-justify">
                    Produk pembelajaran ini disusun dengan mengadopsi model <strong>Project Based Learning (PjBL)</strong>. Pendekatan ini selaras dengan upaya peningkatan literasi digital dan keterampilan problem-solving peserta didik melalui proyek berbasis teknologi nyata.
                  </p>
                  <a href="https://drive.google.com/drive/folders/dummy-link-rpp" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest border-b-2 border-blue-600 pb-1">
                    Lihat Dokumen →
                  </a>
                </div>
                <div className="lg:w-2/3 grid gap-4 md:gap-6">
                  <div className="bg-slate-50 p-5 md:p-6 rounded-2xl">
                    <h4 className="font-bold text-slate-800 text-xs md:text-sm mb-2 uppercase tracking-wide">Faktor Keberhasilan</h4>
                    <p className="text-slate-600 text-sm leading-relaxed text-justify">
                      Keberhasilan penerapan produk ini didukung oleh kesiapan guru untuk terus belajar yang berjalan beriringan dengan fasilitas fisik seperti proyektor yang memadai. Selain itu, infrastruktur teknologi seperti kapasitas server dan jaringan internet yang stabil di sekolah juga menjadi faktor pendukung utama.
                    </p>
                  </div>
                  <div className="bg-red-50 p-5 md:p-6 rounded-2xl border border-red-100">
                    <h4 className="font-bold text-red-800 text-xs md:text-sm mb-2 uppercase tracking-wide">Kendala & Perubahan Masa Depan</h4>
                    <p className="text-red-700 text-sm leading-relaxed text-justify">
                      Kendala utama yang terjadi selama proses pembelajaran berkaitan dengan kecepatan literasi informasi dan kendala teknis digital, serta keterbatasan teknologi saat mengakomodasi fitur yang kompleks. Untuk situasi kelas yang mungkin memiliki literasi teknologi lebih rendah, perubahan difokuskan pada penambahan waktu bimbingan teknis (Bimtek) operasional atau modifikasi sintaks PjBL menjadi lebih sederhana dengan pendekatan kelompok tutor sebaya.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 text-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.951 1.707c-4.135 1.109-7.144 5.063-7.144 7.857 0 1.141.601 1.943 1.141 2.438.753.679 1.115 1.554 1.115 2.5 0 2.21-1.789 4-4 4-2.209 0-4-1.79-4-4zm-12 0c0-5.141 3.892-10.519 10-11.725l.951 1.707c-4.135 1.109-7.144 5.063-7.144 7.857 0 1.141.601 1.943 1.141 2.438.753.679 1.115 1.554 1.115 2.5 0 2.21-1.789 4-4 4-2.209 0-4-1.79-4-4z"/></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative z-10">Hasil Penilaian Guru Pamong (L7 & L8)</h3>
              <p className="text-slate-300 text-sm md:text-base max-w-2xl mb-6 md:mb-8 leading-relaxed text-justify relative z-10">
                Berikut adalah rekapitulasi penilaian penyusunan perangkat pembelajaran dan praktik mengajar selama 3 siklus oleh Bapak Irman Margino, S.T.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 relative z-10">
                <a href="https://drive.google.com/file/d/dummy-link-siklus1" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm text-center transition-colors shadow-lg shadow-blue-900/20">Unduh Siklus 1</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus2" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm text-center transition-colors">Unduh Siklus 2</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus3" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm text-center transition-colors">Unduh Siklus 3</a>
              </div>
            </div>
          </div>
        </section>

        {/* REFLEKSI V2 */}
        <section id="refleksi" className="max-w-4xl mx-auto space-y-8 md:space-y-12 scroll-mt-32">
          <header className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Refleksi Akhir & Model Guru</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Refleksi atas perjalanan PPL Terbimbing menuju karakter guru yang adaptif dan solutif.
            </p>
          </header>

          <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 mb-8 md:mb-12 text-justify">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Model Guru yang Dituju</h3>
            <p className="text-slate-600 leading-relaxed">
              Model guru yang saya tuju adalah pendidik yang adaptif terhadap perkembangan teknologi dan mampu memfasilitasi pembelajaran bermakna secara inovatif. Berdasarkan observasi di lapangan, kompetensi dan karakter yang ingin saya bangun adalah integrasi antara pemahaman pedagogi yang mendalam dan penguasaan literasi digital yang tinggi, sehingga siap membimbing siswa generasi abad 21 secara profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="p-6 md:p-8 border-2 border-emerald-50 bg-emerald-50/30 rounded-3xl hover:border-emerald-200 transition-all group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-emerald-900">Kekuatan Diri</h3>
              <ul className="list-disc list-inside text-emerald-800 space-y-2 text-sm leading-relaxed text-left">
                <li>Penguasaan yang baik dalam merancang media berbasis teknologi.</li>
                <li>Mampu mengadopsi model pembelajaran Project Based Learning (PjBL) secara relevan.</li>
                <li>Mudah beradaptasi dengan sistem digital sekolah (LMS).</li>
              </ul>
            </div>

            <div className="p-6 md:p-8 border-2 border-orange-50 bg-orange-50/30 rounded-3xl hover:border-orange-200 transition-all group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all shrink-0">
                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-orange-900">Area Pengembangan</h3>
              <ul className="list-disc list-inside text-orange-800 space-y-2 text-sm leading-relaxed text-left">
                <li>Manajemen alokasi waktu ketika siswa mengalami kendala teknis saat mengerjakan proyek.</li>
                <li>Asesmen formatif terkadang belum mencakup evaluasi proses kognitif secara menyeluruh.</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 md:p-8 rounded-3xl mt-8 md:mt-12 border border-blue-100 text-center md:text-left">
            <h3 className="text-blue-900 font-bold mb-3 uppercase tracking-widest text-xs">Rencana Tindak Lanjut</h3>
            <p className="text-blue-800 text-sm md:text-base leading-relaxed text-justify">
              Sebagai upaya pengembangan diri, saya akan menyusun Rencana Pelaksanaan Pembelajaran (RPP) yang lebih rinci dengan mempersiapkan Rencana B (Plan B) untuk memitigasi jika terjadi kendala teknis jaringan atau perangkat di kelas. Selain itu, saya berencana untuk mendalami instrumen evaluasi formatif berbasis game atau kuiz interaktif yang dapat mengukur pemahaman siswa di tengah berjalannya proyek (PjBL) tanpa mengurangi alokasi waktu yang signifikan.
            </p>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-8 md:py-12 border-t border-slate-100 text-center mt-12">
        <p className="text-slate-400 text-xs md:text-sm">© 2026 Ridwan Maulana | Ujian Refleksi Akhir PPL Terbimbing 1</p>
      </footer>
    </div>
  );
};

export default App;