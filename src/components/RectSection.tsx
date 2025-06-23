import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const RectSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            boxRefs.current[0],
            { x: -300, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power4.out' }
          );
          gsap.fromTo(
            boxRefs.current[1],
            { x: 300, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
          );
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex-section full-vh" id="" ref={sectionRef}>
      {[0, 1].map((i) => (
        <div
          className="rect-box"
          key={i}
          ref={el => { boxRefs.current[i] = el; }}
        />
      ))}
    </section>
  );
};

export default RectSection; 