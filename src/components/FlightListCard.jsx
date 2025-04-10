import { FaChevronDown } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdOutlineLuggage } from "react-icons/md";
import { PiBagSimple } from "react-icons/pi";

function FlightListCard() {
  return (
    <div className="space-y-3">
      {/* list card */}
      <div className="p-5 border-1 border-border-secondary rounded-xl">
        <div className="flex items-center gap-1.5">
          {/* Active btn tag */}
          <button className="rounded-lg py-[2px] px-[6px] border-1 border-transparent bg-success text-sm font-medium text-white">
            Cheapest
          </button>

          {/* Non active btn tag */}
          <button className="flex items-center gap-1 rounded-lg py-[2px] px-[6px] border-1 border-success bg-successLight text-sm font-medium text-success">
            <PiBagSimple /> + <MdOutlineLuggage /> Included
          </button>
          <button className="flex items-center gap-1 rounded-lg py-[2px] px-[6px] border-1 border-success bg-successLight text-sm font-medium text-success">
            <FaRepeat />
            Refundable
          </button>
        </div>

        {/* Detail */}
        <div className="flex items-center">
          <div className="flex items-center gap-3 ">
            <div className="rounded-lg border-1 border-border-secondary p-3">
              <img src="/images/icons/china-air.png" alt="china air" />
            </div>
            <div>
              <h3 className="text-sm font-medium">
                Air China + Thai Airasia X...
              </h3>
              <p className="flex items-center gap-1 text-sm text-tertiary">
                {" "}
                <PiBagSimple /> 7kg <MdOutlineLuggage /> 25kg
              </p>
            </div>
          </div>
          <div className="flex items-center px-8 gap-6">
            <div className="">
              <p className="text-lg text-primary font-semibold">14:15</p>
              <p className="inline-flex items-center justify-center gap-1 text-tertiary">
                KTM
                <span className=" w-1 h-1 rounded-full bg-tertiary"></span>
                Mar 15
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="inline-flex items-center justify-center gap-1 text-tertiary text-sm">
                1 Stop 16h 45m
              </p>
              <div className="relative w-full h-[2px] bg-disabledSubtle before:w-2 before:h-2 before:bg-disabledSubtle before:rounded-full before:absolute before-left-0 before:top-[-3px] after:w-2 after:h-2 after:bg-disabledSubtle after:rounded-full after:absolute after-right-0 after:top-[-3px]">
                <span className="inline-block absolute top-1/2 bottom-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-500 rounded-full w-2 h-2"></span>
              </div>
              <button className="text-brand flex items-center gap-1 hover:scale-105 transition-all duration-300">
                Flight Details <FaChevronDown />
              </button>
            </div>
            <div>
              <p className="text-lg text-primary font-semibold">14:15</p>
              <p className="inline-flex items-center justify-center gap-1 text-tertiary">
                KTM
                <span className=" w-1 h-1 rounded-full bg-tertiary"></span>
                Mar 15
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-brand">USD $368</h2>
            <button className="px-[14px] py-[10px] border-2 bg-bg-primary rounded-lg shadow-xs text-white font-semibold text-sm cursor-pointer hover:bg-transparent hover:border-bg-primary hover:text-tertiary transition-all duration-300">
              Book Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightListCard;
