'use client'

import { useState, useEffect } from 'react';

const Countdown = () => {
  const [daysLeft, setDaysLeft] = useState<number>(37);

  useEffect(() => {
    const targetDate = new Date('2024-12-26'); 
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setDaysLeft(0);
      } else {
        setDaysLeft(Math.floor(distance / (1000 * 60 * 60 * 24)));
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-center">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
        <h1 className="text-6xl font-bold mb-4 animate__fadeIn">
          XperIT
        </h1>
        <h2 className="text-4xl font-semibold mb-4 animate__fadeIn animate-delay-1000ms">
          Coming Soon
        </h2>
        <p className="text-xl mb-6 animate__fadeIn animate-delay-1500ms">
          {daysLeft} Days Left
        </p>
        <div className="animate__zoomIn animate-delay-2s">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
            <span className="text-white text-2xl font-semibold">{daysLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
