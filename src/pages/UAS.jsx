import React from 'react';

const Uas = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-24">
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-4 tracking-tight">E-Portfolio 2 (UAS)</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">Refleksi Akhir & Filosofi Mengajar PPL Terbimbing</p>
      </section>

      {/* REFLEKSI AKHIR */}
      <section id="refleksi-akhir" className="scroll-mt-32">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-12 tracking-tight">Refleksi Akhir Praktik Pengalaman Lapangan</h2>
          
          <div className="grid gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A] dark:text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8EF1F5] flex items-center justify-center text-[#1A1A1A] text-sm font-bold">1</div>
                Pembelajaran yang Diperoleh
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg pl-11">
                Selama tahapan PPL Terbimbing dari awal hingga akhir, saya belajar bahwa menjadi fasilitator berarti mampu menyederhanakan konsep abstrak (seperti algoritma dan pemrograman C++) menjadi hal yang dekat dengan realitas siswa. Saya memahami bahwa memadukan pendekatan Problem Based Learning (PBL) dan Game-Based Learning secara signifikan mampu mendongkrak antusiasme kelas, asalkan diimbangi dengan manajemen kelas yang kuat.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A] dark:text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center text-white text-sm font-bold">2</div>
                Pengalaman Menantang & Solusinya
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg pl-11">
                Pengalaman paling menantang adalah menangani kendala teknis dan dinamika kelas secara bersamaan. Di satu sisi, banyak siswa terjebak pada *syntax error* (seperti koma/titik koma di Excel dan *case-sensitive* di C++), serta kendala jaringan saat mengakses aplikasi *draw.io*. Di sisi lain, antusiasme tinggi saat cerdas cermat memicu suasana gaduh dan dominasi siswa tertentu. <br/><br/>
                <strong>Solusinya:</strong> Saya mulai menyusun panduan sintaks tertulis, menerapkan aturan rotasi peran dalam kelompok, serta menyiapkan opsi aplikasi *offline* sebagai cadangan saat koneksi jaringan melambat.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A] dark:text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E1FA43] flex items-center justify-center text-[#1A1A1A] text-sm font-bold">3</div>
                Umpan Balik & Perbaikan untuk PPL Mandiri
              </h3>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 ml-11 mt-4">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify mb-4">
                  Berdasarkan diskusi refleksi akhir dengan Guru Pamong dan Dosen Pembimbing Lapangan, beberapa saran konstruktif yang saya terima untuk persiapan PPL Mandiri adalah:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <li><strong>Manajemen Kelas:</strong> Peningkatan kesabaran dan *crowd control* saat kelas riuh akibat kompetisi.</li>
                  <li><strong>Pemerataan Partisipasi:</strong> Merancang strategi agar siswa yang lambat tidak hanya mengandalkan temannya yang sudah mahir.</li>
                  <li><strong>Ketelitian Evaluasi:</strong> Perlunya pengecekan detail dengan proaktif memeriksa layar monitor siswa yang diam untuk mencegah kesalahan fundamental.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 pt-8 border-t border-slate-100 dark:border-slate-800">
            <div className="bg-[#fafafa] dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mb-8">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] dark:text-white">Kekuatan Diri</h3>
              <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>Kemampuan memvisualisasikan konsep awal dengan apersepsi yang kontekstual.</li>
                <li>Kreativitas memanfaatkan media interaktif (seperti *Wheel of Names* dan *draw.io*).</li>
                <li>Keterbukaan dan adaptasi yang cepat terhadap kritik maupun masukan.</li>
              </ul>
            </div>

            <div className="bg-[#fafafa] dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
              <div className="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 flex items-center justify-center mb-8">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] dark:text-white">Area Pengembangan</h3>
              <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>Pengendalian kelas (*crowd control*) dan manajemen waktu agar tidak kelebihan durasi (*overrun*).</li>
                <li>Pendalaman strategi diferensiasi instruksional bagi siswa yang tertinggal.</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#8234E6] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-6 relative z-10">Rencana Tindak Lanjut</h3>
            <p className="text-purple-100 text-lg leading-relaxed text-justify relative z-10">
              Sebagai upaya pengembangan diri, saya akan menyusun Rencana Pelaksanaan Pembelajaran (RPP) dengan pendekatan Project-Based Learning yang mengarah pada Higher Order Thinking Skills (HOTS). Saya akan merancang proyek nyata harian, seperti pembuatan sistem catatan keuangan atau pemecahan masalah logika komputer, untuk mengalihkan fokus dari kompetisi kecepatan menjadi kedalaman pemecahan masalah (problem solving).
            </p>
          </div>
        </div>
      </section>

      {/* FILOSOFI MENGAJAR */}
      <section id="filosofi" className="scroll-mt-32">
        <div className="bg-gradient-to-br from-[#8234E6] to-[#6c28c4] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight relative z-10">Filosofi Mengajar</h2>
          
          <div className="space-y-6 relative z-10 text-lg leading-relaxed text-justify text-purple-50">
            <p>
              Prinsip dasar yang menjadi landasan pengajaran saya adalah keyakinan bahwa <strong>pendidikan adalah proses memanusiakan manusia (humanisasi) melalui fasilitasi perkembangan potensi holistik peserta didik</strong>. Dalam konteks pendidikan Informatika, teknologi hanyalah alat (tools), sementara esensi utamanya adalah membentuk pola pikir kritis, analitis, dan kemampuan memecahkan masalah (problem solving). Saya meyakini bahwa setiap peserta didik memiliki kecepatan dan gaya belajar yang unik. Oleh karena itu, tugas saya sebagai guru bukan untuk menyeragamkan, melainkan menyediakan *scaffolding* yang tepat agar setiap siswa dapat mencapai versi terbaik dari diri mereka secara optimal.
            </p>
            <p>
              Filosofi ini sangat dipengaruhi oleh teori Konstruktivisme, khususnya pandangan Lev Vygotsky mengenai <em>Zone of Proximal Development (ZPD)</em>. Saya percaya bahwa pembelajaran bermakna terjadi ketika siswa aktif mengonstruksi pengetahuannya sendiri melalui interaksi sosial dan kolaborasi. Dalam praktik pengajaran terbimbing, saya mengupayakan kelas sebagai komunitas belajar dimana kesalahan dipandang sebagai bagian esensial dari proses eksplorasi, bukan sebagai kegagalan yang harus dihukum. Melalui pendekatan berbasis proyek nyata (Project Based Learning), saya berusaha menciptakan lingkungan dimana siswa merasa aman untuk bertanya, mencoba, dan berinovasi.
            </p>
            <p>
              Sebagai calon pendidik profesional, nilai fundamental yang saya pegang adalah <strong>Integritas, Empati, dan Pembelajar Sepanjang Hayat (Lifelong Learner)</strong>. Saya berkomitmen untuk tidak hanya mentransfer keterampilan teknis digital, tetapi juga menanamkan etika berinternet (digital citizenship) yang kuat. Harapan saya, ideologi mengajar ini akan membimbing saya untuk terus adaptif menghadapi dinamika pendidikan masa depan, serta mampu menginspirasi generasi muda untuk menjadi agen perubahan yang bijak di era society 5.0.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Uas;