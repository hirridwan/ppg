import React from 'react';
import { Link } from 'react-router-dom';
import ArtifactCTA from '../components/ArtifactCTA';

const seminarPages = [
  { path:'/seminar/refleksi', number:'01', title:'Identifikasi Diri', tag:'LK 1', description:'Visi pendidikan Indonesia, visi calon guru Informatika, dan langkah konkret.' },
  { path:'/seminar/refleksi-semester-1', number:'02', title:'Refleksi Semester 1', tag:'LK 2', description:'Refleksi pengalaman belajar dengan kerangka 4C dan bukti artefak.' },
  { path:'/seminar/refleksi-semester-2', number:'03', title:'Refleksi Semester 2', tag:'LK 2', description:'Refleksi mata kuliah lanjutan, PPL Mandiri, dan Projek Kepemimpinan.' },
  { path:'/seminar/refleksi-ppg', number:'04', title:'Refleksi Program PPG', tag:'LK 3', description:'Sintesis pengalaman selama PPG serta rencana tindak lanjut profesional.' },
  { path:'/seminar/karya-inovasi', number:'05', title:'Karya Inovasi Pendidikan', tag:'LK 4', description:'Computer Mission: Where Does My Data Go? untuk pembelajaran Sistem Komputer.' },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1400px] flex-col gap-12 px-4 pb-24 pt-28 md:px-6 md:pt-32">
      <section className="relative grid gap-8 overflow-hidden rounded-[2rem] bg-[#8234E6] p-7 text-white shadow-[0_20px_50px_rgba(130,52,230,0.24)] md:rounded-[2.75rem] md:p-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:p-16">
        <div className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 rounded-full bg-[#E1FA43]/20 blur-3xl" />
        <div className="relative z-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#E1FA43]">E-Portfolio · PPG Prajabatan Informatika</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Dari refleksi menuju inovasi pembelajaran.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">Portofolio ini merangkum identifikasi diri, refleksi pengalaman belajar Semester 1 dan 2, refleksi program PPG secara keseluruhan, serta karya inovasi yang dikembangkan melalui praktik pembelajaran Informatika.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/seminar/karya-inovasi" className="inline-flex items-center gap-2 rounded-full bg-[#E1FA43] px-6 py-3 text-sm font-black text-[#1A1A1A] transition-transform hover:-translate-y-0.5">Lihat Karya Inovasi <span aria-hidden="true">↗</span></Link>
            <Link to="/seminar/refleksi" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">Mulai dari LK 1</Link>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-sm lg:max-w-[350px]">
          <img src="https://i.imgur.com/oYLaroL.jpeg" alt="Ridwan Maulana" loading="lazy" className="aspect-square w-full rounded-[2rem] border-4 border-white/20 object-cover object-top shadow-2xl md:rounded-[2.5rem]" />
          <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <p className="font-black">Ridwan Maulana, S.Kom.</p>
            <p className="mt-1 text-sm text-white/80">PPG Prajabatan · Pendidikan Informatika · UPI</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Berpihak pada murid','Memahami kebutuhan dan memberi ruang belajar yang adil.'],
          ['Reflektif','Menelaah pengalaman, tantangan, dan perubahan praktik.'],
          ['Kontekstual','Menghubungkan konsep dengan kasus dekat kehidupan murid.'],
          ['Bertumbuh berkelanjutan','Memperbaiki pembelajaran berdasarkan asesmen dan umpan balik.'],
        ].map(([title, text], i) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#1a1a1a]"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E1FA43] text-sm font-black text-[#1A1A1A]">0{i+1}</span><h2 className="mt-4 font-black">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></article>)}
      </section>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Seminar PPG</p><h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Jelajahi portofolio</h2></div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">Setiap bagian menampilkan refleksi dan artefak pendukung. Tombol artefak akan terhubung ke Google Drive setelah tautan ditambahkan.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seminarPages.map((page) => <article key={page.path} className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-[#1a1a1a]">
            <div className="flex items-center justify-between gap-3"><span className="text-3xl font-black text-slate-200 dark:text-slate-700">{page.number}</span><span className="rounded-full bg-[#E1FA43] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#1A1A1A]">{page.tag}</span></div>
            <h3 className="mt-5 text-xl font-black">{page.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{page.description}</p>
            <Link to={page.path} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#8234E6] dark:bg-white dark:text-slate-900 dark:hover:bg-[#E1FA43]">Buka halaman <span aria-hidden="true">→</span></Link>
          </article>)}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#1a1a1a] md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Dokumen utama</p><h2 className="mt-2 text-2xl font-black">Portofolio Seminar</h2><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">Dokumen LK1–LK4 ditampilkan sebagai bagian dari alur refleksi, dari visi pribadi menuju desain inovasi yang diimplementasikan.</p>
          <div className="mt-5 flex flex-wrap gap-2"><ArtifactCTA artifactKey="lk1-dokumen" label="Dokumen LK 1" compact /><ArtifactCTA artifactKey="lk2-dokumen" label="Dokumen LK 2" compact /><ArtifactCTA artifactKey="lk3-dokumen" label="Dokumen LK 3" compact /><ArtifactCTA artifactKey="lk4-dokumen" label="Dokumen LK 4" compact /></div>
        </div>
        <div className="rounded-3xl bg-slate-900 p-6 text-white dark:bg-[#242424] md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E1FA43]">Karya inovasi</p><h2 className="mt-2 text-2xl font-black">Computer Mission: Where Does My Data Go?</h2><p className="mt-3 text-sm leading-7 text-white/75">Gamifikasi berbasis misi untuk membantu murid memahami sistem komputer dan alur IPO. Siklus 1 menggunakan kartu dan LKPD cetak; Siklus 2 mengembangkan misi Quizizz dengan pengerjaan kelompok, sementara pretest dan posttest tetap individual.</p><Link to="/seminar/karya-inovasi" className="mt-5 inline-flex rounded-full bg-[#E1FA43] px-5 py-3 text-sm font-black text-[#1A1A1A] hover:bg-white">Jelajahi LK 4 →</Link>
        </div>
      </section>
    </main>
  );
}
