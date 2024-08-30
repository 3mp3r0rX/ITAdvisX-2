'use client';

import React, { useState, useEffect } from 'react';
import ArrowIcon from "../../assets/icons/arrow-w.svg"; 
import { Banner } from '@/components/Banner';
import { Navbar } from '@/components/Navbar';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import LoadingSpinner from "@/components/LoadingSpinner";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [loading, setLoadingPage] = useState(true); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      const result = await response.json();
      console.log('Form submitted:', result);
  
      if (response.ok) {
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error('Error submitting form:', result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  useEffect(() => {
    
    setTimeout(() => setLoadingPage(false), 2000); 

   
    return () => setLoadingPage(true);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Banner />
          <Navbar />
          <div className="bg-black text-white bg-gradient-to-b from-black via-indigo-800 to-purple-500 py-[72px] sm:py-24 relative overflow-clip">
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] top-[calc(100%-120px)]"></div>
            <div className="container relative">
              <div className="flex items-center justify-center">
                <p className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
                  <span className="text-2xl font-manrope font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-yellow-200 to-sky-300">
                    Get in Touch with Us
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ArrowIcon />
                  </span>
                </p>
              </div>
              <div className="flex justify-center">
                <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8">
                  Contact
                  <br />
                  ITAdvis
                  <span className="text-blue-500">X</span>
                </h1>
              </div>
              <div className="flex justify-center">
                <p className="text-center text-xl mt-8 max-w-md">
                  We're here to help you with all your IT needs. Fill out the form below, and let's start the conversation!
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white max-w-md w-full"
                >
                  <h1 className="text-2xl text-black font-bold">Send a message</h1>

                  <label htmlFor="fullname" className="text-gray-500 font-light mt-8">
                    Full name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    required
                  />

                  <label htmlFor="email" className="text-gray-500 font-light mt-4">
                    E-mail<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    required
                  />

                  <label htmlFor="message" className="text-gray-500 font-light mt-4">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What you want to say?"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    required
                  ></textarea>

                  <div className="flex flex-row items-center justify-start">
                    <button
                      type="submit"
                      className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                    >
                      {isSubmitting ? "Sending..." : "Send"}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-cyan-500 ml-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="9,5 11,5 14,12 11,19 9,19 12,13 5,13 3,15 1,15 4,12 2,9 4,9 5,11 12,11"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-3 gap-6 max-w-6xl md:mx-auto my-20">
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                fill="currentColor"
              />
              <path
                d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                fill="currentColor"
              />
              <path
                d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-white/70 font-bold">+40 773941160</p>
          </div>
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
            <svg
              width="24"
              height="24"
              className="text-cyan-500 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-white/70 font-bold">itadvisx@itadvisx.com</p>
          </div>
        </div>
            </div>
          </div>
          <CTA />
          <Footer />
        </>
      )}
    </>
  );
};

export default ContactUs;
