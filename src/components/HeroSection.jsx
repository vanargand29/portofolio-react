import { useState, useRef } from 'react';

const socialLinks = [
  {
    href: 'https://www.instagram.com/jaya_mrj/',
    label: 'Instagram',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-icon-fill" cx="18" cy="6" r="1" />
      </svg>
    ),
  },
  {
    href: 'https://www.tiktok.com/@jaya_mrj',
    label: 'TikTok',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 3v11.2a4.2 4.2 0 1 1-3.6-4.15v3.2a1.2 1.2 0 1 0 .6 1.04V3h3c.25 2.2 1.55 3.75 4 4.2v3.1A8 8 0 0 1 14 8.7" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/vanargand29',
    label: 'GitHub',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 21v-3.3a2.9 2.9 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.5 6a4.4 4.4 0 0 0-.1-3.2S17.4 2.5 15 4a12 12 0 0 0-6 0C6.6 2.5 5.6 2.8 5.6 2.8A4.4 4.4 0 0 0 5.5 6a4.7 4.7 0 0 0-1.2 3.5c0 4.7 2.8 5.7 5.5 6A2.9 2.9 0 0 0 9 17.7V21" />
      </svg>
    ),
  },
  {
    href: 'mailto:mocharisandijayanto@gmail.com',
    label: 'Send email',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/moch-arisandi-jayanto-70a563179',
    label: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9v10M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" />
      </svg>
    ),
  },
];

function SocialLinks({ className }) {
  return (
    <div className={`social-links ${className}`} aria-label="Social media links">
      {socialLinks.map(({ href, label, svg }) => (
        <a
          key={label}
          className="social-link"
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          {svg}
        </a>
      ))}
    </div>
  );
}

export default function HeroSection({ onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  const descRef = useRef(null);

  const toggleExpand = () => {
    setExpanded((prev) => {
      const next = !prev;
      if (next && descRef.current) {
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 82;
        const descTop = descRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: descTop - headerHeight - 20,
          behavior: 'smooth',
        });
      }
      return next;
    });
  };

  return (
    <section
      className="hero section horizontal-panel is-active"
      id="home"
      aria-labelledby="home-title"
    >
      <span className="home-shine" aria-hidden="true" />
      <div className="section-number">01</div>

      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-dot" /> PORTFOLIO / 2026
        </div>
        <h1 id="home-title">
          Hi, I'm<br />
          <span className="logo-name-shine">Moch Arisandi Jayanto</span>
        </h1>
        <p
          ref={descRef}
          className={`hero-description${expanded ? ' expanded' : ''}`}
        >
          Informatics graduate from the University of Jember with a strong foundation in web
          development, software engineering, and information technology. Passionate about building
          responsive, user-friendly web applications and developing innovative digital solutions
          that deliver practical value and enhance user experiences.
        </p>
        <button
          className="load-more-btn"
          id="loadMoreBtn"
          aria-expanded={expanded}
          onClick={toggleExpand}
        >
          <span>{expanded ? 'Show less' : 'Read more'}</span>
          <span aria-hidden="true">→</span>
        </button>

        <div className="hero-actions">
          <a
            className="button button-primary"
            onClick={() => onNavigate('projects')}
            style={{ cursor: 'pointer' }}
          >
            <span className="button-icon">▱</span> View Projects <span aria-hidden="true">→</span>
          </a>
          <a
            className="button button-outline"
            onClick={() => onNavigate('contact')}
            style={{ cursor: 'pointer' }}
          >
            <span className="button-icon">✉</span> Contact Me
          </a>
        </div>

        <SocialLinks className="social-links-desktop" />
      </div>

      <div className="hero-art" aria-label="Profile photo area">
        <div className="art-glow" />
        <div className="art-slash" />
        <div className="art-ring" />
        <span className="float-square square-one" />
        <span className="float-square square-two" />
        <span className="float-square square-three" />
        <picture>
          <source media="(max-width: 768px)" srcSet="/img/mocharisandij-mobile.webp" type="image/webp" />
          <source srcSet="/img/mocharisandij.webp" type="image/webp" />
          <img
            className="profile-photo"
            src="/img/mocharisandij.webp"
            alt="Moch Arisandi Jayanto, Informatics graduate and aspiring web developer"
            fetchPriority="high"
            decoding="async"
            width="1085"
            height="1450"
          />
        </picture>
      </div>

      <SocialLinks className="social-links-mobile" />

      <div className="role-marquee" aria-label="Frontend Developer and Android Developer">
        <div className="role-marquee-track">
          <div className="role-marquee-group">
            <span>Frontend Developer</span><i aria-hidden="true">✦</i>
            <span>Android Developer</span><i aria-hidden="true">✦</i>
            <span>Frontend Developer</span><i aria-hidden="true">✦</i>
            <span>Android Developer</span><i aria-hidden="true">✦</i>
          </div>
          <div className="role-marquee-group" aria-hidden="true">
            <span>Frontend Developer</span><i>✦</i>
            <span>Android Developer</span><i>✦</i>
            <span>Frontend Developer</span><i>✦</i>
            <span>Android Developer</span><i>✦</i>
          </div>
        </div>
      </div>
    </section>
  );
}
