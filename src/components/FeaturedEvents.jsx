import React from "react";
import SectionHeading from "./SectionHeading";
import Section from "../ui/Section";
import CardContainer from "./CardContainer";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import NavigatorCard from "./NavigatorCard";
import FeaturedEventsCard from "./FeaturedEventsCard";
import FeaturedGridContainer from "./FeaturedGridContainer";

const featuredEventsMockData = [
  {
    imgSrc: "/images/featuredEvents/featured-1.png",
    eventName: "Fantastic Dubai Tour Package",
    eventDate: "10 Jun",
    eventLocation: "Taragaon, Kathmandu",
    price: 15,
  },
  {
    imgSrc: "/images/featuredEvents/featured-2.png",
    eventName: "24th Aaha! Rara Pokhara Gold Cup",
    eventDate: "10 Jun",
    eventLocation: "Taragaon, Kathmandu",
    price: 15,
  },
  {
    imgSrc: "/images/featuredEvents/featured-3.png",
    eventName: "24th Aaha! Rara Pokhara Gold Cup",
    eventDate: "10 Jun",
    eventLocation: "Taragaon, Kathmandu",
    price: 15,
  },
  {
    imgSrc: "/images/featuredEvents/featured-4.png",
    eventName: "24th Aaha! Rara Pokhara Gold Cup",
    eventDate: "10 Jun",
    eventLocation: "Taragaon, Kathmandu",
    price: 15,
  },
];

function FeaturedEvents() {
  return (
    <Section>
      <SectionHeading
        heading="Featured Events"
        subHeading="Discover exciting events happening near you—book your tickets today."
      />

      <FeaturedGridContainer>
        {featuredEventsMockData?.map((eventData) => (
          <FeaturedEventsCard
            key={eventData?.eventName}
            eventData={eventData}
          />
        ))}

        <NavigatorCard
          imgSrc="/images/featuredEvents/featured-img.png"
          title="Explore More for Less! Book Your Perfect Travel Package Today! 🌍✨"
          btnTxt="Browse Package"
          gradientFrom="#433E3B00"
          gradientTo="#433E3B"
        />
      </FeaturedGridContainer>
    </Section>
  );
}

export default FeaturedEvents;
