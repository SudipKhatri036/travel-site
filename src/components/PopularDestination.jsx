import React from "react";
import SectionHeading from "./SectionHeading";
import DestinationCard from "./DestinationCard";

function PopularDestination() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <SectionHeading
        heading="Popular Flight Destination"
        subHeading="Discover the hottest destinations people are eager to visit right now!"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 rounded-2xl gap-4">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </div>
  );
}

export default PopularDestination;
