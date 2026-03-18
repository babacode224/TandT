import { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Wedding date: April 11, 2026 at 10:00 AM
      const weddingDate = new Date('2026-04-11T10:00:00').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Outer glow circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 blur-lg"></div>
        
        {/* Main circle background */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-300 flex items-center justify-center shadow-lg">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-700">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 py-6 sm:py-8">
      <CountdownUnit value={timeRemaining.days} label="Days" />
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 self-start mt-1 sm:mt-2">:</div>
      <CountdownUnit value={timeRemaining.hours} label="Hours" />
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 self-start mt-1 sm:mt-2">:</div>
      <CountdownUnit value={timeRemaining.minutes} label="Minutes" />
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 self-start mt-1 sm:mt-2">:</div>
      <CountdownUnit value={timeRemaining.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
