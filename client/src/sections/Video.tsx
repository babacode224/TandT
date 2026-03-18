import { Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

/**
 * Video Section - Wedding Video Highlight
 * Design: Full-width video player with overlay
 * Animation: Entrance animation on scroll
 */

const Video = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate video container
    if (videoContainerRef.current) {
      videoContainerRef.current.style.opacity = '0';
      videoContainerRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        videoContainerRef.current!.style.transition = 'all 1s ease-out';
        videoContainerRef.current!.style.opacity = '1';
        videoContainerRef.current!.style.transform = 'scale(1)';
      }, 200);
    }

    // Animate play button
    if (playButtonRef.current) {
      playButtonRef.current.style.opacity = '0';
      setTimeout(() => {
        playButtonRef.current!.style.transition = 'all 0.8s ease-out';
        playButtonRef.current!.style.opacity = '1';
      }, 600);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Dreamy background - ORANGE */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10 animate-float-slow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" fill="#FF6B35" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-10 w-24 h-24 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" fill="#FF8C69" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-5 py-2 bg-orange-100/80 text-orange-600 text-xs tracking-[0.2em] uppercase rounded-full mb-6">
            Our Moment
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-textdark mb-6">
            Wedding Highlights
          </h2>
          <p className="font-body text-textgray/70 max-w-2xl mx-auto">
            Relive the beautiful moments from our special day
          </p>
        </div>

        {/* Video Container */}
        <div
          ref={videoContainerRef}
          className="relative rounded-3xl overflow-hidden shadow-elevated dream-glow"
        >
          {/* Video */}
          <video
            className="w-full h-auto"
            controls
            preload="metadata"
            poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/1_b5beb266.jpeg"
          >
            <source
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/WhatsAppVideo2026-03-18at1.28.58PM_90cac661.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Video;
