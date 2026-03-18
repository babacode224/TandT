import { Heart, Sparkles, Calendar } from 'lucide-react';
import { useEffect, useRef } from 'react';

/**
 * Story Section - The Couple's Journey
 * Design: Three-column card layout with hover effects and real images
 * Animation: Staggered entrance on scroll
 */

const storyCards = [
  {
    id: 1,
    title: 'How We Met',
    description:
      'It all started with a chance encounter at a mutual friend\'s gathering. What began as a simple conversation quickly blossomed into something beautiful. We discovered shared values, dreams, and a connection that felt destined by the Divine.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/5_b322c889.jpeg',
    icon: Heart,
  },
  {
    id: 2,
    title: 'The Proposal',
    description:
      'Under the stars, with hearts full of love and gratitude, our journey to forever began. A moment filled with joy, tears of happiness, and the promise of a lifetime together. Alhamdulillah for this beautiful blessing.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/6_1c49c99e.jpeg',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'The Journey',
    description:
      'From strangers to soulmates, our path has been guided by faith and love. Every step we\'ve taken together has brought us closer to this beautiful moment. We are grateful for the love and support of our families.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/4_3da51d9a.jpeg',
    icon: Calendar,
  },
];

const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      headingRef.current.style.opacity = '0';
      headingRef.current.style.transform = 'translateY(30px)';
      setTimeout(() => {
        headingRef.current!.style.transition = 'all 1s ease-out';
        headingRef.current!.style.opacity = '1';
        headingRef.current!.style.transform = 'translateY(0)';
      }, 200);
    }

    // Animate cards with stagger
    cardsRef.current.forEach((card, idx) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        setTimeout(() => {
          card.style.transition = 'all 0.8s ease-out';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 400 + idx * 150);
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Dreamy background - ORANGE */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10 animate-float-slow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" fill="#FF6B35" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-10 w-24 h-24 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" fill="#FF8C69" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-5 py-2 bg-orange-100/80 text-orange-600 text-xs tracking-[0.2em] uppercase rounded-full mb-6">
            Our Story
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-textdark mb-6">
            The Beginning
          </h2>
          <div className="flex items-center justify-center gap-6">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-orange-300" />
            <Heart className="w-5 h-5 text-orange-400 fill-orange-400" />
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-orange-300" />
          </div>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group"
            >
              <div className="dream-card rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-elevated hover:-translate-y-3">
                {/* Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Icon badge - ethereal */}
                  <div className="absolute top-5 right-5 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft transition-transform duration-500 group-hover:scale-110">
                    <card.icon className="w-5 h-5 text-orange-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl text-textdark mb-4">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-textgray/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
