import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderCta from "./HeaderCta";
import MobileNav from "./MobileNav";

function Header() {
  const [navActive, setNavActive] = useState(false);

  const handleOpenNav = () => setNavActive(true);
  const handleCloseNav = () => setNavActive(false);

  return (
    <header className="relative z-10">
      <div className="px-11 py-4 text-white flex justify-between items-center">
        <div className="flex gap-16">
          <Logo imgSrc="./logo-white.png" />
          <DesktopNav />
        </div>

        <MobileNav onCloseNav={handleCloseNav} navActive={navActive} />
        <HeaderCta />
        <button
          onClick={handleOpenNav}
          className={`text-3xl font-bold ${
            navActive ? "hidden" : "block"
          } xl:hidden`}
        >
          <RiMenu3Fill />
        </button>
      </div>
    </header>
  );
}

export default Header;
