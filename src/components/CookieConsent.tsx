'use client';

import { useState } from 'react';
import Cookie from 'js-cookie';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return !Cookie.get('cookies-accepted');
  });

  const handleAccept = () => {
    setIsVisible(false);
    
    Cookie.set('cookies-accepted', 'true', { expires: 365 }); 
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm md:text-base">
          We use cookies to improve your experience on our site. By using our site, you agree to our{' '}
          <a href="/PrivacyPolicy" className="text-blue-400 underline">Privacy Policy</a>.
        </p>
        <button
          onClick={handleAccept}
          className="mt-2 md:mt-0 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
