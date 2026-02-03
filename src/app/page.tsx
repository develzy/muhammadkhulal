"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const CertificateViewer = ({ title, imgPath, onClose }: { title: string; imgPath: string; onClose: () => void }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Disable right click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '92%',
          maxWidth: '900px',
          height: '85vh',
          backgroundColor: '#ffffff',
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Anti-Print CSS */}
        <style jsx global>{`
          @media print {
            body { display: none !important; }
          }
        `}</style>

        {/* Header */}
        <div style={{
          padding: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          backgroundColor: '#ffffff',
          zIndex: 10
        }}>
          <h3 style={{ margin: 0, color: '#1d1d1f', fontSize: '1.2rem', fontWeight: 700 }}>{title}</h3>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none',
              padding: '0.7rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Tutup
          </button>
        </div>

        {/* Content Container */}
        <div style={{
          flex: 1,
          position: 'relative',
          backgroundColor: '#f5f5f7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          overflow: 'hidden',
          userSelect: 'none'
        }}>
          {/* Subtle Watermark Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 5,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.1,
            transform: 'rotate(-30deg)'
          }}>
            <p style={{
              fontSize: '3rem',
              fontWeight: 900,
              color: '#000',
              textAlign: 'center',
              lineHeight: 1.2
            }}>
              DOKUMEN ASLI<br />DILINDUNGI
            </p>
          </div>

          {/* Certificate Image */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%'
          }}>
            <Image
              src={imgPath}
              alt={`Ijazah ${title}`}
              fill
              style={{ objectFit: 'contain' }}
              className="pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<{ title: string, img: string } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const educationList = [
    { school: "Ma'had Aly Lirboyo", city: "Kota Kediri", tag: "Terbaru", img: "" },
    { school: "Madrasah Aliyyah Lirboyo", city: "Kota Kediri", img: "https://res.cloudinary.com/dkwaosfda/image/upload/v1770133307/IJAZAH_ALIYAH_d9qotu.jpg" },
    { school: "SMP Busthanul Ulum Jatirokeh", city: "Brebes", img: "https://res.cloudinary.com/dkwaosfda/image/upload/v1770133310/IJAZAH_SMP_v0usgw.jpg" },
    { school: "MI NU 01 Kalisalak", city: "Tegal", img: "https://res.cloudinary.com/dkwaosfda/image/upload/v1770133307/IJAZAH_MI_bz5qwl.jpg" }
  ];

  return (
    <>
      {selectedCert && <CertificateViewer title={selectedCert.title} imgPath={selectedCert.img} onClose={() => setSelectedCert(null)} />}

      {toast && (
        <div
          style={{
            position: 'fixed',
            top: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20000,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            padding: '1rem 1.5rem',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            animation: 'slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            width: 'max-content',
            maxWidth: '90vw'
          }}
        >
          <div style={{
            fontSize: '1.2rem',
            background: 'var(--primary)',
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            ℹ️
          </div>
          <span style={{ fontWeight: 600, color: '#1d1d1f', fontSize: '0.95rem' }}>{toast}</span>
        </div>
      )}

      <main>
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
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="glass-panel" style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              margin: '0 auto 2.5rem',
              background: 'linear-gradient(135deg, #e2e8f0, #f8fafc)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.8)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              position: 'relative',
              animation: 'float 6s ease-in-out infinite'
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
            <p style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              opacity: 0.8,
              letterSpacing: '0.2em',
              marginBottom: '3rem',
              color: 'var(--foreground)'
            }}>
              TENAGA PENDIDIK & ADMINISTRATIF
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="#profil" className="btn btn-secondary">
                Tentang Saya
              </a>
              <a href="#kontak" className="btn btn-primary">
                Hubungi
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="glass-panel card">
              <h2>Pendidikan</h2>
              <p className="mb-4 text-sm opacity-60">Klik untuk melihat ijazah (Protected)</p>
              <ul style={{ listStyle: 'none' }}>
                {educationList.map((edu, index) => (
                  <li
                    key={index}
                    style={{ marginBottom: '1rem', cursor: 'pointer' }}
                    className="hover:bg-black/5 p-2 rounded-lg transition-colors group"
                    onClick={() => {
                      if (!edu.img) {
                        setToast("Ijazah Ma'had Aly masih dalam proses dari lembaga.");
                        setTimeout(() => setToast(null), 3500);
                        return;
                      }
                      setSelectedCert({ title: edu.school, img: edu.img })
                    }}
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
              <li>Berperan sebagai penghubung dan koordinator komunikasi dengan Pemerintah Provinsi Jawa Timur, Pemerintah Kota, Kementerian Agama, serta Dinas Pendidikan Kota Kediri dalam rangka pelaksanaan dan administrasi kegiatan kelembagaan.</li>
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

        <footer style={{ textAlign: 'center', padding: '6rem 0 8rem', opacity: 0.5, fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          &copy; 2026 M. Lu'lu Khulaluddin.
        </footer>
      </main>
    </>
  );
}
