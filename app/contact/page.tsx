"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=" relative bg-white">
      <div className="relative w-full px-10 py-20 mt-20 h-[650px] bg-blend-multiply bg-[#0A1F44] flex flex-col gap-5 items-center contact bg-cover bg-top-left">
        <div className="text-white font-head text-center lg:text-center text-4xl md:text-[55px] font-semibold">
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

      <div className="xl:absolute w-full md:w-auto pt-12 xl:pl-20 left-0 md:bottom-40">
        <ContactCard />
      </div>
    </div>
  );
};

const ContactCard = () => {
  return (
    <section className="py-20 px-4 w-auto xl:w-[550px] bg-[#0A1F44] relative overflow-hidden xl:rounded-4xl">
      <div className="absolute bottom-0 right-11 w-50 h-50 bg-green-500 rounded-full transform translate-x-10 -translate-y-[55px]"></div>
      <div className="absolute bottom-0 opacity-10 right-10 w-50 h-50 bg-green-500 rounded-full transform -translate-x-[45px] -translate-y-[95px]"></div>
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus({ type: null, message: "" });

      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="relative flex flex-col w-full justify-center h-auto items-center xl:items-end px-10 md:px-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-center items-center gap-4 md:max-w-[800px] xl:w-[500px] 2xl:w-[700px]"
      >
        <div className="text-[#002366] my-10 font-head font-semibold text-center text-5xl">
          Quick Contact Form
        </div>

        {/* Status Messages */}
        {submitStatus.type && (
          <div
            className={`w-full p-3 rounded-lg text-sm font-medium text-white ${
              submitStatus.type === "success"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Name Field */}
        <div className="w-full">
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className={`w-full px-4 py-2 rounded-lg border transition outline-none text-slate-900 ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="w-full">
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-4 py-2 rounded-lg border transition outline-none text-slate-900 ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="w-full">
          <input
            type="tel"
            id="phone"
            placeholder="+1 (555) 000-0000"
            {...register("phone", {
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: "Invalid phone number",
              },
            })}
            className={`w-full px-4 py-2 rounded-lg border transition outline-none text-slate-900 ${
              errors.phone
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="w-full">
          <textarea
            id="message"
            rows={2}
            placeholder="Tell us more about your inquiry..."
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            className={`w-full px-4 py-2 rounded-lg border transition outline-none resize-none text-slate-900 ${
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4 w-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#002366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
