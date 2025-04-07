import React from "react";
import SectionHeading from "./SectionHeading";
import CardContainer from "./CardContainer";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";

function FeaturedAd() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <SectionHeading
        heading="Featured Travel Package"
        subHeading="Handpicked deals for your next perfect getaway—explore, book, and save now!"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 rounded-2xl gap-4">
        <CardContainer>
          <div>
            <img
              src="/images/featured/featured-img4.png"
              alt="Discount banner"
            />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                Fantastic Dubai Tour Package
              </h3>

              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiCalendar />
                </span>
                5 days
              </p>
              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <IoPeopleOutline />
                </span>
                1-8 people
              </p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img src="/images/featured/featured-1.png" alt="Discount banner" />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                Fantastic Dubai Tour Package
              </h3>

              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiCalendar />
                </span>
                5 days
              </p>
              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <IoPeopleOutline />
                </span>
                1-8 people
              </p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img
              src="/images/featured/featured-img2.png"
              alt="Discount banner"
            />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                Fantastic Dubai Tour Package
              </h3>

              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiCalendar />
                </span>
                5 days
              </p>
              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <IoPeopleOutline />
                </span>
                1-8 people
              </p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img
              src="/images/featured/featured-img3.png"
              alt="Discount banner"
            />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                Fantastic Dubai Tour Package
              </h3>

              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiCalendar />
                </span>
                5 days
              </p>
              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <IoPeopleOutline />
                </span>
                1-8 people
              </p>
            </div>
          </div>
        </CardContainer>
      </div>
    </div>
  );
}

export default FeaturedAd;
