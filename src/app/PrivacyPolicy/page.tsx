'use client'

import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner'; 
import { Banner } from '@/components/Banner';
import { Navbar } from '@/components/Navbar';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

const PrivacyPolicy: React.FC = () => {
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
    <Banner />
    <Navbar />
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="bg-black p-8 rounded-lg shadow-lg max-w-screen-md mx-auto">
        <h1 className="text-3xl font-semibold mb-4 text-center">ITAdvisX Privacy Policy</h1>
        <p className="text-gray-600 text-sm text-center mb-4">Last Updated: October 3, 2023</p>
        <div className="prose">
          <p>
            Welcome to ITAdvisX! This Privacy Policy ("Policy") explains how we collect, use, disclose, and protect your personal information. By using our services, you agree to the practices described in this Policy. If you do not agree to this Policy, please do not use our services.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, contact details, and other information you provide when you use our services or communicate with us.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">How We Use Your Information</h2>
          <p>
            We use your personal information to provide and improve our services, communicate with you, and fulfill legal and contractual obligations. We may use your information for:
          </p>
          <ul className="list-disc pl-8 mt-2">
            <li>Providing IT consulting and advisory services</li>
            <li>Communicating with you about our services</li>
            <li>Responding to your inquiries and requests</li>
            <li>Improving our services and website</li>
            <li>Complying with legal obligations</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">Sharing Your Information</h2>
          <p>
            We may share your personal information with third-party service providers who assist us in delivering our services. We do not sell your personal information to third parties. We may share your information for purposes such as:
          </p>
          <ul className="list-disc pl-8 mt-2">
            <li>Providing IT services and support</li>
            <li>Processing payments</li>
            <li>Legal compliance and regulatory requirements</li>
            <li>Protection of our rights and interests</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. These measures include encryption, access controls, and regular security assessments.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Changes to this Policy</h2>
          <p>
            We may update this Policy to reflect changes to our practices or for legal reasons. We will notify you of any significant changes by posting the updated Policy on our website. We encourage you to review this Policy periodically.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also have the right to object to the processing of your data or request data portability. To exercise these rights or if you have questions about your data, please <a href="/contact" className="text-blue-500">contact us</a>.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, please <a href="/contact" className="text-blue-500">Contact us</a>.
          </p>
        </div>
      </div>
    </div>
    <CTA />
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
