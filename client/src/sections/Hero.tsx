import { useEffect, useRef } from 'react';
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
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/hero-bg_c8c4d1b1.jpg)',
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

      {/* Decorative mandala SVG */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:flex items-center justify-center">
        <svg className="w-96 h-96 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-orange-600" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-orange-600" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-orange-600" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-orange-600" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line key={angle} x1="100" y1="100" x2={100 + 90 * Math.cos((angle * Math.PI) / 180)} y2={100 + 90 * Math.sin((angle * Math.PI) / 180)} stroke="currentColor" strokeWidth="0.5" className="text-orange-600" />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Bismillah */}
        <div ref={bismillahRef} className="mb-8 sm:mb-12">
          <p className="font-amiri text-2xl sm:text-3xl md:text-4xl text-orange-700 mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="text-xs sm:text-sm md:text-base text-orange-600 tracking-wide">IN THE NAME OF ALLAH, THE MOST GRACIOUS THE MOST MERCIFUL</p>
        </div>

        {/* Names */}
        <h1 ref={namesRef} className="font-serif text-3xl sm:text-4xl md:text-6xl text-gray-800 mb-4 sm:mb-6">
          Abdul-Hamid Taiwo & Zainab
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 font-light">
          A union blessed by Allah, built on faith, love, and devotion
        </p>

        {/* Countdown Timer */}
        <div ref={dateRef} className="mb-8 sm:mb-12">
          <CountdownTimer />
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center items-center gap-2 text-orange-600 text-sm animate-bounce">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
