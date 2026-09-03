import React from 'react';

const RefleksiLK1 = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-24">
      {/* HEADER */}
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-4 tracking-tight">Seminar PPG: LK 1</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">Hasil Identifikasi Diri</p>
      </section>

      {/* HASIL IDENTIFIKASI DIRI */}
      <section id="identifikasi-diri" className="scroll-mt-32">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] dark:text-white mb-12 tracking-tight">Hasil Identifikasi Diri</h2>
          
          {/* A. Saya adalah guru yang... */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold mb-8 text-[#1A1A1A] dark:text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8EF1F5] flex items-center justify-center text-[#1A1A1A] text-lg font-black">A</div>
              Saya adalah guru yang...
            </h3>
            <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-12">
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div> Pedagogik
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Secara pedagogik, saya adalah guru yang mengedepankan pendekatan santai namun terarah—tahu kapan waktunya serius dan kapan harus bercanda agar siswa merasa senang belajar. Saya selalu memotivasi siswa agar tidak takut mencoba, karena bagi saya, salah saat mencoba jauh lebih baik daripada tidak mencoba sama sekali. Saya rutin memberikan umpan balik positif untuk mengapresiasi keberanian mereka, aktif memanfaatkan media pembelajaran yang relevan, serta rajin melakukan refleksi berkala dengan meminta masukan dari siswa mengenai cara mengajar saya.
                </p>
              </div>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div> Kepribadian
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Secara kepribadian, saya adalah guru yang disiplin, tepat waktu, dan selalu berpenampilan rapi agar dapat menjadi teladan yang baik. Saya mampu mengendalikan emosi dan tetap tenang dalam menghadapi keributan di kelas tanpa pernah menggunakan kata-kata kasar. Dalam memberikan penilaian, saya sangat menjunjung tinggi objektivitas sesuai kemampuan siswa, tanpa pilih kasih. Selain itu, saya selalu terbuka terhadap kritik dari orang tua maupun rekan sejawat sebagai panduan untuk terus memperbaiki diri.
                </p>
              </div>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div> Sosial
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Secara sosial, saya adalah guru yang bersikap inklusif dan adil, memperlakukan seluruh siswa tanpa membeda-bedakan latar belakang suku, agama, ras, ekonomi, maupun kondisi fisik. Saya mampu beradaptasi dan bekerja sama dengan baik bersama rekan sesama guru, baik yang lebih muda maupun yang lebih senior. Saya juga memosisikan diri sebagai pendengar yang baik; menghargai dan mendengarkan keluhan atau pendapat siswa secara saksama tanpa memotong pembicaraan mereka.
                </p>
              </div>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div> Profesional
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Secara profesional, saya adalah guru yang selalu berusaha menguasai materi secara mendalam agar mampu menjawab pertanyaan sulit dari siswa dengan penjelasan yang komprehensif, logis, dan berbasis literatur yang valid. Saya tidak hanya mengajarkan hafalan teori, tetapi juga menekankan pemahaman konsep secara filosofis beserta penerapannya di dunia nyata. Saya memanfaatkan teknologi terkini untuk menyederhanakan materi yang rumit menjadi lebih mudah dipahami oleh peserta didik.
                </p>
              </div>
            </div>
          </div>

          {/* B. Saya ingin menjadi guru yang... */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold mb-8 text-[#1A1A1A] dark:text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E1FA43] flex items-center justify-center text-[#1A1A1A] text-lg font-black">B</div>
              Saya ingin menjadi guru yang...
            </h3>
            <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-12">
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div> Profesional
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Secara profesional, saya ingin menjadi pembelajar sepanjang hayat (lifelong learner) yang rutin mengikuti seminar dan pelatihan untuk terus memperbarui ilmu. Terinspirasi oleh perkembangan teknologi yang masif, saya ingin menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis, tetapi juga bijak, kritis, dan beretika di era digital.
                </p>
              </div>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div> Pedagogik
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Secara pedagogik, saya ingin menjadi guru yang terus berinovasi dalam menciptakan metode dan media pembelajaran masa depan yang semakin berpusat pada peserta didik, sehingga setiap anak dengan gaya belajar yang berbeda tetap bisa mencapai potensi maksimalnya tanpa merasa tertinggal.
                </p>
              </div>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div> Kepribadian
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Secara kepribadian, saya ingin menjadi guru yang kematangan emosional dan kebijaksanaannya semakin terasah seiring berjalannya waktu, sehingga aura positif dan ketenangan saya dapat terus menular kepada siswa dan memberikan rasa aman bagi mereka di sekolah.
                </p>
              </div>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-[#1A1A1A] dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div> Sosial
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Secara sosial, saya ingin menjadi guru yang kehadirannya selalu dirindukan oleh siswa dan diandalkan oleh rekan sejawat, serta mampu membangun kolaborasi yang semakin kuat dengan orang tua dan masyarakat demi kemajuan pendidikan anak-anak.
                </p>
              </div>
            </div>
          </div>

          {/* C. Jika menjadi siswa, saya ingin memiliki guru yang... */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#1A1A1A] dark:text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-white text-lg font-black">C</div>
              Jika menjadi siswa, saya ingin memiliki guru yang...
            </h3>
            <div className="bg-[#fafafa] dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 ml-0 md:ml-12">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg">
                Saya ingin memiliki guru yang tidak membeda-bedakan saya dengan teman-teman yang lain. Guru yang asyik, bisa diajak bercanda saat santai, tetapi tetap bisa membimbing saya dengan serius saat sedang belajar. Saya sangat mengharapkan guru yang sabar, tidak mudah marah atau berkata kasar ketika kelas sedang tidak kondusif, dan mau mendengarkan pendapat saya sampai selesai tanpa memotong pembicaraan. Selain itu, saya ingin diajar oleh guru yang selalu menghargai keberanian saya saat mencoba menjawab, serta memberikan nilai yang adil dan benar-benar sesuai dengan usaha serta kemampuan saya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEMBAR KERJA 1 (VISI & LANGKAH KONKRET) */}
      <section id="visi-langkah" className="scroll-mt-32">
        <div className="bg-gradient-to-br from-[#8234E6] to-[#6c28c4] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-12 tracking-tight relative z-10">Visi & Langkah Konkret (LK 1)</h2>
          
          <div className="grid gap-10 relative z-10">
            {/* Visi Pendidikan Indonesia */}
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-[#E1FA43]">A. Visi pribadi untuk pendidikan di Indonesia</h3>
              <p className="text-purple-50 leading-relaxed text-justify text-lg">
                Visi pribadi saya untuk pendidikan di Indonesia adalah mewujudkan ekosistem pendidikan Indonesia yang inklusif, adaptif, dan melek digital. Sebuah sistem di mana setiap peserta didik tanpa memandang latar belakang sosial, ekonomi, maupun kondisi fisik memiliki kesempatan yang sama untuk belajar di lingkungan yang aman dan menyenangkan. Saya memimpikan pendidikan yang tidak sekadar mengejar capaian akademik semata, tetapi memprioritaskan pembentukan karakter, memupuk keberanian siswa untuk mencoba, serta menanamkan kebijaksanaan dan etika dalam menghadapi kemajuan teknologi global.
              </p>
            </div>

            {/* Visi Calon Guru */}
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-[#8EF1F5]">B. Visi pribadi sebagai calon guru</h3>
              <p className="text-purple-50 leading-relaxed text-justify text-lg">
                Menjadi fasilitator pembelajaran yang adil, inspiratif, dan mampu menjembatani kesenjangan literasi digital di sekolah. Sebagai guru Informatika, visi utama saya adalah mencetak generasi yang tidak hanya tangkas dan mahir menggunakan teknologi secara teknis, tetapi juga kritis, bijak, dan beretika di era digital. Saya bertekad menjadi pendidik yang selalu hadir secara emosional, memberikan rasa aman bagi siswa sehingga mereka tidak takut berbuat salah dalam proses belajar, sekaligus menjadi teladan nyata dalam kedisiplinan dan integritas.
              </p>
            </div>

            {/* Langkah Konkret */}
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">C. Langkah-langkah konkret untuk mencapai visi</h3>
              <p className="text-purple-50 mb-6 text-lg">Berikut adalah langkah-langkah konkret yang akan saya lakukan untuk mencapai visi:</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E1FA43] flex items-center justify-center text-[#1A1A1A] font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Menerapkan Pembelajaran Interaktif dan Psikologis (Pedagogik)</h4>
                    <p className="text-purple-50 leading-relaxed text-justify">
                      Mengombinasikan pendekatan mengajar yang santai namun terarah agar siswa merasa nyaman. Saya akan merancang kelas di mana siswa bebas berekspresi tanpa takut salah, rutin memberikan apresiasi serta umpan balik positif, dan memaksimalkan penggunaan media pembelajaran digital terkini untuk mempermudah pemahaman konsep.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8EF1F5] flex items-center justify-center text-[#1A1A1A] font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Memberikan Keteladanan Nyata (Kepribadian)</h4>
                    <p className="text-purple-50 leading-relaxed text-justify">
                      Membangun wibawa melalui tindakan konkret, seperti datang tepat waktu, berpenampilan rapi, dan selalu menjaga kestabilan emosi tanpa menggunakan kata-kata kasar saat menghadapi keributan di kelas. Saya juga memastikan seluruh proses penilaian dilakukan secara objektif dan transparan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Membangun Iklim Kelas Inklusif (Sosial)</h4>
                    <p className="text-purple-50 leading-relaxed text-justify">
                      Memperlakukan semua siswa secara setara. Saya akan memosisikan diri sebagai pendengar yang saksama dan empatik bagi keluhan maupun pendapat siswa, serta aktif membangun kolaborasi yang positif dengan rekan sejawat lintas generasi untuk kemajuan sekolah.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Komitmen Belajar Sepanjang Hayat (Profesional)</h4>
                    <p className="text-purple-50 leading-relaxed text-justify">
                      Rutin mengikuti pelatihan, seminar, dan lokakarya untuk terus memperbarui ilmu pedagogik dan penguasaan teknologi Informatika. Saya juga akan konsisten melakukan refleksi pembelajaran secara berkala dengan meminta masukan langsung dari siswa, guru, dan orang tua guna mengevaluasi kecepatan dan efektivitas penyampaian materi saya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RefleksiLK1;