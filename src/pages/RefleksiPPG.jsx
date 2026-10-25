import React from 'react';
import ArtifactCTA from '../components/ArtifactCTA';

const followUps = [
  {
    title: 'Merancang pembelajaran berdasarkan kebutuhan murid',
    text: 'Saya akan memeriksa pengetahuan awal, menetapkan tujuan dan asesmen yang selaras, memakai contoh kontekstual, serta menyesuaikan dukungan bagi murid dengan kesiapan berbeda.'
  },
  {
    title: 'Menyiapkan pembelajaran dan pengelolaan kelas dengan matang',
    text: 'Saya akan menyusun modul ajar lebih awal, meminta masukan guru pamong atau rekan sejawat, memperjelas instruksi dan pembagian peran, mengatur waktu, serta menyiapkan alternatif media cetak atau aktivitas tanpa perangkat jika laboratorium atau izin penggunaan HP tidak tersedia.'
  },
  {
    title: 'Membiasakan refleksi dan pengembangan profesional',
    text: 'Setelah mengajar, saya akan menelaah hasil asesmen, mengamati keterlibatan murid, menerima umpan balik, dan menetapkan perbaikan. Saya akan terus belajar melalui komunitas profesional, pelatihan, dan kajian mandiri agar empat kompetensi guru terus berkembang.'
  }
];

export default function RefleksiPPG() {
  return (
    <main className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 pb-24 pt-28 md:px-6 md:pt-32">
      <section className="rounded-[2rem] bg-[#8234E6] p-7 text-white shadow-xl md:rounded-[2.5rem] md:p-12">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E1FA43]">Seminar PPG · LK 3</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Refleksi Pengalaman Belajar Selama PPG</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">Sintesis pengalaman PPL Terbimbing dan PPL Mandiri, pandangan tentang pendidikan, kompetensi guru profesional, dan rencana tindak lanjut.</p>
        <div className="mt-6"><ArtifactCTA artifactKey="lk3-dokumen" label="Buka dokumen LK 3" /></div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 font-black text-cyan-900">01</span><h2 className="text-xl font-black md:text-2xl">Bagaimana seharusnya pendidikan di Indonesia?</h2></div>
        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">Menurut saya, pendidikan di Indonesia seharusnya memberi setiap murid kesempatan belajar yang bermakna, aman, inklusif, dan sesuai kebutuhannya. Pendidikan tidak hanya berorientasi pada penuntasan materi atau nilai, tetapi juga membantu murid memahami konsep, menerapkannya dalam kehidupan, membangun karakter, serta mengembangkan kemampuan berpikir kritis dan bekerja sama. Pengalaman mengajar Informatika selama PPL Terbimbing dan PPL Mandiri menyadarkan saya bahwa kesiapan dan cara belajar murid beragam. Karena itu, guru perlu menetapkan tujuan yang jelas, menggunakan konteks yang dekat dengan kehidupan murid, memanfaatkan asesmen dan umpan balik, serta menyesuaikan strategi dengan kondisi kelas tanpa mengabaikan tujuan belajar.</p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 font-black text-amber-900">02</span><h2 className="text-xl font-black md:text-2xl">Apa yang dapat saya lakukan untuk menjadi guru profesional?</h2></div>
        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">Untuk menjadi guru profesional, saya perlu mengembangkan empat kompetensi secara seimbang. Kompetensi pedagogik saya kembangkan dengan memahami kesiapan murid, merancang pembelajaran dan asesmen yang selaras, serta memberi tindak lanjut sesuai kebutuhan. Kompetensi kepribadian berarti menjaga integritas, disiplin, tanggung jawab, dan terbuka terhadap kritik. Kompetensi sosial saya wujudkan melalui komunikasi dan kolaborasi yang baik serta sikap menghargai perbedaan. Kompetensi profesional saya kembangkan dengan menguasai materi Informatika, mengikuti perkembangan teknologi, dan memilih media sesuai tujuan serta kondisi kelas. Pengalaman PPL juga mengingatkan saya untuk menyiapkan modul lebih awal, mengatur waktu, dan memeriksa pemahaman murid.</p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 font-black text-emerald-900">03</span><h2 className="text-xl font-black md:text-2xl">Rencana tindak lanjut</h2></div>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">Tiga hal penting yang akan saya lakukan ketika memulai karier sebagai guru:</p>
        <div className="mt-5 grid gap-4">
          {followUps.map((item, index) => (
            <article key={item.title} className="flex gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E1FA43] font-black text-[#1A1A1A]">{index + 1}</span>
              <div><h3 className="font-black">{item.title}</h3><p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
