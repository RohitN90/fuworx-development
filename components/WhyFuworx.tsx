"use client";
const WhyFuworx = () => {
  return (
    <div className="bg-white">
      <div className="w-full md:max-w-[1400px]  text-[#0A1F44] py-28 min-w-[200px] px-10 mx-auto flex flex-col justify-center text-center">
        <div className="font-head flex flex-col text-5xl md:py-10">
          Why Choose Fuworx
          <span className="font-body mt-5 mb-5 md:mb-1 max-w-[60ch] mx-auto text-sm md:text-lg">
            Fuworx empowers businesses to move from outdated systems to
            future-ready, intelligent solutions.
          </span>
        </div>
        <ul className="font-body flex flex-col mt-5 md:grid md:grid-cols-4 md:gap-5 md:text-center justify-center text-center gap-6">
          <div className="flex flex-col items-center shadow-lg rounded-xl hover:shadow-xl hover:scale-110 ease-linear duration-200 transition-all shadow-black/20">
            <div className="bg-[url('../public/colorIcons/target.png')] bg-cover my-5 w-24 h-24"></div>
            <div className="px-10 py-5">
              We help organizations work smarter, scale faster, and thrive in
              the digital era.
            </div>
          </div>
          <div className="flex flex-col items-center shadow-lg hover:shadow-xl hover:scale-110 ease-linear duration-200 rounded-xl transition-all shadow-black/20">
            <div className="bg-[url('../public/colorIcons/new-product.png')] bg-cover my-5 w-24 h-24"></div>
            <div className="px-10 py-5">
              We build practical, cost-efficient, and scalable solutions that
              optimize operations and elevate customer experiences.
            </div>
          </div>
          <div className="flex flex-col items-center shadow-lg hover:shadow-xl hover:scale-110 ease-linear duration-200 rounded-xl transition-all shadow-black/20">
            <div className="bg-[url('../public/colorIcons/artificial-intelligence.png')] bg-cover rotate-180 my-5 w-24 h-24"></div>
            <div className="px-10 py-5">
              We believe digital transformation must drive measurable impact,
              not just introduce new technology.
            </div>
          </div>
          <div className="flex flex-col items-center shadow-lg hover:shadow-xl hover:scale-110 ease-linear duration-200 rounded-xl transition-all shadow-black/20">
            <div className="bg-[url('../public/colorIcons/briefcase.png')] bg-cover my-5 w-24 h-24"></div>
            <div className="px-10 py-5">
              We work closely with clients to understand their challenges,
              streamline processes, and automate with purpose
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default WhyFuworx;
