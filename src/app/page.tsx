'use client'

import { useState, useEffect } from "react";
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
import LoadingSpinner from "@/components/LoadingSpinner"; // Import your Loading Spinner component

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 

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
          <Hero />
          <LogoTicker />
          <Features />
          <ProductShowcase />
          <FAQs />
          <CTA />
          <Footer />
        </FadeInTextAnimation>
      )}
    </>
  );
}
