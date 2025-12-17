"use client";
import React, { useEffect, useRef, useState } from "react";
import FuworxLogo from "@/public/Updated/FUWORX.svg";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const mobileNav = useRef(null);

  const navitmes = useRef(null);
  const logo = useRef(null);

  useGSAP(() => {
    gsap.from(logo.current, {
      duration: 1,
      ease: "power2.out",
      x: -100,
    });
    gsap.from(navitmes.current, {
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      y: -100,
    });
  });

  interface subMenu {
    name: string;
    link: string;
  }

  interface NavBarItems {
    name: string;
    link: string;
    subMenu?: subMenu[];
    active: boolean;
  }

  const navbarItems: NavBarItems[] = [
    {
      name: "About",
      link: "/about",
      active: false,
      subMenu: [
        { name: "About Us", link: "/aboutUs" },
        { name: "Our Supporters", link: "/ourSupport" },
      ],
    },
    {
      name: "Services",
      link: "/services",
      subMenu: [
        { name: "Digital Engineering Service", link: "/digitalService" },
        { name: "Business Service", link: "/businessService" },
      ],
      active: false,
    },
    { name: "Product", link: "/product", active: false },
    { name: "Partners", link: "/partners", active: false },
    { name: "Careers", link: "/careers", active: false },
    { name: "Flow", link: "/flow", active: false },
  ];

  return (
    <div
      className={`w-full h-auto z-10 transition-transform duration-300 ease-linear top-0 fixed`}
    >
      <div className="flex px-5 py-3 border-b border-white/20 bg-white shadow-lg backdrop-blur-md mx-auto justify-between items-center lg:px-16">
        <div ref={logo} className="flex flex-row items-center gap-2">
          <img
            src={FuworxLogo.src}
            onClick={navigateToHome}
            alt="Logo"
            className="w-auto h-auto bg-cover border-none"
          />
        </div>
        <div
          ref={navitmes}
          className={`hidden xl:flex px-5 gap-4 md:gap-10 text-[#0A1F44]`}
        >
          {navbarItems.map((itmes, index) => (
            <Link
              key={index}
              href={itmes.link}
              className={`relative  group flex items-center gap-2 md:text-2xl text-lg font-semibold font-head text-[#26638]`}
            >
              <div className="flex cursor-pointer items-center gap-2">
                <span
                  className={` ${path === itmes.link ? "text-[#63C7B2]" : " "} `}
                >
                  {itmes.name}
                </span>
                {itmes.subMenu && itmes.subMenu.length > 0 && (
                  <ChevronDown className="group-hover:rotate-180 transition-all duration-200" />
                )}
              </div>
              {itmes.subMenu && (
                <div className="absolute items-start pt-5 bg-white rounded-3xl left-0 top-full border-b-2 border-b-[#6cc24a] hidden w-[350px] py-5 group-hover:flex flex-col gap-1">
                  {itmes.subMenu.map((sub) => (
                    <div key={sub.name}>
                      <Link
                        key={sub.name}
                        href={`${itmes.link}${sub.link}`}
                        className={`flex text-left w-full ${path === itmes.link + sub.link ? "text-[#63c7B2] " : " "} cursor-pointer text-xl items-start px-5 py-3`}
                      >
                        {sub.name}
                      </Link>
                      <div className="absolute w-[300px] h-1 left-4 rounded-2xl bg-[#6cc24a]"></div>
                    </div>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        <div className="hidden xl:block hover:scale-110 ease-linear duration-200 transition-all">
          <div className="bg-[#0A1F44] px-4 py-2 md:px-8 md:py-2 rounded-2xl">
            <Link
              href={"/contact"}
              className="font-head text-[14px] md:text-[18px] font-bold"
            >
              Contact
            </Link>
          </div>
        </div>
        {open ? (
          <RxCross2
            color="black"
            onClick={toggleOpen}
            className="xl:hidden ease-initial"
            size={25}
          />
        ) : (
          <RxHamburgerMenu
            color="black"
            onClick={toggleOpen}
            className="xl:hidden ease-linear"
            size={25}
          />
        )}
      </div>
      <div
        ref={mobileNav}
        className={`xl:hidden ${
          open ? "block" : "hidden"
        } font-opensans font-light text-xl text-center py-8 bg-white rounded-b-2xl`}
      >
        <ul className="flex flex-col font-body justify-center gap-5 text-right px-10 text-black">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={`${item.link}`}
              className={`hover:text-[#002366] font-semibold hover:scale-105 text-shadow-sm ease-initial duration-200 ${
                path === item.link ? "text-[#63C7B2]" : " "
              }`}
            >
              {item.name}
              {item.subMenu &&
                item.subMenu.map((i, d) => (
                  <a
                    key={d}
                    href={`${item.link}${i.link}`}
                    className={`flex font-light justify-end hover:text-[#002366] hover:scale-105 py-2 text-shadow-sm ease-initial duration-200 ${
                      path === i.link ? "text-[#63C7B2]" : " "
                    }`}
                  >
                    {i.name}
                  </a>
                ))}
            </a>
          ))}
          <Link
            href={"/contact"}
            className="bg-[#0A1F44] cursor-pointer text-white font-body items-center hover:scale-105 text-shadow-sm ease-initial duration-200 text-center shadow-2xl px-6 py-2 rounded-3xl"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
