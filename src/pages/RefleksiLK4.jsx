import React from 'react';
import ArtifactCTA from '../components/ArtifactCTA';

const supportingArtifacts = [
  ['lk4-asesmen-awal-x8','Asesmen awal kebutuhan belajar X-8','Gambaran awal tentang pemahaman, dukungan belajar, pilihan media, dan kondisi belajar murid.'],
  ['lk4-modul-siklus-1','Modul Ajar Siklus 1','Rancangan pembelajaran berbasis kartu misi dan LKPD cetak di ruang kelas.'],
  ['lk4-presentasi-siklus-1','Presentasi Siklus 1','Materi mini lesson, aturan permainan, dan instruksi misi.'],
  ['lk4-lkpd-siklus-1','LKPD dan kartu misi Siklus 1','Bukti aktivitas Sort the Data, Trace the Data, dan Boss Mission.'],
  ['lk4-pretest-posttest-siklus-1','Instrumen/hasil pretest–posttest Siklus 1','Asesmen individual untuk memeriksa pemahaman sebelum dan sesudah pembelajaran.'],
  ['lk4-rekap-siklus-1','Rekap hasil Siklus 1','Ringkasan skor individual berpasangan dan nilai LKPD kelompok.'],
  ['lk4-modul-siklus-2','Modul Ajar Siklus 2','Pengembangan pembelajaran dengan misi digital dan Quizizz di laboratorium komputer.'],
  ['lk4-presentasi-siklus-2','Presentasi Siklus 2','Media pendukung Computer Mission 2.0.'],
  ['lk4-lkpd-siklus-2','LKPD dan rancangan misi digital Siklus 2','Misi RAM or Storage, ALU or CU, Trace the Data, dan Boss Mission.'],
  ['lk4-pretest-posttest-siklus-2','Instrumen/hasil pretest–posttest Siklus 2','Hasil asesmen individual; perbandingan utama menggunakan 10 soal pilihan ganda.'],
  ['lk4-ekspor-quizizz-siklus-2','Ekspor Quizizz misi kelompok Siklus 2','Ekspor hasil misi yang dikerjakan dalam kelompok.'],
  ['lk4-rekap-siklus-2','Rekap analisis hasil Siklus 2','Pemisahan antara hasil asesmen individual, hasil misi kelompok, dan catatan keterbatasan data.'],
  ['lk4-umpan-balik-guru-pamong','Umpan balik guru pamong','Catatan untuk pengembangan pengelolaan waktu dan kesempatan memahami konsep.'],
];

const cycleOneMissions = [
  { title: 'Mission 1 — Sort the Data', text: 'Murid mengelompokkan kartu perangkat komputer ke kategori input, process, output, storage, atau software dan mencatat alasan pada LKPD.' },
  { title: 'Mission 2 — Trace the Data', text: 'Kelompok menelusuri alur data pada kartu kasus dan mengidentifikasi perangkat atau komponen yang terlibat.' },
  { title: 'Boss Mission — Solve the Computer Case', text: 'Kelompok menganalisis kasus video call untuk menghubungkan input, proses, dan output serta menjelaskan alur data.' },
];
const cycleTwoMissions = [
  { title: 'Mission 1 — RAM or Storage', text: 'Kelompok menganalisis situasi penggunaan komputer untuk membedakan fungsi RAM dan storage.' },
  { title: 'Mission 2 — ALU or CU', text: 'Kelompok menganalisis fungsi ALU dan Control Unit serta memberikan alasan atas pemilihan komponen.' },
  { title: 'Mission 3 — Trace the Data', text: 'Kelompok menghubungkan alur IPO dengan CPU, memori, dan komponen yang terlibat pada kasus.' },
  { title: 'Boss Mission — Computer Case', text: 'Kelompok mengintegrasikan konsep dalam kasus video call dan menjelaskan alur suara serta gambar.' },
];

const Stat = ({ value, label, note }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#1a1a1a]">
    <p className="text-2xl font-black tracking-tight text-[#8234E6] dark:text-[#BCA0FF] md:text-3xl">{value}</p>
    <p className="mt-1 font-bold">{label}</p>
    {note && <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{note}</p>}
  </div>
);

export default function RefleksiLK4() {
  return (
    <main className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 pb-24 pt-28 md:px-6 md:pt-32">
      <section className="relative overflow-hidden rounded-[2rem] bg-[#8234E6] p-7 text-white shadow-xl md:rounded-[2.5rem] md:p-12">
        <div className="pointer-events-none absolute -right-14 -top-16 h-72 w-72 rounded-full bg-[#E1FA43]/20 blur-3xl" />
        <p className="relative z-10 text-xs font-extrabold uppercase tracking-[0.2em] text-[#E1FA43]">Seminar PPG · LK 4</p>
        <h1 className="relative z-10 mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">Karya Inovasi Pendidikan</h1>
        <p className="relative z-10 mt-4 max-w-3xl text-lg font-semibold text-white/95">Computer Mission: Where Does My Data Go?</p>
        <p className="relative z-10 mt-3 max-w-3xl leading-7 text-white/85">Desain pembelajaran Sistem Komputer berbasis gamifikasi misi untuk kelas X-8 SMAN 1 Bandung, dikembangkan melalui dua siklus dengan penekanan pada kerja kelompok dan asesmen individual.</p>
        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold">Kelas X-8</span>
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold">44 murid</span>
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold">6 kelompok</span>
          <span className="rounded-full bg-[#E1FA43] px-4 py-2 text-sm font-bold text-[#1A1A1A]">2 siklus · 90 menit/sesi</span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Stat value="56,8%" label="Belum memahami materi" note="25 dari 44 murid pada asesmen awal menyatakan pernah belajar Informatika tetapi belum memahami materi." />
        <Stat value="72,7%" label="Butuh bantuan pada soal sederhana" note="32 dari 44 murid menyatakan dapat mengerjakan soal sederhana dengan bantuan." />
        <Stat value="77,3%" label="Memilih visual" note="34 murid memilih gambar, diagram, atau video untuk membantu memahami materi." />
        <Stat value="88,6%" label="Terbantu suasana tenang" note="39 murid menyebut suasana tenang membantu mereka fokus." />
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Latar belakang masalah</p>
        <h2 className="mt-2 text-2xl font-black md:text-3xl">Tantangan nyata di kelas X-8</h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-700 dark:text-slate-300">Konsep Sistem Komputer, model Input–Process–Output (IPO), dan Arsitektur Von Neumann perlu dipelajari melalui pengalaman yang aktif dan kontekstual. Asesmen awal terhadap 44 murid memberi gambaran umum tentang kebutuhan belajar, tetapi bukan pengukuran langsung penguasaan materi IPO.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-lg dark:bg-violet-900/40">01</span><h3 className="font-black">Laboratorium terbatas</h3></div>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">Sekolah hanya memiliki satu laboratorium komputer. Jadwalnya terkadang berbenturan dengan kelas lain, sehingga pembelajaran tidak selalu bisa berlangsung di laboratorium dan kadang harus dilakukan di ruang kelas.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-lg dark:bg-amber-900/40">02</span><h3 className="font-black">Akses HP perlu izin</h3></div>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">Penggunaan HP perlu memperoleh izin. Proses murid mengambil perangkat dapat mengurangi waktu belajar, sehingga media dan alur kegiatan perlu disesuaikan dengan fasilitas yang tersedia.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-lg dark:bg-cyan-900/40">03</span><h3 className="font-black">Dinamika kelas</h3></div>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">Murid X-8 aktif dan terkadang ramai. Instruksi, pembagian peran, aturan permainan, dan pengelolaan waktu perlu dibuat jelas agar keaktifan tetap mendukung tujuan belajar.</p>
          </article>
        </div>
        <div className="mt-6 rounded-2xl border border-[#8234E6]/20 bg-violet-50 p-5 dark:bg-violet-950/25">
          <h3 className="font-black text-[#5B21B6] dark:text-violet-200">Implikasi terhadap desain inovasi</h3>
          <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">Siklus 1 menggunakan kartu misi dan LKPD cetak di ruang kelas. Pada Siklus 2, pembelajaran dikembangkan dengan komputer laboratorium dan Quizizz. Misi Quizizz/LKPD tetap dikerjakan secara berkelompok dengan meneruskan pembagian peran dari Siklus 1, sedangkan pretest dan posttest dikerjakan secara individual.</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Siklus 1</p>
          <h2 className="mt-2 text-2xl font-black">Kartu misi dan LKPD cetak</h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">Pembelajaran berlangsung di ruang kelas. Murid bekerja dalam enam kelompok menggunakan kartu perangkat, kartu kasus, LKPD cetak, skor misi, dan kartu bantuan. Penggunaan HP mengikuti izin yang diberikan.</p>
          <div className="mt-5 space-y-3">
            {cycleOneMissions.map((mission, i) => <div key={mission.title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900"><h3 className="font-black">{i + 1}. {mission.title}</h3><p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">{mission.text}</p></div>)}
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Siklus 2</p>
          <h2 className="mt-2 text-2xl font-black">Computer Mission 2.0</h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">Pembelajaran dikembangkan di laboratorium komputer dengan Quizizz dan LKPD kelompok. Misi digital dikerjakan melalui kerja sama kelompok, melanjutkan pembagian peran dari Siklus 1. Pretest dan posttest tetap individual untuk melihat pemahaman masing-masing murid.</p>
          <div className="mt-5 space-y-3">
            {cycleTwoMissions.map((mission, i) => <div key={mission.title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900"><h3 className="font-black">{i + 1}. {mission.title}</h3><p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">{mission.text}</p></div>)}
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Evaluasi hasil</p>
        <h2 className="mt-2 text-2xl font-black md:text-3xl">Bukti awal dari dua siklus</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
            <h3 className="text-lg font-black">Siklus 1 · asesmen individual</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Stat value="76,18" label="Pretest berpasangan" note="34 murid dengan data pretest dan posttest yang cocok." />
              <Stat value="95,59" label="Posttest" note="Rata-rata pada 34 murid berpasangan." />
              <Stat value="+19,41" label="Selisih rata-rata" note="Perbandingan rata-rata berpasangan, bukan peningkatan setiap murid." />
              <Stat value="84,17" label="Rata-rata LKPD kelompok" note="Enam skor kelompok: 81, 88, 82, 87, 78, dan 89." />
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
            <h3 className="text-lg font-black">Siklus 2 · Quizizz dan asesmen individual</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Stat value="76%" label="Class Accuracy pretest" note="Angka ringkasan sistem Quizizz; bukan rata-rata individual yang tervalidasi." />
              <Stat value="96%" label="Class Accuracy posttest" note="Perbandingan utama menggunakan 10 soal pilihan ganda." />
              <Stat value="96,1%" label="Akurasi per butir posttest" note="Rata-rata akurasi per butir dari 10 soal pilihan ganda." />
              <Stat value="86,33%" label="Rata-rata misi kelompok" note="Enam kelompok: 94%, 88%, 88%, 88%, 83%, dan 77%." />
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50/70 p-5 dark:border-violet-900 dark:bg-violet-950/20">
          <h3 className="text-lg font-black">Rata-rata gabungan Siklus 1 dan Siklus 2</h3>
          <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">Ringkasan rata-rata antarsiklus untuk melihat gambaran hasil pembelajaran secara keseluruhan.</p>
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <Stat value="76,09" label="Rata-rata pretest" note="Rata-rata 76,18 pada Siklus 1 dan 76% Class Accuracy pada Siklus 2." />
            <Stat value="95,80" label="Rata-rata posttest" note="Rata-rata 95,59 pada Siklus 1 dan 96% Class Accuracy pada Siklus 2." />
            <Stat value="+19,71" label="Selisih rata-rata" note="Selisih antara rata-rata pretest dan posttest gabungan, dalam poin." />
            <Stat value="85,25" label="Rata-rata aktivitas kelompok" note="Rata-rata nilai LKPD Siklus 1 (84,17) dan misi kelompok Siklus 2 (86,33)." />
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-600 dark:text-slate-400">Catatan: angka gabungan dihitung dengan merata-ratakan ringkasan masing-masing siklus, bukan menggabungkan seluruh skor individu. Data Siklus 1 menggunakan rata-rata 34 murid dengan data pretest–posttest berpasangan, sedangkan data asesmen Siklus 2 menggunakan ringkasan Class Accuracy Quizizz. Rata-rata aktivitas kelompok juga bersifat indikatif karena tugas pada kedua siklus tidak sepenuhnya sama.</p>
        </div>
        <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">Batasan data: ekspor pretest Siklus 2 tidak konsisten antara ringkasan Class Accuracy dan rata-rata pada Participant Data. Karena itu, 76% ditampilkan sebagai angka ringkasan sistem. Skor misi kelompok merupakan data proses, bukan pengganti asesmen individual.</p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Landasan pengembangan</p>
        <h2 className="mt-2 text-2xl font-black md:text-3xl">Prinsip Karya Inovasi Pendidikan</h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-700 dark:text-slate-300">Pengembangan Computer Mission mempertimbangkan lima prinsip berikut. Uraiannya dikaitkan dengan rancangan dan pelaksanaan pembelajaran di kelas X-8, sehingga kebaruan dan manfaatnya dijelaskan sesuai konteks, sedangkan hasil evaluasi dibaca dengan memperhatikan keterbatasan data.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              number: '01',
              title: 'Kebaruan (Novelty)',
              text: 'Kebaruan karya ini terletak pada adaptasi dan pengembangan gamifikasi berbasis misi untuk materi Sistem Komputer di kelas X-8. Siklus 1 memanfaatkan kartu perangkat, kartu kasus, LKPD cetak, pembagian peran, skor, dan kartu bantuan; pada Siklus 2, rancangan dikembangkan dengan Quizizz di laboratorium komputer. Kebaruan yang dimaksud bersifat kontekstual, bukan klaim bahwa setiap unsurnya belum pernah digunakan di tempat lain.',
            },
            {
              number: '02',
              title: 'Kreativitas',
              text: 'Desain menggabungkan misi bertahap, kasus kontekstual, kerja kelompok, pembagian peran, skor, dan bantuan belajar. Pengembangan misi dari Sort the Data dan Trace the Data menuju RAM or Storage serta ALU or CU memberi kesempatan murid mengidentifikasi komponen sekaligus menjelaskan alasan dan alur data.',
            },
            {
              number: '03',
              title: 'Kebermanfaatan (Usefulness)',
              text: 'Karya ini dirancang agar konsep IPO dan komponen Sistem Komputer lebih mudah dipelajari melalui aktivitas yang terstruktur dan kolaboratif. Asesmen individual tetap digunakan bersama hasil kerja kelompok, sehingga guru memperoleh dua jenis informasi: pemahaman masing-masing murid dan proses penyelesaian misi oleh kelompok.',
            },
            {
              number: '04',
              title: 'Relevansi dan Kontekstualitas',
              text: 'Rancangan didasarkan pada kebutuhan belajar yang teridentifikasi di kelas X-8 serta kondisi nyata sekolah: laboratorium komputer hanya satu, jadwal dapat berbenturan, penggunaan HP memerlukan izin, dan dinamika kelas membutuhkan instruksi serta pembagian peran yang jelas. Oleh karena itu, Siklus 1 menggunakan kartu misi dan LKPD cetak, sedangkan Siklus 2 memanfaatkan komputer laboratorium dan Quizizz.',
            },
            {
              number: '05',
              title: 'Efektivitas Berbasis Bukti (Evidence-Based)',
              text: 'Karya dicoba dalam dua siklus dan dievaluasi melalui pretest–posttest individual serta hasil misi kelompok. Pada Siklus 1, rata-rata 34 murid yang memiliki data berpasangan berubah dari 76,18 menjadi 95,59. Pada Siklus 2, ringkasan Class Accuracy Quizizz menunjukkan 76% pada pretest dan 96% pada posttest. Angka ini merupakan indikasi awal yang perlu dibaca secara hati-hati, bukan bukti tunggal bahwa inovasi menjadi penyebab peningkatan; ringkasan Siklus 2 memiliki keterbatasan konsistensi data dan metrik kedua siklus tidak sepenuhnya sama.',
            },
          ].map((principle) => (
            <article key={principle.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-black text-violet-900 dark:bg-violet-900/50 dark:text-violet-100">{principle.number}</span>
                <h3 className="pt-1 font-black leading-6">{principle.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Kajian sederhana</p>
        <h2 className="mt-2 text-2xl font-black md:text-3xl">Dasar pengembangan inovasi</h2>
        <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">Kajian yang dirujuk dalam LK4 mengindikasikan bahwa gamifikasi dapat mendukung pengalaman belajar, tetapi pengaruhnya dapat berbeda menurut konteks dan unsur permainan. Karena itu, desain ini menempatkan tujuan pembelajaran, kualitas alasan, umpan balik, kerja kelompok, dan asesmen individual sebagai bagian yang saling terkait.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ['Dehghanzadeh et al. (2024)','Tinjauan sistematis tentang penggunaan gamifikasi untuk mendukung pembelajaran K–12.'],
            ['Zeng et al. (2024)','Meta-analisis dampak gamifikasi terhadap capaian akademik, dengan dampak yang dapat berbeda menurut konteks.'],
            ['Putri, Lutfiana, & Purwasih (2026)','Studi Quizizz pada konteks dan materi yang berbeda; digunakan sebagai pembanding desain, bukan bukti langsung efektivitas di X-8.'],
          ].map(([title, text]) => <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{text}</p></div>)}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/25 md:p-8">
        <h2 className="text-xl font-black text-amber-950 dark:text-amber-100">Catatan refleksi dan tindak lanjut</h2>
        <p className="mt-3 leading-7 text-amber-950 dark:text-amber-100">Refleksi 3-2-1 tercantum pada sebagian rancangan bahan ajar, tetapi tidak terlaksana saat pembelajaran. Pada LKPD Siklus 1 terdapat empat pertanyaan “Refleksi Tim”, yang berbeda dari format 3-2-1. Karena itu, refleksi 3-2-1 tidak diperlakukan sebagai bukti pelaksanaan. Perbaikan berikutnya adalah menyelaraskan rancangan dengan praktik, memperjelas alokasi waktu, memeriksa konsistensi data asesmen, memperkuat kasus analitis, serta menyiapkan alternatif media ketika akses digital terbatas.</p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Artefak pendukung</p>
        <h2 className="mt-2 text-2xl font-black md:text-3xl">Dokumen yang mendukung karya inovasi</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">Dokumen pendukung karya inovasi meliputi asesmen awal, modul ajar, presentasi, LKPD dan kartu misi, hasil pretest–posttest, rekap hasil setiap siklus, serta umpan balik guru pamong. Dokumen tersebut tersedia di folder LK 4 dalam Google Drive Seminar PPG.</p>
        <div className="mt-5"><ArtifactCTA label="Buka folder SEMINAR PPG" /></div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {supportingArtifacts.map(([key,title,description]) => <article key={key} className="flex flex-col rounded-2xl border border-slate-200 p-5 dark:border-slate-800"><h3 className="font-black leading-6">{title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p></article>)}
        </div>
      </section>
    </main>
  );
}
