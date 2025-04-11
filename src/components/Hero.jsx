import React from "react";
import { RiBuildingLine } from "react-icons/ri";
import { SlPlane } from "react-icons/sl";
import HeroForm from "./HeroForm";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="w-full md:min-h-[808px]  pt-[80px]  mt-[-80px] relative flex items-center justify-center">
      <div className="relative z-[4] px-6 max-w-7xl w-full">
        <div className="mb-[-24px]">
          <ul className="p-6 pb-9 flex items-center gap-3 flex-wrap backdrop-blur-[130.89999389648438px] rounded-t-[20px] ">
            <li className="">
              <button className="flex items-center gap-2 py-3 px-4 font-semibold text-sm capitalize border-[1px] border-[#FFFFFF33] text-white tracking-wide rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-300">
                <SlPlane />
                Flights
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 py-3 px-4 font-semibold text-sm capitalize border-[1px] border-[#FFFFFF33] text-white tracking-wide rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-300">
                <RiBuildingLine /> Stays
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 py-3 px-4 font-semibold text-sm capitalize border-[1px] border-[#FFFFFF33] text-white tracking-wide rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-300">
                <RiBuildingLine /> Travel Packages
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 py-3 px-4 font-semibold text-sm border-[1px] border-[#FFFFFF33] text-white tracking-wide rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-300">
                <RiBuildingLine /> Car Rentals
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 py-3 px-4 font-semibold text-sm border-[1px] border-[#FFFFFF33] text-white tracking-wide rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-300">
                <RiBuildingLine /> Events
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 py-3 px-4 font-semibold text-sm border-[1px] border-[#FFFFFF33] text-white tracking-wide rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-300">
                <RiBuildingLine /> Money Exchange
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 py-3 px-4 font-semibold text-sm border-[1px] border-[#FFFFFF33] text-white tracking-wide rounded-full cursor-pointer hover:bg-white hover:text-primary transition-all duration-300">
                <RiBuildingLine /> Travel Insurance
              </button>
            </li>
          </ul>
        </div>

        <div className="w-full  p-6 rounded-[20px] backdrop-blur-[40px] bg-[#FFFFFFCC] flex flex-col justify-between">
          <HeroForm />
          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="inline-block text-brand text-sm font-normal capitalize hover:underline"
            >
              Lowest Price Guarantee on uticket.com
            </a>
            <button
              className="px-[18px] py-3 border-2 bg-bg-primary rounded-lg shadow-xs text-white font-semibold text-sm cursor-pointer hover:bg-transparent hover:border-bg-primary hover:text-tertiary transition-all duration-300"
              onClick={() => navigate("/search-result")}
            >
              Search Flight
            </button>
          </div>
        </div>

        <h2 className="mt-9 mb-6 font-bold text-xl tracking-tight">
          Recent search
        </h2>
        <div className="grid grid-cols-1 pb-6 md:pb-0 xs:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="py-6 px-4 bg-bg-secondaryAlt flex items-center gap-4 rounded-xl">
            <span className="block text-[32px] text-brand">
              <SlPlane />
            </span>
            <div>
              <h3 className="text-md font-semibold text-primary">
                Tribhuvan International...
              </h3>
              <p className="text-tertiary text-sm font-normal">
                Mar 15, 1 traveler, One-way
              </p>
            </div>
          </div>
          <div className="py-6 px-4 bg-bg-secondaryAlt flex items-center gap-4 rounded-xl">
            <span className="block text-[32px] text-brand">
              <SlPlane />
            </span>
            <div>
              <h3 className="text-md font-semibold text-primary">
                Tribhuvan International...
              </h3>
              <p className="text-tertiary text-sm font-normal">
                Mar 15, 1 traveler, One-way
              </p>
            </div>
          </div>
          <div className="py-6 px-4 bg-bg-secondaryAlt flex items-center gap-4 rounded-xl">
            <span className="block text-[32px] text-brand">
              <SlPlane />
            </span>
            <div>
              <h3 className="text-md font-semibold text-primary">
                Tribhuvan International...
              </h3>
              <p className="text-tertiary text-sm font-normal">
                Mar 15, 1 traveler, One-way
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[-5px] z-[2] w-full h-full md:h-auto">
        <img
          src="/hero-img.png"
          alt="Hero image"
          className="max-w-full  w-full h-full md:h-[808px] object-cover"
        />
      </div>
      <div className="absolute top-0  w-full h-full bg-gradient-to-b from-[#155eefe0] to-[#0c50d900] z-[3]"></div>
    </div>
  );
}

export default Hero;
