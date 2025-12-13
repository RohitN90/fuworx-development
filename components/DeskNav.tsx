"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  link: string;
  active: boolean;
  subMenu?: string[];
}

const DeskNav = ({ props }: { props: Props }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      dislay: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      dislay: "none",
    },
  };
  const hasMenu = props.subMenu && props.subMenu?.length > 0;
  return (
    <motion.ul
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      className="group"
    >
      <Link
        href={props.link}
        className="relative group transition-all flex items-center gap-2 text-2xl font-semibold font-head text-[#26638]"
      >
        {props.name}{" "}
        {hasMenu && (
          <ChevronDown className="mt-[0.6px] group-hover:rotate-180 duration-200" />
        )}
        {hasMenu && (
          <div className="absolute group-hover:flex top-full left-0 mt-8 transition-all border hidden text-2xl gap-2 z-[999] font-semibold font-head px-10 py-3 rounded-2xl backdrop-blur-lg bg-white/90 origin-[50%_-170px]">
            {props.subMenu?.map((name, index) => (
              <div key={index} className="">
                {name}
              </div>
            ))}
          </div>
        )}
      </Link>
    </motion.ul>
  );
};

export default DeskNav;
