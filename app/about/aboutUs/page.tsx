"use client";
import React from "react";
import TeamWork from "@/public/team-work.jpg";
import Target from "@/public/focus-target.jpg";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  return (
    <main className="w-full overflow-hidden bg-none font-serif">
      <section className="relative h-[500px] lg:min-h-screen w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0b1f44] vision-clip" />
          <div className="absolute inset-0 bg-[#6fbf4a] mission-clip" />
          <div className="absolute inset-0 bg-white divider-clip" />
        </div>

        <div className="relative grid grid-cols-1  px-8 md:px-20 md:grid-cols-2 min-h-screen">
          <div className="flex items-center px-8 md:px-20">
            <div
              className="max-w-xl text-white"
              style={{
                position: "absolute",
                top: "250px",
                left: "45px",
                transform: "rotate(0deg)",
                opacity: 1,
                lineHeight: "25px",
                letterSpacing: "0%",
              }}
            >
              <h1 className="text-4xl text-black lg:text-white md:text-5xl font-body font-bold mb-6">
                Our Vision
              </h1>
              <p className="font-body">
                At Fuworx, we envision a world where technology becomes the true
                accelerator of business growth and innovation. Our goal is to
                empower organizations to operate smarter, faster, and more
                efficiently through digital transformation. We aim to be the
                trusted technology partner that helps businesses modernize
                operations, automate intelligently, and unlock new opportunities
                for sustainable growth—while we take care of the technology that
                drives it.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center px-8 md:px-20 text-center">
            <div
              className="md:max-w-xl text-white"
              style={{
                position: "absolute",
                transform: "rotate(0deg)",
                opacity: 1,
                lineHeight: "25px",
                letterSpacing: "0%",
                textAlign: "right",
              }}
            >
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-head font-bold mb-6">
                  {" "}
                  Our Mission
                </h1>
                <p className="font-body">
                  At Fuworx, our mission is to empower businesses to operate
                  smarter and grow faster through technology-driven
                  transformation.
                  <br />
                  <br />
                  We build intelligent digital systems, automate processes, and
                  manage operations that enhance efficiency, reduce complexity,
                  and deliver measurable results—ensuring our clients scale
                  confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-head font-bold text-[#0b1f44] mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 font-body leading-relaxed mb-5">
              At Fuworx, we’re redefining how businesses operate in the digital
              era. We help organizations transform the way they work with
              smarter technology, intelligent automation, and seamless
              operations.
            </p>
            <p className="text-gray-700 font-body leading-relaxed mb-5">
              We started Fuworx with one mission: to simplify digital
              transformation by replacing outdated systems and fragmented
              processes with connected digital ecosystems.
            </p>
            <p className="text-gray-700 font-body leading-relaxed">
              Today, we stand as a trusted partner for companies looking to
              modernize, scale, and innovate—while staying focused on what truly
              matters.
            </p>
          </div>

          <img
            src={`${TeamWork.src}`}
            alt="Team collaboration"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white pb-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img
            src={`${Target.src}`}
            alt="Target focus"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold font-head text-[#6fbf4a] mb-6">
              Our Focus
            </h2>
            <p className="text-gray-700 leading-relaxed font-body mb-5">
              Digital transformation isn’t just about technology—it’s about
              solving real business challenges with the right strategy, tools,
              and execution.
            </p>
            <p className="text-gray-700 leading-relaxed font-body mb-5">
              Our solutions are cost-efficient, scalable, and intelligent,
              designed to streamline operations and optimize performance.
            </p>
            <p className="text-gray-700 font-body leading-relaxed">
              We take care of technology and operations so our clients can focus
              on innovation, growth, and building the future.
            </p>
          </div>
        </div>
      </section>
      <BusinessCard />
    </main>
  );
};

const BusinessCard = () => {
  const router = useRouter();

  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <div
      className={`min-h-[80vh] flex px-10 md:px-36 bg-cover bg-blend-multiply bg-[#002366]/80 items-center business`}
    >
      <div className="flex flex-col">
        <p className="text-green-400 text-[20px] font-head mb-4">
          Reach us today !
        </p>

        <h1 className="text-white text-4xl md:text-6xl font-body font-bold leading-tight mb-8">
          Fuworx : Your Smart <br />
          Partner for Business <br />
          Success
        </h1>

        <button
          onClick={navigateToContact}
          className="bg-blue-500 max-w-[400px] mx-auto hover:bg-blue-600 transition text-white px-7 py-3 rounded-lg shadow-lg"
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
