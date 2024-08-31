"use client"

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500`}
    >
      <button
        onClick={scrollToTop}
        className="bg-indigo-600 hover:bg-indigo-800 text-white p-3 w-10 h-10 rounded-md shadow-lg focus:outline-none flex items-center justify-center"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default ScrollUpButton;
