import React from 'react';
import ArtifactCTA from '../components/ArtifactCTA';

const RefleksiLK1 = () => (
  <main className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 pb-24 pt-28 md:px-6 md:pt-32">
    <section className="rounded-[2rem] bg-[#8234E6] p-7 text-white shadow-xl md:rounded-[2.5rem] md:p-12">
      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E1FA43]">Seminar PPG · LK 1</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Identifikasi Diri</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">Visi pendidikan, visi sebagai calon guru Informatika, dan langkah konkret untuk mencapainya.</p>
      <div className="mt-6"><ArtifactCTA artifactKey="lk1-dokumen" label="Buka dokumen LK 1" /></div>
    </section>

    <section className="grid gap-5 lg:grid-cols-2">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 font-black text-cyan-900">01</span><h2 className="text-xl font-black md:text-2xl">Visi pribadi untuk pendidikan di Indonesia</h2></div>
        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">Visi saya untuk pendidikan di Indonesia adalah pendidikan bermutu yang dapat diakses secara adil dan memberi ruang bagi setiap murid untuk berkembang sesuai kemampuan, minat, dan kebutuhannya. Pendidikan seharusnya tidak hanya menekankan penguasaan materi, tetapi juga membentuk karakter, kemandirian, kreativitas, kemampuan berpikir kritis, kolaborasi, dan literasi digital. Saya berharap sekolah menjadi lingkungan yang aman dan menghargai perbedaan, serta membantu murid menggunakan ilmu dan teknologi secara bijak dan bertanggung jawab.</p>
      </article>
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 font-black text-amber-900">02</span><h2 className="text-xl font-black md:text-2xl">Visi pribadi sebagai calon guru</h2></div>
        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">Sebagai calon guru Informatika, saya ingin menjadi pendidik yang mengembangkan empat kompetensi guru secara seimbang. Kompetensi pedagogik saya wujudkan dengan memahami kebutuhan murid dan merancang pembelajaran yang bermakna; kompetensi kepribadian melalui sikap jujur, bertanggung jawab, reflektif, dan menjadi teladan; kompetensi sosial melalui komunikasi yang baik, kolaborasi, dan penghargaan terhadap perbedaan; serta kompetensi profesional dengan menguasai materi Informatika dan mengikuti perkembangan ilmu serta teknologi. Saya ingin menjelaskan konsep melalui contoh yang dekat dengan kehidupan murid, memberi ruang untuk praktik dan pemecahan masalah, serta membangun kelas yang aktif tetapi tetap terarah.</p>
      </article>
    </section>

    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
      <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 font-black text-emerald-900">03</span><h2 className="text-xl font-black md:text-2xl">Langkah konkret untuk mencapai visi</h2></div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          ['Kompetensi pedagogik','Melakukan asesmen awal, memperhatikan kesiapan dan kebutuhan murid, lalu menyesuaikan tujuan, strategi, media, dan asesmen pembelajaran.'],
          ['Kompetensi profesional','Memperdalam materi Informatika, memperbarui pengetahuan teknologi, dan merancang kegiatan kontekstual; menyiapkan media cetak sebagai alternatif saat laboratorium tidak tersedia atau penggunaan HP belum memungkinkan.'],
          ['Kompetensi sosial','Membangun komunikasi yang santun, menghargai perbedaan, menyepakati aturan kelas, dan membagi peran kelompok agar seluruh murid dapat berpartisipasi.'],
          ['Kompetensi kepribadian','Menjaga integritas dan tanggung jawab, menjadi teladan dalam penggunaan teknologi dan AI, serta melakukan refleksi, menerima umpan balik, dan memperbaiki praktik secara berkelanjutan.'],
        ].map(([title, text], idx) => (
          <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#8234E6] dark:text-[#BCA0FF]">Langkah {idx + 1}</p>
            <h3 className="mt-2 font-black">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default RefleksiLK1;
