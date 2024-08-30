'use client'

import { useState } from "react";
import Image from "next/image";
import logoImage from "../assets/images/Logo.png";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/x.svg"; 
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <Image src={logoImage} alt="Logo" className="h-30 w-40" />
          </div>
         
          <div 
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <CloseIcon className="text-white" /> 
            ) : (
              <MenuIcon className="text-white" /> 
            )}
          </div>
         
          <nav className="flex-1 sm:flex justify-center items-center gap-6 hidden">
            <Link href="/" className="text-opacity-60 text-white hover:text-opacity-100">Home</Link>
            <Link href="/#Features" className="text-opacity-60 text-white hover:text-opacity-100">Features</Link>
            <Link href="/#Services" className="text-opacity-60 text-white hover:text-opacity-100">Services</Link>
            <Link href="/contact" className="text-opacity-60 text-white hover:text-opacity-100">Contact us</Link>
          </nav>
          
          <button className="bg-white py-2 px-4 rounded-lg sm:flex hidden"><a href="https://calendly.com/majedalnasr7"> Schedule a call </a></button>
        </div>
      </div>
     
      {menuOpen && (
        <div className=" sm:hidden bg-black px-4 py-2">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-white text-opacity-60 hover:text-opacity-100" onClick={toggleMenu}>Home</Link>
            <Link href="/#Features" className="text-white text-opacity-60 hover:text-opacity-100" onClick={toggleMenu}>Features</Link>
            <Link href="/#Services" className="text-white text-opacity-60 hover:text-opacity-100" onClick={toggleMenu}>Services</Link>
            <Link href="/contact" className="text-white text-opacity-60 hover:text-opacity-100" onClick={toggleMenu}>Contact us</Link>
          </nav>
        
          <button className="mt-4 bg-white py-2 px-4 rounded-lg w-full"><a href="https://calendly.com/majedalnasr7"> Schedule a call </a></button>
        </div>
      )}
    </div>
  );
};
