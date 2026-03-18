import { MapPin, Clock, Calendar, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

/**
 * Nikkah Section - Islamic Marriage Ceremony Details
 * Design: Two-column layout with image on left, details on right
 * Animation: Staggered content reveal
 */

const Nikkah = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate image
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'translateX(-40px) scale(0.95)';
      setTimeout(() => {
        imageRef.current!.style.transition = 'all 1s ease-out';
        imageRef.current!.style.opacity = '1';
        imageRef.current!.style.transform = 'translateX(0) scale(1)';
      }, 200);
    }

    // Animate content items
    const items = contentRef.current?.querySelectorAll('.animate-item');
    if (items) {
      items.forEach((item, idx) => {
        (item as HTMLElement).style.opacity = '0';
        (item as HTMLElement).style.transform = 'translateY(20px)';
        setTimeout(() => {
          (item as HTMLElement).style.transition = 'all 0.7s ease-out';
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).style.transform = 'translateY(0)';
        }, 400 + idx * 100);
      });
    }
  }, []);

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=The+Event+Tower+MKO+Abiola+Stadium+Presidential+Boulevard+Kuto+Abeokuta', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Dreamy background - BLUE */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated dream-glow">
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-white/40 rounded-2xl z-10 pointer-events-none" />
              
              {/* Image */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/WhatsAppImage2026-03-18at1.44.02PM_3819bfb3.jpeg"
                alt="The Nikkah"
                className="w-full h-[500px] sm:h-[600px] object-cover"
              />
              
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-elevated p-5 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-body text-xs text-textgray uppercase tracking-wide">Date</p>
                  <p className="font-display text-lg text-textdark">April 11, 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="lg:pl-8">
            {/* Heading */}
            <div className="mb-10 animate-item">
              <span className="inline-block px-5 py-2 bg-blue-100/80 text-blue-600 text-xs tracking-[0.2em] uppercase rounded-full mb-6">
                Ceremony
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-textdark mb-3">
                The Nikkah
              </h2>
              <p className="font-display text-2xl text-blue-500 italic">
                A Sacred Covenant
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-textgray/80 leading-relaxed mb-10 max-w-md animate-item">
              The Nikkah is the sacred Islamic marriage ceremony where we begin our journey 
              together under the blessings of Allah. We invite you to witness this beautiful 
              moment as we unite in faith and love.
            </p>

            {/* Details */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4 animate-item">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-textdark">Date</h4>
                  <p className="font-body text-textgray/70">Saturday, April 11, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-item">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-textdark">Time</h4>
                  <p className="font-body text-textgray/70">11:00 AM - 1:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-item">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-textdark">Venue</h4>
                  <p className="font-body text-textgray/70">The Event Tower</p>
                  <p className="font-body text-sm text-textgray/60">
                    Adjacent MKO Abiola Stadium, Presidential Boulevard, Kuto, Abeokuta
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-item">
              <Button
                onClick={handleGetDirections}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full font-body text-sm tracking-wide transition-all duration-500 hover:shadow-lg hover:scale-105"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>

            {/* Decorative quote */}
            <div className="mt-12 pt-8 border-t border-blue-100 animate-item">
              <p className="font-arabic text-2xl text-blue-500 text-center leading-relaxed animate-pulse-glow">
                وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ
              </p>
              <p className="font-body text-xs text-textgray/60 text-center mt-2">
                "And marry the unmarried among you" - Quran 24:32
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nikkah;
