"use client";
import HoverCard from "./HoverCard";
import BS from "@/public/BS.png";
import DES from "@/public/DES.png";

const OurServices = () => {
  const hoverCardsDetails = [
    {
      url: `${DES.src}`,
      header: " Digital Engineering Services",
      desc: "We design, build, and modernize applications that drive business agility and efficiency. Leveraging cloud, AI, automation, and DevOps practices, our digital engineering services help organizations accelerate innovation, ensure scalability, and enhance performance delivering secure, high-quality applications that transform operations and enable smarter, data-driven decision-making.",
    },
    {
      url: `${BS.src}`,
      header: " Business Services",
      desc: "Our business services streamline operations, enhance efficiency, and optimize workflows across enterprises. From process automation and analytics to customer experience management and system integration, Fuworx helps organizations reduce costs, improve outcomes, and focus on strategic growth turning complex business processes into smooth, measurable, and scalable operations",
    },
  ];
  return (
    <>
      <div className="w-full relative overflow-hidden md:max-w-7xl h-svh md:h-[700px] mx-auto px-10 md:py-16 flex flex-col justify-center text-center">
        <div className="text-5xl text-black/70 text-center font-light md:pt-[100px] mb-10 md:mb-12 font-head md:text-5xl">
          Our Services Expertise
        </div>
        <div className="grid gap-11 items-center justify-center h-fit md:grid-cols-2 text-left">
          {hoverCardsDetails.map((items, key) => (
            <HoverCard
              key={key}
              Image={`${items.url}`}
              description={`${items.desc}`}
              header={`${items.header}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
