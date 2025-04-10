import { CiCalendar } from "react-icons/ci";
import CardContainer from "./CardContainer";
import { IoPeopleOutline } from "react-icons/io5";

function FeatureTravelCard({ featuredTravel }) {
  return (
    <CardContainer>
      <div>
        <img
          src={featuredTravel?.imgSrc}
          alt={`${featuredTravel?.packageName} image`}
          className="w-full"
        />
      </div>

      <div className="p-4">
        <div>
          <h3 className="mb-1.5 text-md font-bold">
            {featuredTravel?.packageName?.slice(0, 25)}...
          </h3>

          <div>
            <p className="flex items-center gap-1 text-tertiary text-sm">
              <CiCalendar />
              {featuredTravel?.duration} days
            </p>
            <p className="flex items-center gap-1 text-tertiary text-sm">
              <IoPeopleOutline />
              {featuredTravel?.totalPeople} people
            </p>
          </div>

          <p className="flex items-center  text-tertiary text-sm mt-6">
            From <strong className="ml-1">${featuredTravel?.price}</strong>/pax
          </p>
        </div>
      </div>
    </CardContainer>
  );
}

export default FeatureTravelCard;
