'use client'
import Collections from "@/components/Collections";
import Connect from "@/components/Connect";
import PartnerCard from "@/components/PartnerCard";
import shopify from "@/public/images/shopify.png"
import odoo from "@/public/images/odoo.png"
import zapier from "@/public/images/zapier.png"
import react from "react";
import PartnershipForm from "@/components/PartnerShipForm";

const Partners = () => {
  return (
    <div className="w-full h-auto mt-20 bg-white">
      <PartnerHero />
      <div className="w-full flex flex-col px-10 py-10 md:grid md:grid-cols-3 gap-6 mx-auto max-w-[1200px]">
        <PartnerCard
          description="Powering Unified Business Operations with Intelligent Odoo Solutions"
          logoAlt="oddo url"
          logoUrl={odoo.src}
        />
        <PartnerCard
          description="Powering Unified Business Operations with Intelligent Odoo Solutions"
          logoAlt="shopify"
          logoUrl={shopify.src}
        />
        <PartnerCard
          description="Powering Unified Business Operations with Intelligent Odoo Solutions"
          logoAlt="zapier"
          logoUrl={zapier.src}
        />
      </div>
      <PartnershipForm />

        <div className="w-full h-auto flex">
          <Collections />
        </div>
        <div className="w-full h-auto flex">
          <Connect />
        </div>
    </div>
  );
};

const PartnerHero = () => {
  return (
    <div className="relative w-full h-screen flex b0 px-5 justify-center overflow-hidden">
      <div className="text-6xl text-center text-white lg:text-6xl mt-[50%] lg:mt-[10%] font-head font-semibold">
        Our Partners Ecosystem
      </div>
      <div className="absolute -bottom-[50%] -mb-[50px] lg:m-0 rotate-[173deg] -left-[20%] w-[1000px] h-[900px] sm:w-[180%] sm:h-[180%] lg:h-[90%] bg-[#6CC24A]" />
      <div className="absolute -bottom-[50%] rotate-[4deg] -left-[20%] w-[1000px] h-[800px] sm:w-[180%] lg:h-[90%] bg-white" />
      <div className="absolute left-0 md:text-lg bottom-0 w-full mb-[4%] flex flex-col px-10">
        <div className="text-center text-[#0A1F44] max-w-[100ch] mx-auto">
          Fuworx partners with technology product companies as their solutions,
          implementation, and reseller partner. We help bring products to
          market, implement them for customers, and ensure successful adoption
          creating value for both our partners and end customers.
        </div>
      </div>
    </div>
  );
};

export default Partners;
