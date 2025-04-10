import { CiLocationOn } from "react-icons/ci";
import CardContainer from "./CardContainer";

function DiscountCard({ hotel }) {
  return (
    <CardContainer>
      <div>
        <img
          src={hotel?.imgSrc}
          alt={`${hotel?.hotelName} image`}
          className="w-full"
        />
      </div>

      <div className="flex flex-col p-4">
        <div>
          <h3 className="mb-1.5 text-md font-bold">
            {`${hotel?.hotelName?.slice(0, 25)}...`}
          </h3>
          <p className="space-x-1 text-tertiary text-sm">
            <span className="inline-block">
              <img src="./images/icons/star.png" alt="Star icon" />
            </span>
            <span className="inline-block text-star mr-1">
              {hotel?.rating || "N/A"}
            </span>
            ({hotel?.totalReview || "N/A"} reviews)
          </p>

          <p className="flex items-center gap-1 text-tertiary text-sm">
            <span className="inline-block">
              <CiLocationOn />
            </span>
            {hotel?.location || "N/A"}
          </p>
        </div>

        <p className="flex items-center  text-tertiary text-sm mt-6">
          {hotel?.price && (
            <span className="line-through">${hotel?.price || "N/A"}</span>
          )}
          <strong className="ml-1">${hotel?.offerPrice || "N/A"}</strong>/night
        </p>
      </div>
    </CardContainer>
  );
}

export default DiscountCard;
