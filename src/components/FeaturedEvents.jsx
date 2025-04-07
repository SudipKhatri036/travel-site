import React from "react";
import SectionHeading from "./SectionHeading";
import Section from "../ui/Section";
import CardContainer from "./CardContainer";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import NavigatorCard from "./NavigatorCard";

function FeaturedEvents() {
  return (
    <Section>
      <SectionHeading
        heading="Featured Events"
        subHeading="Discover exciting events happening near you—book your tickets today."
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 rounded-2xl gap-4">
        <CardContainer>
          <div>
            <img
              src="/images/featuredEvents/featured-1.png"
              alt="Event  image"
            />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                24th Aaha! Rara Pokhara Gold Cup
              </h3>

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <CiCalendar />
                  10 Jun
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <span className="inline-block">
                    <CiLocationOn />
                  </span>
                  Taragaon, Kathmandu
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
            <img
              src="/images/featuredEvents/featured-2.png"
              alt="Event  image"
            />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                24th Aaha! Rara Pokhara Gold Cup
              </h3>

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <CiCalendar />
                  10 Jun
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <span className="inline-block">
                    <CiLocationOn />
                  </span>
                  Taragaon, Kathmandu
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
            <img
              src="/images/featuredEvents/featured-3.png"
              alt="Event  image"
            />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                24th Aaha! Rara Pokhara Gold Cup
              </h3>

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <CiCalendar />
                  10 Jun
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <span className="inline-block">
                    <CiLocationOn />
                  </span>
                  Taragaon, Kathmandu
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
            <img
              src="/images/featuredEvents/featured-4.png"
              alt="Event  image"
            />
          </div>

          <div className="p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                24th Aaha! Rara Pokhara Gold Cup
              </h3>

              <div>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <CiCalendar />
                  10 Jun
                </p>
                <p className="flex items-center gap-1 text-tertiary text-sm">
                  <span className="inline-block">
                    <CiLocationOn />
                  </span>
                  Taragaon, Kathmandu
                </p>
              </div>

              <p className="flex items-center  text-tertiary text-sm mt-6">
                From <strong className="ml-1">$15</strong>/day
              </p>
            </div>
          </div>
        </CardContainer>
        <NavigatorCard
          imgSrc="/images/featuredEvents/featured-img.png"
          title="Explore More for Less! Book Your Perfect Travel Package Today! 🌍✨"
          btnTxt="Browse Package"
          gradientFrom="#433E3B00"
          gradientTo="#433E3B"
        />
      </div>
    </Section>
  );
}

export default FeaturedEvents;
