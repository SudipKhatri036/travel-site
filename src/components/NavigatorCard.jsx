import React from "react";

function NavigatorCard({ imgSrc, title, btnTxt, gradientFrom, gradientTo }) {
  return (
    <div className="relative rounded-2xl h-full overflow-hidden">
      <div className="absolute h-full w-full">
        <img
          src={imgSrc || "/images/featured/featured-img.png"}
          className="w-full h-full object-cover"
          alt="Featured"
        />
      </div>

      <div
        className={`absolute bottom-0 w-full mx-auto bg-gradient-to-b from-[${
          gradientFrom || "#53170500"
        }]  to-[${gradientTo || "#531705"}] p-4 pt-10`}
      >
        <p className="font-bold text-md text-white text-center">
          {title || ""}
        </p>

        <button className="w-full border-[1px] border-btn-secondary rounded-lg font-semibold text-sm py-2.5 px-3.5 mt-4 bg-border-secondary cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300 ">
          {btnTxt}
        </button>
      </div>
    </div>
  );
}

export default NavigatorCard;
