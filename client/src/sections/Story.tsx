import { Heart, Sparkles, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StoryModal from '@/components/StoryModal';

gsap.registerPlugin(ScrollTrigger);

/**
 * Story Section - The Couple's Journey
 * Design: Three-column card layout with hover effects and real images
 * Animation: Staggered entrance on scroll with GSAP
 * Mobile: Click to expand full story in modal
 */

const storyCards = [
  {
    id: 1,
    title: 'From Taiwo',
    description:
      'I have known Zainab for years, originally through my twin brother as his wife\'s best friend. I first saw her back in 2017, but our paths didn\'t truly cross until much later. Everything changed on May 1st, 2023, about a month after my twin brother\'s wedding. My brother was the true architect of our story; he was the one who first started telling me about her and encouraged us to connect. What began as a simple conversation quickly blossomed into something beautiful. From those first talks, we discovered shared values, dreams, and a connection that felt destined by the Divine.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/5_b322c889.jpeg',
    icon: Heart,
  },
  {
    id: 2,
    title: 'From Titi',
    description:
      'One of my Ustaadh introduced his twin brother to us the very first day we met. We exchanged greetings and that was it. Nothing more. No expectations, no thoughts of what Allah had already written. A few years after graduation, I attended my best friend\'s nikkah. That day was filled with so much joy and barakah. I couldn\'t make it back home, so I spent the night at my Ustaadh\'s family house, surrounded by warmth and familiarity. The next morning, I packed my bags and left, unaware that a seed had been planted quietly by Allah. Not long after, I received a call from my friend, proposing on behalf of her husband\'s twin brother. To be honest, my heart was unsure at first. I didn\'t feel any immediate connection, and I questioned it. But SubhanAllah, I turned to Allah. I made duʿā, I sought His guidance, I asked for clarity. Because truly, ọkàn ènìyàn kì í mọ ibi tí ìbùkún rẹ̀ wà. And slowly, gently, Allah made it easy. What started with uncertainty began to feel like peace. A calm I could not explain. A softness that settled within me. No noise, no confusion. Just sakīnah. This journey has taught me deeply that patience is a virtue. Patience is not just waiting, it is trusting Allah even when you do not understand. And truly, Allah answers prayers in ways that leave you in awe. In him, I found a kind of tranquility my heart recognizes. A peace that reassures me. A love that feels intentional and guided. That is why our hashtag is #InBliss&Tranquility Because in him, I found peace of mind and happiness. As we step into this new phase, I pray that Allah places barakah in our union, strengthens our bond, protects our love, and makes us a source of goodness for each other in this life and the hereafter. Allāhumma bārik lanā fīhi, wa j\'alhu khayran lanā. Ameen 🤍🧡',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/1_53f25911.jpeg',
    icon: Heart,
  },
  {
    id: 4,
    title: 'The Proposal',
    description:
      '"The Messenger of Allah (ﷺ) said: \'A woman is married for four things: her wealth, her family status, her beauty, and her religion. So you should wed the religious woman, otherwise you will be a loser.\'" I have come to realize that the greatest blessing in this life is not simply finding the person you want, but finding the soul you truly need—one anchored in Islamic virtue and upright character. True beauty lies in an upbringing rooted in faith, where respect and understanding are the foundation of the home. In you, I found that rare alignment of heart and Deen. Under the stars, with hearts full of love and gratitude, our journey to forever began. It was a moment filled with joy, tears of happiness, and the promise of a lifetime spent seeking His pleasure together. Alhamdulillah for this beautiful blessing.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/6_1c49c99e.jpeg',
    icon: Sparkles,
  },
  {
    id: 5,
    title: 'The Journey',
    description:
      '"And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy." (Quran 30:21) Our path from strangers to soulmates has been a beautiful testament to faith and patience. Over these past three years, every step we have taken together has been guided by a shared devotion that brought us closer to this moment. Through this experience, we have learned that true love is found in the tranquility of a partner who fears Allah and honors the bond of family. We are deeply grateful for the love and support of our families, whose prayers have been the wind beneath our wings. Alhamdulillah, our journey has been a testament to the beauty of a union built for the sake of the Divine.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/4_3da51d9a.jpeg',
    icon: Calendar,
  },
];

const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [selectedStory, setSelectedStory] = useState<typeof storyCards[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - dreamlike
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation with stagger - elegant reveal
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
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

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div ref={headingRef} className="text-center mb-10 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 sm:px-5 py-2 bg-orange-100/80 text-orange-600 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-full mb-4 sm:mb-6">
              Our Story
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-textdark mb-4 sm:mb-6">
              The Beginning
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-[1px] bg-gradient-to-r from-transparent to-orange-300" />
              <Heart className="w-4 sm:w-5 text-orange-400 fill-orange-400" />
              <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-[1px] bg-gradient-to-l from-transparent to-orange-300" />
            </div>
          </div>

          {/* Story Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {storyCards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group cursor-pointer"
                onClick={() => setSelectedStory(card)}
              >
                <div className="dream-card rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-elevated hover:-translate-y-2 sm:hover:-translate-y-3">
                  {/* Image */}
                  <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Icon badge - ethereal */}
                    <div className="absolute top-3 sm:top-5 right-3 sm:right-5 w-10 sm:w-12 h-10 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft transition-transform duration-500 group-hover:scale-110">
                      <card.icon className="w-4 sm:w-5 text-orange-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-7 lg:p-8">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-textdark mb-3 sm:mb-4">
                      {card.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-textgray/80 leading-relaxed line-clamp-4 sm:line-clamp-none">
                      {card.description}
                    </p>
                    
                    {/* "Read More" indicator for mobile */}
                    <div className="mt-4 md:hidden">
                      <p className="text-orange-500 text-xs font-semibold">Click to read full story →</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      <StoryModal
        isOpen={selectedStory !== null}
        title={selectedStory?.title || ''}
        content={selectedStory?.description || ''}
        image={selectedStory?.image || ''}
        onClose={() => setSelectedStory(null)}
      />
    </>
  );
};

export default Story;
