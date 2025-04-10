import React from "react";
import CardContainer from "./CardContainer";
import { CiCalendar, CiLocationOn } from "react-icons/ci";

function FeaturedEventsCard({ eventData }) {
  return (
    <CardContainer>
      <div>
        <img src={eventData?.imgSrc} alt={`${eventData?.eventName} image`} />
      </div>

      <div className="p-4">
        <div>
          <h3 className="mb-1.5 text-md font-bold">
            {`${eventData?.eventName.slice(0, 25)}...`}
          </h3>

          <div>
            <p className="flex items-center gap-1 text-tertiary text-sm">
              <CiCalendar />
              {eventData?.eventDate}
            </p>
            <p className="flex items-center gap-1 text-tertiary text-sm">
              <span className="inline-block">
                <CiLocationOn />
              </span>
              {eventData?.eventLocation}
            </p>
          </div>

          <p className="flex items-center  text-tertiary text-sm mt-6">
            From <strong className="ml-1">${eventData?.price}</strong>/day
          </p>
        </div>
      </div>
    </CardContainer>
  );
}

export default FeaturedEventsCard;
