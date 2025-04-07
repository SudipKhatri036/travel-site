import React from "react";
import Promotion from "../components/Promotion";
import PopularDestination from "../components/PopularDestination";
import MembershipAd from "../components/MembershipAd";
import DiscountAd from "../components/DiscountAd";
import FeaturedAd from "../components/FeaturedAd";

function Home() {
  return (
    <div>
      <Promotion />
      <PopularDestination />
      <DiscountAd />
      <FeaturedAd />
      <MembershipAd />
    </div>
  );
}

export default Home;
