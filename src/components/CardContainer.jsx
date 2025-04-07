import React from "react";
import { CiLocationOn } from "react-icons/ci";

function CardContainer({ children }) {
  return (
    <div className="rounded-lg border-[1px] border-border-secondary overflow-hidden shadow-sm">
      {children}
    </div>
  );
}

export default CardContainer;
