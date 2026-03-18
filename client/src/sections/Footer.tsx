import { Heart, Instagram } from 'lucide-react';
import { useEffect, useRef } from 'react';

/**
 * Footer Section - Closing Message and Social Links
 * Design: Full-height section with background image and overlay
 * Animation: Staggered content reveal
 */

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLHeadingElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const hashtagRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animate content container
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
      setTimeout(() => {
        contentRef.current!.style.transition = 'opacity 1.2s ease-out';
        contentRef.current!.style.opacity = '1';
      }, 200);
    }

    // Animate names
    if (namesRef.current) {
      namesRef.current.style.opacity = '0';
      namesRef.current.style.transform = 'translateY(30px)';
      setTimeout(() => {
        namesRef.current!.style.transition = 'all 1s ease-out';
        namesRef.current!.style.opacity = '1';
        namesRef.current!.style.transform = 'translateY(0)';
      }, 400);
    }

    // Animate date
    if (dateRef.current) {
      dateRef.current.style.opacity = '0';
      dateRef.current.style.transform = 'scale(0.9)';
      setTimeout(() => {
        dateRef.current!.style.transition = 'all 0.8s ease-out';
        dateRef.current!.style.opacity = '1';
        dateRef.current!.style.transform = 'scale(1)';
      }, 600);
    }

    // Animate hashtag
    if (hashtagRef.current) {
      hashtagRef.current.style.opacity = '0';
      hashtagRef.current.style.transform = 'translateY(15px)';
      setTimeout(() => {
        hashtagRef.current!.style.transition = 'all 0.6s ease-out';
        hashtagRef.current!.style.opacity = '1';
        hashtagRef.current!.style.transform = 'translateY(0)';
      }, 800);
    }
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/WhatsAppImage2026-03-18at1.24.52PM_04ed8541.jpeg"
          alt="Wedding Rings"
          className="w-full h-full object-cover"
        />
        {/* Dreamy gradient overlay - ORANGE */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-100/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pt-40 sm:pt-52"
      >
        {/* Decorative line - ethereal */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-orange-300" />
          <Heart className="w-6 h-6 text-orange-400 fill-orange-400" />
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-orange-300" />
        </div>

        {/* Names */}
        <h2
          ref={namesRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-textdark mb-8 text-shadow-soft"
        >
          <span className="block sm:inline">Abdul-Hamid Taiwo</span>
          <span className="block text-orange-600 my-3 sm:my-0 sm:mx-6 text-2xl sm:text-3xl">&</span>
          <span className="block sm:inline">Zainab Titilope</span>
        </h2>

        {/* Date - dreamlike pill */}
        <div
          ref={dateRef}
          className="inline-flex items-center gap-6 px-10 py-5 dream-card rounded-full mb-8"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-orange-300" />
          <span className="font-display text-2xl sm:text-3xl text-orange-600 font-medium">
            April 11, 2026
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-orange-300" />
        </div>

        {/* Hashtag */}
        <p
          ref={hashtagRef}
          className="font-body text-sm text-textgray/70 tracking-wide mb-12"
        >
          Share your memories with{' '}
          <span className="text-orange-600 font-medium">#TaiwoTilope2026</span>
        </p>

        {/* Social link */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-textgray/70 hover:text-orange-600 transition-colors duration-500"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-body text-sm">Follow our journey</span>
        </a>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-textgray/50">
              Made with love for our special day
            </p>
            <div className="flex items-center gap-2">
              <Heart className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
              <span className="font-body text-xs text-textgray/50">
                Forever begins here
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-32 left-16 w-14 h-14 opacity-10 animate-float-slow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" fill="#FF6B35" />
        </svg>
      </div>
      <div className="absolute top-48 right-16 w-10 h-10 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" fill="#FF8C69" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
