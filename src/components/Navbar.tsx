import Image from "next/image";
import logoImage from "../assets/images/Logo.png";
import MenuIcon from "../assets/icons/menu.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <Image src={logoImage} alt="Logo" className="h-30 w-40" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="flex-1 sm:flex justify-center items-center gap-6 hidden">
            <Link href="/" className="text-opacity-60 text-white hover:text-opacity-100">Home</Link>
            <a href="/#Features" className="text-opacity-60 text-white hover:text-opacity-100">Features</a>
            <a href="/#Services" className="text-opacity-60 text-white hover:text-opacity-100">Services</a>
            <Link href="/contact" className="text-opacity-60 text-white hover:text-opacity-100">Contact us</Link>
          </nav>
          <button className="bg-white py-2 px-4 rounded-lg sm:flex hidden">Schedule a call</button>
        </div>
      </div>
    </div>
  );
};
