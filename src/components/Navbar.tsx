import Image from "next/image";
import logoImage from "../assets/images/logosaas.png"
import MenuIcon from "../assets/icons/menu.svg"

export const Navbar = () => {

  return (
    <div className="container bg-black">
     <div className="py-4 flex items-center justify-between">
      <div className="relative">
      <Image src={logoImage} alt="Logo" className="h-12 w-12" />
      </div>
      <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center itmes-center rounded-lg">
      <MenuIcon className= "text-white"/>
      </div>
     </div>
    </div>
  )
};
