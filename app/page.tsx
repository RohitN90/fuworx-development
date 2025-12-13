"use client";
import ContactForm from "@/components/Contact";
import Hero from "@/components/Hero";
import Industry from "@/components/Industry";
import OurServices from "@/components/OurServices";
import WhyFuworx from "@/components/WhyFuworx";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-white h-screen md:h-auto rounded-b-[250px]">
        <OurServices />
      </div>
      <Industry />
      <WhyFuworx />
      <ContactForm />
    </>
  );
}
