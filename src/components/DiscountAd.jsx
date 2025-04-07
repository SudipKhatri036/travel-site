import { CiLocationOn } from "react-icons/ci";
import CardContainer from "./CardContainer";
import SectionHeading from "./SectionHeading";
import NavigatorCard from "./NavigatorCard";
import Section from "../ui/Section";

function DiscountAd() {
  return (
    <Section>
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

              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiLocationOn />
                </span>
                Taragaon, Kathmandu
              </p>
            </div>

            <p className="flex items-center  text-tertiary text-sm mt-6">
              <span className="line-through">$150</span>
              <strong className="ml-1">$75</strong>/night
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

              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiLocationOn />
                </span>
                Taragaon, Kathmandu
              </p>
            </div>

            <p className="flex items-center  text-tertiary text-sm mt-6">
              <span className="line-through">$150</span>
              <strong className="ml-1">$75</strong>/night
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

              <p className="flex items-center  text-tertiary text-sm">
                <span className="inline-block">
                  <CiLocationOn />
                </span>
                Taragaon, Kathmandu
              </p>
            </div>

            <p className="flex items-center  text-tertiary text-sm mt-6">
              <span className="line-through">$150</span>
              <strong className="ml-1">$75</strong>/night
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

              <p className="flex items-center gap-1 text-tertiary text-sm">
                <span className="inline-block">
                  <CiLocationOn />
                </span>
                Taragaon, Kathmandu
              </p>
            </div>

            <p className="flex items-center  text-tertiary text-sm mt-6">
              <span className="line-through">$150</span>
              <strong className="ml-1">$75</strong>/night
            </p>
          </div>
        </CardContainer>

        <NavigatorCard
          imgSrc="/images/discount/discount-img.png"
          title="Find the Best Stays for Your Next Getaway! 🌟"
          btnTxt="Book Hotel"
          gradientFrom="#0538A900"
          gradientTo="#0538A9"
        />
      </div>
    </Section>
  );
}

export default DiscountAd;
