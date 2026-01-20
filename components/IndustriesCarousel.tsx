import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Landmark,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  PiggyBank,
  Computer,
  BaggageClaim,
  Bolt,
} from "lucide-react";

import {
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
  Service8,
} from "../components/ServiceImg";

interface Industry {
  title: string;
  icon: React.ReactNode;
  image: string;
}

const IndustriesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const industries: Industry[] = [
    {
      title: "Manufacturing & Industrial Automation",
      icon: <Bolt className="w-12 h-12 mb-4" />,
      image: `${Service1.src}`,
    },
    {
      title: "Travel, Hospitality & Logistics",
      icon: <BaggageClaim className="w-12 h-12 mb-4" />,
      image: `${Service3.src}`,
    },
    {
      title: "Telecommunications & IT Services",
      icon: <Computer className="w-12 h-12 mb-4" />,
      image: `${Service2.src}`,
    },
    {
      title: "Government & Public Section",
      icon: <Landmark className="w-12 h-12 mb-4" />,
      image: `${Service4.src}`,
    },
    {
      title: "Financial Services",
      icon: <GraduationCap className="w-12 h-12 mb-4" />,
      image: `${Service5.src}`,
    },
    {
      title: "Retail & E-commerce",
      icon: <ShoppingCart className="w-12 h-12 mb-4" />,
      image: `${Service6.src}`,
    },
    {
      title: "Healthcare & Life Science",
      icon: <HeartPulse className="w-12 h-12 mb-4" />,
      image: `${Service7.src}`,
    },
    {
      title: "Banking & Financial Services",
      icon: <PiggyBank className="w-12 h-12 mb-4" />,
      image: `${Service8.src}`,
    },
  ];

  // Detect screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset currentIndex when screen size changes to prevent out-of-bounds
  useEffect(() => {
    const itemsPerView = isMobile ? 1 : 3;
    const maxIndex = industries.length - itemsPerView;
    if (currentIndex > maxIndex) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentIndex(maxIndex);
    }
  }, [isMobile, currentIndex, industries.length]);

  const itemsPerView: number = isMobile ? 1 : 3;
  const maxIndex: number = industries.length - itemsPerView;

  const minSwipeDistance: number = 50;

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;

    const distance: number = touchStart - touchEnd;
    const isLeftSwipe: boolean = distance > minSwipeDistance;
    const isRightSwipe: boolean = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Mouse handlers for desktop drag
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setTouchEnd(0);
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = (): void => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!touchStart || !touchEnd) return;

    const distance: number = touchStart - touchEnd;
    const isLeftSwipe: boolean = distance > minSwipeDistance;
    const isRightSwipe: boolean = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleMouseLeave = (): void => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handlePrev = (): void => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="h-auto py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative">
          <div
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {industries.map((industry: Industry, index: number) => (
                <div key={index} className="md:w-1/3 w-full shrink-0 px-2">
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center mt-8 text-white p-4">
                      {industry.icon}
                      <div className="bg-linear-to-r from-[#8ACDFF] via-[#3E719D] to-[#0A1F44]  hover:bg-blue-600/90 transition-colors px-4 md:px-2 py-2 md:py-0 rounded-lg backdrop-blur-sm">
                        <h3 className="text-base font-body md:text-lg md:w-[238px] md:h-[72px] md:flex md:items-center md:justify-center font-semibold text-center">
                          {industry.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-4 shadow-lg transition-all transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-4 shadow-lg transition-all transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map(
              (_: unknown, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? "bg-blue-500 w-8 h-3"
                      : "bg-white/50 w-3 h-3 hover:bg-white/80"
                  }`}
                  aria-label={`Go to position ${index + 1}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesCarousel;
