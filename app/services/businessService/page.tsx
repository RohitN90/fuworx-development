import React from "react";
import Collections from "@/components/Collections";
import Connect from "@/components/Connect";
const BusinessService = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="relative w-full h-screen flex b0 px-5 justify-center overflow-hidden">
          <div className="text-6xl text-center text-white lg:text-7xl mt-56 font-head font-semibold">
            Business Services
          </div>
          <div className="absolute -bottom-[50%] rotate-[170deg] -left-[20%] w-[1000px] h-[900px] sm:w-[2200px] sm:h-[1000px] lg:h-[900px]  bg-[#6CC24A] " />
          <div className="absolute -bottom-[50%] rotate-[10deg] -left-[20%] w-[1000px] h-[800px] sm:w-[2000px] lg:h-[900px]  bg-white " />
          <div className="absolute left-0 md:text-xl bottom-0 w-full mb-[10%] flex flex-col px-10">
            <div className="text-center text-[#0A1F44] font-body font-semibold max-w-[75ch] mx-auto">
              We reimagine business operations through intelligent,
              technology-enabled services built for scale and resilience.
            </div>
            <div className="text-center text-[#0A1F44] max-w-[80ch] mx-auto">
              By combining process expertise, automation, analytics, and domain
              intelligence, we transform core business functions into agile,
              datadriven operations that improve efficiency, ensure compliance,
              and drive sustainable outcomes.
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col">
          <Management
            heading="Claims Management"
            description="End-to-end claims processing optimized for accuracy, compliance, and faster turnaround times."
            image="b1"
          />
          <ReManagement
            heading="Finance and Accounting"
            description="Streamlining financial operations with accurate, compliant, and scalable finance solutions."
            image="b2"
          />
          <Management
            heading="Human Resources Management"
            description="End-to-end claims processing optimized for accuracy, compliance, and faster turnaround times."
            image="b3"
          />
          <ReManagement
            heading="Customer Support"
            description="Delivering responsive, technology-enabled support that enhances customer satisfaction and
        loyalty."
            image="b4"
          />
          <Management
            heading="Healthcare Support"
            description="Providing specialized healthcare operations support to improve efficiency, compliance, and care
        outcomes."
            image="b5"
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
export default BusinessService;

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
      </div>
    </div>
  );
};
