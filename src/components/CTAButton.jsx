import React from "react";

function CTAButton({
  children = "",
  onClick = () => {},
  cssStyles = "",
  btnSize,
}) {
  const btnSizes = {
    sm: "px-3 py-2",
    md: "py-2.5 px-3.5",
    lg: "px-4 py-2.5",
  };
  const baseStyle = `${btnSizes[btnSize]} rounded-lg border-[1px] text-sm font-semibold cursor-pointer transition-all duration-300 ${cssStyles}`;

  return (
    <button className={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default CTAButton;
