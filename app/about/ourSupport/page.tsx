"use client";
import { motion } from "framer-motion";

const OurSupport = () => {
  return (
    <div className="bg-white pb-10">
      <SupportPage />
      <Peoples />
    </div>
  );
};

const SupportPage = (): React.ReactNode => {
  return (
    <>
      <div
        className={`w-full h-[800px] md:h-screen bg-auto flex flex-col justify-center bg-blend-multiply bg-[#002366] items-center bg-top bg-no-repeat relative support`}
      >
        <div className="font-head font-semibold text-shadow-lg mb-4 text-white text-5xl md:text-7xl lg:text-8xl">
          Our Supporters
        </div>
        <div className="font-body text-white px-10 lg:px-0 md:max-w-[100ch] text-shadow-lg mt-2 mx-auto text-[20px] text-center">
          We’re building a place where people with passion, curiosity, and
          ambition come together to create meaningful change. Here, you won’t
          just do a job-you’ll shape solutions, influence ideas, and contribute
          to the future of digital innovation
        </div>
        <div className="absolute bottom-0 border-none left-0 w-full h-[42px] mask-[url(../public/Updated/Wave.svg)] bg-white overflow-hidden"></div>
      </div>
    </>
  );
};

interface SupportsMem {
  name: string;
  role: string;
}

const HoverSupportCard = ({
  props,
}: {
  props: SupportsMem;
}): React.ReactNode => {
  const hoverVarients = {
    normal: { borderRadius: "50%" },
    zoom: { borderRadius: "0%", y: -70, delay: 0.4 },
  };

  return (
    <div>
      <motion.div
        variants={hoverVarients}
        initial="normal"
        whileHover="zoom"
        className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex justify-center items-center group bg-[#002366]"
      >
        <div className="absolute w-[170px] h-[170px] md:w-[220px] group-hover:bottom-[100px] ease-linear transition-all group-hover:rounded-2xl md:h-[220px] rounded-full bg-yellow-300"></div>
        <div className="absolute left-0 bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-10 text-white w-full h-auto flex-col">
          <div className="text-xl font-head font-semibold">{props.name}</div>
          <div className="text-md font-body font-semibold">{props.role}</div>
        </div>
      </motion.div>
    </div>
  );
};

const Peoples = (): React.ReactNode => {
  const members: SupportsMem[] = [
    { name: "Rohit Vardhan", role: "Frontent Developer" },
    { name: "Lithin", role: "Backend Developer" },
    { name: "Sai", role: "DevOps" },
  ];

  return (
    <div className="w-full h-[1200px] md:h-screen flex flex-col md:gap-20 py-10 md:py-20 items-center bg-white rounded-b-[400px] shadow-2xl">
      <div className="text-xl px-10 w-full md:max-w-[80ch] mb-10 mx-auto text-center font-body text-black text-wrap">
        We’re grateful for every person who’s been part of our journey , because
        Fuworx isn’t just built by us, it’s built with the support of many.
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full h-screen gap-4 md:gap-24 text-center font-body text-black">
          {members.map((items, id) => (
            <HoverSupportCard key={id} props={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSupport;
