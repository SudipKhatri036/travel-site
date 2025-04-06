import React from "react";
import Promotion from "../components/Promotion";
import PopularDestination from "../components/PopularDestination";
import MembershipAd from "../components/MembershipAd";

function Home() {
  return (
    <div>
      <Promotion />
      <PopularDestination />
      <MembershipAd />
    </div>
  );
}

export default Home;
