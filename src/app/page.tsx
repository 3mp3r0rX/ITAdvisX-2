'use client'

import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import FadeInTextAnimation from "@/components/FadeInTextAnimation";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 

    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true,     // Only animate once when scrolling down
    });

    return () => setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <FadeInTextAnimation>
            <Banner />
            <Navbar />
          <div data-aos="fade-right">
            <Hero />
          </div>
          <div data-aos="flip-left">
            <Features />
          </div>
          <div data-aos="flip-up">
            <ProductShowcase />
          </div>
          <div data-aos="fade-up">
            <FAQs />
          </div>
          <div data-aos="fade-up">
            <CTA />
          </div>
          <div data-aos="fade-up">
            <Footer />
          </div>
        </FadeInTextAnimation>
      )}
    </>
  );
}
