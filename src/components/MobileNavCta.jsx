import React from "react";

function MobileNavCta() {
  return (
    <div>
      <select
        name="language"
        id="language"
        className="mr-4 text-sm cursor-pointer xl:hidden"
      >
        <option value="en-usd" className="text-txt-secondary p-2">
          En| USD
        </option>
        <option value="np-npr" className="text-txt-secondary p-2">
          Np| USD
        </option>
      </select>
      <div className="flex flex-col gap-3 justify-center">
        <button className="block px-3 py-2 border-[1px] border-primary text-primary text-3xl rounded-[8px] mr-2 font-semibold cursor-pointer hover:bg-white hover:text-txt-secondary focus-within:outline-none focus-within:bg-white focus-within:text-txt-secondary  transition-all duration-300">
          Agent Login
        </button>
        <button className="block px-3 py-2 rounded-[8px] border-[1px] border-transparent text-3xl text-white bg-primary  hover:border-primary hover:text-priborder-primary hover:bg-transparent focus-within:outline-none focus-within:border-white focus-within:text-white focus-within:bg-transparent font-semibold cursor-pointer transition-all durati ">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default MobileNavCta;
