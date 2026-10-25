import React, { useState } from 'react';

// Vite: BASE_URL keeps the game path valid when the portfolio is hosted in a subdirectory.
const GAME_URL = `${import.meta.env.BASE_URL}computer_mission_adventure.html`;

export default function ComputerMission() {
  const [gameFileMissing, setGameFileMissing] = useState(false);

  const verifyLoadedGame = (event) => {
    try {
      const frameDocument = event.currentTarget.contentDocument;
      const pageText = frameDocument?.body?.innerText || '';
      const pageTitle = frameDocument?.title || '';
      const looksLikePortfolioFallback = pageText.includes('Dari refleksi menuju inovasi pembelajaran.') || pageTitle.includes('E-Portfolio PPG');
      setGameFileMissing(looksLikePortfolioFallback);
    } catch {
      // If the host prevents inspection, keep the game frame visible.
      setGameFileMissing(false);
    }
  };

  return (
    <main className="mx-auto flex max-w-[1500px] flex-col gap-6 px-4 pb-16 pt-28 md:px-6 md:pt-32">
      <section className="relative overflow-hidden rounded-3xl bg-[#242B9B] p-6 text-white shadow-xl md:p-9">
        <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full bg-[#FFC343]/20 blur-3xl" />
        <p className="relative z-10 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFC343]">Game edukasi · Pengembangan LK 4</p>
        <h1 className="relative z-10 mt-2 text-3xl font-black md:text-5xl">Computer Mission</h1>
        <p className="relative z-10 mt-3 max-w-3xl text-lg font-semibold text-white/95">Where Does My Data Go?</p>
        <p className="relative z-10 mt-3 max-w-3xl leading-7 text-white/80">Jelajahi dunia digital, selesaikan misi tentang Sistem Komputer, dan temukan alur data. Halaman ini memuat prototipe pengembangan lanjutan; game belum diuji kepada peserta didik.</p>
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-[#0c1328] shadow-lg dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-sm text-white md:px-6">
          <span className="font-bold">Computer Mission 2D · Mode petualangan</span>
          <a href={GAME_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[#FFC343] px-4 py-2 font-extrabold text-[#172554] transition hover:bg-yellow-300">Buka layar penuh ↗</a>
        </div>
        {gameFileMissing ? (
          <div className="m-5 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <h2 className="font-black">File game belum ditemukan di website</h2>
            <p className="mt-2 text-sm leading-6">Website sedang menampilkan halaman utama sebagai pengganti file game. Pastikan <code>computer_mission_adventure.html</code> berada di folder <code>public/</code> proyek, lalu build dan deploy ulang website.</p>
            <a href={GAME_URL} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-amber-900 px-4 py-2 text-sm font-bold text-white">Coba buka file game ↗</a>
          </div>
        ) : (
          <iframe
            src={GAME_URL}
            title="Game Computer Mission 2D"
            onLoad={verifyLoadedGame}
            className="block h-[70vh] min-h-[560px] w-full border-0 md:h-[78vh]"
            allow="fullscreen; autoplay"
            loading="lazy"
          />
        )}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#1a1a1a]">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#8234E6] dark:text-[#BCA0FF]">Misi pembelajaran</p>
          <h2 className="mt-2 font-black">Lima tantangan Sistem Komputer</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Perangkat komputer, alur IPO, RAM dan storage, ALU dan Control Unit, serta kasus terpadu.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#1a1a1a]">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#8234E6] dark:text-[#BCA0FF]">Status</p>
          <h2 className="mt-2 font-black">Prototipe pengembangan</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Ini adalah pengembangan digital baru dari konsep Computer Mission yang sudah diterapkan melalui kartu misi dan Quizizz. Prototipe belum diuji di kelas.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#1a1a1a]">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#8234E6] dark:text-[#BCA0FF]">Catatan teknis</p>
          <h2 className="mt-2 font-black">Kontrol permainan</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Gunakan tombol panah atau A/D untuk bergerak, Space untuk melompat, dan E saat berada di dekat portal. Perangkat sentuh dapat menggunakan kontrol pada layar game.</p>
        </article>
      </section>
    </main>
  );
}
