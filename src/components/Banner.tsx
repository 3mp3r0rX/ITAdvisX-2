import Link from "next/link";

export const Banner = () => {
  return (
    <div className="py-3 text-center animated-background bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline"> Elevate your tech experience with </span>
          <span className="font-bold">XperIT</span> - 
          <Link href="/xperit" className="underline underline-offset-4 ml-1">
            Explore our innovative solutions
          </Link>
        </p>
      </div>
    </div>
  );
};
