import React, { useState } from 'react';

const RefleksiSemester1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mataKuliah = [
    {
      nama: "Filosofi Pendidikan Indonesia",
      kaitan: "Filosofi Ki Hajar Dewantara tentang 'menuntun' sangat sejalan dengan prinsip saya sebagai fasilitator yang mengedepankan pendekatan santai namun terarah. Saya menyadari bahwa pendidikan harus mempertimbangkan kodrat alam dan zaman, yang mengingatkan saya pada nilai-nilai ketekunan dari daerah asal saya yang dapat diintegrasikan dalam membangun karakter siswa di era digital[cite: 9].",
      tantangan: "Tantangan utamanya adalah mengubah paradigma dari pembelajaran yang berpusat pada guru (teacher-centered) menjadi benar-benar berpusat pada siswa, terutama dalam menjaga kestabilan emosi dan kesabaran saat kelas menjadi sangat riuh karena antusiasme berlebih[cite: 9].",
      konsep: "Konsep utama yang saya pelajari adalah 'Pendidikan yang Memerdekakan' dan pentingnya mengintegrasikan konteks sosio-kultural ke dalam proses pembelajaran agar materi terasa lebih dekat dengan keseharian siswa[cite: 9].",
      perubahan: "Saya berkomitmen untuk lebih memperbanyak apresiasi terhadap proses (keberanian mencoba) daripada sekadar hasil akhir, serta menciptakan lingkungan belajar di mana siswa merasa aman dari penghakiman ketika melakukan kesalahan teknis[cite: 9].",
      artefak: "Tugas Ruang Kolaborasi & Aksi Nyata Modul 1.",
      alasanArtefak: "Artefak ini berisi esai reflektif tentang bagaimana nilai luhur sosial budaya dapat menebalkan laku peserta didik, yang menjadi titik balik perubahan perspektif saya[cite: 9].",
      bagianArtefak: "Bagian analisis sosiokultural daerah yang saya kaitkan langsung dengan perancangan strategi pendekatan emosional di dalam kelas[cite: 9]."
    },
    {
      nama: "Peserta Didik dan Pemahamannya",
      kaitan: "Mata kuliah ini memberikan landasan teori mengapa saya harus bersikap inklusif dan adil. Memahami profil perkembangan kognitif dan sosio-emosional peserta didik membantu saya merancang pembelajaran yang tidak membeda-bedakan latar belakang mereka[cite: 9].",
      tantangan: "Menghadapi kenyataan bahwa gap atau kesenjangan literasi digital di dalam satu kelas sangat lebar. Ada siswa yang sudah mahir *coding* dasar, namun ada pula yang masih kesulitan memahami logika penalaran komputasional[cite: 9].",
      konsep: "Konsep Teaching at the Right Level (TaRL) dan Zone of Proximal Development (ZPD) dari Vygotsky, yang menekankan pentingnya pemberian *scaffolding* (bantuan bertahap)[cite: 9].",
      perubahan: "Saya akan merutinkan asesmen diagnostik di awal semester dan menerapkan metode tutor sebaya (peer tutoring), agar siswa yang lebih cepat paham dapat membantu temannya, membangun empati, dan mencegah diskriminasi kecerdasan[cite: 9].",
      artefak: "Laporan Profiling Peserta Didik.",
      alasanArtefak: "Dokumen ini merupakan hasil observasi langsung terhadap gaya belajar, motivasi, dan latar belakang siswa yang menjadi dasar perancangan modul ajar[cite: 9].",
      bagianArtefak: "Data hasil asesmen diagnostik gaya belajar (visual, auditori, kinestetik) dan rencana tindak lanjut diferensiasinya[cite: 9]."
    },
    {
      nama: "Praktik Pengalaman Lapangan (PPL) I",
      kaitan: "PPL I adalah laboratorium nyata tempat saya menerapkan seluruh teori pedagogik. Pengalaman mengajar materi algoritma dan pengolahan data menyadarkan saya bahwa teknologi hanyalah alat; peran guru dalam memotivasi jauh lebih krusial[cite: 9].",
      tantangan: "Mengelola dinamika kelas saat menggunakan Game-Based Learning. Tingginya antusiasme memicu kegaduhan yang memengaruhi manajemen waktu. Secara teknis, banyak siswa terjebak pada kendala *syntax error* dan keterbatasan jaringan[cite: 9].",
      konsep: "Manajemen Kelas (Classroom Management), Problem Based Learning (PBL), dan pentingnya mitigasi risiko (rencana B) dalam pembelajaran berbasis digital[cite: 9].",
      perubahan: "Menyiapkan lembar panduan sintaks (*cheat-sheet*) tertulis, merancang aturan rotasi peran kelompok agar partisipasi merata, serta selalu menyiapkan opsi aplikasi *offline* sebagai cadangan[cite: 9].",
      artefak: "Modul Ajar Siklus 1 & Video Praktik Mengajar.",
      alasanArtefak: "Artefak ini merekam secara autentik implementasi kerangka ajar sekaligus memperlihatkan kendala nyata yang terjadi di lapangan[cite: 9].",
      bagianArtefak: "Bagian sintaks Problem Based Learning pada Modul Ajar, dan rekaman menit ke-15 pada video saat saya menenangkan kelas yang sedang berkompetisi[cite: 9]."
    }
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-16">
      {/* HEADER */}
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-4 tracking-tight">Seminar PPG: LK 2</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">Refleksi Pengalaman Belajar Setiap Mata Kuliah (Semester 1)[cite: 9]</p>
      </section>

      {/* PANDUAN 4C */}
      <section className="bg-[#fafafa] dark:bg-[#1a1a1a] rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <h4 className="font-black text-[#8234E6] dark:text-[#E1FA43] text-xl mb-2">Connection</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Kaitan materi dengan peran calon guru[cite: 9].</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700">
            <h4 className="font-black text-[#8234E6] dark:text-[#E1FA43] text-xl mb-2">Challenge</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Tantangan menonjol selama perkuliahan[cite: 9].</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700">
            <h4 className="font-black text-[#8234E6] dark:text-[#E1FA43] text-xl mb-2">Concept</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Konsep utama yang dipelajari[cite: 9].</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700">
            <h4 className="font-black text-[#8234E6] dark:text-[#E1FA43] text-xl mb-2">Change</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Perubahan diri setelah mendapat materi[cite: 9].</p>
          </div>
        </div>
      </section>

      {/* TABBED REFLEKSI */}
      <section className="scroll-mt-32">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {mataKuliah.map((mk, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all border ${
                activeTab === index
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] dark:bg-white dark:text-[#1A1A1A] dark:border-white shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 dark:bg-[#1a1a1a] dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-500'
              }`}
            >
              {mk.nama}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-14 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 transition-all duration-500">
          <h3 className="text-3xl font-black text-[#1A1A1A] dark:text-white mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
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