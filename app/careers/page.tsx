"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  enquiry: string;
  message: string;
  consent: boolean;
}

const Carres = () => {
  return (
    <div className="w-full h-auto mx-auto grid">
      <div className="bg-white pb-16">
        <WhyJoin />
      </div>
      <Positions />
      <SubmitResume />
    </div>
  );
};

interface JobType {
  role: string;
  type: string;
  location: string;
}

const Jobs: JobType[] = [
  { role: "Frontend Developer (React)", type: "Full-Time", location: "Remote" },
  { role: "UI/UX Designer", type: "Intern", location: "Hybrid (Hyderabad)" },
  {
    role: "Digital Marketing Associate",
    type: "Full-Time",
    location: "Remote",
  },
  {
    role: "Project Coordinator",
    type: "Intern",
    location: "On-site (Hyderabad)",
  },
  {
    role: "Backend Developer (Node.js)",
    type: "Full-Time",
    location: "Remote/On-site (Hyderabad)",
  },
];

export default Carres;

const WhyJoin = (): React.ReactNode => {
  return (
    <>
      <div className="w-full h-screen md:h-svh md:max-w-full flex flex-col items-center rounded-b-[300px] shadow-2xl bg-white justify-center">
        <div className="font-head font-semibold text-[#002633] text-2xl md:text-5xl">
          Why Join Fuworx
        </div>
        <div className="grid grid-cols-2 text-[#002366] gap-6 mt-16 max-w-[1200px]">
          <div className="flex flex-col gap-4">
            <div className="mb-10">
              At Fuworx,we’re more than a technology company we’re a team of
              innovators transforming the way businesses work. Our people are at
              the heart of everything we do, driving impact through creativity,
              collaboration, and smart technology.{" "}
            </div>
            <div className="mb-10">
              We believe in a culture built on freedom, curiosity, and
              ownership. Here, you’ll have the space to experiment, learn
              continuously, and solve real business challenges that make a
              difference.
            </div>
            <div>
              With hands-on experience across diverse projects, and endless
              opportunities to grow, Fuworx is where your ideas evolve into
              meaningful outcomes and your career grows with purpose.
            </div>
          </div>
          <div className="w-full h-full bg-[#002366] flex items-center justify-center">
            <div className="text-white">Image Here</div>
          </div>
        </div>
      </div>
    </>
  );
};

const SubmitResume = (): React.ReactNode => {
  const [resumeData, setResumeData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    enquiry: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name } = target;
    setResumeData({ ...resumeData, name });
  };

  const handleSubmit = () => {
    //handle submit function
  };

  return (
    <>
      <div className="w-full my-10 md:my-12 md:h-screen mt-10 md:max-w-full flex flex-col items-center bg-[#0b1e44]">
        <div className="font-head font-semibold text-white text-2xl md:text-5xl">
          Submit Your Resume
        </div>
        <div className="mt-5 px-10 text-center md:px-0 text-xl text-white/80">
          If you&apos;re passionate about building the future of digital, send
          us your profile and we&apos;ll get in touch when there&apos;s a fit.
        </div>
        <div className="w-auto md:h-auto md:w-[780px] mt-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="px-10 flex text-white w-full h-16 md:px-2">
              <input
                type="text"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-500 placeholder:text-white/80 transition outline-none text-white/70"
                placeholder="Your Name"
              />
            </div>
            <div className="px-10 flex text-white w-full h-16 md:px-2">
              <input
                type="text"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-500 placeholder:text-white/80 transition outline-none text-white/70"
                placeholder="Your Experience"
              />
            </div>
            <div className="px-10 flex text-white w-full h-auto md:px-2">
              <div className="w-full flex flex-row items-center py-2 rounded-lg border border-slate-500 text-white/70">
                <input
                  type="file"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg placeholder:text-white/80 transition outline-none text-white/70"
                  placeholder="Upload Resume"
                />
                <div className="px-5 py-1 md:px-14 md:py-3 mr-4 rounded-[50px] font-body font-semibold bg-white/90 text-[#002366]">
                  Upload
                </div>
              </div>
            </div>
            <div className="px-10 flex text-white w-full h-16 md:px-2">
              <input
                type="text"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-500 placeholder:text-white/80 transition outline-none text-white/70"
                placeholder="Enter your name"
              />
            </div>
            <div className="px-10 flex text-white w-full h-16 md:px-2">
              <input
                type="text"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-500 placeholder:text-white/80 transition outline-none text-white/70"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full flex justify-center items-center h-16 md:px-2 px-10 mt-5">
              <div>
                <div className="px-10 py-4 bg-white/90 text-[#002366] font-head font-semibold rounded-[50px] text-xl">
                  Submit Resume
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const JobCards = ({ props }: { props: JobType }) => {
  return (
    <div className=" w-[300px] md:w-[900px] rounded-xl px-10 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 ease-linear cursor-pointer py-5 border-2 border-solid border-[#002366] h-auto my-2 bg-white text-[#002366]">
      <div className="flex justify-between">
        <div>
          <div className="md:text-3xl font-semibold font-head">
            {props.role}
          </div>
          <div className="text-[18px] my-1 md:text-xl font-body">
            {props.type}
          </div>
          <div className="font-light font-body">{props.location}</div>
        </div>
        <div className="flex justify-center md:justify-normal flex-col items-center gap-4">
          <div className="bg-[#002366] px-5 py-2 md:px-12 md:py-4 hover:text-[#002366] hover:bg-white transition-all duration-200 delay-75 ease-linear hover:border hover:border-[#002366] rounded-[50px] text-white text-xl font-bold font-head">
            Apply
          </div>
        </div>
      </div>
    </div>
  );
};

const Positions = (): React.ReactNode => {
  return (
    <div className="w-full h-auto flex px-4 md:py-10 flex-col items-center bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-semibold font-head text-[#002366]">
          Open Position
        </h1>
      </div>
      <div className="my-5 w-full grid gap-4 justify-center items-center">
        {Jobs.map((d, index) => (
          <JobCards props={d} key={index} />
        ))}
      </div>
      <div className="text-xl md:font-bold px-10 md:px-0 font-semibold font-head my-4 text-[#002366] text-center">
        <div>Don’t see your role listed? We’d still love to hear from you!</div>
      </div>
    </div>
  );
};
