import React from "react";
import Promotion from "../components/Promotion";
import PopularDestination from "../components/PopularDestination";
import MembershipAd from "../components/MembershipAd";
import DiscountAd from "../components/DiscountAd";
import FeaturedAd from "../components/FeaturedAd";
import FeaturedCarRental from "../components/FeaturedCarRental";
import FeaturedEvents from "../components/FeaturedEvents";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="relative">
      <Hero />
      <Promotion />
      <PopularDestination />
      <DiscountAd />
      <FeaturedAd />
      <FeaturedCarRental />
      <FeaturedEvents />
      <MembershipAd />
    </div>
  );
}

export default Home;
