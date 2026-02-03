"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const CertificateViewer = ({ title, onClose }: { title: string; onClose: () => void }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Disable right click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Try to hide content on PrintScreen key (Not 100% effective due to OS limitations, but a deterrent)
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        alert('Screenshots are not allowed!');
        onClose();
      }
    };
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        className="relative bg-white rounded-lg overflow-hidden glass-panel"
        style={{ width: '90%', maxWidth: '800px', height: '80vh', border: '1px solid rgba(255,255,255,0.2)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Anti-Print CSS */}
        <style jsx global>{`
          @media print {
            body { display: none !important; }
          }
        `}</style>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
          <h3 className="text-white font-bold">{title}</h3>
          <button onClick={onClose} className="text-white bg-red-500/80 px-3 py-1 rounded-full text-sm hover:bg-red-600">
            Close
          </button>
        </div>

        {/* Content Container */}
        <div className="w-full h-full relative bg-gray-900 flex items-center justify-center select-none">
          {/* Watermark Grid Overlay */}
          <div className="absolute inset-0 z-40 pointer-events-none flex flex-wrap content-start overflow-hidden opacity-30">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-48 h-24 flex items-center justify-center transform -rotate-45">
                <span className="text-white text-xs font-bold whitespace-nowrap">
                  DOKUMEN ASLI DILINDUNGI<br />MILIK M. LU'LU KHULALUDDIN<br />DILARANG MENYALIN
                </span>
              </div>
            ))}
          </div>

          {/* Certificate Placeholder Image */}
          <div className="relative z-10 p-8 text-center text-white/50">
            <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>📜</span>
            <p>Preview Ijazah: {title}</p>
            <p className="text-sm mt-4">(Ganti kode ini dengan gambar ijazah asli)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const educationList = [
    { school: "Ma'had Aly Lirboyo", city: "Kota Kediri", tag: "Terbaru" },
    { school: "Madrasah Aliyyah Lirboyo", city: "Kota Kediri" },
    { school: "SMP Busthanul Ulum Jatirokeh", city: "Brebes" },
    { school: "MI NU 01 Kalisalak", city: "Tegal" }
  ];

  return (
    <main>
      {selectedCert && <CertificateViewer title={selectedCert} onClose={() => setSelectedCert(null)} />}

      {/* Navigation */}
      <nav className="nav glass-panel">
        <a href="#profil">Profil</a>
        <a href="#pendidikan">Edu</a>
        <a href="#pengalaman">Kerja</a>
        <a href="#kemampuan">Skill</a>
        <a href="#kontak">Kontak</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="glass-panel" style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            background: 'linear-gradient(135deg, #e0e0e0, #f5f5f7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            border: '4px solid white',
            boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
            position: 'relative'
          }}>
            <Image
              src="/saya.png"
              alt="Mukhammad Lu'lu Khulaluddin"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h1 className="gradient-text">Mukhammad Lu'lu Khulaluddin</h1>
          <p style={{ fontSize: '1.2rem', fontWeight: 500, opacity: 0.7, letterSpacing: '0.1em', marginBottom: '2rem' }}>
            TENAGA PENDIDIK & ADMINISTRATIF
          </p>
          <div>
            <a href="#profil" className="glass-panel" style={{ padding: '0.8rem 2rem', fontWeight: 600, color: 'var(--primary)', borderRadius: '50px' }}>
              Explore Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profil" className="container">
        <div className="glass-panel card">
          <h2>Profil</h2>
          <p>
            Lulusan Madrasah Aliyah dan Ma'had Aly Lirboyo dengan kemampuan di bidang pendidikan, administrasi,
            dan organisasi. Berpengalaman dalam pengelolaan dokumen, penjadwalan, serta operasional kantor,
            didukung penguasaan software perkantoran dan komunikasi yang baik.
          </p>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section id="pendidikan" className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel card">
            <h2>Pendidikan</h2>
            <p className="mb-4 text-sm opacity-60">Klik untuk melihat ijazah (Protected)</p>
            <ul style={{ listStyle: 'none' }}>
              {educationList.map((edu, index) => (
                <li
                  key={index}
                  style={{ marginBottom: '1rem', cursor: 'pointer' }}
                  className="hover:bg-black/5 p-2 rounded-lg transition-colors group"
                  onClick={() => setSelectedCert(edu.school)}
                >
                  {edu.tag && <span className="tag">{edu.tag}</span>}
                  <h3 className="group-hover:text-[var(--primary)] transition-colors">{edu.school}</h3>
                  {edu.city && <p>{edu.city}</p>}
                </li>
              ))}
            </ul>
          </div>

          <div id="kemampuan" className="glass-panel card">
            <h2>Kemampuan</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="tag">Pendidikan Agama Islam</span>
              <span className="tag">Pembinaan Akhlak</span>
              <span className="tag">Komunikasi Kolaboratif</span>
              <span className="tag">Microsoft Office</span>
              <span className="tag">Web Development</span>
              <span className="tag">System Management Sekolah</span>
              <span className="tag">Administrasi & Penjadwalan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="pengalaman" className="container">
        <h2>Pengalaman Kerja</h2>
        <div className="glass-panel card">
          <span className="tag">Non-Aktif • 2026</span>
          <h3>Tenaga Pendidik & Sekretaris Satu</h3>
          <p style={{ color: 'var(--primary)', fontWeight: 600 }}>Pondok Pesantren Lirboyo</p>
          <ul style={{ marginTop: '1rem', marginLeft: '1.2rem', opacity: 0.8 }}>
            <li>Melaksanakan kegiatan pembelajaran sesuai rencana dan tujuan pembelajaran.</li>
            <li>Mengelola arsip dokumen secara rapi dan sistematis.</li>
            <li>Membantu penyusunan laporan harian dan bulanan.</li>
            <li>Mengatur jadwal rapat dan mengirimkan undangan.</li>
          </ul>
        </div>

        <div className="glass-panel card">
          <span className="tag">Non-Aktif • 2025</span>
          <h3>Tenaga Pendidik (Teknologi/Pengembangan Web)</h3>
          <p style={{ color: 'var(--primary)', fontWeight: 600 }}>Pondok Pesantren Lirboyo</p>
          <ul style={{ marginTop: '1rem', marginLeft: '1.2rem', opacity: 0.8 }}>
            <li>Membimbing peserta didik dalam pembelajaran teknologi informasi.</li>
            <li>Mengajarkan konsep dasar web development.</li>
            <li>Mendampingi praktik pembuatan dan pengelolaan website sederhana sebagai media pembelajaran.</li>
          </ul>
        </div>

        <div className="glass-panel card">
          <span className="tag">Non-Aktif • 2020</span>
          <h3>Pendidik Bantu (Keagamaan Islam)</h3>
          <p style={{ color: 'var(--primary)', fontWeight: 600 }}>SMP N 01 Kota Kediri</p>
          <ul style={{ marginTop: '1rem', marginLeft: '1.2rem', opacity: 0.8 }}>
            <li>Membantu pelaksanaan pembelajaran Pendidikan Agama Islam sesuai kurikulum sekolah.</li>
            <li>Membimbing pemahaman materi keislaman serta pembinaan akhlak dan karakter.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="container">
        <div className="glass-panel card" style={{ textAlign: 'center' }}>
          <h2>Hubungi Saya</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="mailto:muhammad.khulal25@gmail.com" className="icon-btn" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

            <a href="https://wa.me/6285171542025" className="icon-btn" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            <a href="https://muhammadkhulal.pages.dev" className="icon-btn" aria-label="Website" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
              </svg>
            </a>
          </div>
          <p style={{ marginTop: '3rem', fontSize: '0.9rem' }}>
            Jl. K. Abdullatif No.023, 003/003, Kalisalak, Margasari, Tegal
          </p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '4rem 0', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 M. Lu'lu Khulaluddin.
      </footer>
    </main>
  );
}
