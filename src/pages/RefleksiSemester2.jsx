import React, { useState } from 'react';

const RefleksiSemester2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mataKuliah = [
    {
      nama: "Pembelajaran Sosial Emosional",
      kaitan: "Mata kuliah ini sangat resonan dengan kepribadian saya yang selalu berusaha menjaga kestabilan emosi dan tidak menggunakan kata-kata kasar. PSE memberikan landasan teoritis mengapa menjadi pendengar yang saksama dan empatik itu esensial untuk menciptakan ruang aman bagi siswa yang frustrasi menghadapi *error* pada kode mereka.",
      tantangan: "Tantangan utamanya adalah mempraktikkan kesadaran penuh (*mindfulness*) secara konsisten saat situasi kelas sedang sangat *chaos*, terutama ketika antusiasme siswa meledak-ledak saat sesi *Game-Based Learning*.",
      konsep: "Kerangka CASEL (*Collaborative for Academic, Social, and Emotional Learning*), khususnya kompetensi manajemen diri (*self-management*) dan kesadaran sosial (*social awareness*).",
      perubahan: "Saya mulai rutin menerapkan teknik STOP (berhenti sejenak dan ambil napas) di awal pelajaran atau saat transisi kegiatan, guna membantu siswa (dan saya sendiri) memfokuskan kembali pikiran sebelum memecahkan logika algoritma yang rumit.",
      artefak: "Jurnal Refleksi & RPP Terintegrasi PSE.",
      alasanArtefak: "RPP ini menunjukkan aplikasi langsung bagaimana kompetensi sosial emosional disisipkan secara mulus ke dalam sintaks pembelajaran Informatika.",
      bagianArtefak: "Bagian pendahuluan RPP yang memuat aktivitas pengenalan emosi (roda emosi) sebelum siswa mulai menyalakan komputer."
    },
    {
      nama: "Pemb. Mendalam & Asesmen Lanjut",
      kaitan: "Melanjutkan prinsip keadilan dan objektivitas saya, mata kuliah ini memperdalam cara saya memotret kemampuan siswa secara utuh. Saya belajar bahwa pemahaman mendalam dalam Informatika bukan sekadar bisa mengetik kode, tapi mengerti *mengapa* kode itu bekerja.",
      tantangan: "Merancang instrumen penilaian autentik yang mampu mengakomodasi berbagai gaya belajar dan tingkat kesiapan siswa yang berbeda-beda (*gap* literasi digital), tanpa menurunkan standar *Higher Order Thinking Skills* (HOTS).",
      konsep: "Asesmen Autentik, *Backward Design* tingkat lanjut, dan perumusan *Essential Questions* yang memantik rasa ingin tahu dibandingkan sekadar hafalan.",
      perubahan: "Saya beralih dari ujian tulis pilihan ganda menjadi penilaian berbasis portofolio dan proyek mini. Saya menilai alur berpikir logis (*pseudocode*) siswa, bukan hanya hasil akhir program yang terbebas dari *syntax error*.",
      artefak: "Rubrik Penilaian Proyek & Kisi-kisi Asesmen HOTS.",
      alasanArtefak: "Bukti nyata dari pergeseran paradigma evaluasi saya dari berorientasi pada hasil (*product-oriented*) menjadi berorientasi pada proses penalaran (*process-oriented*).",
      bagianArtefak: "Indikator penilaian pada rubrik yang memberi porsi nilai tinggi pada kemampuan *debugging* dan kolaborasi tim."
    },
    {
      nama: "PPL Mandiri",
      kaitan: "PPL Mandiri adalah ujian sesungguhnya dari visi saya sebagai fasilitator. Tanpa intervensi langsung dari Guru Pamong, saya harus membuktikan kemampuan mengelola kelas, menjaga wibawa lewat kedisiplinan, dan mengeksekusi *Project Based Learning* secara utuh.",
      tantangan: "Menjaga ritme dan *crowd control* secara mandiri. Tantangan terbesar adalah ketika terjadi kendala teknis massal (jaringan *down* saat mengakses *draw.io*) dan saya harus segera beralih ke *Plan B* tanpa terlihat panik.",
      konsep: "Pengambilan keputusan pedagogis secara *real-time*, kemandirian profesional, dan siklus utuh PTK (Penelitian Tindakan Kelas).",
      perubahan: "Saya menjadi jauh lebih proaktif dalam manajemen risiko. Saya selalu menyiapkan materi cadangan *offline* dan LKPD cetak berisi panduan sintaks, sehingga pembelajaran tidak pernah terhenti oleh masalah teknis.",
      artefak: "Laporan Pelaksanaan PPL Mandiri & PTK.",
      alasanArtefak: "Laporan ini mendokumentasikan secara komprehensif seluruh siklus perbaikan berkelanjutan yang saya lakukan saat mengelola kelas secara mandiri.",
      bagianArtefak: "Bab refleksi pada laporan PTK yang menyoroti strategi saya dalam meratakan partisipasi siswa melalui rotasi peran wajib."
    },
    {
      nama: "Projek Kepemimpinan",
      kaitan: "Projek ini mewadahi visi saya untuk membangun ekosistem yang melek digital. Nilai-nilai ketekunan, gotong royong, dan semangat inovasi UMKM dari daerah asal saya menjadi inspirasi utama dalam menggerakkan proyek kolaboratif yang berdampak bagi masyarakat.",
      tantangan: "Menyelaraskan visi, mengelola ego lintas divisi, dan menyatukan jadwal rekan-rekan mahasiswa yang padat untuk mengeksekusi proyek sosial tepat waktu.",
      konsep: "*Servant Leadership* (Kepemimpinan yang Melayani), *Design Thinking* untuk pemecahan masalah sosial, dan pemetaan kekuatan (*Asset-Based Community Development*).",
      perubahan: "Saya belajar menekan ego perfeksionis saya dan lebih banyak mendelegasikan tugas berdasarkan kekuatan masing-masing anggota tim. Saya menjadi pendengar yang lebih baik bagi rekan sejawat.",
      artefak: "Proposal dan Laporan Akhir Projek Kepemimpinan.",
      alasanArtefak: "Dokumen ini merekam jejak langkah kolaborasi tim dari fase empati hingga eksekusi proyek nyata di lapangan.",
      bagianArtefak: "Bagian refleksi individu dalam laporan akhir yang menceritakan dinamika resolusi konflik di internal kelompok."
    },
    {
      nama: "Pengembangan Prof. & Berkelanjutan",
      kaitan: "Sangat relevan dengan komitmen saya untuk menjadi *lifelong learner*. Informatika berkembang sangat cepat; jika saya berhenti belajar, saya akan gagal menjembatani kesenjangan digital siswa di masa depan.",
      tantangan: "Membagi waktu antara tugas administratif, persiapan mengajar, dan upaya sadar untuk terus melakukan *up-skilling* teknologi terbaru secara konsisten.",
      konsep: "*Continuous Professional Development* (CPD), pembentukan Komunitas Praktisi, dan wawasan pendidikan berkelanjutan menuju *Society 5.0*.",
      perubahan: "Saya mulai membangun kebiasaan membaca literatur teknologi terbaru setiap minggu dan aktif berdiskusi dalam forum Musyawarah Guru Mata Pelajaran (MGMP) untuk merancang inovasi media ajar bersama.",
      artefak: "Peta Jalan (*Roadmap*) Pengembangan Diri.",
      alasanArtefak: "Merupakan cetak biru (blueprint) komitmen jangka panjang saya untuk terus berinovasi dan tidak cepat berpuas diri.",
      bagianArtefak: "Fase target 1-3 tahun ke depan yang memuat rencana saya untuk menguasai integrasi AI dalam media pembelajaran interaktif."
    }
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-16">
      {/* HEADER */}
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-4 tracking-tight">Seminar PPG: LK 2</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">Refleksi Pengalaman Belajar Setiap Mata Kuliah (Semester 2)</p>
      </section>

      {/* PANDUAN 4C */}
      <section className="bg-[#fafafa] dark:bg-[#1a1a1a] rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <h4 className="font-black text-[#8234E6] dark:text-[#E1FA43] text-xl mb-2">Connection</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Kaitan materi dengan peran calon guru.</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700">
            <h4 className="font-black text-[#8234E6] dark:text-[#E1FA43] text-xl mb-2">Challenge</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Tantangan menonjol selama perkuliahan.</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700">
            <h4 className="font-black text-[#8234E6] dark:text-[#E1FA43] text-xl mb-2">Concept</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Konsep utama yang dipelajari.</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700">
            <h4 className="font-black text-[#8234E6] dark:text-[#E1FA43] text-xl mb-2">Change</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Perubahan diri setelah mendapat materi.</p>
          </div>
        </div>
      </section>

      {/* TABBED REFLEKSI */}
      <section className="scroll-mt-32">
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 justify-center">
          {mataKuliah.map((mk, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all border ${
                activeTab === index
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] dark:bg-white dark:text-[#1A1A1A] dark:border-white shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 dark:bg-[#1a1a1a] dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-500'
              }`}
            >
              {mk.nama}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-8 md:p-14 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] dark:text-white mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
            {mataKuliah[activeTab].nama}
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bagian 4C */}
            <div className="space-y-8">
              <h4 className="text-xl font-bold flex items-center gap-3 text-[#1A1A1A] dark:text-white">
                <span className="w-8 h-8 rounded-lg bg-[#8234E6] flex items-center justify-center text-white text-sm">4C</span>
                Refleksi Pengalaman Belajar
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">1. Connection</h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{mataKuliah[activeTab].kaitan}</p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">2. Challenge</h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{mataKuliah[activeTab].tantangan}</p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">3. Concept</h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{mataKuliah[activeTab].konsep}</p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">4. Change</h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{mataKuliah[activeTab].perubahan}</p>
                </div>
              </div>
            </div>

            {/* Bagian Artefak */}
            <div className="space-y-8">
              <h4 className="text-xl font-bold flex items-center gap-3 text-[#1A1A1A] dark:text-white">
                <span className="w-8 h-8 rounded-lg bg-[#E1FA43] flex items-center justify-center text-[#1A1A1A] text-sm">A</span>
                Analisis Artefak Pembelajaran
              </h4>

              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 space-y-6">
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Artefak Bukti Dukung</h5>
                  <p className="text-[#8234E6] dark:text-[#8EF1F5] font-semibold">{mataKuliah[activeTab].artefak}</p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Mengapa artefak ini dipilih?</h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{mataKuliah[activeTab].alasanArtefak}</p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Bagian yang mendukung refleksi</h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{mataKuliah[activeTab].bagianArtefak}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RefleksiSemester2;