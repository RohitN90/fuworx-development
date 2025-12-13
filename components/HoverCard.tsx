import React, { useState } from "react";

interface Props {
  Image: string;
  header: string;
  description: string;
}

function HoverCard(props: Props): React.ReactNode {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // Only toggle on mobile (screen width < 768px)
    if (window.innerWidth < 768) {
      setIsActive(!isActive);
    }
  };

  return (
    <div>
      <div className="w-full max-w-[400px] mx-auto md:max-w-full mb-20 px-2 h-[200px] md:w-auto md:h-auto group rounded-3xl">
        <div
          onClick={handleClick}
          className="overflow-hidden cursor-pointer group-hover:shadow-xl shadow-xl shadow-gray-400 relative rounded-3xl group-hover:scale-105 transition-all duration-200 ease-linear"
        >
          <img
            src={`${props.Image}`}
            className="bg-[#0A1F44] w-full h-auto min-h-[250px] sm:min-h-[280px] object-cover group-hover:scale-100 ease-linear duration-200 transition-all"
          />
          <div className="absolute inset-0 opacity-80 bg-[#0A1F44]"></div>
          <div className="absolute inset-0 opacity-90 text-center flex items-center text-transparent justify-center font-extrabold font-head text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-white to-[#6CC24A] bg-clip-text md:group-hover:opacity-0 px-4 transition-opacity duration-200">
            {props.header}
          </div>
          <div
            className={`absolute inset-0 opacity-90 text-center flex items-center text-transparent justify-center font-extrabold font-head text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-white to-[#6CC24A] bg-clip-text md:group-hover:opacity-0 px-4 transition-opacity duration-200 ${isActive ? "opacity-0" : ""}`}
          >
            {props.header}
          </div>
          <div
            className={`absolute h-full w-[400px] md:w-full gap-2 bg-black/80 px-4 sm:px-6 md:px-8 mx-auto flex flex-col justify-center items-center text-left -bottom-10 opacity-0 md:group-hover:bottom-0 md:group-hover:opacity-100 duration-200 ease-linear ${isActive ? "!bottom-0 !opacity-100" : ""}`}
          >
            <h1 className="text-xl max-w-[20ch] md:max-w-full w-[400px] sm:text-3xl md:text-4xl text-left font-head font-semibold md:w-full">
              {props.header}
            </h1>
            <div className="font-body max-w-[70ch] mx-auto text-[12px] text-wrap sm:text-base md:text-[15px] text-white/90 font-semibold w-full">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoverCard;
