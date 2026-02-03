import Image from 'next/image';

export default function Home() {
  return (
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
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '1rem' }}>
                <span className="tag">Terbaru</span>
                <h3>Ma'had Aly Lirboyo</h3>
                <p>Kota Kediri</p>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <h3>Madrasah Aliyyah Lirboyo</h3>
                <p>Kota Kediri</p>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <h3>SMK PGRI 03 Kota Kediri</h3>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <h3>SMP Busthanul Ulum Jatirokeh</h3>
                <p>Brebes</p>
              </li>
              <li>
                <h3>MI NU 01 Kalisalak</h3>
                <p>Tegal</p>
              </li>
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
          <span className="tag">Non-Aktif</span>
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
          <span className="tag">Non-Aktif</span>
          <h3>Tenaga Pendidik (Teknologi/Pengembangan Web)</h3>
          <p style={{ color: 'var(--primary)', fontWeight: 600 }}>Pondok Pesantren Lirboyo</p>
          <ul style={{ marginTop: '1rem', marginLeft: '1.2rem', opacity: 0.8 }}>
            <li>Membimbing peserta didik dalam pembelajaran teknologi informasi.</li>
            <li>Mengajarkan konsep dasar web development.</li>
            <li>Mendampingi praktik pembuatan dan pengelolaan website sederhana sebagai media pembelajaran.</li>
          </ul>
        </div>

        <div className="glass-panel card">
          <span className="tag">Non-Aktif</span>
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
            <div>
              <p style={{ fontWeight: 600 }}>Email</p>
              <a href="mailto:muhammad.khulal25@gmail.com" style={{ color: 'var(--primary)' }}>muhammad.khulal25@gmail.com</a>
            </div>
            <div>
              <p style={{ fontWeight: 600 }}>WhatsApp</p>
              <a href="https://wa.me/6285171542025" style={{ color: 'var(--primary)' }}>+62 851 7154 2025</a>
            </div>
            <div>
              <p style={{ fontWeight: 600 }}>Website</p>
              <a href="https://muhammadkhulal.pages.dev" style={{ color: 'var(--primary)' }}>muhammadkhulal.pages.dev</a>
            </div>
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
