import React from "react";
import Section from "../ui/Section";
import HeroForm from "../components/HeroForm";
import DateSlider from "../components/DateSlider";
import { FaChevronDown } from "react-icons/fa";
import FlightListCard from "../components/FlightListCard";
import SearchFilters from "../components/SearchFilters";

function SearchResults() {
  return (
    <Section>
      <div className="p-6 bg-white border-border-secondary rounded-xl border-[1px] shadow-xl ">
        <HeroForm />
      </div>
      <DateSlider />

      <div className="flex items-start gap-8">
        {/* Filter list */}
        <div className="p-5 pb-6 border-1 rounded-xl border-border-primary space-y-3">
          {/* Filter list component */}

          <div className="space-y-3 pb-4 border-b-1 border-border-secondary">
            <h3>Facility</h3>
            <ul className="">
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="bagage"
                  id="bagage"
                  value="bagage"
                />
                <label htmlFor="bagage">Bagage</label>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input type="checkbox" name="meals" id="meals" value="meals" />
                <label htmlFor="meals">Meals</label>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="bagage"
                  id="bagage"
                  value="bagage"
                />
                <label htmlFor="bagage">Bagage</label>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="bagage"
                  id="bagage"
                  value="bagage"
                />
                <label htmlFor="bagage">Bagage</label>
              </li>
            </ul>
          </div>

          {/* Airlines */}
          <div className="space-y-3 pb-4 border-b-1 border-border-secondary">
            <h3>Airlines</h3>
            <ul className="">
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="air-china"
                  id="air-china"
                  value="air-china"
                />
                <label htmlFor="air-china">Air China</label>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="air-india"
                  id="air-india"
                  value="air-india"
                />
                <label htmlFor="air-india">Air India</label>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="thai-air"
                  id="thai-air"
                  value="thai-air"
                />
                <label htmlFor="thai-air">Thai Air</label>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="air-nepal"
                  id="air-nepal"
                  value="air-nepal"
                />
                <label htmlFor="air-nepal">Air Nepal</label>
              </li>
            </ul>

            {/* Show more */}
            <button className="flex items-center gap-2 text-brand font-semibold text-sm hover:scale-105 transition-all duration-300 cursor-pointer">
              Show more <FaChevronDown />
            </button>
          </div>

          {/* Number of Transfer */}
          <div className="space-y-3 pb-4 border-b-1 border-border-secondary">
            <h3>Airlines</h3>
            <ul className="">
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="direct"
                  id="direct"
                  value="direct"
                />
                <label htmlFor="direct">Direct</label>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="one-transfer"
                  id="one-transfer"
                  value="one-transfer"
                />
                <label htmlFor="one-transfer">1 Transfer</label>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-txt-secondary">
                <input
                  type="checkbox"
                  name="two-or-more"
                  id="two-or-more"
                  value="two-or-more"
                />
                <label htmlFor="two-or-more">Two or more</label>
              </li>
            </ul>
          </div>

          {/* Progress filter */}
          <div className="space-y-3 pb-4 border-b-1 border-border-secondary">
            <div className="space-y-3">
              <h3>Airlines</h3>

              <p className="text-sm text-tertiary font-medium">
                Departure time 00:00 - 24:00
              </p>

              <div>
                <input
                  type="range"
                  name="duration"
                  id="duration"
                  className="w-full"
                  min={0}
                  max={24}
                  defaultValue={0}
                />
                <label
                  htmlFor="duration"
                  className="flex items-center justify-between text-sm font-medium text-tertiary"
                >
                  00:00 <span>24:00</span>
                </label>
              </div>
            </div>

            {/* Arival Time */}
            <div className="space-y-3 pb-4 border-b-1 border-border-secondary">
              <h3>Airlines</h3>

              <p className="text-sm text-tertiary font-medium">
                Arrival time 00:00 - 24:00
              </p>

              <div>
                <input
                  type="range"
                  name="duration"
                  id="duration"
                  className="w-full"
                  min={0}
                  max={24}
                  defaultValue={0}
                />
                <label
                  htmlFor="duration"
                  className="flex items-center justify-between text-sm font-medium text-tertiary"
                >
                  00:00 <span>24:00</span>
                </label>
              </div>
            </div>

            {/* Price per person */}
            <div className="space-y-3 pb-4 border-b-1 border-border-secondary">
              <h3>Price per person</h3>

              <p className="text-sm text-tertiary font-medium">Up to $400.00</p>

              <div>
                <input
                  type="range"
                  name="duration"
                  id="duration"
                  className="w-full"
                  min={0}
                  max={400}
                  defaultValue={0}
                />
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-3">
              <h3>Duration</h3>

              <p className="text-sm text-tertiary font-medium">
                Under 72 hours
              </p>

              <div>
                <input
                  type="range"
                  name="duration"
                  id="duration"
                  className="w-full"
                  min={0}
                  max={72}
                  defaultValue={0}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Flight list */}
        <div>
          {/* Filter Component */}
          <div className="w-full border-1 rounded-2xl border-border-secondary overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-[#252B37] to-[#535862] ">
              <h2 className="text-white font-semibold text-base">
                Flight Kathmandu to Shangai
              </h2>
            </div>
            <SearchFilters />
          </div>

          {/* FLight list component */}
          <div className="overflow-auto max-h-[1374px]">
            <FlightListCard />
            <FlightListCard />
            <FlightListCard />
            <FlightListCard />
            <FlightListCard />
            <FlightListCard />
            <FlightListCard />
            <FlightListCard />
            <FlightListCard />
            <FlightListCard />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SearchResults;
