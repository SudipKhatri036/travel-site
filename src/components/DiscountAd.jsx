import SectionHeading from "./SectionHeading";
import NavigatorCard from "./NavigatorCard";
import Section from "../ui/Section";
import DiscountCard from "./DiscountCard";
import FeaturedGridContainer from "./FeaturedGridContainer";
import { useEffect, useState } from "react";
const hotelDiscountMockData = [];
const HotelMockData = [
  {
    domestic: {
      cities: [
        {
          cityName: "Kathmandu",
          hotelList: [
            {
              imgSrc: "/images/discount/discount-1.png",
              hotelName: "Nirvana Boutique Hotels",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-2.png",
              hotelName: "Fairfield by Marriott Khatmadu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-3.png",
              hotelName: "Yambu Kathmandu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-3.png",
              hotelName: "Shanker Palatial Heritage Kathmandu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
          ],
        },
        {
          cityName: "Pokhara",
          hotelList: [
            {
              imgSrc: "/images/discount/discount-2.png",
              hotelName: "Fairfield by Marriott Khatmadu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-1.png",
              hotelName: "Nirvana Boutique Hotels",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-3.png",
              hotelName: "Shanker Palatial Heritage Kathmandu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-3.png",
              hotelName: "Yambu Kathmandu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
          ],
        },
        {
          cityName: "Bharatpur",
          hotelList: [],
        },
        {
          cityName: "Lalitpur",
          hotelList: [],
        },
        {
          cityName: "Birgunj",
          hotelList: [],
        },
        {
          cityName: "Biratnagar",
          hotelList: [],
        },
      ],
    },
  },
  {
    international: {
      cities: [
        {
          cityName: "New York",
          hotelList: [
            {
              imgSrc: "/images/discount/discount-1.png",
              hotelName: "Nirvana Boutique Hotels",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-2.png",
              hotelName: "Fairfield by Marriott Khatmadu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-3.png",
              hotelName: "Yambu Kathmandu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
            {
              imgSrc: "/images/discount/discount-3.png",
              hotelName: "Shanker Palatial Heritage Kathmandu",
              rating: 4.5,
              totalReview: "5.2k",
              location: "Taragaon, Kathmandu",
              price: 150,
              offerPrice: 75,
            },
          ],
        },
        {
          cityName: "Sydney",
          hotelList: [],
        },
        {
          cityName: "Delhi",
          hotelList: [],
        },
        {
          cityName: "Bombay",
          hotelList: [],
        },
      ],
    },
  },
];

function DiscountAd() {
  const [flightType, setFlightType] = useState("domestic");
  const [selectedCity, setSelectedCity] = useState("kathmandu");

  const selectedType = HotelMockData.find(
    (type) => Object.keys(type)[0] === flightType
  );
  const cities = selectedType?.[flightType]?.cities || [];
  const SelectedCityHotels = cities?.find(
    (city) => city.cityName.toLowerCase() === selectedCity.toLowerCase()
  );

  return (
    <Section>
      {/* Section heading */}
      <SectionHeading
        heading="Discount up to 30 %off + on hotels"
        subHeading="Book your stay now and enjoy amazing savings on top accommodations "
      />

      {/* Domestic or International */}
      <div className="flex const items-center gap-2 mt-6 border-b-[1px] border-b-border-secondary">
        {HotelMockData?.map((type, indx) =>
          Object.keys(type).map((t) => {
            return (
              <button
                key={indx}
                onClick={() => {
                  setFlightType(t);
                  setSelectedCity((c) => {
                    if (t === "domestic" && c.toLowerCase() !== "kathmandu")
                      return "kathmandu";
                    else if (
                      t === "international" &&
                      c.toLowerCase() !== "new york"
                    )
                      return "new york";
                    else return c;
                  });
                }}
                className={`px-1 pb-3 border-b-[1px]  font-semibold text-sm uppercase  cursor-pointer  ${
                  t === flightType
                    ? "text-bg-primary border-b-bg-primary"
                    : "text-tertiary border-b-border-secondary"
                }hover:text-bg-primary hover:border-b-bg-primary transition-all duration-300`}
                disabled={t === flightType}
              >
                {t}
              </button>
            );
          })
        )}
      </div>

      {/* City List */}
      <div className="my-6 flex flex-wrap gap-2">
        {cities.map((city, indx) => (
          <button
            className={`py-2 px-3 rounded-md bg-primaryAlt ${
              city?.cityName.toLowerCase() === selectedCity.toLowerCase()
                ? "text-brand"
                : "text-quaternary"
            }  font-semibold hover:text-brand cursor-pointer transition-all duration-300 `}
            key={`${indx}-${city?.cityName}`}
            onClick={() => setSelectedCity(city?.cityName)}
          >
            {city?.cityName}
          </button>
        ))}
      </div>

      {/* City hotel Cards */}
      <FeaturedGridContainer>
        {SelectedCityHotels?.hotelList?.length > 0 ? (
          SelectedCityHotels?.hotelList.map((hotel) => (
            <DiscountCard key={hotel.hotelName} hotel={hotel} />
          ))
        ) : (
          <p className="text-xl text-red-500 tracking-wide capitalize">
            No Hotel found 😓!
          </p>
        )}

        {SelectedCityHotels?.hotelList?.length > 0 && (
          <NavigatorCard
            imgSrc="/images/discount/discount-img.png"
            title="Find the Best Stays for Your Next Getaway! 🌟"
            btnTxt="Book Hotel"
            gradientFrom="#0538A900"
            gradientTo="#0538A9"
          />
        )}
      </FeaturedGridContainer>
    </Section>
  );
}

export default DiscountAd;
