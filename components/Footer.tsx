"use client";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import FuworxLogo from "@/public/Updated/FUWORX.svg";
import { useRouter } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { TbTarget } from "react-icons/tb";
export default function Footer() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };
  return (
    <footer className="bg-white py-12 px-6 font-head">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <img
                  src={FuworxLogo.src}
                  onClick={navigateToHome}
                  alt="Logo"
                  className="w-auto h-auto bg-cover border-none"
                />
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
                <TbTarget className="text-xs" />
                <span onClick={() => router.push("/about/aboutUs")}>
                  About Us
                </span>
              </li>
              <li className="flex items-center gap-2  text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <TbTarget className="text-xs" />
                <span onClick={() => router.push("/about/ourSupport")}>
                  Our Supporters
                </span>
              </li>
              <li className="flex items-center gap-2  text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <TbTarget className="text-xs" />
                <span onClick={() => router.push("/careers")}>Careers</span>
              </li>
              <li className="flex items-center gap-2  text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <TbTarget className="text-xs" />
                <span onClick={() => router.push("/contact")}>Contact Us</span>
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
                <TbTarget className="text-xs" />
                <Link href={"/services/digitalService"}>Digital Engineering Services</Link>
              </li>
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <TbTarget className="text-xs" />
                <Link href={"/services/businessService"}>Business Services</Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">
              LEGAL & POLICIES
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <TbTarget className="text-xs" />
                <span>Blogs</span>
              </li>
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <TbTarget className="text-xs" />
                <Link href={"/policy"}>Privacy Policy</Link>
              </li>
              <li className="flex items-center gap-2 text-lg text-gray-600 hover:text-[#0A1F44] cursor-pointer transition">
                <TbTarget className="text-xs" />
                <Link href={"/term"}>Terms of use</Link>
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
                  <FaLocationDot className="text-5xl justify-start -mt-2.5" />
                  <span>
                    FUWORX INNOVATIONS PRIVATE LIMITED, 4th Floor, Bizness
                    Square, Jubilee Enclave Road, Shaikpet, Hyderabad, India,
                    500081
                  </span>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-lg text-gray-600">
                  <MdEmail className="text-lg " />
                  <span>info@fuworx.com</span>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-lg text-gray-600">
                  <FaPhoneAlt className="text-lg" />
                  <span>+91-8919980393</span>
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.instagram.com/fuworx/"
                  target="_blank"
                  className="w-8 h-8 bg-gray-800 rounded-3xl flex items-center justify-center hover:bg-teal-600 transition"
                >
                  <FaInstagram className="text-white text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/company/fuworx-innovations/"
                  target="_blank"
                  className="w-8 h-8 bg-gray-800 rounded-3xl flex items-center justify-center hover:bg-teal-600 transition"
                >
                  <FaLinkedin className="text-white text-sm" />
                </a>
                <a
                  href="https://x.com/fuworx"
                  target="_blank"
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
