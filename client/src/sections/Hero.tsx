import { useEffect, useRef } from 'react';

/**
 * Hero Section - Ethereal Wedding Introduction
 * Design: Warm orange/cream gradient with floating decorative elements
 * Animation: Entrance timeline with scroll parallax effects
 */

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const namesRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth entrance animations
    const elements = [namesRef.current, subtitleRef.current, dateRef.current];
    elements.forEach((el, idx) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
          el.style.transition = 'all 1s ease-out';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + idx * 200);
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dreamy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/60 via-white to-orange-50/40" />
      
      {/* Floating orbs - dreamlike atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-orange-100/25 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Decorative mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 animate-rotate-slow" style={{ animationDuration: '120s' }}>
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
            <circle cx="200" cy="200" r="190" stroke="#FF6B35" strokeWidth="0.3" strokeDasharray="2 6" />
            <circle cx="200" cy="200" r="160" stroke="#FF8C69" strokeWidth="0.4" />
            <circle cx="200" cy="200" r="130" stroke="#FF6B35" strokeWidth="0.3" strokeDasharray="8 8" />
            <circle cx="200" cy="200" r="100" stroke="#FFB088" strokeWidth="0.5" />
            {[...Array(8)].map((_, i) => (
              <ellipse
                key={i}
                cx="200"
                cy="50"
                rx="15"
                ry="30"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="0.3"
                transform={`rotate(${i * 45} 200 200)`}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Couple Names */}
        <h1
          ref={namesRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-textdark mb-6 tracking-wide text-shadow-soft"
        >
          <span className="block sm:inline">Abdul-Hamid Taiwo</span>
          <span className="block text-orange-500 my-3 sm:my-0 sm:mx-6 text-3xl sm:text-4xl">&</span>
          <span className="block sm:inline">Zainab Titilope</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-body text-sm sm:text-base tracking-[0.4em] uppercase text-textgray/80 mb-10"
        >
          Are Getting Married
        </p>

        {/* Date - dreamlike pill */}
        <div
          ref={dateRef}
          className="inline-flex items-center gap-6 px-10 py-5 dream-card rounded-full"
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-orange-300" />
          <span className="font-display text-2xl sm:text-3xl text-orange-500 font-medium">
            April 11, 2026
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-orange-300" />
        </div>
      </div>

      {/* Scroll indicator - ethereal */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs text-textgray/60 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-7 h-12 border-2 border-orange-200/60 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-orange-400/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
