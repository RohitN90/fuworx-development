import Link from "next/link";

const Connect = () => {
  return (
    <div className="w-full h-auto py-32 lg:h-[500px] b6 flex px-10 flex-col justify-center items-center">
      <div className="flex flex-col gap-8 w-full h-auto justify-center items-center">
        <div className="text-[#6CC24A] lg:max-w-[35ch] text-center font-semibold font-body text-4xl lg:text-5xl">
          Interested in transforming your business? Let’s start a conversation.
        </div>

        <div className="text-center text-sm lg:text-lg  text-white">
          Fuworx helps organizations unlock performance, intelligence, and
          measurable outcomes␍through purpose-built digital and business
          solutions.
        </div>

        <Link
          href={"/contact"}
          className="bg-white w-[300px] text-center text-[18px] rounded-xl py-4 text-[#0A1F44] font-semibold"
        >
          Contact Now
        </Link>
      </div>
    </div>
  );
};

export default Connect;
