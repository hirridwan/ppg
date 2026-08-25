import React, { useState } from 'react';

const RefleksiSemester1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mataKuliah = [
    {
      nama: "Filosofi Pendidikan Indonesia",
      kaitan: "Filosofi Ki Hajar Dewantara tentang 'menuntun' sangat sejalan dengan prinsip saya sebagai fasilitator yang mengedepankan pendekatan santai namun terarah. Saya menyadari bahwa pendidikan harus mempertimbangkan kodrat alam dan zaman, yang mengingatkan saya pada nilai-nilai ketekunan dari daerah asal saya yang dapat diintegrasikan dalam membangun karakter siswa di era digital.",
      tantangan: "Tantangan utamanya adalah mengubah paradigma dari pembelajaran yang berpusat pada guru (teacher-centered) menjadi benar-benar berpusat pada siswa, terutama dalam menjaga kestabilan emosi dan kesabaran saat kelas menjadi sangat riuh karena antusiasme berlebih.",
      konsep: "Konsep utama yang saya pelajari adalah 'Pendidikan yang Memerdekakan' dan pentingnya mengintegrasikan konteks sosio-kultural ke dalam proses pembelajaran agar materi terasa lebih dekat dengan keseharian siswa.",
      perubahan: "Saya berkomitmen untuk lebih memperbanyak apresiasi terhadap proses (keberanian mencoba) daripada sekadar hasil akhir, serta menciptakan lingkungan belajar di mana siswa merasa aman dari penghakiman ketika melakukan kesalahan teknis.",
      artefak: "Tugas Ruang Kolaborasi & Aksi Nyata Modul 1.",
      alasanArtefak: "Artefak ini berisi esai reflektif tentang bagaimana nilai luhur sosial budaya dapat menebalkan laku peserta didik, yang menjadi titik balik perubahan perspektif saya.",
      bagianArtefak: "Bagian analisis sosiokultural daerah yang saya kaitkan langsung dengan perancangan strategi pendekatan emosional di dalam kelas."
    },
    {
      nama: "Pemahaman Tentang Peserta Didik dan Pembelajarannya",
      kaitan: "Mata kuliah ini memberikan landasan teori mengapa saya harus bersikap inklusif dan adil. Memahami profil perkembangan kognitif dan sosio-emosional peserta didik membantu saya merancang pembelajaran yang tidak membeda-bedakan latar belakang mereka.",
      tantangan: "Menghadapi kenyataan bahwa gap atau kesenjangan literasi digital di dalam satu kelas sangat lebar. Ada siswa yang sudah mahir *coding* dasar, namun ada pula yang masih kesulitan memahami logika penalaran komputasional.",
      konsep: "Konsep Teaching at the Right Level (TaRL) dan Zone of Proximal Development (ZPD) dari Vygotsky, yang menekankan pentingnya pemberian *scaffolding* (bantuan bertahap).",
      perubahan: "Saya akan merutinkan asesmen diagnostik di awal semester dan menerapkan metode tutor sebaya (peer tutoring), agar siswa yang lebih cepat paham dapat membantu temannya, membangun empati, dan mencegah diskriminasi kecerdasan.",
      artefak: "Laporan Profiling Peserta Didik.",
      alasanArtefak: "Dokumen ini merupakan hasil observasi langsung terhadap gaya belajar, motivasi, dan latar belakang siswa yang menjadi dasar perancangan modul ajar.",
      bagianArtefak: "Data hasil asesmen diagnostik gaya belajar (visual, auditori, kinestetik) dan rencana tindak lanjut diferensiasinya."
    },
    {
      nama: "Pembelajaran Mendalam dan Asesmen Dasar",
      kaitan: "Sangat berkaitan dengan prinsip saya dalam memberikan penilaian yang objektif dan adil sesuai kemampuan siswa, tanpa pilih kasih. Mata kuliah ini menyadarkan saya bahwa asesmen bukan sekadar alat menghakimi, melainkan alat untuk memetakan pemahaman.",
      tantangan: "Menyusun instrumen asesmen yang mampu mengukur pemahaman konsep filosofis dan logika tingkat tinggi (HOTS) secara komprehensif, bukan sekadar hafalan teori sintaks pemrograman.",
      konsep: "Konsep Understanding by Design (UbD) dan paradigma Assessment as, for, and of Learning. Penilaian harus direncanakan di awal (backward design) agar selaras dengan tujuan pembelajaran.",
      perubahan: "Saya mengubah cara mengevaluasi siswa dengan tidak hanya melihat hasil akhir program yang berjalan (*no error*), tetapi juga menilai keberanian mencoba, proses perbaikan kesalahan (*debugging*), dan kolaborasi melalui rubrik yang transparan.",
      artefak: "Rancangan Asesmen dan Rubrik Penilaian.",
      alasanArtefak: "Rancangan ini menjadi bukti konkret upaya saya menjaga objektivitas dan keadilan dalam memberikan nilai di kelas.",
      bagianArtefak: "Kriteria penilaian pada rubrik yang mengalokasikan bobot nilai pada aspek 'proses penyelesaian masalah' dan 'kerja sama kelompok'."
    },
    {
      nama: "Praktik Pengalaman Lapangan (PPL) Terbimbing",
      kaitan: "PPL Terbimbing adalah laboratorium nyata tempat saya menerapkan seluruh teori pedagogik. Pengalaman mengajar menyadarkan saya bahwa teknologi hanyalah alat; peran guru yang hadir secara emosional untuk memotivasi jauh lebih krusial.",
      tantangan: "Mengelola dinamika kelas saat menggunakan *Game-Based Learning*. Tingginya antusiasme memicu kegaduhan yang memengaruhi manajemen waktu. Secara teknis, banyak siswa terjebak pada kendala *syntax error* dan keterbatasan jaringan.",
      konsep: "Manajemen Kelas (*Classroom Management*), *Problem Based Learning* (PBL), dan pentingnya mitigasi risiko (rencana B) dalam pembelajaran berbasis digital.",
      perubahan: "Menyiapkan lembar panduan sintaks (*cheat-sheet*) tertulis, merancang aturan rotasi peran kelompok agar partisipasi merata, serta selalu menyiapkan opsi aplikasi *offline* sebagai cadangan saat jaringan lambat.",
      artefak: "Modul Ajar Siklus 1 & Video Praktik Mengajar.",
      alasanArtefak: "Artefak ini merekam secara autentik implementasi kerangka ajar sekaligus memperlihatkan kendala nyata yang terjadi di lapangan.",
      bagianArtefak: "Bagian sintaks *Problem Based Learning* pada Modul Ajar, dan rekaman menit kritis pada video saat saya menenangkan kelas yang sedang berkompetisi."
    },
    {
      nama: "Pola Pikir Bertumbuh (Growth Mindset)",
      kaitan: "Relevan dengan karakter saya yang sabar dan tidak memotong keluhan siswa. Mata kuliah ini membekali saya cara memotivasi peserta didik yang sering merasa 'tidak berbakat' di bidang Informatika.",
      tantangan: "Menghadapi keputusasaan siswa ketika kode program mereka terus-menerus *error*. Tantangannya adalah mengubah keluhan 'Saya tidak bisa' menjadi 'Saya belum bisa'.",
      konsep: "Teori Growth Mindset dari Carol Dweck; pemahaman bahwa kecerdasan dan keahlian teknis dapat dikembangkan melalui dedikasi dan kerja keras, bukan sekadar bakat bawaan.",
      perubahan: "Saya mengubah diksi instruksi dan *feedback* di kelas menjadi lebih memberdayakan. Saya membiasakan siswa untuk melihat *syntax error* sebagai pesan petunjuk dari komputer, bukan sebagai kegagalan pribadi.",
      artefak: "Jurnal Refleksi Mingguan (Aksi Nyata).",
      alasanArtefak: "Jurnal ini berisi catatan perubahan respons psikologis siswa setelah saya menerapkan intervensi *growth mindset* di kelas.",
      bagianArtefak: "Catatan dialog reflektif dengan siswa yang awalnya enggan mencoba *coding* hingga akhirnya berani bereksplorasi tanpa takut salah."
    },
    {
      nama: "Pembelajaran Berdiferensiasi",
      kaitan: "Sangat sejalan dengan visi saya untuk menjadi guru yang terus berinovasi menciptakan pembelajaran yang berpusat pada peserta didik, memastikan anak dengan gaya belajar berbeda tetap mencapai potensi maksimalnya.",
      tantangan: "Manajemen waktu dan sumber daya dalam menyiapkan materi dengan berbagai format (teks, visual, interaktif) untuk satu topik Informatika yang sama dalam satu pertemuan.",
      konsep: "Diferensiasi Konten (materi dasar vs pengayaan), Diferensiasi Proses (bimbingan intensif vs mandiri), dan Diferensiasi Produk (pilihan format pengumpulan tugas akhir).",
      perubahan: "Saya mulai mengelompokkan siswa berdasarkan kesiapan belajar mereka (*readiness*) di awal materi, lalu memberikan *scaffolding* yang berbeda. Saya juga membebaskan siswa merancang antarmuka produk sesuai minat mereka.",
      artefak: "Modul Ajar Berdiferensiasi.",
      alasanArtefak: "Merupakan bukti otentik perancangan skenario pembelajaran yang mengakomodasi keberagaman profil belajar peserta didik.",
      bagianArtefak: "Langkah-langkah pada kegiatan inti yang membagi siswa ke dalam kelompok heterogen untuk memfasilitasi tutor sebaya secara terstruktur."
    }
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-16">
      {/* HEADER */}
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-4 tracking-tight">Seminar PPG: LK 2</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">Refleksi Pengalaman Belajar Setiap Mata Kuliah (Semester 1)</p>
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
        {/* Kontainer Tab Mata Kuliah */}
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

        {/* Konten Refleksi */}
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

export default RefleksiSemester1;