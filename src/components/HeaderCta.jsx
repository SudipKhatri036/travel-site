import React from "react";

function HeaderCta() {
  return (
    <div className="hidden xl:block">
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
      <button
        className={`px-3 py-2 border-[1px] border-white rounded-[8px] text-white mr-2 font-semibold text-sm cursor-pointer hover:bg-white hover:text-txt-secondary focus-within:outline-none focus-within:bg-white focus-within:text-txt-secondary  transition-all duration-300 hidden xs:inline-flex sm:hidden 2xl:inline-flex`}
      >
        Agent Login
      </button>
      <button className="px-3 py-2 rounded-[8px] border-[1px] border-transparent bg-white text-txt-secondary hover:border-white hover:text-white hover:bg-transparent focus-within:outline-none focus-within:border-white focus-within:text-white focus-within:bg-transparent font-semibold text-sm cursor-pointer transition-all duration-300 hidden xs:inline-flex ">
        Sign In
      </button>
    </div>
  );
}

export default HeaderCta;
