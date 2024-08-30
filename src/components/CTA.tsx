'use client'

import { useState } from "react";


export const CTA = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };


  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
    <div className="container max-w-xl relative">
      <h2 className="font-bold text-4xl sm:text-5xl tracking-tighter">
        Take Action Today!
      </h2>
      <p className="text-lg sm:text-xl text-white/70 mt-5">
        Create your website in a few easy steps.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          aria-label="Email Address"
          className={`h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1 ${
            error ? 'border-red-500 border-2' : ''
          }`}
        />
        <button type="submit" className="bg-white text-black h-12 rounded-lg px-5">
          Get Started
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  </div>
);
};