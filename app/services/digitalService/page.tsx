import Collections from "@/components/Collections";
import Connect from "@/components/Connect";
import React from "react";
const DigitalService = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="relative w-full h-screen flex ds0 px-5 justify-center overflow-hidden">
          <div className="text-6xl text-center text-white lg:text-7xl mt-56 font-head font-semibold">
            Digital Engineering Services
          </div>
          <div className="absolute -bottom-[50%] rotate-[170deg] -left-[20%] w-[1000px] h-[900px] sm:w-[2200px] sm:h-[1000px] lg:h-[800px] bg-[#6CC24A]" />
          <div className="absolute -bottom-[50%] rotate-[10deg] -left-[20%] w-[1000px] h-[800px] sm:w-[2300px] lg:h-[870px] bg-white" />
          <div className="absolute left-0 md:text-xl bottom-0 w-full mb-[10%] flex flex-col px-10">
            <div className="text-center text-[#0A1F44] font-body font-semibold max-w-[75ch] mx-auto">
              We engineer intelligent, future ready digital solutions that
              seamlessly fuse business strategy with emerging technologies.
            </div>
            <div className="text-center text-[#0A1F44] max-w-[80ch] mx-auto">
              By leveraging cloud, automation, AI, and modern engineering
              practices, we design, build, and continuously evolve high
              performance platforms that unlock realtime insights, accelerate
              innovation, and future proof enterprise systems.
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col">
          <Management
            heading="Enterprise Automation"
            description="We automate enterprise workflows and systems to eliminate inefficiencies,reduce costs, and enable faster, smarter business operations at scale."
            image="ds1"
          />
          <ReManagement
            heading="Application Services"
            description="Developing, modernizing, and maintaining high-performance applications that support business growth."
            image="ds2"
          />
          <Management
            heading="System Integration"
            description="Seamlessly connecting systems, platforms, and data to ensure smooth, unified business
            operations."
            image="ds3"
          />
          <ReManagement
            heading="Cloud Transformation Services"
            description="Enabling secure, scalable cloud adoption to drive flexibility, resilience, and digital readiness."
            image="ds4"
          />
          <Management
            heading="Business Intelligence & Analytics"
            description="Turning data into actionable insights for faster, smarter, and data-driven decision-making."
            image="ds5"
          />
          <ReManagement
            heading="AI / ML Services"
            description="Embedding intelligence into business processes through predictive, adaptive, and AI-driven
            solutions."
            image="ds6"
          />
          <Management
            heading="Experience Platforms"
            description="Creating intuitive, engaging digital experiences that enhance customer and user interactions."
            image="ds7"
          />
        </div>
        <div className="w-full h-auto flex">
          <Collections />
        </div>
        <div className="w-full h-auto flex">
          <Connect />
        </div>
      </div>
    </div>
  );
};
export default DigitalService;

interface Props {
  heading: string;
  description: string;
  image: string;
}

const Management = (props: Props) => {
  return (
    <div className="w-full h-auto lg:h-[435px] grid">
      <div className="w-full h-auto text-white flex flex-col lg:grid items-center lg:grid-cols-2">
        <div className="w-full h-full flex flex-col gap-3 bg-linear-to-r from-[#0A1F44] to-[#55698D] justify-center text-left px-10">
          <div className="text-4xl font-head font-semibold">
            {props.heading}
          </div>
          <div className="font-body text-[18px] max-w-[60ch]">
            {props.description}
          </div>
          <div className="bg-[#6CC24A] w-64 py-3 text-lg font-bold items-center text-center">
            Read More
          </div>
        </div>
        <div
          className={`w-full h-[435px] lg:h-full ${props.image} bg-yellow-500`}
        ></div>
      </div>
    </div>
  );
};

const ReManagement = (props: Props) => {
  return (
    <div className="w-full h-auto lg:h-[435px] grid">
      <div className="w-full h-auto text-white flex flex-col lg:grid items-center lg:grid-cols-2">
        <div className={`w-full h-full ${props.image} bg-yellow-500`}></div>
        <div className="w-full h-full flex flex-col pt-10 lg:pt-0 gap-3 bg-linear-to-r from-[#0A1F44] to-[#55698D] justify-center text-left px-10">
          <div className="text-4xl font-head font-semibold">
            {props.heading}
          </div>
          <div className="font-body text-[18px] max-w-[60ch]">
            {props.description}
          </div>
          <div className="bg-[#6CC24A] w-64 py-3 text-lg font-bold items-center text-center">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};
