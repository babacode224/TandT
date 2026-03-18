import { useRef, useEffect } from 'react';
import CountdownTimer from '@/components/CountdownTimer';

/**
 * Hero Section - Ethereal Wedding Introduction with Bismillah
 * Design: Orange color scheme with floating decorative elements
 * Animation: Entrance timeline with scroll parallax effects
 */

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bismillahRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const floatingOrbsRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial states
    const elements = [bismillahRef.current, namesRef.current, subtitleRef.current, dateRef.current];
    elements.forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
      }
    });

    if (decorRef.current) {
      decorRef.current.style.opacity = '0';
      decorRef.current.style.transform = 'scale(0.5) rotate(-10deg)';
    }

    if (floatingOrbsRef.current) {
      floatingOrbsRef.current.style.opacity = '0';
    }

    // Entrance timeline - dreamlike sequence
    let delay = 500;

    // Floating orbs fade in
    if (floatingOrbsRef.current) {
      setTimeout(() => {
        floatingOrbsRef.current!.style.transition = 'opacity 2s ease-out';
        floatingOrbsRef.current!.style.opacity = '1';
      }, delay);
    }

    // Decorative mandala
    delay += 500;
    if (decorRef.current) {
      setTimeout(() => {
        decorRef.current!.style.transition = 'all 2s ease-out';
        decorRef.current!.style.opacity = '0.15';
        decorRef.current!.style.transform = 'scale(1) rotate(0)';
      }, delay);
    }

    // Bismillah
    delay += 500;
    if (bismillahRef.current) {
      setTimeout(() => {
        bismillahRef.current!.style.transition = 'all 1.5s ease-out';
        bismillahRef.current!.style.opacity = '1';
        bismillahRef.current!.style.transform = 'translateY(0)';
      }, delay);
    }

    // Names
    delay += 300;
    if (namesRef.current) {
      setTimeout(() => {
        namesRef.current!.style.transition = 'all 1.2s ease-out';
        namesRef.current!.style.opacity = '1';
        namesRef.current!.style.transform = 'translateY(0)';
      }, delay);
    }

    // Subtitle
    delay += 300;
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current!.style.transition = 'all 1s ease-out';
        subtitleRef.current!.style.opacity = '1';
        subtitleRef.current!.style.transform = 'translateY(0)';
      }, delay);
    }

    // Date
    delay += 300;
    if (dateRef.current) {
      setTimeout(() => {
        dateRef.current!.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
        dateRef.current!.style.opacity = '1';
        dateRef.current!.style.transform = 'translateY(0)';
      }, delay);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Picture 1 */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/1_b5beb266.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Dreamy gradient overlay - ORANGE */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-white/30 to-orange-50/40" />
      
      {/* Floating orbs - dreamlike atmosphere */}
      <div ref={floatingOrbsRef} className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-orange-200/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-orange-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-orange-100/25 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Decorative mandala */}
      <div
        ref={decorRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] pointer-events-none"
      >
        <div className="absolute inset-0 animate-rotate-slow" style={{ animationDuration: '120s' }}>
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
            <circle cx="200" cy="200" r="190" stroke="#FF6B35" strokeWidth="0.3" strokeDasharray="2 6" />
            <circle cx="200" cy="200" r="160" stroke="#FF8C69" strokeWidth="0.4" />
            <circle cx="200" cy="200" r="130" stroke="#FF6B35" strokeWidth="0.3" strokeDasharray="8 8" />
            <circle cx="200" cy="200" r="100" stroke="#FFAA88" strokeWidth="0.5" />
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
        {/* Bismillah Calligraphy - PROMINENT */}
        <div ref={bismillahRef} className="mb-6 sm:mb-10 animate-scale-breathe">
          <div className="inline-block">
            <p className="font-arabic text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-orange-600 leading-relaxed mb-3 sm:mb-6 text-shadow-glow">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="font-body text-[10px] sm:text-xs md:text-sm text-orange-500/70 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              In the name of Allah, the Most Gracious the Most Merciful
            </p>
          </div>
        </div>

        {/* Couple Names */}
        <h1
          ref={namesRef}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-textdark mb-4 sm:mb-6 tracking-wide text-shadow-soft"
        >
          <span className="block sm:inline text-xl sm:text-4xl md:text-5xl lg:text-6xl">Abdul-Hamid Taiwo</span>
          <span className="block text-orange-600 my-2 sm:my-0 sm:mx-4 md:mx-6 text-lg sm:text-3xl md:text-4xl">&</span>
          <span className="block sm:inline text-xl sm:text-4xl md:text-5xl lg:text-6xl">Zainab Titilope</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-body text-xs sm:text-sm md:text-base tracking-[0.3em] sm:tracking-[0.4em] uppercase text-textgray/80 mb-6 sm:mb-10"
        >
          Are Getting Married
        </p>

        {/* Date - dreamlike pill */}
        <div
          ref={dateRef}
          className="inline-flex items-center gap-3 sm:gap-6 px-4 sm:px-8 md:px-10 py-3 sm:py-5 dream-card rounded-full flex-wrap justify-center"
        >
          <div className="hidden sm:block w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-orange-300" />
          <span className="font-display text-lg sm:text-2xl md:text-3xl text-orange-600 font-medium">
            April 11, 2026
          </span>
          <div className="hidden sm:block w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-orange-300" />
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <CountdownTimer />
        </div>
      </div>

      {/* Scroll indicator - ethereal */}
      <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3">
        <span className="text-[10px] sm:text-xs text-textgray/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 sm:w-7 h-10 sm:h-12 border-2 border-orange-200/60 rounded-full flex justify-center pt-1 sm:pt-2">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-orange-400/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
