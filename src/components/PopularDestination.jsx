import React from "react";
import SectionHeading from "./SectionHeading";

function PopularDestination() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <SectionHeading
        heading="Popular Flight Destination"
        subHeading="Discover the hottest destinations people are eager to visit right now!"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        <div className="relative">
          <div className="w-full">
            <img
              src="./images/popular/popular-1.png"
              alt="Popular destination"
              className="z-0 w-full"
            />
          </div>
          <div className="absolute w-full bottom-0 bg-linear-65 from-white to-zinc-900">
            <h3 className="text-base font-bold text-white">Singapore</h3>
            <p>From $120.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDestination;
