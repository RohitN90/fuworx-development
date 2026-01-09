"use client";
import { useRouter } from "next/navigation";

const OurServices = () => {
  const router = useRouter();

  const redireBusiness = () => {
    router.push("/services/businessService");
  };
  const redireDigital = () => {
    router.push("/services/digitalService");
  };
  return (
    <>
      <div className="w-full relative overflow-hidden md:max-w-7xl md:h-[800px] mx-auto px-10 md:py-16 flex flex-col justify-center text-center">
        <div className="text-5xl mt-10 md:mt-0 text-center text-[#0A1F44] font-light mb-10 md:mb-12 font-head md:text-5xl">
          Our Services Expertise
        </div>
        <div className="flex flex-col md:flex-row gap-10 xl:gap-[200px] mt-10 items-center justify-center md:grid-cols-2">
          <div className="group">
            <div
              onClick={redireDigital}
              className={`relative w-[350px] h-[345px] xl:w-[477px] xl:h-[474px] group-hover:scale-110  rounded-2xl group-hover:bg-none bg-[url(../public/DES.png)] bg-center bg-cover bg-blend-multiply bg-[#0A1F44]/70 ease-linear`}
            >
              <div
                className={`absolute left-0 bottom-0 inset-0 opacity-80 group-hover:bg-cover group-hover:bg-[url(../public/Updated/DigitalInfo.png)]`}
              ></div>
              <div className="flex w-full h-full justify-center items-center">
                <div className="group-hover:hidden px-10 bg-linear-to-r from-white text-center to-[#6CC24A] bg-clip-text text-transparent text-4xl font-head font-semibold ">
                  Digital Engineering Services
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div
              onClick={redireBusiness}
              className={`relative w-[350px] h-[345px] xl:w-[477px] xl:h-[474px] group-hover:scale-110  rounded-2xl group-hover:bg-none bg-[url(../public/BS.png)] bg-center bg-cover bg-blend-multiply bg-[#0A1F44]/70 ease-linear`}
            >
              <div
                className={`absolute left-0 bottom-0 inset-0 opacity-80 group-hover:bg-cover group-hover:bg-[url(../public/Updated/BusinessInfo.png)]`}
              ></div>
              <div className="flex w-full h-full justify-center items-center">
                <div className="group-hover:hidden px-10 bg-linear-to-r from-white text-center to-[#6CC24A] bg-clip-text text-transparent text-4xl font-head font-semibold ">
                  Business Intelligence Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
