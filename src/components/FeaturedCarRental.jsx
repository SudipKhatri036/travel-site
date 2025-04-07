import React from "react";
import Section from "../ui/Section";
import SectionHeading from "./SectionHeading";
import CardContainer from "./CardContainer";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineLuggage } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import NavigatorCard from "./NavigatorCard";

function FeaturedCarRental() {
  return (
    <Section>
      <SectionHeading
        heading="Featured Car Rental"
        subHeading="Find the best deals on top-rated rentals—book now for a smooth and hassle-free"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 rounded-2xl gap-4">
        <CardContainer>
          <div>
            <img src="/images/car-rentals/car-1.png" alt="Car  image" />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">Hyundai Sonata</h3>
              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <TbAutomaticGearbox /> Automatic
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <MdOutlineLuggage />2 lugage
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <IoPeopleOutline />2 passengers
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$15</strong>/day
              </p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img src="/images/car-rentals/car-2.png" alt="Car  image" />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">Hyundai Sonata</h3>

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <TbAutomaticGearbox /> Automatic
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <MdOutlineLuggage />2 lugage
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <IoPeopleOutline />2 passengers
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$15</strong>/day
              </p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img src="/images/car-rentals/car-3.png" alt="Car  image" />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">Hyundai Sonata</h3>
              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <TbAutomaticGearbox /> Automatic
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <MdOutlineLuggage />2 lugage
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <IoPeopleOutline />2 passengers
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$15</strong>/day
              </p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img src="/images/car-rentals/car-4.png" alt="Car  image" />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">Hyundai Sonata</h3>

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <TbAutomaticGearbox /> Automatic
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <MdOutlineLuggage />2 lugage
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <IoPeopleOutline />2 passengers
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$15</strong>/day
              </p>
            </div>
          </div>
        </CardContainer>
        <NavigatorCard
          imgSrc="/images/car-rentals/car-img.png"
          title="Explore More for Less! Book Your Perfect Travel Package Today! 🌍✨"
          btnTxt="Find a car"
          gradientFrom="#63636300"
          gradientTo="#636363"
        />
      </div>
    </Section>
  );
}

export default FeaturedCarRental;
