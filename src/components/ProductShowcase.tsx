'use client'

import { useState, useEffect } from 'react';
import { ServicesData } from "../utils/index"; 
import Image from 'next/image';

export const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideCount = ServicesData.length;


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 4000); 

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div id='Services' className="relative bg-black bg-gradient-to-b from-black to-[#5D2CA8] text-white py-[72px] sm:py-24 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-5xl tracking-tighter">
          Our Services
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
          We offer a wide range of IT services designed to meet your business needs. Explore our offerings and see how we can help your business thrive.
          </p>
        </div>
        <div className="mt-16 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {ServicesData.map((service, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 border border-white/30 px-5 py-10 text-center rounded-xl flex flex-1 flex-col justify-between sm:flex-1"
              >
                <div className="inline-flex h-14 w-14  text-black justify-center items-center mx-auto">
                  {service.img && (
                    <Image
                      src={service.img}
                      alt={`Service Image ${index}`}
                      width={68}
                      height={38}
                    />
                  )}
                </div>
                <h3 className="mt-6 font-bold">{service.title}</h3>
                <p className="mt-2 text-white/70">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {ServicesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
