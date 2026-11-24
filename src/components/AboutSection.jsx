export default function AboutSection() {
  const coreCompetencies = [
    {
      title: 'Web Development',
      badge: 'Core Specialty',
      desc: 'Building responsive, performant, and standards-compliant web applications using modern frontend architectures and clean code principles.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      title: 'UI & UX Design',
      badge: 'Design & Visual',
      desc: 'Crafting intuitive user journeys with meticulous attention to typography, spatial balance, micro-interactions, and visual hierarchy.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      ),
    },
    {
      title: 'Problem Solving',
      badge: 'Analytical',
      desc: 'Translating complex real-world requirements and business logic into scalable, robust, and maintainable software solutions.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M15 2v2" />
          <path d="M15 20v2" />
          <path d="M2 15h2" />
          <path d="M2 9h2" />
          <path d="M20 15h2" />
          <path d="M20 9h2" />
          <path d="M9 2v2" />
          <path d="M9 20v2" />
        </svg>
      ),
    },
    {
      title: 'Mobile Development',
      badge: 'Cross-Platform',
      desc: 'Engineering smooth, native-grade multi-platform applications using Flutter and native Android development tools.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: 'Continuous Learning',
      badge: 'Growth Mindset',
      desc: 'Constantly leveling up engineering skills through structured bootcamps, industry certifications, and experimenting with emerging tech.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      ),
    },
    {
      title: 'Innovative Thinking',
      badge: 'Creativity',
      desc: 'Designing digital experiences with fresh perspectives, exploring modern tools, and crafting interactive web interfaces.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      ),
    },
  ];

  const techStack = [
    {
      title: 'React',
      category: 'Frontend Library',
      color: '#61DAFB',
      desc: 'Component-based modern web development with hooks, state, and lifecycle management.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        </svg>
      ),
    },
    {
      title: 'JavaScript',
      category: 'Core Language',
      color: '#F7DF1E',
      desc: 'ES6+, asynchronous programming, DOM manipulations, and dynamic client functionality.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M6.5 18.5c.3.5.7.8 1.3.8.7 0 1.2-.4 1.2-1.3v-6.5h1.9v6.5c0 2-1.2 3-2.9 3-1.4 0-2.3-.6-2.8-1.7l1.3-.8zm7.3 1.8c.6.4 1.4.7 2.3.7 1.4 0 2.2-.7 2.2-1.8 0-1-.6-1.5-1.9-2.1-.9-.4-1.6-.7-2.1-1.1-.7-.6-1-1.4-1-2.2 0-1.7 1.3-2.9 3.2-2.9 1.1 0 2 .3 2.6.7l-.7 1.6c-.5-.3-1.1-.6-1.9-.6-1 0-1.5.5-1.5 1.2 0 .8.5 1.2 1.6 1.7.9.4 1.7.7 2.2 1.1.8.6 1.2 1.4 1.2 2.5 0 1.9-1.4 3.1-3.6 3.1-1.2 0-2.3-.4-3-1l.7-1.9z" fill="#000000" />
        </svg>
      ),
    },
    {
      title: 'HTML5',
      category: 'Structure',
      color: '#E34F26',
      desc: 'Semantic web structuring, accessibility (WCAG), and modern SEO standards.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26" />
        </svg>
      ),
    },
    {
      title: 'CSS3',
      category: 'Styling',
      color: '#1572B6',
      desc: 'Responsive grid & flexbox layouts, animations, transitions, and modern UI effects.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6" />
        </svg>
      ),
    },
    {
      title: 'Laravel',
      category: 'PHP Framework',
      color: '#FF2D20',
      desc: 'Full-featured backend applications, RESTful APIs, Eloquent ORM, and MVC architectures.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <path d="M23.642 5.43a.364.364 0 0 1 .014.1v4.494c0 .135-.073.26-.19.326l-3.765 2.173v4.307c0 .135-.072.26-.189.326L8.05 23.556a.33.33 0 0 1-.168 0 .346.346 0 0 1-.19-.326V12.622L3.93 10.45a.364.364 0 0 1-.19-.326V5.53a.33.33 0 0 1 .014-.1.348.348 0 0 1 .176-.226L11.716.426a.33.33 0 0 1 .336 0l7.786 4.478a.348.348 0 0 1 .176.226v.3zM12.05 1.095l-7.097 4.082 7.097 4.082 7.096-4.082-7.096-4.082zm-7.42 4.913v3.654l3.41 1.969V7.977l-3.41-1.969zm3.795 16.666l7.096-4.082v-8.164l-3.41 1.969v3.744c0 .135-.072.26-.189.326l-3.497 2.018v4.189zm7.48-4.453l3.41-1.969V6.008l-3.41 1.969v7.244z" fill="#FF2D20" />
        </svg>
      ),
    },
    {
      title: 'Node.js',
      category: 'Runtime Environment',
      color: '#339933',
      desc: 'Server-side JavaScript runtime for scalable web backends, APIs, and microservices.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.074 6.68c-.084.049-.138.145-.138.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 20.16c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.281.164-.6.248-.926.248z" fill="#339933" />
        </svg>
      ),
    },
    {
      title: 'Flutter',
      category: 'Mobile Framework',
      color: '#02569B',
      desc: 'Cross-platform mobile application development with beautiful reactive widgets and Dart.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" fill="#02569B" />
          <path d="M14.328 11.072l-4.5 4.5 4.5 4.5h7.37l-6.46-6.46 6.46-6.46h-7.37z" fill="#29B6F6" opacity="0.85" />
        </svg>
      ),
    },
    {
      title: 'Bootstrap',
      category: 'CSS Framework',
      color: '#7952B3',
      desc: 'Rapid UI prototyping, responsive grid systems, and battle-tested accessible components.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <path d="M6.5 6.5h4.6c1.8 0 3 .9 3 2.3 0 1-.6 1.7-1.4 2 1.1.3 1.9 1.1 1.9 2.4 0 1.6-1.3 2.6-3.3 2.6H6.5V6.5zm2.3 3.8h2.2c.7 0 1.2-.4 1.2-1 0-.6-.5-1-1.2-1H8.8v2zm0 3.6h2.5c.8 0 1.4-.4 1.4-1.1 0-.7-.6-1.1-1.4-1.1H8.8v2.2z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      title: 'Git',
      category: 'Version Control',
      color: '#F05032',
      desc: 'Source code versioning, branch management, collaborative workflows, and rebasing.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L.452 10.93c-.603.603-.603 1.582 0 2.188L10.88 23.546c.604.603 1.582.603 2.188 0l10.478-10.428c.604-.603.604-1.582 0-2.188z" fill="#F05032" />
          <path d="M12 15.351c-1.854 0-3.35-1.498-3.35-3.351 0-1.854 1.496-3.351 3.35-3.351 1.854 0 3.351 1.497 3.351 3.351 0 1.853-1.497 3.351-3.351 3.351z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      title: 'GitHub',
      category: 'DevOps & Hosting',
      color: '#E6EDF3',
      desc: 'Repository hosting, pull requests, CI/CD automated deployments, and open-source collaboration.',
      icon: (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#F0F6FC" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="content-section section horizontal-panel"
      id="about"
      aria-labelledby="about-title"
    >
      <span className="about-shine" aria-hidden="true" />
      <div className="section-number">02</div>
      <p className="section-kicker">GET TO KNOW ME</p>
      <h2 id="about-title">
        About <span>me</span>
      </h2>
      <p className="section-intro">
        I'm Moch Arisandi Jayanto, an Informatics graduate from Universitas Jember with a strong
        foundation in web development, software engineering, and information technology. I'm
        passionate about building responsive, user-friendly web applications and developing
        innovative digital solutions that deliver practical value and enhance user experiences.
      </p>

      {/* Group 1: Core Competencies */}
      <div className="about-subtitle-wrap">
        <h3 className="about-subtitle">
          <span>Core Competencies</span>
        </h3>
        <p className="about-subdesc">Key engineering disciplines and specialized strengths.</p>
      </div>
      <div className="competencies-grid">
        {coreCompetencies.map(({ title, badge, desc, icon }) => (
          <article className="competency-card" key={title}>
            <div className="card-top-row">
              <div className="competency-icon">{icon}</div>
              <span className="card-badge">{badge}</span>
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </article>
        ))}
      </div>

      {/* Group 2: Tech Stack & Tools */}
      <div className="about-subtitle-wrap" style={{ marginTop: '48px' }}>
        <h3 className="about-subtitle">
          <span>Technologies &amp; Tools</span>
        </h3>
        <p className="about-subdesc">Languages, libraries, frameworks, and modern developer tooling.</p>
      </div>
      <div className="tech-stack-grid">
        {techStack.map(({ title, category, color, desc, icon }) => (
          <article
            className="tech-card"
            key={title}
            style={{ '--tech-color': color }}
          >
            <div className="tech-card-header">
              <div className="tech-icon-box">{icon}</div>
              <span className="tech-category-pill">{category}</span>
            </div>
            <div className="tech-card-body">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
