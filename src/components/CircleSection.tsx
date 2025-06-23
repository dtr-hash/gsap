import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CircleSection: React.FC = () => {
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
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: 'bounce.out', stagger: 0.15 }
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
      {[0, 1, 2].map((i) => (
        <div
          className="circle-box"
          key={i}
          ref={el => { boxRefs.current[i] = el; }}
        />
      ))}
    </section>
  );
};

export default CircleSection; 