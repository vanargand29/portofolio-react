import { useEffect, useState } from 'react';

const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const roles = ['Frontend Developer', 'Android Developer'];

export default function Header({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let id = null;
    const tick = () => setActiveRole((r) => (r + 1) % roles.length);
    const onVisibility = () => {
      if (document.hidden) {
        clearInterval(id);
        id = null;
      } else if (id === null) {
        id = setInterval(tick, 3500);
      }
    };
    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  function handleNav(id) {
    onNavigate(id);
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="logo-container">
        <div className="logo-wrapper">
          <span
            className="logo-badge"
            onClick={() => handleNav('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNav('home')}
          >
            MAJ
          </span>
          <div className="logo-text">
            <a
              className="logo"
              onClick={() => handleNav('home')}
              style={{ cursor: 'pointer' }}
            >
              Moch Arisandi Jayanto
            </a>
            <div className="logo-subtext">
              <span className="logo-role-stack">
                {roles.map((role, i) => (
                  <span
                    key={role}
                    className={`logo-role${i === activeRole ? ' is-active' : ''}`}
                  >
                    {role}
                  </span>
                ))}
              </span>
              <span className="cursor-pulse" aria-hidden="true">
                |
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`nav-links${menuOpen ? ' open' : ''}`}
        id="navLinks"
        aria-label="Main navigation"
      >
        {navSections.map(({ id, label }) => (
          <a
            key={id}
            className={`nav-link${activeSection === id ? ' active' : ''}`}
            onClick={() => handleNav(id)}
            aria-current={activeSection === id ? 'location' : undefined}
            style={{ cursor: 'pointer' }}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        className="header-cta"
        onClick={() => handleNav('contact')}
        style={{ cursor: 'pointer' }}
      >
        Hire Me <span aria-hidden="true">↗</span>
      </a>

      <button
        className="menu-toggle"
        id="menuToggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navLinks"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
