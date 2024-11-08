import ArrowIcon from "../assets/icons/arrow-w.svg"


export const Hero = () => {

  return(
    <div className="bg-black text-white bg-gradient-to-b from-black via-indigo-800 to-purple-500 py-[72px] sm:py-24 relative overflow-clip">
       <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] top-[calc(100%-120px)]"></div>
       <div className="container relative">
        <div className="flex items-center justify-center">
      <p className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
        <span className="text-2xl font-manrope font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-yellow-200 to-sky-300 ">Elevate your digital strategy</span>
        <span className="inline-flex items-center gap-1 ">
          <ArrowIcon />
          </span>
      </p>
      </div>
      <div className="flex justify-center">
      <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8">
        Welcome to 
        <br /> 
        ITAdvis
        <span className="text-blue-500">X</span>
        </h1>
      </div>
      <div className="flex justify-center">
      <p className="text-center text-xl mt-8 max-w-md">
        we believe in the power of technology to transform businesses and drive innovation. Our mission is to empower organizations with cutting-edge IT solutions, strategic guidance, and unparalleled expertise. Let's build something amazing with us, Start your business with us.
        </p>
        </div>
       </div>
      
    </div>
    
  )

};
