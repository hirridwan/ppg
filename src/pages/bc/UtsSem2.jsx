import React from 'react';

const UtsSem2 = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-24">
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-4 tracking-tight">E-Portfolio PPL Semester 2 (UTS)</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">Refleksi Praktik Pengalaman Lapangan Semester 2</p>
      </section>

      {/* ARTIFAK DAN ANALISISNYA */}
      <section id="artifak-uts" className="scroll-mt-32">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] dark:text-white tracking-tight">Analisis Artefak Pembelajaran</h2>
        </div>

        <div className="grid gap-8">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-8">Refleksi Produk Pembelajaran</h3>
            
            {/* SIKLUS 1 */}
            <div className="mb-10">
              <h4 className="font-extrabold text-[#1A1A1A] dark:text-white mb-4 text-xl">Siklus 1</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/file/d/1e7z-B3H02DuXDNmrdK7aV817pSq2W_Hj/preview" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/file/d/1e7z-B3H02DuXDNmrdK7aV817pSq2W_Hj/view?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Modul Ajar Siklus 1 →</a>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/file/d/1v2BTvHlrMh3KUpysUVP_Nhajm1bQ6SCl/preview" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/file/d/1v2BTvHlrMh3KUpysUVP_Nhajm1bQ6SCl/view?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Media Pembelajaran Siklus 1 →</a>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800">
                    <iframe src="https://www.youtube.com/embed/u7rDt8bTU8Y" title="Dokumentasi Praktik Mengajar Siklus 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://youtube.com/watch?v=u7rDt8bTU8Y" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Dokumentasi Praktik Siklus 1 →</a>
                </div>
              </div>
            </div>
            {/* Penilaian GP dan DPL */}
            <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6 pt-12 border-t border-slate-100 dark:border-slate-800">Penilaian Guru Pamong & DPL (L7 & L8)</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-10 text-lg">
              Rekapitulasi penilaian rancangan pembelajaran dan praktik mengajar.
            </p>

            {/* Siklus 1 Penilaian */}
            <div className="bg-[#fafafa] dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-8 rounded-3xl mb-8">
              <h4 className="font-black text-xl text-[#1A1A1A] dark:text-white mb-4">Siklus 1</h4>
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                <p><strong className="text-slate-900 dark:text-white">Rancangan Pembelajaran:</strong> Penggunaan media sangat efektif dalam meningkatkan partisipasi siswa. Terdapat kombinasi yang berhasil antara gawai pribadi siswa untuk keperluan evaluasi instan (pre-test dan post-test) dengan media fisik berupa LKPD yang dirancang menyerupai arena permainan. Kartu kasus dan misi berpoin (XP) di dalam LKPD menjadi katalis utama yang menuntut semua anggota kelompok untuk berpartisipasi aktif menjalankan perannya masing-masing demi memenangkan tantangan.</p>
                <p className="mt-2"><strong className="text-slate-900 dark:text-white">Praktik Mengajar:</strong> Praktik pembelajaran mandiri sudah berjalan dengan cukup baik. Namun, terdapat catatan penting terkait ritme mengajar. Guru Pamong memberikan masukan agar penyampaian instruksi dan materi tidak dilakukan secara terburu-buru. Pembelajaran sebaiknya dibawakan dengan lebih santai dan tidak terlalu berorientasi pada target mengejar ketuntasan materi, sehingga peserta didik dapat lebih leluasa dan nyaman dalam mencerna konsep yang sedang dipelajari.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#1A1A1A] dark:text-white">A. Penilaian Penyusunan Perangkat</span>
                    <span className="bg-[#8EF1F5] text-[#1A1A1A] font-bold px-3 py-1 rounded-full text-xs">Nilai: 94,74</span>
                  </div>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/file/d/1eSMsLTKI0L01-NMTH5d8KMztZkDMGxjy/preview" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/file/d/1eSMsLTKI0L01-NMTH5d8KMztZkDMGxjy/view?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-white dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Lampiran A Siklus 1 →</a>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#1A1A1A] dark:text-white">B. Penilaian Pelaksanaan Pembelajaran</span>
                    <span className="bg-[#8EF1F5] text-[#1A1A1A] font-bold px-3 py-1 rounded-full text-xs">Nilai: 82,14</span>
                  </div>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-900">
                    <iframe src="https://drive.google.com/file/d/1cvkx1nM0n181liqTIygllalywPGk3q1Y/preview" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
                  </div>
                  <a href="https://drive.google.com/file/d/1cvkx1nM0n181liqTIygllalywPGk3q1Y/view?usp=sharing" target="_blank" rel="noreferrer" className="text-center px-6 py-3 bg-white dark:bg-slate-800 hover:bg-[#E1FA43] hover:text-[#1A1A1A] text-slate-800 dark:text-slate-200 rounded-full font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">Lampiran B Siklus 1 →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UtsSem2;