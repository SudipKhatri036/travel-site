import { TbAutomaticGearbox } from "react-icons/tb";
import CardContainer from "./CardContainer";
import { MdOutlineLuggage } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

function FeaturedCarRentalCard({ featuredCarRent }) {
  return (
    <CardContainer>
      <div>
        <img
          src={featuredCarRent?.imgSrc}
          alt={`${featuredCarRent?.carName} image`}
        />
      </div>

      <div className="p-4">
        <div>
          <h3 className="mb-1.5 text-md font-bold">
            {featuredCarRent?.carName || "N/A"}
          </h3>
          <div>
            <p className="flex items-center gap-1 text-tertiary text-sm">
              <TbAutomaticGearbox /> {featuredCarRent?.gearType}
            </p>
            <p className="flex items-center gap-1 text-tertiary text-sm">
              <MdOutlineLuggage />
              {featuredCarRent?.lugaugeCapacity} luguage
            </p>
            <p className="flex items-center gap-1 text-tertiary text-sm">
              <IoPeopleOutline />
              {featuredCarRent?.passengerCapacity} passengers
            </p>
          </div>

          <p className="flex items-center  text-tertiary text-sm mt-6">
            From <strong className="ml-1">${featuredCarRent?.price}</strong>/day
          </p>
        </div>
      </div>
    </CardContainer>
  );
}

export default FeaturedCarRentalCard;
