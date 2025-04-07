import React from "react";

function MembershipAd() {
  return (
    <section className="max-w-7xl mx-auto relative px-6 py-8 mb-16 overflow-hidden rounded-2xl">
      <div className="w-1/2 px-[42px] py-6 flex flex-col justify-center relative z-[12]">
        <h2 className="capitalize mb-2 text-2xl text-white font-bold">
          Become member
        </h2>
        <p className="text-white text-base">
          Register now to unlock exclusive features and enjoy amazing promos!
        </p>
        <ul className="grid grid-cols-2 mt-4 mb-8 gap-1">
          <li className="flex items-center gap-2 text-white text-sm">
            <span>
              <img src="./images/icons/round-tick.png" alt="round right" />
            </span>
            Special app discount
          </li>
          <li className="flex items-center gap-2 text-white text-sm">
            <span>
              <img src="./images/icons/round-tick.png" alt="round right" />
            </span>
            Travel Benefits
          </li>
          <li className="flex items-center gap-2 text-white text-sm">
            <span>
              <img src="./images/icons/round-tick.png" alt="round right" />
            </span>
            Best deals
          </li>
          <li className="flex items-center gap-2 text-white text-sm">
            <span>
              <img src="./images/icons/round-tick.png" alt="round right" />
            </span>
            Access to all features
          </li>
        </ul>

        <button className="w-1/2 px-4 py-2.5 rounded-lg border-[1px] border-border-secondary bg-bg-secondary  cursor-pointer">
          Become Member
        </button>
      </div>
      <div className="absolute w-full h-full top-0 z-[11]  bg-gradient-to-r from-[#033FB8] from-0% to-[#276ffe00] to-100%"></div>
      <div className="bg-[url(./images/membership/membership-ad-hero.png)] absolute w-full h-full top-0 z-10  px-6 object-cover bg-no-repeat overflow-hidden"></div>
    </section>
  );
}

export default MembershipAd;
