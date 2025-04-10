import React from "react";
import { CiCalendar, CiUser } from "react-icons/ci";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { SlLocationPin, SlPlane } from "react-icons/sl";

function HeroForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for one way two way and Seat class */}

      <div className="text-tertiary flex flex-wrap gap-4">
        <div className="bg-bg-secondary p-2 pr-3 rounded-lg flex items-center gap-2 cursor-pointer relative">
          <input
            type="checkbox"
            id="one-way"
            name="trip-type"
            value="oneWay"
            className="absolute top-0 peer h-6 w-6 opacity-0 z-99"
          />
          <span className=" z-0  h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300"></span>
          <span className="absolute text-white opacity-0 left-[7px]  border-7 h-6 w-6 peer-checked:opacity-100  peer-checked:border-brand rounded-full"></span>
          <label
            htmlFor="one-way"
            className="inline-flex items-center cursor-pointer peer-checked:text-primary peer-checked:font-medium"
          >
            One Way
          </label>
        </div>

        <div className="bg-bg-secondary p-2 pr-3 rounded-lg flex items-center gap-2 cursor-pointer relative">
          <input
            type="checkbox"
            id="round-trip"
            name="trip-type"
            value="roundTrip"
            className="absolute top-0 peer h-6 w-6 opacity-0 z-99"
          />
          <span className=" z-0  h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300"></span>
          <span className="absolute text-white opacity-0 left-[7px] border-7 h-6 w-6 peer-checked:opacity-100  peer-checked:border-brand rounded-full"></span>
          <label
            htmlFor="round-trip"
            className="inline-flex items-center cursor-pointer peer-checked:text-primary peer-checked:font-medium"
          >
            Round Trip
          </label>
        </div>

        <select
          name="flight-class"
          className="bg-bg-secondary p-2 rounded-lg cursor-pointer focus:ring-brand focus:border-brand border-r-transparent focus:border-r-transparent inline-flex  border-r-8  "
        >
          <option value="economy" defaultValue="selected">
            Economy
          </option>
          <option value="business">Business</option>
          <option value="vip">VIP</option>
        </select>
      </div>

      {/* Airplane booking */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 mt-2 gap-2">
        <div className="py-3 px-4 bg-bg-secondaryAlt flex flex-col items-center gap-4 rounded-xl xs:col-span-2 xs:flex-row ">
          <div className="flex items-center gap-4 rounded-xl">
            <span className="block text-xl text-brand">
              <SlPlane />
            </span>
            <div>
              <label
                htmlFor="passenger-count"
                className="text-xs font-normal text-tertiary"
              >
                From
              </label>
              {/* <input
                  type="date"
                  name="passenger-count"
                  id="passenger-count"
                  className="block "
                /> */}
              <p className="text-md font-medium">
                Kathmandu, Nepal <span className="text-tertiary">KTM</span>
              </p>
            </div>
          </div>
          <div className="relative">
            <button className="relative z-[2] p-2 rounded-lg bg-bg-secondary border-[1px] border-btn-secondary">
              <HiOutlineSwitchHorizontal />
            </button>
            <div className="w-14 h-[1px] bg-btn-secondary absolute z[1] top-1/2 left-1/2 right-1/2 -translate-x-1/2"></div>
          </div>

          <div className="flex items-center gap-4 rounded-xl ">
            <span className="block text-xl text-brand">
              <SlLocationPin />
            </span>
            <div>
              <label
                htmlFor="passenger-count"
                className="text-xs font-normal text-tertiary"
              >
                To
              </label>
              {/* <input
                  type="date"
                  name="passenger-count"
                  id="passenger-count"
                  className="block "
                /> */}
              <p className="text-md font-medium">
                Shangai, China <span className="text-tertiary">PVG</span>
              </p>
            </div>
          </div>
        </div>

        <div className="py-3 px-4 bg-bg-secondaryAlt flex items-center gap-4 rounded-xl">
          <span className="block text-xl text-brand">
            <CiCalendar />
          </span>
          <div>
            <label
              htmlFor="passenger-count"
              className="text-xs font-normal text-tertiary"
            >
              Departure Date
            </label>
            {/* <input
                type="date"
                name="passenger-count"
                id="passenger-count"
                className="block "
              /> */}
            <p className="text-md font-medium">Tue, Feb 11</p>
          </div>
        </div>

        <div className="py-3 px-4 bg-bg-secondaryAlt flex items-center gap-4 rounded-xl">
          <span className="block text-xl text-brand">
            <CiUser />
          </span>
          <div>
            <label
              htmlFor="passenger-count"
              className="text-xs font-normal text-tertiary"
            >
              Passenger
            </label>
            {/* <input
                type="text"
                name="passenger-count"
                id="passenger-count"
                className="block"
                defaultValue={1}
              />{" "} */}
            <p className="text-md font-medium">1 Adult</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default HeroForm;
