import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BestGift = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  const giftItems = [
    { name: 'Washing Machine', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/washing-machine_0a407683.png' },
    { name: 'Fridge Freezer', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/fridge-freezer_aea574ff.png' },
    { name: 'TV (55 Inches)', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/tv-55inch_e4fab5ea.png' },
    { name: 'Gas Cooker', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/gas-cooker_b7d3e14e.png' },
    { name: 'Microwave Oven', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/microwave-oven_ffc109a8.png' },
    { name: 'Air Fryer', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/air-fryer_295d8bc8.png' },
    { name: 'Blender Set', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/blender-set_fbdfafba.png' },
    { name: 'Toasting Machine', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/toasting-machine_2fde4f1b.png' },
    { name: 'Electric Kettle', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/electric-kettle_0aad4cf0.png' },
    { name: 'Standing Fan', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663312282284/DohFuRSWxGjcAaobUEn4Er/standing-fan_00b4d93b.png' },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Description animation
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Items grid animation
    if (itemsRef.current) {
      const items = itemsRef.current.querySelectorAll('.gift-item');
      gsap.fromTo(
        items,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: itemsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Account card animation
    if (accountRef.current) {
      gsap.fromTo(
        accountRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: accountRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-4">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            The Best Gift is You
          </h2>
        </div>

        {/* Description */}
        <div ref={descriptionRef} className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Your presence is the greatest gift. However, for those who have expressed a wish to offer a token of love, we have created a few items.
          </p>
        </div>

        {/* Gift Items Grid */}
        <div
          ref={itemsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
        >
          {giftItems.map((item, index) => (
            <div
              key={index}
              className="gift-item group"
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-center text-gray-800 font-medium text-sm md:text-base">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Account Details Card */}
        <div
          ref={accountRef}
          className="max-w-md mx-auto bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 shadow-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Bank Transfer</h3>
          
          <div className="space-y-6">
            <div className="border-b border-orange-500 pb-4">
              <p className="text-orange-100 text-sm mb-2">Account Number</p>
              <p className="text-xl font-mono font-bold">1840173301</p>
            </div>

            <div className="border-b border-orange-500 pb-4">
              <p className="text-orange-100 text-sm mb-2">Account Name</p>
              <p className="text-lg font-semibold">ABDULHAMID TAIWO ADEGOKE</p>
            </div>

            <div>
              <p className="text-orange-100 text-sm mb-2">Bank</p>
              <p className="text-xl font-bold">Access Bank Nigeria</p>
            </div>
          </div>

          <p className="text-center text-orange-100 text-sm mt-8 italic">
            Thank you for your love and support
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestGift;
