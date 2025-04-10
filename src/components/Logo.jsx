import React from "react";
import { Link } from "react-router-dom";

function Logo({ imgSrc }) {
  return (
    <Link className="inline-block w-20 h-12">
      <img src={imgSrc} alt="Logo" />
    </Link>
  );
}

export default Logo;
