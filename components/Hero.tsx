"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      <div className="relative w-full pt-20 md:pt-2 bg-[url(../public/Hero.png)] bg-cover bg-no-repeat bg-center bg-blend-multiply bg-[#002366]/80 md:bg-black/30 h-[700px]">
        {/* HERO CONTENT */}
        <div className="min-w-[200px] px-11 w-full mx-auto md:max-w-[1200px] flex justify-center items-center h-full">
          <div className="flex flex-col md:flex md:justify-center md:text-center">
            <div
              ref={header}
              className="md:leading-16 leading-14 text-5xl md:text-[45px] font-bold font-head text-white"
            >
              Reimagine Growth Through Digital Innovation
            </div>

            <div
              ref={text}
              className="text-[16px] md:text-[18px] py-2 text-white/95 md:max-w-[700px] mx-auto font-body"
            >
              We design intelligent, efficient, and customized IT systems that
              elevate how your business operates and grows.
            </div>

            <div ref={but} className="flex mt-4 md:justify-center">
              <div className="text-[#002366] bg-white/90 font-bold font-head cursor-pointer px-11 py-3 rounded-[50px] text-lg md:text-xl hover:scale-105 duration-200 ease-initial my-6">
                Transform with Fuworx
              </div>
            </div>
          </div>
        </div>

        {/* WAVE AT BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full h-[42px] mask-[url(../public/Updated/Wave.svg)] bg-white overflow-hidden leading-none"></div>
      </div>
    </>
  );
}

export default Hero;
