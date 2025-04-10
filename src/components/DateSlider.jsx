import React from "react";
import Section from "../ui/Section";

function DateSlider() {
  return (
    <Section>
      <div className="py-2 px-4 bg-white border-[1px] rounded-xl border-border-secondary relative">
        <div className="flex items-center w-full">
          {/* Disabled btn */}
          <button className="border-2 border-transparent text-disabled font-normal rounded-md py-2 px-3 min-w-[139.5px]">
            <p className="text-sm">Wed, Feb 2</p>
            <p className="text-sm ">No flight</p>
          </button>
          {/* Available btn */}
          <button className="border-2 border-transparent font-medium text-primary rounded-md py-2 px-3 min-w-[139.5px] hover:border-brand hover:text-brand transition-all duration-300 cursor-pointer">
            <p className="text-sm">Wed, Feb 2</p>
            <p className="text-sm ">$258</p>
          </button>

          {/* Active btn */}
          <button className="border-2 border-brand font-medium text-brand rounded-md py-2 px-3 min-w-[139.5px]">
            <p className="text-sm">Wed, Feb 2</p>
            <p className="text-sm ">$382</p>
          </button>

          {/* Available btn */}
          <button className="border-2 border-transparent font-medium text-primary rounded-md py-2 px-3 min-w-[139.5px]">
            <p className="text-sm">Wed, Feb 2</p>
            <p className="text-sm ">$258</p>
          </button>

          {/* Disabled btn */}
          <button className="border-2 border-transparent text-disabled font-normal rounded-md py-2 px-3 min-w-[139.5px]">
            <p className="text-sm">Wed, Feb 2</p>
            <p className="text-sm ">No flight</p>
          </button>
        </div>
      </div>
    </Section>
  );
}

export default DateSlider;
