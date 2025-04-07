import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header className="relative z-10">
      <div className="px-11 py-4 text-white flex justify-between items-center">
        <div className="flex gap-16">
          <Logo imgSrc="./logo-white.png" />
          <ul className="flex items-center ">
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                Flights
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                Stays
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                Travel Packages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                Car Rentals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                Money Exchanges
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                Travel Insuarances
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                Marketplaces
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-[1px] border-transparent rounded-full text-sm px-3 py-2 hover:bg-[#ffffff]/20 hover:border-[#ffffff]/20  transition-all duration-300 focus-within:outline-none focus-within:border-[#ffffff]/20 focus-within:bg-[#ffffff]/20"
              >
                More
              </a>
            </li>
          </ul>
        </div>
        <div>
          <select
            name="language"
            id="language"
            className="mr-4 text-sm cursor-pointer "
          >
            <option value="en-usd" className="text-txt-secondary p-2">
              En| USD
            </option>
            <option value="np-npr" className="text-txt-secondary p-2">
              Np| USD
            </option>
          </select>
          <button className="px-3 py-2 border-[1px] border-white rounded-[8px] mr-2 font-semibold text-sm cursor-pointer hover:bg-white hover:text-txt-secondary focus-within:outline-none focus-within:bg-white focus-within:text-txt-secondary  transition-all duration-300">
            Agent Login
          </button>
          <button className="px-3 py-2 rounded-[8px] border-[1px] border-transparent bg-white text-txt-secondary hover:border-white hover:text-white hover:bg-transparent focus-within:outline-none focus-within:border-white focus-within:text-white focus-within:bg-transparent font-semibold text-sm cursor-pointer transition-all duration-300">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
