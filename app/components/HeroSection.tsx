import React from "react";
import Image from "next/image";
import MainImage from "../../public/Illustration.svg";

const HeroSection = () => {
  return (
    <div className="flex  py-20 items-center justify-center gap-50 px-25 bg-[#F5F7FA]">
      <div>
        <h1 className="text-6xl font-semibold text-[#4D4D4D]">
          Lessons and Insight
        </h1>
        <h2 className="text-6xl font-semibold text-[#43A046]">From 8 Years</h2>
        <h3 className="text-[#717171]">
          Where to grow your business as a photographer: site or social media?
        </h3>
        <button className="mt-10 bg-[#43A046] text-amber-50 px-10 py-3.5 rounded-md">
          Register
        </button>
      </div>
      <div>
        <Image src={MainImage} alt="Main-Image"></Image>
      </div>
    </div>
  );
};

export default HeroSection;
