import React from 'react';
import { GOOGLE_DRIVE_ARTEFAK_FOLDER_URL } from '../data/artefakLinks';

const ExternalArrow = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export default function ArtifactCTA({ label = 'Akses artefak', compact = false }) {
  const url = (GOOGLE_DRIVE_ARTEFAK_FOLDER_URL || '').trim();
  const isReady = /^https?:\/\//i.test(url);
  const common = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors ${compact ? 'px-4 py-2 text-xs' : 'px-5 py-3 text-sm'}`;
  const buttonLabel = 'Buka folder artefak';

  if (isReady) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${common} bg-[#8234E6] text-white hover:bg-[#6c28c4] focus:outline-none focus:ring-2 focus:ring-[#8234E6] focus:ring-offset-2`}
        aria-label={`${label}; membuka folder induk Google Drive di tab baru`}
        title="Semua artefak Seminar PPG disimpan dalam folder Google Drive yang sama"
      >
        {buttonLabel}<ExternalArrow />
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      title="Tautkan folder induk Google Drive satu kali pada src/data/artefakLinks.js."
      className={`${common} cursor-not-allowed border border-dashed border-slate-300 bg-slate-100 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400`}
      aria-label={`${label}; tautan folder induk Google Drive belum tersedia`}
    >
      {buttonLabel}<span className="text-[10px] font-semibold uppercase tracking-wide">Tautan belum diisi</span>
    </button>
  );
}
