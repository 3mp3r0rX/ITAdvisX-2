"use client"

import FacebookIcon from "../assets/icons/facebook.svg"
import InstagramIcon from "../assets/icons/instagram.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="max-w-sm lg:max-w-none">
            <div className="flex items-center">
              <h1 className="font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                IT<span className="text-white">Advis</span>
                <span className="text-blue-500">X</span>
              </h1>
            </div>
            <p className="text-white/70 mt-4">
              A new way to make websites easy, reliable, and secure.
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <FacebookIcon className="w-[21px] h-[21px] cursor-pointer" onClick={() => window.open('https://www.facebook.com/itadvisx/')} />
              <InstagramIcon className="w-[21px] h-[21px] cursor-pointer" onClick={() => window.open('https://www.instagram.com/itadvisx/"')} />
              <TwitterIcon className="w-[21px] h-[21px] cursor-pointer" onClick={() => window.open('https://twitter.com/ITAdvisX/')} />
              <LinkedInIcon className="w-[21px] h-[21px] cursor-pointer" onClick={() => window.open('https://www.linkedin.com/company/itadvisx/')} />
            </div>
          </div>
          <div className="flex w-full justify-end flex-wrap md:mt-0 mt-10">
            <ul className="list-none mt-4 text-right">
              <h4 className="text-white text-[18px] mb-4">Legal</h4>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-white/70 hover:text-secondary cursor-pointer">
                <Link href="/PrivacyPolicy">Privacy Policy</Link>
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-white/70 hover:text-secondary cursor-pointer">
                <Link href="/TermsOfService">Terms Of Service</Link>
              </li>
              <br />
              <li>
                <strong className="text-white">Email:</strong>
                <p className="text-white/70">itadvisx@itadvisx.com</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white/70 mt-10">
          &copy; {new Date().getFullYear()} ITAdvisX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
