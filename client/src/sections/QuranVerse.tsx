import { Heart } from 'lucide-react';
import { useEffect, useRef } from 'react';

/**
 * Quran Verse Section - Islamic Blessings
 * Design: Centered verse with decorative elements
 * Animation: Staggered text reveal with decorative animations
 */

const QuranVerse = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const arabicRef = useRef<HTMLParagraphElement>(null);
  const translationRef = useRef<HTMLParagraphElement>(null);
  const referenceRef = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate decorative elements
    if (decorRef.current) {
      decorRef.current.style.opacity = '0';
      decorRef.current.style.transform = 'scale(0.8)';
      setTimeout(() => {
        decorRef.current!.style.transition = 'all 1.2s ease-out';
        decorRef.current!.style.opacity = '1';
        decorRef.current!.style.transform = 'scale(1)';
      }, 200);
    }

    // Animate Arabic text
    if (arabicRef.current) {
      arabicRef.current.style.opacity = '0';
      arabicRef.current.style.transform = 'translateY(30px) scale(0.95)';
      setTimeout(() => {
        arabicRef.current!.style.transition = 'all 1.2s ease-out';
        arabicRef.current!.style.opacity = '1';
        arabicRef.current!.style.transform = 'translateY(0) scale(1)';
      }, 400);
    }

    // Animate translation
    if (translationRef.current) {
      translationRef.current.style.opacity = '0';
      translationRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        translationRef.current!.style.transition = 'all 0.8s ease-out';
        translationRef.current!.style.opacity = '1';
        translationRef.current!.style.transform = 'translateY(0)';
      }, 700);
    }

    // Animate reference
    if (referenceRef.current) {
      referenceRef.current.style.opacity = '0';
      referenceRef.current.style.transform = 'translateY(15px)';
      setTimeout(() => {
        referenceRef.current!.style.transition = 'all 0.6s ease-out';
        referenceRef.current!.style.opacity = '1';
        referenceRef.current!.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 lg:py-48 overflow-hidden"
    >
      {/* Dreamy gradient background - BLUE */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />
      
      {/* Floating orbs - ethereal */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '5s' }} />
      </div>

      {/* Decorative mandala */}
      <div
        ref={decorRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
      >
        <div className="absolute inset-0 animate-rotate-slow" style={{ animationDuration: '180s' }}>
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-5">
            <circle cx="200" cy="200" r="180" stroke="#2563EB" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" stroke="#60A5FA" strokeWidth="0.4" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="120" stroke="#93C5FD" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="90" stroke="#2563EB" strokeWidth="0.3" strokeDasharray="8 8" />
          </svg>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-16 left-16 w-16 h-16 opacity-10 animate-float-slow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L40 0L40 8L8 8L8 40L0 40L0 0Z" fill="#2563EB" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-16 w-16 h-16 opacity-10 rotate-180 animate-float">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L40 0L40 8L8 8L8 40L0 40L0 0Z" fill="#60A5FA" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section label */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-blue-300" />
          <Heart className="w-5 h-5 text-blue-400 fill-blue-400" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-blue-300" />
        </div>

        {/* Arabic Verse - with ethereal glow */}
        <p
          ref={arabicRef}
          className="font-arabic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-600 leading-relaxed mb-10 text-shadow-glow"
          dir="rtl"
        >
          وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>

        {/* Translation */}
        <p
          ref={translationRef}
          className="font-display text-2xl sm:text-3xl md:text-4xl text-textdark italic mb-8"
        >
          "And He put between you affection and mercy"
        </p>

        {/* Reference */}
        <p
          ref={referenceRef}
          className="font-body text-sm text-blue-600/80 tracking-[0.2em] uppercase"
        >
          — Quran 30:21 —
        </p>

        {/* Bottom decoration - ethereal dots */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse" />
            <div className="w-2.5 h-2.5 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="w-2.5 h-2.5 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranVerse;
