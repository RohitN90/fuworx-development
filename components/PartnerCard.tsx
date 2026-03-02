"use client";
import Image from "next/image";
import { useState } from "react";

interface PartnerCardProps {
  logoUrl: string;
  logoAlt: string;
  description: string;
  customBg?: string;
}

export default function PartnerCard({
  logoUrl,
  logoAlt,
  description,
  customBg = "bg-white",
}: PartnerCardProps) {
  const [logo, setLogo] = useState<boolean>();
  const handleMouseEnter = () => {
    setLogo(true);
  };
  const handleMouseLeave = () => {
    setLogo(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex hover:scale-105 shadow transition-all ease-in duration-300 hover:shadow-2xl flex-col justify-between border border-gray-200 rounded-xl p-6 min-h-[220px] ${customBg}`}
    >
      {/* Optional Green Arrow Icon */}
      {logo && (
        <div className="absolute flex top-4 right-4 bg-[#63C15D] transition-all ease-in duration-200 rounded-full w-10 h-10 items-center justify-center shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      )}

      {/* Logo Section */}
      <div className="mt-4 mb-4">
        <div className="relative h-14 w-36">
          {/* Note: Update the width/height to best match your actual logo asset dimensions */}
          <Image
            src={logoUrl}
            alt={logoAlt}
            fill
            className="object-contain object-left"
          />
        </div>
      </div>

      {/* Description Text */}
      <p className="text-slate-700 font-medium text-[15px] leading-relaxed max-w-[95%]">
        {description}
      </p>
    </div>
  );
}
