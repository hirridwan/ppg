import React from 'react';

const RefleksiPPG = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-6 pb-24 pt-32 flex flex-col gap-24">
      {/* HEADER */}
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] dark:text-white mb-4 tracking-tight">Seminar PPG: LK 3</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">Refleksi Pengalaman Belajar Selama Mengikuti Program PPG[cite: 10]</p>
      </section>

      {/* REFLEKSI PENGALAMAN BELAJAR */}
      <section id="refleksi-ppg" className="scroll-mt-32">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] dark:text-white mb-12 tracking-tight">Refleksi Pengalaman Belajar</h2>
          
          <div className="grid gap-12">
            {/* Pertanyaan 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A] dark:text-white flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-[#8EF1F5] flex items-center justify-center text-[#1A1A1A] text-lg font-black flex-shrink-0 mt-1">1</span>
                <span>Setelah mengikuti rangkaian refleksi pengalaman belajar, menurut anda, bagaimana seharusnya pendidikan di Indonesia?[cite: 10]</span>
              </h3>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 ml-0 md:ml-14">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg">
                  Pendidikan di Indonesia seharusnya inklusif, memanusiakan manusia, dan adaptif terhadap perkembangan teknologi tanpa kehilangan akar sosial budayanya. Mengingat latar belakang saya yang kental dengan nilai ketekunan, saya menyadari pendidikan harus menjadi ruang yang aman bagi siswa untuk berani mencoba, melakukan kesalahan (seperti halnya <em>syntax error</em> dalam pemrograman), dan belajar darinya tanpa merasa dihakimi. Sistem pendidikan tidak boleh sekadar mengejar ketuntasan materi secara teknis atau hasil akhir yang sempurna, melainkan harus berpusat pada proses penalaran kritis (<em>problem solving</em>), tumbuhnya <em>growth mindset</em>, dan pengembangan karakter siswa secara holistik agar bijak di era digital.
                </p>
              </div>
            </div>

            {/* Pertanyaan 2 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A] dark:text-white flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-[#E1FA43] flex items-center justify-center text-[#1A1A1A] text-lg font-black flex-shrink-0 mt-1">2</span>
                <span>Apa saja yang dapat anda lakukan untuk menjadi guru profesional?[cite: 10]</span>
              </h3>
              <div className="bg-[#fafafa] dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 ml-0 md:ml-14">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg mb-4">
                  Untuk menjadi guru profesional, saya harus meneguhkan komitmen sebagai pembelajar sepanjang hayat (<em>lifelong learner</em>). Ada beberapa langkah nyata yang akan saya lakukan:
                </p>
                <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  <li>Terus memperbarui wawasan dan keahlian di bidang teknologi masa depan agar mampu menjembatani kesenjangan literasi digital peserta didik.</li>
                  <li>Menjaga kestabilan emosi dan kesabaran (manajemen diri) untuk menghadirkan pendekatan mengajar yang santai namun tetap terarah dan berwibawa.</li>
                  <li>Memastikan proses evaluasi dan penilaian berjalan secara transparan dan sangat objektif, sesuai dengan porsi usaha masing-masing siswa tanpa pilih kasih.</li>
                  <li>Proaktif berkolaborasi dengan rekan sejawat, orang tua, dan komunitas praktisi untuk merancang inovasi media pembelajaran yang berpusat pada peserta didik.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RENCANA TINDAK LANJUT */}
      <section id="rencana-tindak-lanjut" className="scroll-mt-32">
        <div className="bg-gradient-to-br from-[#8234E6] to-[#6c28c4] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-12 tracking-tight relative z-10">Rencana Tindak Lanjut</h2>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-white text-lg font-black flex-shrink-0 mt-1">3</span>
                <span>Apa saja tiga hal penting yang akan anda lakukan ketika memulai karir sebagai guru?[cite: 10]</span>
            </h3>

            <div className="grid gap-6 ml-0 md:ml-14">
                {/* Poin 1 */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#E1FA43] text-[#1A1A1A] font-black text-xl flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                        <h4 className="font-bold text-xl mb-3 text-[#E1FA43]">Menerapkan Asesmen Diagnostik & Pembelajaran Berdiferensiasi</h4>
                        <p className="text-purple-50 leading-relaxed text-justify text-lg">
                            Saya akan memetakan gaya belajar, minat, dan tingkat kesiapan literasi digital siswa di setiap awal semester. Data ini akan menjadi landasan mutlak bagi saya untuk merancang skenario pembelajaran yang berkeadilan, di mana anak yang sudah mahir dan yang tertinggal sama-sama mendapatkan <em>scaffolding</em> yang tepat sasaran.
                        </p>
                    </div>
                </div>

                {/* Poin 2 */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#8EF1F5] text-[#1A1A1A] font-black text-xl flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                        <h4 className="font-bold text-xl mb-3 text-[#8EF1F5]">Membangun Budaya Kelas yang Aman dan Inklusif (<em>Growth Mindset</em>)</h4>
                        <p className="text-purple-50 leading-relaxed text-justify text-lg">
                            Saya akan konsisten menanamkan paradigma bahwa kegagalan teknis saat belajar adalah wajar. Saya akan membiasakan siswa untuk saling membantu melalui metode tutor sebaya (<em>peer tutoring</em>), menekan ego kompetisi buta, dan mengedepankan kolaborasi kelas yang tidak membeda-bedakan latar belakang sosial maupun kemampuan kognitif.
                        </p>
                    </div>
                </div>

                {/* Poin 3 */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-pink-400 text-white font-black text-xl flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                        <h4 className="font-bold text-xl mb-3 text-pink-300">Mengembangkan Media Pembelajaran Interaktif & Kontekstual</h4>
                        <p className="text-purple-50 leading-relaxed text-justify text-lg">
                            Melanjutkan praktik baik selama PPL, saya akan terus mengeksplorasi metode <em>Game-Based Learning</em> dan <em>Project Based Learning</em>. Saya akan merancang proyek nyata yang dekat dengan kehidupan siswa—misalnya terkait sistem administrasi digital untuk UMKM—guna mengasah <em>Computational Thinking</em> mereka secara menyenangkan dan bermakna.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RefleksiPPG;