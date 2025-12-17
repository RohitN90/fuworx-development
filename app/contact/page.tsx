"use client";
import React from "react";
import { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=" relative bg-white">
      <div className="relative w-full px-10 py-20 mt-20 h-[650px] bg-blend-multiply bg-[#002366]/90 flex flex-col gap-5 items-center contact bg-cover bg-top-left">
        <div className="text-white font-head text-center lg:text-left text-5xl md:text-6xl font-semibold">
          Contact Us Let’s Build Something Great Together
        </div>

        <div className="max-w-[100ch] text-white text-[20px] font-body mx-auto md:text-[18px] text-center">
          Have questions, ideas, or looking to start your digital transformation
          journey? We’re here to help. Whether you&apos;re a growing SME,
          startup, or enterprise, our team at Fuworx is ready to support your
          tech goals.
        </div>

        <div className="absolute bottom-[-1px] left-0 w-full h-11 bg-white mask-[url(../public/Updated/Wave.svg)] mask-repeat" />
      </div>
      <div className="relative w-full h-screen pb-10 bg-white shadow-2xl md:h-[700px] xl:px-10 flex flex-col justify-center rounded-b-[350px] items-center">
        <ContactForm />
      </div>

      <div className="xl:absolute w-full pt-12 xl:pl-20 left-0 md:bottom-40">
        <ContactCard />
      </div>
    </div>
  );
};

const ContactCard = () => {
  return (
    <section className="py-20 px-4 w-auto xl:w-[550px] bg-[#002366] relative overflow-hidden xl:rounded-4xl">
      <div className="absolute bottom-0 right-0 w-50 h-50 bg-green-500 rounded-full transform translate-x-10 -translate-y-[55px]"></div>
      <div className="absolute bottom-0 opacity-10 right-0 w-50 h-50 bg-green-500 rounded-full transform -translate-x-[45px] -translate-y-[95px]"></div>
      <div className="xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full md:max-w-2xl">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">
            Contact
          </h2>

          <div className="space-y-8 text-white w-full">
            {/* Phone */}
            <div className="flex md:items-start space-x-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[20px]">+91-8919980393</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="space-y-2 w-full text-[20px]">
                <p>
                  <span className="font-medium">General Inquiries:</span>{" "}
                  info@fuworx.com
                </p>
                <p>
                  <span className="font-medium">Careers:</span> hr@fuworx.com
                </p>
                <p>
                  <span className="font-medium">Partnerships:</span>{" "}
                  info@fuworx.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="shrink-0 mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-[20px] w-full">
                <p className="font-medium mb-2">Fuworx Innovations Pvt. Ltd.</p>
                <p className="text-gray-300 leading-relaxed">
                  4th Floor, Biznuss Square,
                  <br />
                  Jubilee Enclave Road,
                  <br />
                  Shaikpet, Hi tech City,
                  <br />
                  Hyderabad, Telangana,
                  <br />
                  India -500081
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://x.com/fuworx"
                target="_blank"
                className="w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded flex items-center justify-center hover:bg-opacity-20 transition"
              >
                <FaXTwitter width={10} height={10} color="black" />
              </a>
              <a
                href="https://www.instagram.com/fuworx/"
                target="_blank"
                className="w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded flex items-center justify-center hover:bg-opacity-20 transition"
              >
                <FaInstagram width={10} height={10} color="black" />
              </a>
              <a
                href="https://www.linkedin.com/company/fuworx-innovations/"
                target="_blank"
                className="w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded flex items-center justify-center hover:bg-opacity-20 transition"
              >
                <FaLinkedinIn width={10} height={10} color="black" />
              </a>
              <a
                href="#"
                target="_blank"
                className="w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded flex items-center justify-center hover:bg-opacity-20 transition"
              >
                <FaYoutube width={10} height={10} color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = (): React.ReactNode => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="relative flex flex-col w-full justify-center h-auto items-center xl:items-end px-10 md:px-20">
      <form className="w-full flex flex-col justify-center items-center gap-4 md:max-w-[800px] xl:w-[500px] 2xl:w-[700px]">
        <div className="text-[#002366] my-10 font-head font-semibold text-center text-5xl">
          Quick Contact Form
        </div>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
          placeholder="John Doe"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
          placeholder="john@example.com"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
          placeholder="+1 (555) 000-0000"
        />
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={2}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none resize-none text-slate-900"
          placeholder="Tell us more about your inquiry..."
        />
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#002366] text-white/09 px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
