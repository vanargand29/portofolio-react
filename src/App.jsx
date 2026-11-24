import { useRef, useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import './styles/global.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/resume.css';
import './styles/contact.css';

const navSections = ['home', 'about', 'projects', 'resume', 'contact'];

export default function App() {
  const trackRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');
  const slideRafRef = useRef(0);
  const wheelLockedRef = useRef(false);

  const updateActiveNav = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const activeIndex = Math.min(
      Math.round(track.scrollLeft / track.clientWidth),
      navSections.length - 1
    );
    setActiveSection(navSections[activeIndex]);

    const panels = track.querySelectorAll('.horizontal-panel');
    panels.forEach((p, idx) => {
      p.classList.toggle('is-active', idx === activeIndex);
    });
  }, []);

  // Smooth scroll to a specific horizontal panel
  const scrollToPanel = useCallback(
    (sectionId, behavior = 'smooth') => {
      const track = trackRef.current;
      if (!track) return;
      const panel = track.querySelector(`#${sectionId}`);
      if (!panel) return;

      const trackLeft = track.getBoundingClientRect().left;
      const panelLeft = panel.getBoundingClientRect().left;
      const startLeft = track.scrollLeft;
      const targetLeft = startLeft + panelLeft - trackLeft;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.cancelAnimationFrame(slideRafRef.current);

      if (behavior === 'instant' || reduceMotion || Math.abs(targetLeft - startLeft) < 1) {
        track.scrollLeft = targetLeft;
        updateActiveNav();
        return;
      }

      const duration = 560;
      const startedAt = performance.now();
      track.style.scrollSnapType = 'none';

      const animate = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress =
          progress < 0.5
            ? 4 * progress ** 3
            : 1 - (-2 * progress + 2) ** 3 / 2;

        track.scrollLeft = startLeft + (targetLeft - startLeft) * easedProgress;

        if (progress < 1) {
          slideRafRef.current = window.requestAnimationFrame(animate);
        } else {
          track.scrollLeft = targetLeft;
          track.style.scrollSnapType = '';
          updateActiveNav();
        }
      };

      slideRafRef.current = window.requestAnimationFrame(animate);
    },
    [updateActiveNav]
  );

  // Bubble cursor effect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/cursor-effects@latest/dist/browser.js';
    script.onload = () => {
      if (
        window.cursoreffects &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        new window.cursoreffects.bubbleCursor({
          fillColor: '#ff8c00',
          strokeColor: '#fff0c2',
        });
        document.querySelector('canvas')?.classList.add('bubble-cursor-glow');
      }
    };
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  // Wheel and touch events for smooth horizontal sliding
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let touchStartY = 0;
    let touchEndY = 0;

    const onWheel = (event) => {
      if (
        document.body.classList.contains('modal-open') ||
        document.querySelector('.project-modal, .image-modal, .alert-modal')
      ) {
        return;
      }

      const panel = event.target.closest('.horizontal-panel');
      const isVerticalWheel = Math.abs(event.deltaY) > Math.abs(event.deltaX);

      if (!panel || !isVerticalWheel) return;

      const canScrollPanel = panel.scrollHeight > panel.clientHeight;
      const panelCanMoveVertically =
        event.deltaY < 0
          ? panel.scrollTop > 0
          : panel.scrollTop + panel.clientHeight < panel.scrollHeight - 1;

      if (canScrollPanel && panelCanMoveVertically) return;

      event.preventDefault();
      if (wheelLockedRef.current) return;

      const panels = Array.from(track.querySelectorAll('.horizontal-panel'));
      const currentIndex = Math.round(track.scrollLeft / track.clientWidth);
      const nextIndex = Math.max(
        0,
        Math.min(currentIndex + Math.sign(event.deltaY), panels.length - 1)
      );

      if (nextIndex === currentIndex) return;

      wheelLockedRef.current = true;
      scrollToPanel(panels[nextIndex].id);
      window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, 650);
    };

    const onTouchStart = (event) => {
      if (
        document.body.classList.contains('modal-open') ||
        document.querySelector('.project-modal, .image-modal, .alert-modal')
      ) {
        return;
      }
      touchStartY = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      if (
        document.body.classList.contains('modal-open') ||
        document.querySelector('.project-modal, .image-modal, .alert-modal')
      ) {
        return;
      }
      const panel = event.target.closest('.horizontal-panel');
      if (!panel) return;

      const canScrollPanel = panel.scrollHeight > panel.clientHeight;
      const panelCanMoveVertically =
        event.touches[0].clientY < touchStartY
          ? panel.scrollTop + panel.clientHeight < panel.scrollHeight - 1
          : panel.scrollTop > 0;

      if (canScrollPanel && panelCanMoveVertically) return;

      touchEndY = event.touches[0].clientY;
    };

    const onTouchEnd = (event) => {
      if (
        document.body.classList.contains('modal-open') ||
        document.querySelector('.project-modal, .image-modal, .alert-modal')
      ) {
        return;
      }
      const panel = event.target.closest('.horizontal-panel');
      if (!panel) return;

      const swipeDistance = touchStartY - touchEndY;
      const minSwipeDistance = 50;

      if (Math.abs(swipeDistance) < minSwipeDistance) return;

      const canScrollPanel = panel.scrollHeight > panel.clientHeight;
      const panelCanMoveVertically =
        swipeDistance > 0
          ? panel.scrollTop + panel.clientHeight < panel.scrollHeight - 1
          : panel.scrollTop > 0;

      if (canScrollPanel && panelCanMoveVertically) return;
      if (wheelLockedRef.current) return;

      const panels = Array.from(track.querySelectorAll('.horizontal-panel'));
      const currentIndex = Math.round(track.scrollLeft / track.clientWidth);
      const nextIndex = Math.max(
        0,
        Math.min(currentIndex + Math.sign(swipeDistance), panels.length - 1)
      );

      if (nextIndex === currentIndex) return;

      wheelLockedRef.current = true;
      scrollToPanel(panels[nextIndex].id);
      window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, 650);
    };

    track.scrollLeft = 0;
    updateActiveNav();

    track.addEventListener('wheel', onWheel, { passive: false });
    track.addEventListener('touchstart', onTouchStart, { passive: true });
    track.addEventListener('touchmove', onTouchMove, { passive: true });
    track.addEventListener('touchend', onTouchEnd, { passive: true });
    track.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('resize', updateActiveNav);

    return () => {
      track.removeEventListener('wheel', onWheel);
      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchmove', onTouchMove);
      track.removeEventListener('touchend', onTouchEnd);
      track.removeEventListener('scroll', updateActiveNav);
      window.removeEventListener('resize', updateActiveNav);
      window.cancelAnimationFrame(slideRafRef.current);
    };
  }, [scrollToPanel, updateActiveNav]);

  return (
    <>
      <Header
        activeSection={activeSection}
        onNavigate={scrollToPanel}
      />
      <main
        className="horizontal-track"
        id="horizontalTrack"
        ref={trackRef}
        aria-label="Portfolio content, scroll sideways"
        tabIndex={0}
      >
        <HeroSection onNavigate={scrollToPanel} />
        <AboutSection />
        <ProjectsSection onNavigate={scrollToPanel} />
        <ResumeSection />
        <ContactSection />
      </main>
    </>
  );
}
