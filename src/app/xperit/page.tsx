'use client'


import Countdown from '@/components/Countdown'
import { Footer } from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner';
import { Navbar } from '@/components/Navbar'
import { useEffect, useState } from 'react';

export default function xperit() {
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  
  return (
    <>
     {loading ? (
        <LoadingSpinner />
      ) : (
        <>
    <Navbar />
      <div className="min-h-screen bg-black flex items-center justify-center text-center">
      <div className="text-white">
        <Countdown />
      </div>
    </div>  

    <Footer/>
    </>
      )}
    </>
    )
}
