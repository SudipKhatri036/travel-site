import React from "react";
import SectionHeading from "./SectionHeading";
import CardContainer from "./CardContainer";
import { CiCalendar } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import NavigatorCard from "./NavigatorCard";
import Section from "../ui/Section";

function FeaturedAd() {
  return (
    <Section>
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
              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <CiCalendar />5 days
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <IoPeopleOutline />
                  1-8 people
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$1,250</strong>/pax
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

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <CiCalendar />5 days
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <IoPeopleOutline />
                  1-8 people
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$1,250</strong>/pax
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

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <CiCalendar />5 days
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <IoPeopleOutline />
                  1-8 people
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$1,250</strong>/pax
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

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <CiCalendar />5 days
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <IoPeopleOutline />
                  1-8 people
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$1,250</strong>/pax
              </p>
            </div>
          </div>
        </CardContainer>
        <NavigatorCard
          imgSrc="/images/featured/featured-img.png"
          title="Explore More for Less! Book Your Perfect Travel Package Today! 🌍✨"
          btnTxt="Browse Package"
        />
      </div>
    </Section>
  );
}

export default FeaturedAd;
