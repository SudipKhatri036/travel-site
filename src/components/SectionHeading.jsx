import React from "react";

function SectionHeading({ heading, subHeading, subStyleClass }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p
        className={`text-base ${subStyleClass} sm:max-w-[540px] lg:max-w-[640px] text-light text-tertiary`}
      >
        {subHeading}
      </p>
    </div>
  );
}

export default SectionHeading;
