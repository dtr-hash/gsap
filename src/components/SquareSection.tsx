import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SquareSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            boxRefs.current,
            { opacity: 0, rotate: -180 },
            { opacity: 1, rotate: 0, duration: 1, ease: 'back.out(1.7)', stagger: 0.2 }
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
      {[0, 1, 2, 3].map((i) => (
        <div
          className="square-box"
          key={i}
          ref={el => { boxRefs.current[i] = el; }}
        />
      ))}
    </section>
  );
};

export default SquareSection; 