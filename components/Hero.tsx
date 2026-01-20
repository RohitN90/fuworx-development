"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useRef } from "react";

function Hero() {
  const header = useRef(null);
  const text = useRef(null);
  const but = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline();
    timeline
      .from(header.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out",
      })
      .from(text.current, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(but.current, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "power2.out",
      });
  });

  return (
    <>
      {/* IMPORTANT: hero wrapper must be relative */}
      <div className="relative w-full pt-20 md:pt-0 bg-[url(../public/Hero.webp)] bg-cover bg-top bg-no-repeat bg-blend-multiply bg-[#002366]/80 md:bg-black/30 h-[730px]">
        {/* HERO CONTENT */}
        <div className="min-w-[200px] px-11 w-full mx-auto md:max-w-[1200px] flex items-center justify-center md:h-[520px]">
          <div className="flex flex-col md:flex md:justify-center md:text-center">
            <div
              ref={header}
              className="md:leading-16 leading-14 pt-10 md:pt-0 text-5xl md:text-[45px] font-bold font-head text-white"
            >
              Reimagine Growth Through Digital Innovation
            </div>

            <div
              ref={text}
              className="text-[16px] md:text-[18px] pt-2 text-white/95 md:max-w-[700px] mx-auto font-body"
            >
              We design intelligent, efficient, and customized IT systems that
              elevate how your business operates and grows.
            </div>

            <div ref={but} className="flex md:justify-center">
              <Link
                href="/contact"
                className="text-[#002366] bg-white/90 font-bold font-head cursor-pointer px-11 py-3 rounded-[50px] text-lg md:text-xl hover:scale-105 duration-200 ease-initial my-6"
              >
                Transform with Fuworx
              </Link>
            </div>
          </div>
        </div>

        {/* WAVE AT BOTTOM */}
        <div className="absolute bottom-[-1px] left-0 w-full h-11 bg-white mask-[url(../public/Updated/Wave.svg)] mask-repeat" />
      </div>
    </>
  );
}

export default Hero;
