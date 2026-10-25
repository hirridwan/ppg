import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Uts from './pages/UTS';
import Uas from './pages/UAS';
import UtsSem2 from './pages/UtsSem2';
import UasSem2 from './pages/UasSem2';
import RefleksiLK1 from './pages/RefleksiLK1';
import RefleksiSemester1 from './pages/RefleksiSemester1';
import RefleksiSemester2 from './pages/RefleksiSemester2';
import RefleksiPPG from './pages/RefleksiPPG';
import RefleksiLK4 from './pages/RefleksiLK4';
import ComputerMission from './pages/ComputerMission';

const navItems = [
  { path: '/', label: 'Beranda' },
  { label: 'PPL Semester 1', dropdown: [
    { path: '/ppl-semester-1/uts', label: 'UTS' },
    { path: '/ppl-semester-1/uas', label: 'UAS' },
  ]},
  { label: 'PPL Semester 2', dropdown: [
    { path: '/ppl-semester-2/uts', label: 'UTS' },
    { path: '/ppl-semester-2/uas', label: 'UAS' },
  ]},
  { label: 'Seminar PPG', dropdown: [
    { path: '/seminar/refleksi', label: 'LK 1 · Identifikasi Diri' },
    { path: '/seminar/refleksi-semester-1', label: 'LK 2 · Semester 1' },
    { path: '/seminar/refleksi-semester-2', label: 'LK 2 · Semester 2' },
    { path: '/seminar/refleksi-ppg', label: 'LK 3 · Refleksi PPG' },
    { path: '/seminar/karya-inovasi', label: 'LK 4 · Karya Inovasi' },
  ]},
  { path: '/computer-mission', label: 'Computer Mission' },
];

function Chevron({ open = false }) {
  return <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    document.title = 'E-Portfolio PPG | Ridwan Maulana';
    document.documentElement.style.scrollBehavior = 'smooth';
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'E-Portfolio PPG Prajabatan Pendidikan Informatika: refleksi LK1–LK3 dan Karya Inovasi Pendidikan LK4.';
  }, []);

  const toggleDropdown = (label) => setActiveMobileDropdown((active) => active === label ? null : label);
  const isItemActive = (item) => item.path === location.pathname || item.dropdown?.some((child) => child.path === location.pathname);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#fafafa] font-sans text-slate-900 transition-colors duration-300 dark:bg-[#111111] dark:text-slate-100">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-[#1a1a1a]/95">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link to="/" className="shrink-0 leading-tight" aria-label="Kembali ke beranda">
            <span className="block text-lg font-black tracking-tight md:text-xl">Ridwan Maulana<span className="text-[#8234E6]">.</span></span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">E-Portfolio PPG Informatika</span>
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <button type="button" onClick={() => setIsDarkMode((value) => !value)} className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold dark:border-slate-700" aria-label="Ganti tema">{isDarkMode ? 'Terang' : 'Gelap'}</button>
            <button type="button" onClick={() => setIsMobileMenuOpen((value) => !value)} className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}>
              {isMobileMenuOpen ? <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18" /></svg> : <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>}
            </button>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => item.dropdown ? (
              <div key={item.label} className="group relative">
                <button type="button" className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold transition-colors ${isItemActive(item) ? 'bg-slate-100 text-[#8234E6] dark:bg-slate-800 dark:text-[#E1FA43]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}`}>
                  {item.label}<Chevron />
                </button>
                <div className="invisible absolute right-0 top-full mt-2 w-64 translate-y-1 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-800 dark:bg-[#1a1a1a]">
                  {item.dropdown.map((child) => <Link key={child.path} to={child.path} className={`block rounded-xl px-4 py-3 text-sm font-bold transition-colors ${location.pathname === child.path ? 'bg-[#8234E6] text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}`}>{child.label}</Link>)}
                </div>
              </div>
            ) : <Link key={item.path} to={item.path} className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${location.pathname === item.path ? 'bg-slate-100 text-[#8234E6] dark:bg-slate-800 dark:text-[#E1FA43]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}`}>{item.label}</Link>)}
            <button type="button" onClick={() => setIsDarkMode((value) => !value)} className="ml-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-bold hover:border-[#8234E6] dark:border-slate-700" aria-label="Ganti tema">{isDarkMode ? 'Mode Terang' : 'Mode Gelap'}</button>
          </nav>
        </div>

        {isMobileMenuOpen && <nav className="max-h-[80vh] overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-[#1a1a1a] md:hidden">
          {navItems.map((item) => item.dropdown ? <div key={item.label} className="border-b border-slate-100 py-1 dark:border-slate-800">
            <button type="button" onClick={() => toggleDropdown(item.label)} className={`flex w-full items-center justify-between py-3 text-left font-bold ${isItemActive(item) ? 'text-[#8234E6] dark:text-[#E1FA43]' : ''}`}>{item.label}<Chevron open={activeMobileDropdown === item.label} /></button>
            {activeMobileDropdown === item.label && <div className="mb-3 ml-3 border-l-2 border-slate-100 pl-3 dark:border-slate-700">{item.dropdown.map((child) => <Link key={child.path} to={child.path} className={`block rounded-lg px-3 py-3 text-sm font-semibold ${location.pathname === child.path ? 'text-[#8234E6] dark:text-[#E1FA43]' : 'text-slate-600 dark:text-slate-300'}`}>{child.label}</Link>)}</div>}
          </div> : <Link key={item.path} to={item.path} className="block border-b border-slate-100 py-3 font-bold dark:border-slate-800">{item.label}</Link>)}
          <p className="pt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Menu Seminar memuat halaman LK 1, LK 2 Semester 1 dan 2, LK 3, serta LK 4 Karya Inovasi.</p>
        </nav>}
      </header>

      <div className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ppl-semester-1/uts" element={<Uts />} />
          <Route path="/ppl-semester-1/uas" element={<Uas />} />
          <Route path="/ppl-semester-2/uts" element={<UtsSem2 />} />
          <Route path="/ppl-semester-2/uas" element={<UasSem2 />} />
          <Route path="/seminar/refleksi" element={<RefleksiLK1 />} />
          <Route path="/seminar/refleksi-semester-1" element={<RefleksiSemester1 />} />
          <Route path="/seminar/refleksi-semester-2" element={<RefleksiSemester2 />} />
          <Route path="/seminar/refleksi-ppg" element={<RefleksiPPG />} />
          <Route path="/seminar/karya-inovasi" element={<RefleksiLK4 />} />
          <Route path="/computer-mission" element={<ComputerMission />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      <footer className="mt-auto border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#1a1a1a]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6 md:py-10">
          <div><p className="text-lg font-black">Ridwan Maulana, S.Kom.</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">PPG Prajabatan · Pendidikan Informatika · Universitas Pendidikan Indonesia</p></div>
          <a href="mailto:ridwanguru@student.upi.edu" className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold hover:border-[#8234E6] hover:text-[#8234E6] dark:border-slate-700 dark:hover:text-[#E1FA43]">ridwanguru@student.upi.edu ↗</a>
        </div>
        <div className="border-t border-slate-100 px-4 py-4 text-center text-xs font-semibold text-slate-400 dark:border-slate-800">© 2026 · E-Portfolio Seminar PPG</div>
      </footer>
    </div>
  );
}
