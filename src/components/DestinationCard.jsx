import React from "react";

function DestinationCard({ imgSrc }) {
  return (
    <div className="relative z-0">
      <div className="w-full rounded-2xl">
        <img
          src={imgSrc || "./images/popular/popular-1.png"}
          alt="Popular destination"
          className="z-0 w-full overflow-hidden  rounded-2xl"
        />
      </div>
      <div className="absolute w-full bottom-0 p-4 pt-8 z-[2] rounded-2xl">
        <h3 className="text-md font-bold text-white">Singapore</h3>
        <p className="text-white text-sm">From $120.00</p>
      </div>
      <div className="absolute w-full bottom-0 z-[1] p-4 pt-8 bg-gradient-to-t from-black/100 to-transparent via-black/100  h-24 rounded-2xl"></div>
    </div>
  );
}

export default DestinationCard;
