import React from "react";

const Wave = () => {
  return (
    <div className="flex overflow-hidden justify-center items-center w-full h-auto left-0 -bottom-[280px]  md:-bottom-[190px]  lg:-bottom-[200px] absolute">
      <div className="w-[380px] h-80 md:w-96 md:h-96 bg-white rotate-45 rounded-tl-[900px]"></div>
      <div className="w-[380px] h-80 md:w-96 md:h-96 bg-white rotate-45 rounded-tl-[900px]"></div>
      <div className="hidden md:block w-72 h-72 md:w-96 md:h-96 bg-white rotate-45 rounded-tl-[900px]"></div>
      <div className="hidden lg:block w-72 h-72 md:w-96 md:h-96 bg-white rotate-45 rounded-tl-[900px]"></div>
      <div className="hidden lg:block w-72 h-72 md:w-96 md:h-96 bg-white rotate-45 rounded-tl-[900px]"></div>
    </div>
  );
};

export default Wave;
