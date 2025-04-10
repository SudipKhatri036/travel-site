import React from "react";
import SectionHeading from "./SectionHeading";

import NavigatorCard from "./NavigatorCard";
import Section from "../ui/Section";
import FeatureTravelCard from "./FeatureTravelCard";
import FeaturedGridContainer from "./FeaturedGridContainer";

const featuredTravelMockData = [
  {
    imgSrc: "/images/featured/featured-img1.png",
    packageName: "Fantastic Dubai Tour Package",
    duration: 5,
    totalPeople: "1-8",
    price: "1250",
  },
  {
    imgSrc: "/images/featured/featured-img2.png",
    packageName: "Budget Singapore Tour Package",
    duration: 5,
    totalPeople: "1-8",
    price: "1250",
  },
  {
    imgSrc: "/images/featured/featured-img3.png",
    packageName: "Explore Europe",
    duration: 5,
    totalPeople: "1-8",
    price: "1250",
  },
  {
    imgSrc: "/images/featured/featured-img4.png",
    packageName: "Ultimate Thailand Adventure",
    duration: 5,
    totalPeople: "1-8",
    price: "1250",
  },
];

function FeaturedAd() {
  return (
    <Section>
      <SectionHeading
        heading="Featured Travel Package"
        subHeading="Handpicked deals for your next perfect getaway—explore, book, and save now!"
      />

      <FeaturedGridContainer>
        {featuredTravelMockData?.map((featuredTravel) => (
          <FeatureTravelCard
            key={featuredTravel?.packageName}
            featuredTravel={featuredTravel}
          />
        ))}

        <NavigatorCard
          imgSrc="/images/featured/featured-img.png"
          title="Explore More for Less! Book Your Perfect Travel Package Today! 🌍✨"
          btnTxt="Browse Package"
        />
      </FeaturedGridContainer>
    </Section>
  );
}

export default FeaturedAd;
