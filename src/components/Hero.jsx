import React from "react";

function Hero() {
  return (
    <div className="w-full min-h-[900px]  pt-[80px] pb- mt-[-80px] relative ">
      Hero
      <div className="absolute top-[-5px] z-[2] w-full">
        <img
          src="/hero-img.png"
          alt="Hero image"
          className="max-w-full  w-full h-[900px] object-cover"
        />
      </div>
      <div className="absolute top-0  w-full h-full bg-gradient-to-b from-[#155eefe0] to-[#0c50d900] z-[3]"></div>
    </div>
  );
}

export default Hero;
