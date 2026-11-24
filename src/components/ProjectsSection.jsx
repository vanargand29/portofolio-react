import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { fetchProjects, resolveImageUrl } from '../services/api';

// Tech Badge Icons
function TechBadgeIcon({ name }) {
  const n = name.toLowerCase();

  if (n.includes('html')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#E34F26">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    );
  }
  if (n.includes('css')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#1572B6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    );
  }
  if (n.includes('javascript') || n === 'js') {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M6.5 18.5c.3.5.7.8 1.3.8.7 0 1.2-.4 1.2-1.3v-6.5h1.9v6.5c0 2-1.2 3-2.9 3-1.4 0-2.3-.6-2.8-1.7l1.3-.8zm7.3 1.8c.6.4 1.4.7 2.3.7 1.4 0 2.2-.7 2.2-1.8 0-1-.6-1.5-1.9-2.1-.9-.4-1.6-.7-2.1-1.1-.7-.6-1-1.4-1-2.2 0-1.7 1.3-2.9 3.2-2.9 1.1 0 2 .3 2.6.7l-.7 1.6c-.5-.3-1.1-.6-1.9-.6-1 0-1.5.5-1.5 1.2 0 .8.5 1.2 1.6 1.7.9.4 1.7.7 2.2 1.1.8.6 1.2 1.4 1.2 2.5 0 1.9-1.4 3.1-3.6 3.1-1.2 0-2.3-.4-3-1l.7-1.9z" fill="#000" />
      </svg>
    );
  }
  if (n.includes('laravel')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#FF2D20">
        <path d="m3.612 15.443 6.945 4.026 6.96-4.017.027-8.036L10.59 3.39 3.63 7.407v8.036zm1.09-7.407 5.864-3.383 5.88 3.398-.023 6.782-5.865 3.383-5.856-3.398V8.036z" />
      </svg>
    );
  }
  if (n.includes('react')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }
  if (n.includes('node')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#68A063">
        <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L5 8.3v7.3l7 4.2 7-4.2V8.3l-7-4z" />
      </svg>
    );
  }
  if (n.includes('express')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#CBD5E1" strokeWidth="2">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }
  if (n.includes('mysql')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }
  if (n.includes('cloudflare')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#F38020">
        <path d="M18.8 9.5a5.5 5.5 0 0 0-10.4-1.7A4.5 4.5 0 0 0 4.5 12 4.5 4.5 0 0 0 9 16.5h9.5a3.5 3.5 0 0 0 .3-7z" />
      </svg>
    );
  }
  if (n.includes('dempster') || n.includes('ai')) {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="12" x="3" y="4" rx="2" />
      <path d="M2 18h20" />
    </svg>
  );
}

// Crisp GitHub icon
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const projectData = {
  jstore: {
    number: '#01',
    category: 'Website',
    headerCategory: 'GAME STORE',
    headerType: 'WEB APPLICATION',
    urlMock: 'jstore-gaming.app',
    title: 'J-Store – Game Currency Store Platform',
    subtitle: 'High Performance Gaming Store Frontend & Checkout Flow',
    description:
      'J-Store adalah platform e-commerce mata uang game modern untuk game populer seperti Genshin Impact. Platform ini menyediakan katalog produk yang responsif, visual interaktif, kalkulasi harga otomatis, dan alur checkout yang aman serta siap integrasi payment gateway.',
    features: [
      'Katalog produk mata uang game dengan filtering kategori instan',
      'Kalkulasi konversi mata uang dan diskon secara real-time',
      'Desain antarmuka mobile-first responsif di semua resolusi layar',
      'Struktur kode modular berbasis standar HTML5, CSS3, dan ES6+',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/img/jstore(tampilan).webp',
    github: '#',
  },
  tuberculosis: {
    number: '#02',
    category: 'Machine Learning',
    headerCategory: 'HEALTHCARE',
    headerType: 'EXPERT SYSTEM',
    urlMock: 'tb-expertsystem.health.id',
    title: 'Tuberculosis Expert System – AI Disease Screening',
    subtitle: 'Clinical Diagnostic Inference Engine via Dempster-Shafer',
    description:
      'Aplikasi sistem pakar skrining gejala Tuberkulosis berbasis web menggunakan inferensi Dempster-Shafer. Menganalisis multi-gejala klinis dan menghitung probabilitas diagnosis secara otomatis untuk membantu keputusan tenaga kesehatan secara akurat.',
    features: [
      'Form input gejala klinis interaktif dengan pembobotan evidensial',
      'Algoritma inferensi kombinasi Dempster-Shafer secara otomatis',
      'Visualisasi persentase probabilitas dan confidence score diagnosis (94.6%)',
      'Rekomendasi penanganan medis dan saran pemeriksaan sputum AFB lanjutan',
    ],
    tech: ['Laravel', 'MySQL', 'Dempster-Shafer'],
    image: '/img/tuberculosis-preview.svg',
    github: '#',
  },
  portfolio: {
    number: '#03',
    category: 'Website',
    headerCategory: 'PORTFOLIO',
    headerType: 'PERSONAL WEBSITE',
    urlMock: 'arisandi-portfolio.netlify.app',
    title: 'Personal Portfolio – Interactive Showcase',
    subtitle: 'Modern React SPA with Smooth Horizontal Sliding Navigation',
    description:
      'Website portfolio personal berkinerja tinggi dengan navigasi horizontal slider yang mulus, tema dark glassmorphism modern, micro-interactions, modal interaktif, dan filter sertifikasi dinamis.',
    features: [
      'Horizontal snapping track dengan transisi halus dan wheel easing',
      'Desain modern glassmorphism dengan aksen pendaran merah khas',
      'Modal showcase interaktif dengan zoom screenshot beresolusi tinggi',
      'Timeline pengalaman, pendidikan, dan sertifikasi dengan multi-filter',
      'Formulir kontak terintegrasi mailto siap kirim',
    ],
    tech: ['React', 'Responsive UI', 'HTML/CSS/JS'],
    image: '/img/porto(tampilan).webp',
    github: 'https://github.com/vanargand29/Portofolio',
  },
  backendApi: {
    number: '#04',
    category: 'Backend',
    headerCategory: 'BACKEND API',
    headerType: 'REST API & ADMIN PANEL',
    urlMock: 'api.arisandi.workers.dev',
    title: 'Backend API & Admin CRUD – Content Manager',
    subtitle: 'Headless REST API with Modern Administrative Management',
    description:
      'Arsitektur REST API lengkap dengan dashboard admin modern untuk manajemen data portfolio secara dinamis. Mendukung operasi CRUD penuh pada data proyek dan sertifikasi dengan endpoint terstruktur dan aman.',
    features: [
      'REST API endpoint terstruktur untuk manajemen proyek dan resume',
      'Panel admin intuitif untuk operasi CRUD data secara real-time',
      'Format pertukaran data JSON modular dan terorganisir',
      'Deployment cepat dan serverless via Cloudflare Workers',
      'CORS middleware terkonfigurasi untuk komunikasi domain aman',
    ],
    tech: ['Node.js', 'Express', 'Cloudflare Workers'],
    image: '/img/adminAPI.webp',
    github: '#',
  },
};

const projects = [
  {
    id: 'jstore',
    category: 'Website',
    title: 'J-Store',
    subtitle: 'Game Currency Store Platform',
    desc: 'Platform toko mata uang game populer dengan katalog responsif, kalkulasi harga instan, dan alur checkout aman untuk mobile & desktop.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/img/jstore(tampilan).webp',
    github: '#',
  },
  {
    id: 'tuberculosis',
    category: 'Machine Learning',
    title: 'TB Expert System',
    subtitle: 'AI-Powered Disease Screening',
    desc: 'Aplikasi web sistem pakar skrining gejala Tuberkulosis menggunakan metode inferensi Dempster-Shafer dengan kalkulasi probabilitas akurat.',
    tech: ['Laravel', 'MySQL', 'Dempster-Shafer'],
    image: '/img/tuberculosis-preview.svg',
    github: '#',
  },
  {
    id: 'portfolio',
    category: 'Website',
    title: 'Personal Portfolio',
    subtitle: 'Modern Interactive Showcase',
    desc: 'Website portofolio interaktif dengan navigasi horizontal slider, tema glassmorphism modern, modal studi kasus, dan filter sertifikat dinamis.',
    tech: ['React', 'Responsive UI', 'HTML/CSS/JS'],
    image: '/img/porto(tampilan).webp',
    github: 'https://github.com/vanargand29/Portofolio',
  },
  {
    id: 'backendApi',
    category: 'Backend',
    title: 'Backend API & Admin',
    subtitle: 'Portfolio Management System',
    desc: 'REST API backend terstruktur dilengkapi dashboard admin untuk pengelolaan CRUD dinamis pada data proyek, portofolio, dan resume.',
    tech: ['Node.js', 'Express', 'Cloudflare Workers'],
    image: '/img/adminAPI.webp',
    github: '#',
  },
];

const projectCategories = [
  { value: 'all', label: 'Semua' },
  { value: 'Website', label: 'Website' },
  { value: 'Mobile App', label: 'Mobile App' },
  { value: 'Backend', label: 'Backend' },
  { value: 'Machine Learning', label: 'Machine Learning' },
  { value: 'UI/UX', label: 'UI/UX' },
  { value: 'Other', label: 'Other' },
];

export default function ProjectsSection({ onNavigate }) {
  const [projectList, setProjectList] = useState(projects);
  const [projectDetails, setProjectDetails] = useState(projectData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [modal, setModal] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  // Fetch live projects from Cloudflare Worker REST API
  useEffect(() => {
    let active = true;
    fetchProjects().then((items) => {
      if (!active || !items || !Array.isArray(items) || items.length === 0) return;

      const detailsMap = {};
      const mappedList = items.map((p, idx) => {
        const resolvedImg = resolveImageUrl(p.image);
        const techArr = Array.isArray(p.tech)
          ? p.tech
          : p.tech
          ? String(p.tech).split(',').map((s) => s.trim())
          : [];

        const cardItem = {
          id: p.id || `proj-${idx + 1}`,
          number: p.number || `#${String(idx + 1).padStart(2, '0')}`,
          category: p.category || 'Website',
          headerCategory: p.headerCategory || (p.category || 'PROJECT').toUpperCase(),
          headerType: p.headerType || 'WEB APPLICATION',
          urlMock: p.urlMock || '',
          title: p.title || 'Untitled Project',
          subtitle: p.subtitle || '',
          desc: p.description || p.desc || '',
          tech: techArr,
          image: resolvedImg,
          github: p.github || '#',
          isPrivate: p.isPrivate,
        };

        detailsMap[cardItem.id] = {
          ...p,
          ...cardItem,
          description: p.description || cardItem.desc,
          features: Array.isArray(p.features) ? p.features : [],
        };

        return cardItem;
      });

      setProjectList(mappedList);
      setProjectDetails((prev) => ({ ...prev, ...detailsMap }));
    });

    return () => {
      active = false;
    };
  }, []);

  function openModal(id) {
    const item = projectDetails[id] || projectData[id];
    if (item) setModal(item);
  }

  function closeModal() {
    setModal(null);
    setImageModal(false);
    setAlertModal(false);
  }

  // Manage modal-open class on body to lock background scrolling
  useEffect(() => {
    const isAnyModalOpen = Boolean(modal || imageModal || alertModal);
    if (isAnyModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modal, imageModal, alertModal]);

  // Handle escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (alertModal) {
          setAlertModal(false);
        } else if (imageModal) {
          setImageModal(false);
        } else if (modal) {
          closeModal();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [alertModal, imageModal, modal]);

  function handleContactClick(e) {
    e.preventDefault();
    closeModal();
    setTimeout(() => {
      onNavigate('contact');
    }, 250);
  }

  const filteredProjects =
    activeCategory === 'all'
      ? projectList
      : projectList.filter(
          (p) => (p.category || '').toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section
      className="content-section section horizontal-panel"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-number">03</div>
      <p className="section-kicker">FEATURED WORK</p>
      <h2 id="projects-title">
        Selected <span>Projects</span>
      </h2>
      <p className="section-intro">
        Kumpulan proyek terpilih yang mencakup web application, sistem pakar AI, frontend interaktif, hingga arsitektur backend REST API.
      </p>

      {/* Category Filter Tabs */}
      <div className="project-filter-buttons" role="tablist" aria-label="Kategori Project">
        {projectCategories.map((cat) => {
          const count =
            cat.value === 'all'
              ? projectList.length
              : projectList.filter(
                  (p) => (p.category || '').toLowerCase() === cat.value.toLowerCase()
                ).length;
          const isActive = activeCategory.toLowerCase() === cat.value.toLowerCase();
          return (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`project-filter-btn${isActive ? ' is-active' : ''}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              <span>{cat.label}</span>
              <span className="project-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Modern Redesigned Project Grid */}
      {filteredProjects.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '48px 16px', color: '#9ca3af' }}>
          <p>Belum ada project pada kategori <strong>{activeCategory}</strong>.</p>
        </div>
      ) : (
        <div className="project-grid">
          {filteredProjects.map((p, i) => (
            <article
              key={p.id}
              className="project-card"
              onClick={() => openModal(p.id)}
              style={{ animationDelay: `${(i + 1) * 0.12}s` }}
            >
              {/* Visual Media Showcase */}
              <div className="project-thumb-wrapper">
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-thumb-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-thumb-overlay">
                  <span className="project-quick-view">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Lihat Detail Proyek
                  </span>
                </div>
                <div className="project-badge-bar">
                  <span className="project-number-tag">#{String(i + 1).padStart(2, '0')}</span>
                  <span className="project-category-tag">{p.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-title-group">
                  <h3 className="project-card-title">{p.title}</h3>
                  <span className="project-card-subtitle">{p.subtitle}</span>
                </div>
                <p className="project-card-desc">{p.desc}</p>

                {/* Tech Stack Pills with Mini Logos */}
                <div className="project-card-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="project-tech-pill">
                      <TechBadgeIcon name={t} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="project-card-footer">
                <div className="project-explore-link">
                  <span>Pelajari Proyek</span>
                  <svg
                    className="project-arrow-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>

                {p.github && (
                  <button
                    type="button"
                    className="project-github-btn"
                    aria-label="GitHub Repository"
                    title={p.github === '#' ? 'Source code private' : 'Buka GitHub'}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (p.github === '#') {
                        setAlertModal(true);
                      } else {
                        window.open(p.github, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <GitHubIcon />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ================================================================= */}
      {/* MODALS RENDERED IN PORTAL DIRECTLY ON DOCUMENT.BODY               */}
      {/* ================================================================= */}
      {typeof document !== 'undefined' &&
        createPortal(
          <>
            {/* 1. PROJECT DETAIL POPUP / MODAL */}
            {modal && (
              <div className="project-modal" role="dialog" aria-modal="true">
                <div className="modal-overlay" onClick={closeModal} />
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  {/* Sticky Header */}
                  <div className="modal-header">
              <div className="modal-header-left">
                <span className="modal-header-num">{modal.number}</span>
                <div className="modal-header-meta">
                  <div className="modal-header-badges">
                    <span className="modal-header-category">{modal.headerCategory}</span>
                    <span className="modal-header-type">{modal.headerType}</span>
                  </div>
                  <h3 className="modal-header-title">{modal.title}</h3>
                </div>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Tutup jendela proyek"
                title="Tutup (Esc)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Browser Window Showcase Mockup */}
              <div className="modal-browser-showcase">
                <div className="browser-top-bar">
                  <div className="browser-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="browser-address-bar">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>{modal.urlMock || 'demo-preview.app'}</span>
                  </div>
                  <div className="browser-actions">
                    <button
                      type="button"
                      className="browser-zoom-btn"
                      onClick={() => setImageModal(true)}
                      title="Perbesar gambar penuh"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  className="modal-image-container"
                  onClick={() => setImageModal(true)}
                  title="Klik untuk memperbesar tampilan"
                >
                  <div className="modal-image-overlay">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    <span>Perbesar Tampilan Penuh</span>
                  </div>
                  <img src={modal.image} alt={modal.title} loading="lazy" decoding="async" />
                </div>
              </div>

              {/* Two-Column Detail Grid */}
              <div className="modal-content-grid">
                {/* Left Side: Story & Features */}
                <div className="modal-content-left">
                  <div className="modal-overview-section">
                    <h4 className="modal-section-heading">Ringkasan Proyek</h4>
                    <p className="modal-description">{modal.description}</p>
                  </div>

                  <div className="modal-features-section">
                    <h4 className="modal-section-heading">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      Fitur &amp; Kemampuan Utama
                    </h4>
                    <ul className="modal-features-list">
                      {modal.features.map((f, idx) => (
                        <li key={idx}>
                          <svg className="feature-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Quick Stats, Tech Stack, & Actions */}
                <div className="modal-content-right">
                  <div className="modal-stats-card">
                    <h4 className="modal-section-heading">Spesifikasi Cepat</h4>
                    <div className="modal-stats">
                      <div className="modal-stat-item">
                        <div className="modal-stat-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                          </svg>
                        </div>
                        <div className="modal-stat-info">
                          <div className="modal-stat-value">{modal.tech.length} Tech</div>
                          <div className="modal-stat-label">Teknologi Inti</div>
                        </div>
                      </div>

                      <div className="modal-stat-item">
                        <div className="modal-stat-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                          </svg>
                        </div>
                        <div className="modal-stat-info">
                          <div className="modal-stat-value">{modal.features.length} Fitur</div>
                          <div className="modal-stat-label">Modul Fitur</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack List */}
                  <div className="modal-tech-box">
                    <h4 className="modal-section-heading">Tech Stack &amp; Tools</h4>
                    <div className="modal-tech">
                      {modal.tech.map((t) => (
                        <span key={t} className="modal-tech-tag">
                          <TechBadgeIcon name={t} />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="modal-actions-box">
                    <button
                      type="button"
                      className="modal-action-btn primary"
                      onClick={handleContactClick}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>Diskusikan Proyek Ini</span>
                    </button>

                    <a
                      className="modal-action-btn secondary"
                      href={modal.github}
                      target={modal.github !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (modal.github === '#') {
                          e.preventDefault();
                          setAlertModal(true);
                        }
                      }}
                    >
                      <GitHubIcon />
                      <span>{modal.github !== '#' ? 'Lihat di GitHub' : 'Private Source'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <span className="modal-footer-author">Moch Arisandi Jayanto · Portofolio Showcase</span>
              <button
                type="button"
                className="modal-footer-close-btn"
                onClick={closeModal}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 2. STANDALONE FULLSCREEN IMAGE POPUP                              */}
      {/* ================================================================= */}
      {imageModal && modal && (
        <div className="image-modal" role="dialog" aria-modal="true">
          <div
            className="image-modal-overlay"
            onClick={() => setImageModal(false)}
          />
          <div className="image-modal-content">
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setImageModal(false)}
              aria-label="Tutup gambar penuh"
            >
              ×
            </button>
            <img
              id="fullSizeImage"
              src={modal.image}
              alt="Full size project screenshot"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 3. STANDALONE PRIVATE REPO ALERT POPUP                            */}
      {/* ================================================================= */}
      {alertModal && (
        <div className="alert-modal" role="dialog" aria-modal="true">
          <div
            className="alert-modal-overlay"
            onClick={() => setAlertModal(false)}
          />
          <div className="alert-modal-content">
            <div className="alert-icon-wrap">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff2028"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Source Code Bersifat Private</h3>
            <p>Repositori ini berstatus private untuk keperluan klien atau kepemilikan khusus. Anda dapat mendiskusikannya langsung dengan pengembang.</p>
            <button
              type="button"
              className="alert-modal-close"
              onClick={() => setAlertModal(false)}
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </>,
    document.body
  )}
    </section>
  );
}