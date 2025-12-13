"use client";
import IndustriesCarousel from "./IndustriesCarousel";
const Industry = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-auto py-30 min-w-[200px] mx-auto px-10 sm:py-40 md:py-20 flex flex-col justify-center ">
        <div className="text-white text-center mb-10 md:text-center font-light text-5xl font-head">
          Industries We Serve
        </div>
        <div className="w-full flex justify-center items-center">
          <IndustriesCarousel />
        </div>
      </div>
    </div>
  );
};

export default Industry;
