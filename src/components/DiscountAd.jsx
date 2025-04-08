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

      <div className="flex items-center gap-2 mt-6 border-b-[1px] border-b-border-secondary">
        <button className="px-1 pb-3 border-b-[1px] border-b-border-secondary font-semibold text-sm text-tertiary cursor-pointer hover:text-bg-primary hover:border-b-bg-primary active:text-bg-primary active:border-b-bg-primary transition-all duration-300 ">
          Domestic
        </button>
        <button className="px-1 pb-3 border-b-[1px] border-b-border-secondary font-semibold text-sm text-tertiary cursor-pointer hover:text-bg-primary hover:border-b-bg-primary active:text-bg-primary active:border-b-bg-primary transition-all duration-300">
          International
        </button>
      </div>

      <div className="my-6 flex flex-wrap gap-2">
        <button className="py-2 px-3 rounded-md bg-primaryAlt  text-quaternary font-semibold hover:text-brand cursor-pointer transition-all duration-300">
          Kathmandu
        </button>
        <button className="py-2 px-3 rounded-md bg-primaryAlt  text-quaternary font-semibold hover:text-brand cursor-pointer transition-all duration-300">
          Pokhara
        </button>
        <button className="py-2 px-3 rounded-md bg-primaryAlt  text-quaternary font-semibold hover:text-brand cursor-pointer transition-all duration-300">
          Bharatpur
        </button>
        <button className="py-2 px-3 rounded-md bg-primaryAlt  text-quaternary font-semibold hover:text-brand cursor-pointer transition-all duration-300">
          Lalitpur
        </button>
        <button className="py-2 px-3 rounded-md bg-primaryAlt  text-quaternary font-semibold hover:text-brand cursor-pointer transition-all duration-300">
          Birgunj
        </button>
        <button className="py-2 px-3 rounded-md bg-primaryAlt  text-quaternary font-semibold hover:text-brand cursor-pointer transition-all duration-300">
          Biratnagar
        </button>
      </div>

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
