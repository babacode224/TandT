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
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-300 flex items-center justify-center shadow-lg">
          <span className="text-2xl md:text-3xl font-bold text-orange-700">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 py-8">
      <CountdownUnit value={timeRemaining.days} label="Days" />
      <div className="text-2xl md:text-3xl font-bold text-orange-600 self-start mt-2">:</div>
      <CountdownUnit value={timeRemaining.hours} label="Hours" />
      <div className="text-2xl md:text-3xl font-bold text-orange-600 self-start mt-2">:</div>
      <CountdownUnit value={timeRemaining.minutes} label="Minutes" />
      <div className="text-2xl md:text-3xl font-bold text-orange-600 self-start mt-2">:</div>
      <CountdownUnit value={timeRemaining.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
