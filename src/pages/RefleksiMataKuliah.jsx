import React, { useMemo, useState } from 'react';
import ArtifactCTA from '../components/ArtifactCTA';

const labels = [
  { key: 'connection', title: 'Connection', description: 'Kaitan materi dengan peran saya sebagai calon guru.', color: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-100' },
  { key: 'challenge', title: 'Challenge', description: 'Tantangan atau kesulitan yang saya sadari.', color: 'bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100' },
  { key: 'concept', title: 'Concept', description: 'Konsep utama yang saya pelajari.', color: 'bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-100' },
  { key: 'change', title: 'Change', description: 'Perubahan atau perbaikan yang ingin saya lakukan.', color: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100' },
];

export default function RefleksiMataKuliah({ semester, courses }) {
  const [activeId, setActiveId] = useState(courses?.[0]?.id || '');
  const activeCourse = useMemo(() => courses.find((course) => course.id === activeId) || courses[0], [courses, activeId]);
  const semesterLabel = semester === '1' ? 'Semester 1' : 'Semester 2';

  if (!activeCourse) return null;

  return (
    <main className="mx-auto flex max-w-[1400px] flex-col gap-10 px-4 pb-24 pt-28 md:px-6 md:pt-32">
      <section className="relative overflow-hidden rounded-[2rem] bg-[#8234E6] p-7 text-white shadow-xl md:rounded-[2.5rem] md:p-12">
        <div className="pointer-events-none absolute -right-10 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <p className="relative z-10 text-xs font-extrabold uppercase tracking-[0.22em] text-[#E1FA43]">Seminar PPG · LK 2</p>
        <h1 className="relative z-10 mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">Refleksi Pengalaman Belajar</h1>
        <p className="relative z-10 mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">{semesterLabel} · Kerangka refleksi 4C dan analisis artefak pembelajaran</p>
        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold">{courses.length} mata kuliah</span>
          <span className="rounded-full bg-[#E1FA43] px-4 py-2 text-sm font-bold text-[#1A1A1A]">Connection · Challenge · Concept · Change</span>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] lg:sticky lg:top-28">
          <h2 className="px-3 pb-3 pt-2 text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Mata Kuliah</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {courses.map((course, index) => (
              <button
                key={course.id}
                type="button"
                onClick={() => setActiveId(course.id)}
                className={`min-w-[220px] rounded-2xl px-4 py-3 text-left text-sm font-bold transition-colors lg:min-w-0 ${activeCourse.id === course.id ? 'bg-[#8234E6] text-white shadow-md' : 'bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}`}
              >
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 text-xs">{index + 1}</span>
                {course.name}
              </button>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
            <ArtifactCTA artifactKey="lk2-dokumen" label="Buka dokumen LK 2" compact />
          </div>
        </aside>

        <div className="min-w-0 space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Refleksi 4C</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">{activeCourse.name}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {labels.map((item, index) => (
                <article key={item.key} className="rounded-2xl border border-slate-100 p-5 dark:border-slate-800">
                  <div className="flex items-start gap-3">
                    <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black ${item.color}`}>{index + 1}</span>
                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-700 dark:text-slate-300">{activeCourse[item.key]}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a1a1a] md:p-9">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8234E6] dark:text-[#BCA0FF]">Bukti Pendukung</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight">Analisis Artefak Pembelajaran</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{activeCourse.artifacts.length} artefak/kelompok artefak</span>
            </div>
            <div className="mt-6 grid gap-4">
              {activeCourse.artifacts.map((artifact, index) => (
                <article key={artifact.key} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Artefak {index + 1}</p>
                      <h3 className="mt-1 font-bold leading-relaxed">{artifact.title}</h3>
                    </div>
                    <div className="shrink-0"><ArtifactCTA artifactKey={artifact.key} /></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
                <h3 className="font-black">Mengapa artefak ini dipilih?</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-700 dark:text-slate-300">{activeCourse.artifactRationale}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
                <h3 className="font-black">Bagian yang mendukung refleksi</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-700 dark:text-slate-300">{activeCourse.artifactSupport}</p>
              </div>
            </div>
          </section>
          {activeCourse.sourceNote && <p className="px-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Catatan sumber: {activeCourse.sourceNote}</p>}
        </div>
      </section>
    </main>
  );
}
