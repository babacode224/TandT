import { MapPin, Clock, Calendar, Navigation, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

/**
 * Celebration Section - Wedding Reception Details
 * Design: Full-width background with glass card overlay on right
 * Animation: Parallax background with card entrance
 */

const Celebration = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate card
    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(40px)';
      setTimeout(() => {
        cardRef.current!.style.transition = 'all 1s ease-out';
        cardRef.current!.style.opacity = '1';
        cardRef.current!.style.transform = 'translateY(0)';
      }, 300);
    }

    // Animate card items
    const cardItems = cardRef.current?.querySelectorAll('.card-item');
    if (cardItems) {
      cardItems.forEach((item, idx) => {
        (item as HTMLElement).style.opacity = '0';
        (item as HTMLElement).style.transform = 'translateY(15px)';
        setTimeout(() => {
          (item as HTMLElement).style.transition = 'all 0.6s ease-out';
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).style.transform = 'translateY(0)';
        }, 500 + idx * 80);
      });
    }
  }, []);

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=The+Event+Tower+MKO+Abiola+Stadium+Presidential+Boulevard+Kuto+Abeokuta', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 lg:py-0 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/celebration-venue_b42067b3.jpg"
          alt="Wedding Celebration Venue"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Dreamy overlay - ORANGE */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-4 sm:px-6 lg:px-16 py-16">
        {/* Glass Card - dreamlike */}
        <div ref={cardRef} className="w-full max-w-lg lg:ml-auto">
          <div className="dream-card rounded-3xl p-8 sm:p-10">
            {/* Header */}
            <div className="card-item mb-8">
              <span className="inline-block px-5 py-2 bg-orange-100/80 text-orange-600 text-xs tracking-[0.2em] uppercase rounded-full mb-6">
                Reception
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-textdark mb-3">
                The Celebration
              </h2>
              <p className="font-display text-xl text-orange-500 italic">
                Join us in celebrating our union
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-textgray/80 leading-relaxed mb-8 card-item">
              We invite our beloved family and friends to join 
              us for an evening of joy, delicious food, and beautiful memories as we 
              celebrate the beginning of our new chapter together.
            </p>

            {/* Details */}
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 card-item">
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-textdark">Date</h4>
                  <p className="font-body text-textgray/70">Saturday, April 11, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4 card-item">
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-textdark">Time</h4>
                  <p className="font-body text-textgray/70">11:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 card-item">
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-textdark">Venue</h4>
                  <p className="font-body text-textgray/70">The Event Tower</p>
                  <p className="font-body text-sm text-textgray/60">
                    Adjacent MKO Abiola Stadium, Presidential Boulevard, Kuto, Abeokuta
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 card-item">
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-textdark">Dress Code</h4>
                  <p className="font-body text-textgray/70">WHITE & ORANGE</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="card-item">
              <Button
                onClick={handleGetDirections}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-full font-body text-sm tracking-wide transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions to Venue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebration;
