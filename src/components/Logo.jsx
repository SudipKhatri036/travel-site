import React from "react";

function Logo({ imgSrc }) {
  return (
    <div className="logo w-20 h-12">
      <img src={imgSrc} alt="Logo" />
    </div>
  );
}

export default Logo;
