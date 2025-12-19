import react from "react";

interface Props {
  image1: string;
  image2: string;
  heading: string;
}

const HoverServicesV = (props: Props): React.ReactNode => {
  return (
    <div className="rounded-2xl">
      <div className="group bg-[#002366] rounded-2xl">
        <div className="relative w-[477px] h-[474px] rounded-2xl group-hover:rounded-t-2xl bg-[url(../public/BS.png)] bg-center bg-cover group-hover:bg-contain group-hover:bg-no-repeat group-hover:bg-top group-hover:items-start group-hover:bg-blend-normal bg-blend-multiply ease-linear bg-[#0A1F44]/76">
          <div className="flex w-full h-full justify-center items-center">
            <div className="group-hover:hidden bg-linear-to-r from-white to-[#6CC24A] bg-clip-text text-transparent text-4xl font-head font-semibold ">
              Digital Engineering Services
            </div>

            <div className="absolute w-full h-auto left-0 bottom-0 flex flex-col gap-3">
              <div className="hidden group-hover:flex bg-[#6CC24A] bg-clip-text text-transparent text-4xl font-head font-semibold ">
                Digital Engineering Services
              </div>
              <div className="relative hidden group-hover:flex flex-col pb-12 items-center">
                <div className="absolute left-0 bottom-0 flex flex-col gap-3  bg-linear-to-b from-transparent via-bg-[#0A1F44] to-bg-[#0A1F44] "></div>
                <div className="text-xs px-5">
                  We design, build, and modernize applications that drive
                  business agility and efficiency. Leveraging cloud, AI,
                  automation, and DevOps practices, our digital engineering
                  services help organizations accelerate innovation, ensure
                  scalability, and enhance performance delivering secure,
                  high-quality applications that transform operations and enable
                  smarter, data-driven decision-making.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HoverServices = (props: Props) => {
  return (
    <div className="group bg-[#002366] rounded-2xl">
      <div
        className={`relative md:w-[477px] md:h-[474px] group-hover:w-[521px] group-hover:h-[519px] rounded-2xl group-hover:bg-none bg-["${props.image1}"] bg-center bg-cover bg-blend-multiply bg-[#0A1F44]/70 ease-linear`}
      >
        <div
          className={`absolute left-0 bottom-0 inset-0 opacity-80 group-hover:bg-cover group-hover:bg-[${props.image2}]`}
        ></div>
        <div className="flex w-full h-full justify-center items-center">
          <div className="group-hover:hidden bg-linear-to-r from-white to-[#6CC24A] bg-clip-text text-transparent text-4xl font-head font-semibold ">
            {props.heading}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverServices;
