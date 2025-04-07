import React from "react";
import SectionHeading from "./SectionHeading";
import DestinationCard from "./DestinationCard";
import NavigatorCard from "./NavigatorCard";
import Section from "../ui/Section";

function PopularDestination() {
  return (
    <Section>
      <SectionHeading
        heading="Popular Flight Destination"
        subHeading="Discover the hottest destinations people are eager to visit right now!"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 rounded-2xl gap-4">
        <DestinationCard imgSrc="./images/popular/popular-1.png" />
        <DestinationCard imgSrc="./images/popular/popular-2.png" />
        <DestinationCard imgSrc="./images/popular/popular-3.png" />
        <DestinationCard imgSrc="./images/popular/popular-4.png" />
        <NavigatorCard
          imgSrc="/images/popular/popular-img.png"
          title="✈️ Ready for Takeoff? Book Your Flight Now & Save Big! 🌍✨"
          btnTxt="Find Flight"
          gradientFrom="#01AADD00"
          gradientTo="#01AADD"
        />
      </div>
    </Section>
  );
}

export default PopularDestination;
