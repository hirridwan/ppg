import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('beranda');

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil Calon Guru' },
    { id: 'artifak', label: 'Artifak & Analisis' },
    { id: 'refleksi', label: 'Refleksi Akhir' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header & Navigation */}
      <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">E-Portfolio PPL | Ridwan Maulana</h1>
          <nav className="flex gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded transition-colors ${
                  activeTab === item.id ? 'bg-blue-900 font-semibold' : 'hover:bg-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        
        {/* BERANDA */}
        {activeTab === 'beranda' && (
          <section className="animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center text-center">
              <img 
                src="https://dummyimage.com/200x200/2563eb/ffffff&text=Foto+Diri" 
                alt="Foto Profil Ridwan Maulana" 
                className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-blue-200"
              />
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Ridwan Maulana, S.Kom.</h2>
              <p className="text-lg text-slate-600 mb-6">Mahasiswa Program Studi Informatika</p>
              <div className="bg-blue-50 p-6 rounded-md text-left w-full max-w-2xl">
                <h3 className="font-semibold text-blue-800 mb-2">Informasi PPL Terbimbing:</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li><strong>Lokasi:</strong> SMAN 1 Bandung</li>
                  <li><strong>Guru Pamong:</strong> Irman Margino, S.T.</li>
                  <li><strong>Kontak:</strong> ridwanguru@student.upi.edu | 085860565852</li>
                </ul>
              </div>
              <p className="mt-8 text-slate-600 max-w-3xl leading-relaxed">
                Selamat datang di E-Portfolio PPL Terbimbing. Website ini merupakan wadah refleksi dan dokumentasi 
                proses pembelajaran saya selama mengajar di SMAN 1 Bandung. Silakan gunakan navigasi di atas untuk 
                melihat profil, artifak pembelajaran, serta refleksi akhir saya.
              </p>
            </div>
          </section>
        )}

        {/* PROFIL */}
        {activeTab === 'profil' && (
          <section className="animate-fade-in space-y-6">
            <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">Profil Mahasiswa</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Latar Belakang</h3>
              <p className="text-slate-700 mb-4 text-justify">
                Saya berasal dari Tasikmalaya, sebuah kota yang dikenal dengan julukan "Kota Santri" serta pusat kerajinan kreatif dan UMKM yang tangguh. Keunikan daerah asal inilah yang menanamkan nilai-nilai religius, ketekunan, dan semangat inovasi dalam diri saya sebagai fondasi karakter pendidik.
              </p>
              <h3 className="text-xl font-semibold text-blue-800 mb-3 mt-6">Inspirasi & Tujuan</h3>
              <p className="text-slate-700 mb-4 text-justify">
                Melihat perkembangan teknologi yang sangat masif, saya terinspirasi untuk menjadi guru Informatika yang mampu menjembatani kesenjangan literasi digital pada peserta didik. Tujuan utama saya adalah membentuk generasi yang tidak hanya mahir secara teknis dalam menggunakan teknologi, tetapi juga bijak, kritis, dan beretika di era digital.
              </p>
              <blockquote className="mt-8 p-4 italic border-l-4 border-blue-500 bg-blue-50 text-blue-900">
                "Teknologi hanyalah sebuah alat. Dalam hal membuat anak-anak bekerja sama dan memotivasi mereka, guru adalah yang paling penting." - Bill Gates
              </blockquote>
            </div>
          </section>
        )}

        {/* ARTIFAK & ANALISIS */}
        {activeTab === 'artifak' && (
          <section className="animate-fade-in space-y-8">
            <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">Analisis Artifak Pembelajaran</h2>
            
            {/* Card Artifak 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-2">1. Modul Ajar & Rencana Pembelajaran</h3>
              <p className="text-sm text-slate-500 mb-4">Tautan Dokumen: <a href="https://drive.google.com/drive/folders/dummy-link-rpp" target="_blank" rel="noreferrer" className="text-blue-600 underline">Lihat RPP & Media Pembelajaran (Google Drive)</a></p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800">Konteks & Teori Pedagogi</h4>
                  <p className="text-slate-700 text-sm mt-1 text-justify">
                    Produk pembelajaran ini disusun dengan mengadopsi model <strong>Project Based Learning (PjBL)</strong>. Pendekatan ini selaras dengan upaya peningkatan literasi digital dan keterampilan problem-solving peserta didik melalui proyek berbasis teknologi nyata.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Faktor Keberhasilan</h4>
                  <p className="text-slate-700 text-sm mt-1 text-justify">
                    Keberhasilan penerapan produk ini didukung oleh kesiapan guru untuk terus belajar yang berjalan beriringan dengan fasilitas fisik seperti proyektor yang memadai[cite: 50]. Selain itu, infrastruktur teknologi seperti kapasitas server dan jaringan internet yang stabil di sekolah juga menjadi faktor pendukung utama[cite: 142].
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-50 rounded border border-red-100">
                <h4 className="font-semibold text-red-800 text-sm">Kendala & Perubahan untuk Situasi Kelas Berbeda</h4>
                <p className="text-red-700 text-sm mt-1 text-justify">
                  Kendala utama yang terjadi selama proses pembelajaran berkaitan dengan kecepatan literasi informasi dan kendala teknis digital [cite: 51], serta keterbatasan teknologi saat mengakomodasi fitur yang kompleks[cite: 147]. Untuk situasi kelas yang mungkin memiliki literasi teknologi lebih rendah, perubahan difokuskan pada penambahan waktu bimbingan teknis (Bimtek) operasional [cite: 51] atau modifikasi sintaks PjBL menjadi lebih sederhana dengan pendekatan kelompok tutor sebaya.
                </p>
              </div>
            </div>

            {/* Card Lampiran Penilaian GP */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-2">2. Hasil Penilaian Guru Pamong (Lampiran 7 & 8)</h3>
              <p className="text-slate-700 mb-4 text-justify">
                Berikut adalah rekapitulasi penilaian penyusunan perangkat pembelajaran dan praktik mengajar selama 3 siklus oleh Bapak Irman Margino, S.T.
              </p>
              <div className="flex gap-4">
                <a href="https://drive.google.com/file/d/dummy-link-siklus1" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition text-sm font-semibold text-center">Unduh Penilaian Siklus 1</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus2" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition text-sm font-semibold text-center">Unduh Penilaian Siklus 2</a>
                <a href="https://drive.google.com/file/d/dummy-link-siklus3" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition text-sm font-semibold text-center">Unduh Penilaian Siklus 3</a>
              </div>
            </div>
          </section>
        )}

        {/* REFLEKSI */}
        {activeTab === 'refleksi' && (
          <section className="animate-fade-in space-y-6">
            <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">Refleksi Akhir & Model Guru</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Model Guru yang Dituju</h3>
              <p className="text-slate-700 mb-4 text-justify">
                Model guru yang saya tuju adalah pendidik yang adaptif terhadap perkembangan teknologi dan mampu memfasilitasi pembelajaran bermakna secara inovatif. Berdasarkan observasi di lapangan, kompetensi dan karakter yang ingin saya bangun adalah integrasi antara pemahaman pedagogi yang mendalam dan penguasaan literasi digital yang tinggi, sehingga siap membimbing siswa generasi abad 21 secara profesional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-emerald-50 p-4 rounded border border-emerald-100">
                  <h4 className="font-bold text-emerald-800 mb-2">Kekuatan Diri</h4>
                  <ul className="list-disc list-inside text-sm text-emerald-900 space-y-1">
                    <li>Penguasaan yang baik dalam merancang media berbasis teknologi.</li>
                    <li>Mampu mengadopsi model pembelajaran Project Based Learning (PjBL) secara relevan.</li>
                    <li>Mudah beradaptasi dengan sistem digital sekolah (LMS).</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2">Kelemahan & Area Pengembangan</h4>
                  <ul className="list-disc list-inside text-sm text-orange-900 space-y-1">
                    <li>Manajemen alokasi waktu ketika siswa mengalami kendala teknis saat mengerjakan proyek.</li>
                    <li>Asesmen formatif terkadang belum mencakup evaluasi proses kognitif secara menyeluruh.</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-blue-800 mb-3 mt-8">Rencana Tindak Lanjut (Eksplisit)</h3>
              <p className="text-slate-700 mb-4 text-justify">
                Sebagai upaya pengembangan diri, saya akan menyusun Rencana Pelaksanaan Pembelajaran (RPP) yang lebih rinci dengan mempersiapkan Rencana B (Plan B) untuk memitigasi jika terjadi kendala teknis jaringan atau perangkat di kelas. Selain itu, saya berencana untuk mendalami instrumen evaluasi formatif berbasis game atau kuiz interaktif yang dapat mengukur pemahaman siswa di tengah berjalannya proyek (PjBL) tanpa mengurangi alokasi waktu yang signifikan.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;