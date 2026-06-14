import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Uts from './pages/UTS';
import Uas from './pages/UAS';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.title = "E-Portfolio | Ridwan Maulana, S.Kom.";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "E-Portfolio PPG Prajabatan UPI - Refleksi PPL Terbimbing di SMAN 1 Bandung.";
    
    const ogTags = [
      { property: 'og:title', content: 'E-Portfolio | Ridwan Maulana, S.Kom.' },
      { property: 'og:description', content: 'E-Portfolio PPG Prajabatan UPI - Refleksi PPL Terbimbing di SMAN 1 Bandung.' },
      { property: 'og:image', content: 'https://i.imgur.com/gK53z6G.jpeg' },
      { property: 'og:url', content: 'https://ppg.rmfhd.my.id/' },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });

    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/uts', label: 'UTS' },
    { path: '/uas', label: 'UAS' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111111] font-sans text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300 flex flex-col">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-[#1A1A1A] dark:text-white">
              Ridwan Maulana.
            </h1>
          </div>
          
          <nav className="flex flex-wrap justify-center space-x-2 md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-bold transition-all rounded-full ${
                  location.pathname === item.path
                    ? 'text-[#1A1A1A] dark:text-white bg-slate-100 dark:bg-slate-800'
                    : 'text-slate-500 hover:text-[#1A1A1A] dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="border-2 border-[#1A1A1A] dark:border-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#1A1A1A] hover:text-white dark:hover:bg-white dark:hover:text-[#1A1A1A] transition-all flex items-center gap-2"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </header>

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uts" element={<Uts />} />
          <Route path="/uas" element={<Uas />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-[#1a1a1a] border-t border-slate-100 dark:border-slate-800 py-12 md:py-16 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black tracking-tight text-[#1A1A1A] dark:text-white">Ridwan Maulana, S.Kom.</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">Mahasiswa PPG Prajabatan Informatika - Universitas Pendidikan Indonesia</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:ridwanguru@student.upi.edu" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-[#E1FA43] hover:text-[#1A1A1A] transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ridwanguru@student.upi.edu
            </a>
            <a href="tel:085860565852" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-[#E1FA43] hover:text-[#1A1A1A] transition-colors border border-slate-200 dark:border-slate-700 hover:border-[#E1FA43]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              085860565852
            </a>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-400 font-bold text-sm">© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;