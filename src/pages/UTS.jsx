import React from 'react';

const Uts = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-24">
      {/* HEADER TITLE FOR UTS */}
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-4 tracking-tight">E-Portfolio 1 (UTS)</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">Refleksi Awal Praktik Pengalaman Lapangan Terbimbing</p>
      </section>

      {/* PROFIL */}
      <section id="profil-uts" className="scroll-mt-32">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] dark:text-white mb-12 tracking-tight">Profil Mahasiswa</h2>
          
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
                Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis, tetapi juga bijak, kritis, dan beretika di era digital.
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

      {/* ARTIFAK DAN ANALISISNYA */}
      <section id="artifak-uts" className="scroll-mt-32">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] dark:text-white tracking-tight">Analisis Artefak Pembelajaran</h2>
        </div>

        <div className="grid gap-8">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-8">Refleksi Produk Pembelajaran</h3>
            
            {/* BAGIAN EMBED GOOGLE DRIVE & YOUTUBE - 3 SIKLUS */}
            
            {/* SIKLUS 1 */}
            <div className="mb-10">
              <h4 className="font-extrabold text-[#1A1A1A] dark:text-white mb-4 text-xl">Siklus 1</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Embed Modul Ajar Siklus 1 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/file/d/1drJl5T77EEd3mLUVYKJ41mwDCYTT5DDs/preview" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/file/d/1drJl5T77EEd3mLUVYKJ41mwDCYTT5DDs/view?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Modul Ajar Siklus 1 →</a>
                </div>
                
                {/* Embed Media Pembelajaran Siklus 1 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/embeddedfolderview?id=1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV#grid" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/drive/folders/1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Media Pembelajaran Siklus 1 →</a>
                </div>

                {/* Embed Dokumentasi Video Siklus 1 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800">
                    <iframe src="https://www.youtube.com/embed/lX9cO0kNx4I" title="Dokumentasi Praktik Mengajar Siklus 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://youtube.com/watch?v=lX9cO0kNx4I" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Dokumentasi Praktik Siklus 1 →</a>
                </div>
              </div>
            </div>

            {/* SIKLUS 2 */}
            <div className="mb-10">
              <h4 className="font-extrabold text-[#1A1A1A] dark:text-white mb-4 text-xl">Siklus 2</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Embed Modul Ajar Siklus 2 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/embeddedfolderview?id=1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV#grid" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/drive/folders/1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Modul Ajar Siklus 2 →</a>
                </div>
                
                {/* Embed Media Pembelajaran Siklus 2 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/embeddedfolderview?id=1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV#grid" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/drive/folders/1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Media Pembelajaran Siklus 2 →</a>
                </div>

                {/* Embed Dokumentasi Video Siklus 2 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800">
                    <iframe src="https://www.youtube.com/embed/3YsifFDiFaI" title="Dokumentasi Praktik Mengajar Siklus 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://youtube.com/watch?v=3YsifFDiFaI" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Dokumentasi Praktik Siklus 2 →</a>
                </div>
              </div>
            </div>

            {/* SIKLUS 3 */}
            <div className="mb-12">
              <h4 className="font-extrabold text-[#1A1A1A] dark:text-white mb-4 text-xl">Siklus 3</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Embed Modul Ajar Siklus 3 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/embeddedfolderview?id=1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV#grid" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/drive/folders/1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Modul Ajar Siklus 3 →</a>
                </div>
                
                {/* Embed Media Pembelajaran Siklus 3 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/embeddedfolderview?id=1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV#grid" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/drive/folders/1GTaBRwEQg4UfxtuPCFUK2YTIHJIigGAV?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Media Pembelajaran Siklus 3 →</a>
                </div>

                {/* Embed Dokumentasi Video Siklus 3 */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800">
                    <iframe src="https://www.youtube.com/embed/YxzmKY4VigU" title="Dokumentasi Praktik Mengajar Siklus 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://youtube.com/watch?v=YxzmKY4VigU" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Dokumentasi Praktik Siklus 3 →</a>
                </div>
              </div>
            </div>
            {/* AKHIR BAGIAN EMBED */}
            
            <div className="mb-12">
              <h4 className="font-extrabold text-[#1A1A1A] dark:text-white mb-4 text-xl">Konteks & Teori Pedagogi</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg">
                Produk dan artifak pembelajaran ini disusun dengan mengadopsi model <strong>Project Based Learning (PjBL)</strong>. Pendekatan ini dianalisis melalui kajian teori pada mata kuliah integrasi <strong>Pemahaman Peserta Didik dan Pembelajarannya</strong> serta <strong>Prinsip Pengajaran dan Asesmen</strong>. PjBL dipilih karena sangat relevan dengan upaya peningkatan literasi digital dan keterampilan <em>problem-solving</em> peserta didik melalui proyek berbasis teknologi nyata.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 text-lg flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#8234E6]"></div>
                  Faktor Keberhasilan
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Keberhasilan penerapan produk ini didukung oleh kesiapan guru untuk terus belajar yang berjalan beriringan dengan fasilitas fisik seperti proyektor yang memadai. Selain itu, infrastruktur teknologi seperti kapasitas server dan jaringan internet yang stabil di sekolah juga menjadi faktor pendukung utama dalam pembelajaran Informatika.
                </p>
              </div>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 text-lg flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#E1FA43]"></div>
                  Kendala Selama Proses
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Kendala utama yang terjadi selama penyusunan produk berkaitan dengan kompleksitas mengintegrasikan asesmen autentik yang tepat untuk mengukur kompetensi teknis dan <em>soft skills</em> siswa secara bersamaan, serta penyesuaian alokasi waktu.
                </p>
              </div>
            </div>

            <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 mb-12">
              <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 text-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                Perubahan untuk Situasi Berbeda
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                Untuk situasi kelas yang mungkin memiliki literasi teknologi lebih rendah atau fasilitas terbatas, perubahan difokuskan pada penyederhanaan sintaks PjBL. Alternatifnya adalah dengan pendekatan kelompok tutor sebaya dan menggunakan media pembelajaran <em>unplugged</em> (tanpa komputer) untuk konsep-konsep dasar komputasional *thinking*.
              </p>
            </div>

            {/* Penilaian GP dan DPL */}
            <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6 pt-8 border-t border-slate-100 dark:border-slate-800">Penilaian Guru Pamong & DPL (L7 & L8)</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-10 text-lg">
              Rekapitulasi penilaian rancangan pembelajaran dan praktik mengajar selama 3 siklus.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { s: "Siklus 1", n: "77", text: <><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Perlu penyesuaian pada alokasi waktu PjBL agar lebih realistis.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Penguasaan kelas sudah baik, namun perlu lebih interaktif saat membimbing kelompok.</>},
                { s: "Siklus 2", n: "85", text: <><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Sintaks PjBL sudah tergambar dengan sangat jelas pada modul ajar.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Bimbingan teknis ke siswa lebih terarah, penggunaan media sangat memfasilitasi pemahaman.</>},
                { s: "Siklus 3", n: "90", text: <><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Asesmen formatif terintegrasi dengan sangat baik dan komprehensif.<br/><br/><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Manajemen kelas sangat efektif, siswa mampu menghasilkan produk digital sesuai target.</>}
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
            
            <div className="flex flex-wrap gap-4 mt-8">
                <a href="#" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Lampiran Penilaian Siklus 1 →</a>
                <a href="#" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Lampiran Penilaian Siklus 2 →</a>
                <a href="#" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Lampiran Penilaian Siklus 3 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* MODEL GURU YANG DITUJU */}
      <section id="model-guru" className="scroll-mt-32">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] dark:text-white mb-8 tracking-tight">Model Guru yang Dituju</h2>
            
            <div className="mb-12">
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-justify mb-6">
                Model guru yang saya tuju adalah <strong>pendidik yang transformatif dan adaptif</strong> terhadap perkembangan teknologi, serta mampu memfasilitasi pembelajaran bermakna secara inovatif. Berdasarkan observasi di lapangan dan refleksi diri, kompetensi dan karakter yang ingin saya bangun untuk menuju guru profesional meliputi:
              </p>
              
              <ul className="list-disc list-inside space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg ml-4">
                <li><strong>Kompetensi Pedagogik Digital:</strong> Mampu merancang, melaksanakan, dan mengevaluasi pembelajaran Informatika yang interaktif dengan memanfaatkan berbagai *platform* digital secara efektif.</li>
                <li><strong>Karakter Pembelajar Sepanjang Hayat:</strong> Memiliki kemauan keras untuk terus memperbarui ilmu (*up-skilling*) seiring dengan cepatnya perubahan tren teknologi.</li>
                <li><strong>Empati dan Keterampilan Sosio-Emosional:</strong> Mampu memahami beragam latar belakang peserta didik, memberikan dukungan psikologis saat siswa menghadapi kendala teknis, dan menciptakan lingkungan belajar yang inklusif.</li>
                <li><strong>Integritas Profesional:</strong> Menjunjung tinggi kode etik keguruan, konsisten dalam memberikan teladan literasi digital yang positif, dan bertanggung jawab penuh terhadap perkembangan siswa.</li>
              </ul>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Uts;