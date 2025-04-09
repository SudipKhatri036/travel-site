import { AiFillCloseCircle } from "react-icons/ai";
import HeaderCta from "./HeaderCta";

function MobileNav({ navActive, onCloseNav }) {
  return (
    <div
      className={`fixed z-[98] top-0  w-full flex items-center justify-center min-h-screen bg-[#FFFFFFCC] ${
        !navActive ? "-left-[100%]" : "left-0"
      } transition-all duration-300`}
    >
      <button
        onClick={onCloseNav}
        className={`z-[99] text-6xl fixed rounded-2xl  text-primary ${
          !navActive ? "-left-[100%]" : "right-12 top-6"
        } transition-all duration-300`}
      >
        <AiFillCloseCircle />
      </button>
      <ul className={`flex flex-col  items-center justify-center gap-6`}>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2 transition-all duration-300 "
          >
            Flights
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2  transition-all duration-300 "
          >
            Stays
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2   transition-all duration-300 "
          >
            Travel Packages
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2   transition-all duration-300 "
          >
            Car Rentals
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2   transition-all duration-300 "
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2   transition-all duration-300 "
          >
            Money Exchanges
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2   transition-all duration-300 "
          >
            Travel Insuarances
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2   transition-all duration-300 "
          >
            Marketplaces
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary font-semibold border-[1px] border-transparent rounded-full text-4xl inline-block px-3 py-2   transition-all duration-300 "
          >
            More
          </a>
        </li>
        <li className="z-[99] xl:hidden">
          <HeaderCta />
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
