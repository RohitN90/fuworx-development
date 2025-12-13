import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "@/public/logo.jpg";
export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 font-head">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={Logo.src}
                alt="Logo"
                className="w-14 h-14 border-none"
              />
              <div className="uppercase text-black/70 flex flex-col font-body">
                <div className="font-bold text-[#0A1F44] text-2xl">fuworx</div>
                <div className="tracking-[3px]">innovations</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-body">
              At Fuworx, we empower businesses to grow smarter and faster
              through impactful digital transformation. We modernize operations,
              automate intelligently, and unlock sustainable opportunities for
              the future.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2 font-body text-lg">
              <li className="flex items-center gap-2  text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>About Us</span>
              </li>
              <li className="flex items-center gap-2  text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>Our Mission</span>
              </li>
              <li className="flex items-center gap-2  text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>Careers</span>
              </li>
              <li className="flex items-center gap-2  text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>Contact Us</span>
              </li>
            </ul>
          </div>

          {/* Services & Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">
              SERVICES
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>Digital Engineering Services</span>
              </li>
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>Business Services</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">
              LEGAL & POLICIES
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>Blogs</span>
              </li>
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>Privacy Policy</span>
              </li>
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <IoIosArrowForward className="text-xs" />
                <span>Terms of use</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">
              CONTACT
            </h3>
            <div className="space-y-4">
              <div>
                <p className="flex items-start gap-2 text-lg text-gray-600">
                  <IoIosArrowForward className="text-xs mt-1" />
                  <span>
                    FUWORX INNOVATIONS PRIVATE LIMITED, 4th Floor, Bizness
                    Square, Jubilee Enclave Road, Shaikpet, Hyderabad, India,
                    500081
                  </span>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-lg text-gray-600">
                  <IoIosArrowForward className="text-xs" />
                  <span>contact@fuworx.com</span>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-lg text-gray-600">
                  <IoIosArrowForward className="text-xs" />
                  <span>+91-8919980393</span>
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-3xl flex items-center justify-center hover:bg-teal-600 transition"
                >
                  <FaInstagram className="text-white text-sm" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-3xl flex items-center justify-center hover:bg-teal-600 transition"
                >
                  <FaLinkedin className="text-white text-sm" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-3xl flex items-center justify-center hover:bg-teal-600 transition"
                >
                  <FaXTwitter className="text-white text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © 2025 Fuworx Innovations Pvt. Ltd. | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
