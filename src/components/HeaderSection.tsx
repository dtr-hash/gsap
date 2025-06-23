import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const HeaderSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
          );
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="header" className="full-vh" ref={sectionRef}>
      <h1 ref={headingRef} className="centered-heading">
        Im here
      </h1>
    </section>
  );
};

export default HeaderSection; 