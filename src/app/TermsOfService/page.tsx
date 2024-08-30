'use client'

import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner'; 
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Banner } from '@/components/Banner';
import { Navbar } from '@/components/Navbar';

const TermsOfService: React.FC = () => {
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
        <h1 className="text-3xl font-semibold mb-4 text-center">Terms of Service</h1>
        <p className="text-gray-600 text-sm text-center mb-6">Last Updated: October 3, 2023</p>
        <div className="prose">
          <p>
            Welcome to ITAdvisX! These Terms of Service ("Agreement") govern your use of the services provided by ITAdvisX
            ("Company," "we," "our," or "us"). Please read this Agreement carefully before using our services. By accessing or using our services, you agree to comply with and be bound by this Agreement. If you do not agree to these terms, please do not use our services.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
          <p>
            By using our services, you acknowledge that you have read, understood, and agree to be bound by this Agreement and any additional terms and policies referenced herein.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">2. Services</h2>
          <p>
            ITAdvisX offers a range of IT consulting and advisory services. The details and terms for specific services are outlined in separate agreements and statements of work.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">3. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in a manner consistent with all applicable laws and regulations.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">4. Privacy Policy</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy, which is incorporated by reference into this Agreement. Please review the Privacy Policy to understand our practices regarding the collection and use of your personal information.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">5. User Responsibilities</h2>
          <p>As a user of our services, you are responsible for:</p>
          <ul className="list-disc pl-8 mt-2">
            <li>Complying with all applicable laws and regulations</li>
            <li>Using our services in a manner that does not disrupt or harm our systems or other users</li>
            <li>Keeping your login credentials and account information secure</li>
          </ul>
          <h2 className="text-lg font-semibold mt-6 mb-2">6. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our services at our discretion, with or without notice, for any violation of this Agreement or for any other reason.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
          <p>
            In no event shall ITAdvisX be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any damages whatsoever arising out of or in connection with your use of our services.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">8. Governing Law</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify or update this Agreement at any time. Changes will be effective upon posting to our website. You are responsible for reviewing this Agreement periodically to ensure your continued compliance.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">10. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding this Agreement, please <Link href="/ContactUs" className="text-blue-500">Contact us</Link>.
          </p>
        </div>
      </div>
    </div>
    <CTA />
    <Footer />
    </>
  );
};

export default TermsOfService;
