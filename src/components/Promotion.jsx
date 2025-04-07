import React from "react";
import SectionHeading from "./SectionHeading";
import Section from "../ui/Section";

function Promotion() {
  return (
    <Section>
      {/* Promotion feature */}
      <div className="flex items-center gap-4 pb-10">
        <div className="text-center">
          <div className="flex justify-center">
            <img src="./images/promo/promo-f-1.png" alt="promo feature image" />
          </div>

          <h3 className="font-semibold mb-1 mt-4">One search in one apps</h3>

          <p className="text-sm text-tertiary leading-5 tracking-tight">
            We find you the best travel deals and travel hacks so that you can
            choose how to book.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <img src="./images/promo/promo-f-2.png" alt="promo feature image" />
          </div>

          <h3 className="font-semibold mb-1 mt-4">Travel with Peace</h3>

          <p className="text-sm text-tertiary leading-5 tracking-tight">
            We find you the best travel deals and travel hacks so that you can
            choose how to book.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <img src="./images/promo/promo-f-3.png" alt="promo feature image" />
          </div>

          <h3 className="font-semibold mb-1 mt-4">Unlock Exclusive Deals</h3>

          <p className="text-sm text-tertiary leading-5 tracking-tight">
            We find you the best travel deals and travel hacks so that you can
            choose how to book.
          </p>
        </div>
      </div>

      {/* Promotions */}
      <div>
        <div className="flex items-center justify-between">
          <SectionHeading
            heading="Promotions"
            subHeading="Amazing deals on flights, hotels, events, travel packages, car rentals, and money exchange everything you need for your next trip, all in one place!"
          />

          <a
            href="#"
            className="text-brand capitalize font-semibold  flex items-center gap-1 hover:scale-105 transition-all duration-300"
          >
            View All <span className="mt-1 ">&#8599;</span>
          </a>
        </div>

        <div className="mt-6 flex gap-4">
          <div>
            <img src="./images/promo/promo-1.png" alt="promotional image" />
          </div>
          <div>
            <img src="./images/promo/promo-2.png" alt="promotional image" />
          </div>
          <div>
            <img src="./images/promo/promo-3.png" alt="promotional image" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Promotion;
