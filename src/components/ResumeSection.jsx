import { useState, useEffect, useRef } from 'react';

// Crisp Category Icons
const categoryIcons = {
  all: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24m-14.14 0 4.24-4.24m5.66-5.66 4.24-4.24" />
    </svg>
  ),
  web: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  mobile: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  soft: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  seminar: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  organization: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  lomba: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98-.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
};

const filterCategories = [
  { value: 'all', label: 'Semua', icon: categoryIcons.all },
  { value: 'web', label: 'Web & Programming', icon: categoryIcons.web },
  { value: 'mobile', label: 'Mobile Dev', icon: categoryIcons.mobile },
  { value: 'soft', label: 'Soft Skills', icon: categoryIcons.soft },
  { value: 'seminar', label: 'Seminar & Workshop', icon: categoryIcons.seminar },
  { value: 'organization', label: 'Organisasi', icon: categoryIcons.organization },
  { value: 'lomba', label: 'Kompetisi', icon: categoryIcons.lomba },
];

const certifications = [
  {
    category: 'web',
    title: 'Belajar Prinsip Pemrograman SOLID',
    issuer: 'Dicoding · Sep 2021 - Sep 2024',
    href: 'https://drive.google.com/file/d/1VRFvSJX5APotzU-_9D_mEFUt5u0bZ5wc/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding · Agu 2021 - Agu 2024',
    href: 'https://drive.google.com/file/d/1JhGlB35VcKGWDbACk3QzuZfwuLwzQapT/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Meniti Karier sebagai Software Developer',
    issuer: 'Dicoding · Nov 2021 - Nov 2024',
    href: 'https://drive.google.com/file/d/1HCuuSX4LltX2cWZfHTWx1t5tGyaWIW4p/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    issuer: 'Dicoding · Agu 2021 - Agu 2024',
    href: 'https://drive.google.com/file/d/1LixSChwz9x03v6I027aSWIbXeEI06-gL/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Belajar Dasar Git dengan GitHub',
    issuer: 'Dicoding · Agu 2021 - Agu 2024',
    href: 'https://drive.google.com/file/d/1Oe6B5Be3PeGaJZL19nAZKFK6cV5FAclI/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Memulai Pemrograman dengan Java',
    issuer: 'Dicoding · Sep 2021 - Sep 2024',
    href: 'https://drive.google.com/file/d/1v0neI6kmb9OrwpYVjXPTKkC6OiyYq-pU/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Memulai Pemrograman dengan C',
    issuer: 'Dicoding · Nov 2021 - Nov 2024',
    href: 'https://drive.google.com/file/d/1BVYlhSuJLyXdw9QmX8X_XL0uA0xbSq-J/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Data Wrangling Python',
    issuer: 'DQLab · Sep 2020',
    href: 'https://drive.google.com/file/d/1qQ4nTNk8F7ycVaFmIb1CBxd4CIEigFk1/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Python Fundamental for Data Science',
    issuer: 'DQLab · Sep 2020',
    href: 'https://drive.google.com/file/d/1Bj0zoJrEh3y4msDdMQuuQdKyoDtbfJv-/view?usp=sharing',
  },
  {
    category: 'web',
    title: 'Introduction to Data Science with Python',
    issuer: 'DQLab · Sep 2020',
    href: 'https://drive.google.com/file/d/1mV0MKtpWvwzO0M2TIG2xUfozfHG_jJ__/view?usp=sharing',
  },
  {
    category: 'mobile',
    title: 'Belajar Fundamental Aplikasi Android',
    issuer: 'Dicoding · Nov 2021 - Nov 2024',
    href: 'https://drive.google.com/file/d/1DYjhbRzIbPWvSJXVwGB58BudZIDHhtKA/view?usp=sharing',
  },
  {
    category: 'mobile',
    title: 'Belajar Membuat Aplikasi Android untuk Pemula',
    issuer: 'Dicoding · Okt 2021 - Okt 2024',
    href: 'https://drive.google.com/file/d/10jI_CR6JIFi9EeGPCbQS0PDhqvWKKynp/view?usp=sharing',
  },
  {
    category: 'mobile',
    title: 'Memulai Pemrograman dengan Kotlin',
    issuer: 'Dicoding · Sep 2021 - Sep 2024',
    href: 'https://drive.google.com/file/d/1nq8K1_KJ1TL-4KwzBdhvy4itGSNR3Lq2/view?usp=sharing',
  },
  {
    category: 'mobile',
    title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
    issuer: 'Dicoding · Des 2021 - Des 2024',
    href: 'https://drive.google.com/file/d/1X7FG1pKasimesa9TXRkw65YkyDqcOntu/view?usp=sharing',
  },
  {
    category: 'mobile',
    title: 'Memulai Pemrograman dengan Dart',
    issuer: 'Dicoding · Okt 2021 - Okt 2024',
    href: 'https://drive.google.com/file/d/18HU5A7xkrqFwWSVeOqjkQx8n_oCSM1zI/view?usp=sharing',
  },
  {
    category: 'mobile',
    title: 'Belajar Fundamental Aplikasi Flutter',
    issuer: 'Dicoding · Jan 2022 - Jan 2025',
    href: 'https://drive.google.com/file/d/1fSXTTTgbg941SOylZNneZLFyDF3Ow66x/view?usp=sharing',
  },
  {
    category: 'soft',
    title: 'Certificate of Casual Conversation',
    issuer: 'Dicoding',
    href: 'https://drive.google.com/file/d/1MYHPy-gIxt-CEFRPrYRcMSapEDrw_W7J/view?usp=sharing',
  },
  {
    category: 'soft',
    title: 'Peningkatan Produktivitas dan Peluang Berwirausaha di Masa Covid-19',
    issuer: 'Seminar',
    href: 'https://drive.google.com/file/d/175LJwm6Xr-BGTvJgb4zDWCN07qiUwlVU/view?usp=sharing',
  },
  {
    category: 'soft',
    title: 'Seminar Bisnis Konsultasi Mahasiswa Preneur',
    issuer: 'Seminar',
    href: 'https://drive.google.com/file/d/1FIP4NG2p1jUzS-RrwGXUOMebF14knFOF/view?usp=sharing',
  },
  {
    category: 'soft',
    title: 'Mengenali Diri Bekal Mendasar dalam Beradaptasi',
    issuer: 'Seminar',
    href: 'https://drive.google.com/file/d/1jg2CC2ARRswOiKuFDjmVESx_-bp3JHBn/view?usp=sharing',
  },
  {
    category: 'seminar',
    title: 'AWS x Dicoding LIVE: Storage dan Database di AWS',
    issuer: 'Dicoding',
    href: 'https://drive.google.com/file/d/1k1kHb9XgD_PlxNRfE-NhJLgmsLPZYmEI/view?usp=sharing',
  },
  {
    category: 'seminar',
    title: 'SPOGISFY (Sharing of GIS Laboratory)',
    issuer: 'Seminar',
    href: 'https://drive.google.com/file/d/1mrAlZqu4eGOSRyt3s1UibYBgJ22axAN8/view?usp=sharing',
  },
  {
    category: 'seminar',
    title: 'YOTClass Design (Create Your Idea With CorelDraw)',
    issuer: 'Workshop',
    href: 'https://drive.google.com/file/d/1nH_M1WofuvZs_hgqAxocsVi7_fHgfIwq/view?usp=sharing',
  },
  {
    category: 'seminar',
    title: 'POSTGRE (Pemro Share Talk & Greet)',
    issuer: 'Seminar',
    href: 'https://drive.google.com/file/d/1Y4eYLpQLebnkgKGxJeuoUnyim6Gr-C0j/view?usp=sharing',
  },
  {
    category: 'seminar',
    title: 'ICOMITEE 2021 dan Workshop Bedah Artikel Ilmiah',
    issuer: 'Workshop',
    href: 'https://drive.google.com/file/d/15-8LCCVdOQY5VR8JeE5R9NF94TuBckLX/view?usp=sharing',
  },
  {
    category: 'seminar',
    title: 'Compiler Algorithm Training',
    issuer: 'Training',
    href: 'https://drive.google.com/file/d/1S6IPfc5RJjWJaOEo_kNPY1R3UXXkyRyj/view?usp=sharing',
  },
  {
    category: 'seminar',
    title: 'Upaya Restorasi oleh Pemerintah dalam Menghadapi Dampak Covid-19',
    issuer: 'Seminar',
    href: 'https://drive.google.com/file/d/1r1M3nB1EY2CiGeFYXW0qCItq6j64StTI/view?usp=sharing',
  },
  {
    category: 'seminar',
    title: "Weekend Tech Talk (Let's Learn Brainstorming Technique)",
    issuer: 'Tech Talk',
    href: 'https://drive.google.com/file/d/16NQhmK1qGERSjmfrVpgO9nG7AWuSZ5_6/view?usp=sharing',
  },
  {
    category: 'organization',
    title: 'Sie Perlengkapan - Pembinaan dan Pengembangan Mahasiswa Baru (PPMB)',
    issuer: 'Universitas Jember',
    href: 'https://drive.google.com/file/d/1vFxXB_0YLc1sN1OAbykdVWlZq7zO3d6V/view?usp=sharing',
  },
  {
    category: 'organization',
    title: 'Sie Perlengkapan - Friendship Competition 2021',
    issuer: 'Universitas Jember',
    href: 'https://drive.google.com/file/d/1NekwzDWqm6_Ju-q5UJzpI2-U2mj8OeAe/view?usp=sharing',
  },
  {
    category: 'organization',
    title: 'Sie Acara - Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB)',
    issuer: 'Universitas Jember',
    href: 'https://drive.google.com/file/d/1Nteu6F9xOwutVoRPCjWbevjxg1PxSdhV/view?usp=sharing',
  },
  {
    category: 'lomba',
    title: 'Capture The Flag (CTF)',
    issuer: 'Competition',
    href: 'https://drive.google.com/file/d/1s_Gb1Zb6FyhTLMeMOukq9htpXJ_hSvQX/view?usp=sharing',
  },
  {
    category: 'lomba',
    title: 'Laos Arena',
    issuer: 'Competition',
    href: 'https://drive.google.com/file/d/14fSKWLw2nZOXoByNRiOhvF-L5r9Ll-EU/view?usp=sharing',
  },
  {
    category: 'lomba',
    title: 'Competitive Programming Competition',
    issuer: 'Competition',
    href: 'https://drive.google.com/file/d/1bszmDafdBi2UCQ-FXZPWL77l7q6B5BMQ/view?usp=sharing',
  },
  {
    category: 'lomba',
    title: 'Festival Menulis Surat Nasional',
    issuer: 'Competition',
    href: 'https://drive.google.com/file/d/1FiCoTd1jcPXWHtXCxQ-dw-G_sHBrYAvf/view?usp=sharing',
  },
  {
    category: 'lomba',
    title: 'Menulis puisi bertema Cinta',
    issuer: 'Competition',
    href: 'https://drive.google.com/file/d/1WL_ldvceOhM6bzpgVwN3lWlk-3l4D21l/view?usp=sharing',
  },
];

// Timeline Card with Modern Glassmorphism
function TimelineItem({ date, title, org, desc, details, certHref, gpa, icon, tags }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="timeline-item">
      {/* Node indicator with pulse */}
      <div className="timeline-node">
        <span className="timeline-node-icon">{icon}</span>
      </div>

      <div className="timeline-card">
        <div className="timeline-card-header">
          <div className="timeline-org-badge">
            <span className="timeline-org">{org}</span>
            <span className="timeline-date">{date}</span>
          </div>
          <h3 className="timeline-title">{title}</h3>
        </div>

        <p className="timeline-desc">{desc}</p>

        {tags && tags.length > 0 && (
          <div className="timeline-tags">
            {tags.map((t) => (
              <span key={t} className="timeline-tag-pill">
                {t}
              </span>
            ))}
          </div>
        )}

        {details && (
          <div className="timeline-description">
            <p className={`timeline-details${expanded ? ' expanded' : ''}`}>
              {details}
            </p>
            <button
              type="button"
              className="load-more-btn"
              aria-expanded={expanded}
              onClick={() => setExpanded((e) => !e)}
            >
              <span>{expanded ? 'Sembunyikan' : 'Lihat Selengkapnya'}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: expanded ? 'rotate(-90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                }}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        <div className="timeline-card-footer">
          {gpa && (
            <div className="gpa-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{gpa}</span>
            </div>
          )}

          {certHref && (
            <a
              href={certHref}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span>Lihat Sertifikat</span>
              <svg className="cert-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ResumeSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const filtered =
    activeFilter === 'all'
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

  const currentFilterLabel =
    filterCategories.find((f) => f.value === activeFilter)?.label || 'Semua';

  return (
    <section
      className="content-section section resume-section horizontal-panel"
      id="resume"
      aria-labelledby="resume-title"
    >
      <span className="resume-shine" aria-hidden="true" />
      <div className="section-number">04</div>
      <div className="section-kicker">
        <span className="section-kicker-dot" /> CAREER &amp; CREDENTIALS
      </div>
      <h2 id="resume-title">
        Resume <span>&amp; Education</span>
      </h2>
      <p className="section-intro">
        Jejak rekam pendidikan akademik, studi independen bersertifikat, dan riwayat sertifikasi keahlian profesional di bidang software development.
      </p>

      {/* Experience & Education Grid */}
      <div className="resume-grid">
        {/* Experience Column */}
        <div className="resume-grid-column">
          <div className="resume-column-header">
            <div className="resume-col-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="resume-section-title">Experience</h3>
          </div>

          <div className="timeline">
            <TimelineItem
              date="Feb 2022 - Jul 2022"
              title="Front-End Engineering Bootcamp"
              org="Ruangguru"
              desc="Program Magang & Studi Independen Bersertifikat (MSIB) Front-End Engineering di PT Ruang Raya Indonesia."
              tags={['React', 'Next.js', 'TypeScript', 'REST API', 'Cloud Deployment']}
              details="Kerja kolaboratif dengan Git & GitHub Version Control, Pemrograman modern Front-End JavaScript dan CSS, Component Programming dengan React, SSR Framework dengan Next.js, API Integration & Authentication, Identity Management, Performance Optimization, dan Dasar-dasar Project Management tim Scrum."
              certHref="https://drive.google.com/file/d/1_VLbu0URknhletqkEBRfFKFjgb0I5SWH/view?usp=sharing"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              }
            />
            <TimelineItem
              date="Agu 2021 - Jan 2022"
              title="Pengembang Android & Multi-Platform"
              org="Dicoding"
              desc="Program Magang & Studi Independen Bersertifikat (MSIB) Pengembang Aplikasi Android & Multi-Platform di PT Presentologics."
              tags={['Android', 'Kotlin', 'Flutter', 'Dart', 'SOLID Principles']}
              details="Menyelesaikan kurikulum terakreditasi: Programming Logic 101, Git with GitHub, Prinsip Pemrograman SOLID, Pemrograman Android Native dengan Kotlin, Android Architecture Components, Pemrograman Multi-Platform dengan Dart & Flutter, serta implementasi fundamental state management."
              certHref="https://drive.google.com/file/d/1_VLbu0URknhletqkEBRfFKFjgb0I5SWH/view?usp=sharing"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Education Column */}
        <div className="resume-grid-column">
          <div className="resume-column-header">
            <div className="resume-col-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 className="resume-section-title">Education</h3>
          </div>

          <div className="timeline">
            <TimelineItem
              date="2019 - 2026"
              title="Universitas Jember"
              org="S1 Informatika"
              desc="Fakultas Ilmu Komputer · Jurusan Informatika"
              tags={['Software Engineering', 'Algorithms', 'Expert Systems', 'Web Tech']}
              details="Menempuh pendidikan Sarjana Informatika dengan konsentrasi Software Engineering dan Web Technologies. Menguasai fondasi algoritma, struktur data, kecerdasan buatan, sistem pakar, serta metodologi pengembangan perangkat lunak modern. Berperan aktif dalam kegiatan kemahasiswaan dan riset sistem skrining kesehatan."
              gpa="IPK: 3.66"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      {/* Certifications Showcase */}
      <div className="certifications-header-wrap">
        <div className="cert-header-left">
          <h3 className="resume-section-title certifications-title">
            Certifications &amp; Credentials
          </h3>
          <span className="cert-count-pill">{certifications.length} Sertifikat</span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="cert-filter-buttons" ref={dropdownRef}>
        {filterCategories.map((f) => {
          const count =
            f.value === 'all'
              ? certifications.length
              : certifications.filter((c) => c.category === f.value).length;
          return (
            <button
              key={f.value}
              type="button"
              className={`filter-btn desktop-filter-btn${
                activeFilter === f.value ? ' active' : ''
              }`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.icon}
              <span>{f.label}</span>
              <span className="filter-badge">{count}</span>
            </button>
          );
        })}

        {/* Mobile dropdown */}
        <button
          type="button"
          className={`filter-dropdown-toggle${dropdownOpen ? ' open' : ''}`}
          id="filterDropdownToggle"
          onClick={(e) => {
            e.stopPropagation();
            setDropdownOpen((o) => !o);
          }}
        >
          <span>{currentFilterLabel}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div
          className={`filter-dropdown-menu${dropdownOpen ? ' open' : ''}`}
          id="filterDropdownMenu"
        >
          {filterCategories.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`filter-btn mobile-filter-btn${
                activeFilter === f.value ? ' active' : ''
              }`}
              onClick={() => {
                setActiveFilter(f.value);
                setDropdownOpen(false);
              }}
            >
              {f.icon}
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Certifications Grid */}
      <div className="certifications-grid">
        {filtered.map((cert, i) => {
          const categoryObj = filterCategories.find((f) => f.value === cert.category);
          return (
            <div
              key={i}
              className="cert-item"
              style={{ animationDelay: `${Math.min(i * 0.05, 0.4)}s` }}
            >
              <div className="cert-item-header">
                <span className="category-tag">
                  {categoryObj?.icon}
                  <span>{categoryObj?.label}</span>
                </span>
                <span className="cert-verified-badge" title="Verified Credential">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Terverifikasi
                </span>
              </div>

              <div className="cert-item-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {cert.issuer}
                </p>
              </div>

              <div className="cert-item-footer">
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-action-link"
                >
                  <span>Buka Sertifikat</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}