import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'mocharisandijayanto@gmail.com';

  function handleCopyEmail() {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const subject = form.get('subject') || `Portfolio message from ${name}`;
    const message = form.get('message');

    setSubmitted(true);
    setTimeout(() => {
      const encSubject = encodeURIComponent(subject);
      const encBody = encodeURIComponent(
        `Halo Moch Arisandi,\n\nNama: ${name}\nEmail Pengirim: ${email}\nTopik: ${subject}\n\nPesan:\n${message}\n\n---\nDikirim dari Portofolio Web`
      );
      window.location.href = `mailto:${emailAddress}?subject=${encSubject}&body=${encBody}`;
      setTimeout(() => setSubmitted(false), 3000);
    }, 400);
  }

  return (
    <section
      className="content-section section contact-section horizontal-panel"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-number">05</div>
      <p className="section-kicker">LET&apos;S CONNECT</p>
      <h2 id="contact-title">
        Get in <span>Touch</span>
      </h2>
      <p className="section-intro">
        Tertarik untuk berkolaborasi, memiliki pertanyaan seputar proyek, atau ingin mendiskusikan peluang kerja? Silakan hubungi saya melalui saluran di bawah ini.
      </p>

      <div className="contact-container">
        {/* Left Column: Direct Info Cards */}
        <div className="contact-info-col">
          {/* Email Direct Card */}
          <div className="contact-card email-card">
            <div className="contact-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">Email Pribadi &amp; Kerja</span>
              <a href={`mailto:${emailAddress}`} className="contact-card-value">
                {emailAddress}
              </a>
              <div className="contact-card-action">
                <button
                  type="button"
                  className="copy-email-btn"
                  onClick={handleCopyEmail}
                  title="Salin alamat email"
                >
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ color: '#10b981' }}>Alamat Email Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Availability Status Card */}
          <div className="contact-card status-card">
            <div className="contact-card-icon status-icon-wrap">
              <span className="status-ping" />
              <span className="status-dot" />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">Status Ketersediaan</span>
              <h4 className="status-title">Terbuka untuk Peluang Baru</h4>
              <p className="status-desc">
                Full-time Software Engineer, Frontend/Backend Developer, maupun freelance web project.
              </p>
            </div>
          </div>

          {/* Location & Social Card */}
          <div className="contact-card social-card">
            <div className="contact-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">Domisili</span>
              <p className="contact-card-value text-normal">
                Jawa Timur, Indonesia (Remote / Hybrid)
              </p>

              <div className="social-links-row">
                <a
                  href="https://github.com/vanargand29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="GitHub Profile"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.instagram.com/mocharisandi.j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  title="Instagram Profile"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Modern Glassmorphic Form */}
        <div className="contact-form-col">
          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="form-card-header">
              <h3 className="form-card-title">Kirim Pesan Cepat</h3>
              <p className="form-card-subtitle">
                Isi formulir di bawah ini untuk memulai percakapan langsung via email.
              </p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">
                  <span>Nama Lengkap</span>
                </label>
                <div className="input-with-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Nama Anda"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">
                  <span>Alamat Email</span>
                </label>
                <div className="input-with-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="email@domain.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">
                <span>Topik / Subjek</span>
              </label>
              <div className="input-with-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Contoh: Kolaborasi Proyek Web / Tawaran Posisi"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">
                <span>Isi Pesan</span>
              </label>
              <div className="input-with-icon textarea-icon">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tuliskan pesan, deskripsi ide proyek, atau pertanyaan Anda di sini..."
                  required
                />
              </div>
            </div>

            <button
              className={`contact-submit-btn${submitted ? ' submitting' : ''}`}
              type="submit"
            >
              {submitted ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Membuka Email Client...</span>
                </>
              ) : (
                <>
                  <span>Kirim Pesan Sekarang</span>
                  <svg
                    className="send-plane-icon"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </>
              )}
            </button>

            <div className="form-footer-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>
                Pesan akan langsung dialihkan ke aplikasi email Anda dengan format siap kirim.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}