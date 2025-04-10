import Section from "../ui/Section";
import SectionHeading from "./SectionHeading";
import NavigatorCard from "./NavigatorCard";
import FeaturedCarRentalCard from "./FeaturedCarRentalCard";
import FeaturedGridContainer from "./FeaturedGridContainer";

const featuredCarRentalMockData = [
  {
    imgSrc: "/images/car-rentals/car-1.png",
    carName: "Hyundai Sonata",
    gearType: "Automatic",
    lugaugeCapacity: 2,
    passengerCapacity: 2,
    price: 15,
  },
  {
    imgSrc: "/images/car-rentals/car-2.png",
    carName: "Ford Taurus",
    gearType: "Automatic",
    lugaugeCapacity: 2,
    passengerCapacity: 2,
    price: 15,
  },
  {
    imgSrc: "/images/car-rentals/car-3.png",
    carName: "Toyota Corola",
    gearType: "Automatic",
    lugaugeCapacity: 2,
    passengerCapacity: 2,
    price: 15,
  },
  {
    imgSrc: "/images/car-rentals/car-4.png",
    carName: "Toyota Camry",
    gearType: "Automatic",
    lugaugeCapacity: 2,
    passengerCapacity: 2,
    price: 15,
  },
];

function FeaturedCarRental() {
  return (
    <Section>
      <SectionHeading
        heading="Featured Car Rental"
        subHeading="Find the best deals on top-rated rentals—book now for a smooth and hassle-free"
      />

      <FeaturedGridContainer>
        {featuredCarRentalMockData?.map((featuredCarRent) => (
          <FeaturedCarRentalCard
            key={featuredCarRent?.carName}
            featuredCarRent={featuredCarRent}
          />
        ))}

        <NavigatorCard
          imgSrc="/images/car-rentals/car-img.png"
          title="Explore More for Less! Book Your Perfect Travel Package Today! 🌍✨"
          btnTxt="Find a car"
          gradientFrom="#63636300"
          gradientTo="#636363"
        />
      </FeaturedGridContainer>
    </Section>
  );
}

export default FeaturedCarRental;
