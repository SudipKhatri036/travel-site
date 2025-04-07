import { CiLocationOn } from "react-icons/ci";
import CardContainer from "./CardContainer";
import Card from "./CardContainer";
import DestinationCard from "./DestinationCard";
import SectionHeading from "./SectionHeading";

function DiscountAd() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <SectionHeading
        heading="Discount up to 30 %off + on hotels"
        subHeading="Book your stay now and enjoy amazing savings on top accommodations "
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 rounded-2xl gap-4">
        <CardContainer>
          <div>
            <img src="/images/discount/discount-1.png" alt="Discount banner" />
          </div>

          <div className="flex flex-col p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                Nirvana Boutique Hotels
              </h3>
              <p className="space-x-1 text-tertiary text-sm">
                <span className="inline-block">
                  <img src="./images/icons/star.png" alt="Star icon" />
                </span>
                <span className="inline-block text-star mr-1">4.5</span>
                (5.2k reviews)
              </p>

              <p className="space-x-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiLocationOn />
                </span>
                Taragaon, Kathmandu
              </p>
            </div>

            <p className="space-x-1 text-tertiary text-sm mt-6">
              <span className="line-through">$150</span>
              <strong>$75</strong>/night
            </p>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img src="/images/discount/discount-2.png" alt="Discount banner" />
          </div>

          <div className="flex flex-col p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                Nirvana Boutique Hotels
              </h3>
              <p className="space-x-1 text-tertiary text-sm">
                <span className="inline-block">
                  <img src="./images/icons/star.png" alt="Star icon" />
                </span>
                <span className="inline-block text-star mr-1">4.5</span>
                (5.2k reviews)
              </p>

              <p className="space-x-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiLocationOn />
                </span>
                Taragaon, Kathmandu
              </p>
            </div>

            <p className="space-x-1 text-tertiary text-sm mt-6">
              <span className="line-through">$150</span>
              <strong>$75</strong>/night
            </p>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img src="/images/discount/discount-3.png" alt="Discount banner" />
          </div>

          <div className="flex flex-col p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                Nirvana Boutique Hotels
              </h3>
              <p className="space-x-1 text-tertiary text-sm">
                <span className="inline-block">
                  <img src="./images/icons/star.png" alt="Star icon" />
                </span>
                <span className="inline-block text-star mr-1">4.5</span>
                (5.2k reviews)
              </p>

              <p className="space-x-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiLocationOn />
                </span>
                Taragaon, Kathmandu
              </p>
            </div>

            <p className="space-x-1 text-tertiary text-sm mt-6">
              <span className="line-through">$150</span>
              <strong>$75</strong>/night
            </p>
          </div>
        </CardContainer>
        <CardContainer>
          <div>
            <img src="/images/discount/discount-4.png" alt="Discount banner" />
          </div>

          <div className="flex flex-col p-4">
            <div>
              <h3 className="mb-1.5 text-md font-bold">
                Nirvana Boutique Hotels
              </h3>
              <p className="space-x-1 text-tertiary text-sm">
                <span className="inline-block">
                  <img src="./images/icons/star.png" alt="Star icon" />
                </span>
                <span className="inline-block text-star mr-1">4.5</span>
                (5.2k reviews)
              </p>

              <p className="space-x-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiLocationOn />
                </span>
                Taragaon, Kathmandu
              </p>
            </div>

            <p className="space-x-1 text-tertiary text-sm mt-6">
              <span className="line-through">$150</span>
              <strong>$75</strong>/night
            </p>
          </div>
        </CardContainer>
      </div>
    </div>
  );
}

export default DiscountAd;
