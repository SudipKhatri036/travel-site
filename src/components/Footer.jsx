import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="border-t-[1px] border-t-border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:justify-items-center pt-7 md:pt-14 pb-6 md:pb-12 px-6 gap-x-6 gap-y-6">
        <div>
          <Logo imgSrc="/logo-blue.png" />
          <p className="mt-4 mb-7 font-normal text-tertiary text-xs">
            Largest marketplace to find, buy and sell tickets online for any
            travels and events.
          </p>

          <div className="flex gap-2 md:gap-4 ">
            <a href="#" className="hover:scale-110 transition-all duration-300">
              <img src="./images/social-icons/fb-icon.png" alt="Fb icon" />
            </a>
            <a href="#" className="hover:scale-110 transition-all duration-300">
              <img
                src="./images/social-icons/insta-icon.png"
                alt="insta icon"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-all duration-300">
              <img
                src="./images/social-icons/tiktok-icon.png"
                alt="tiktok icon"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-all duration-300">
              <img
                src="./images/social-icons/twitter-icon.png"
                alt="twitter icon"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-all duration-300">
              <img
                src="./images/social-icons/youtube-icon.png"
                alt="youtube icon"
              />
            </a>
          </div>
        </div>

        {/* Second grid */}
        <div>
          <h2 className="font-semibold text-sm mb-4">Company</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                How we work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                Sustainability
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                Press Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Third  grid  */}
        <div className="">
          <h2 className="font-semibold text-sm mb-4">Partners</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                Travel agent portal
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                Become our partner
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                List your property
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                Sustainability
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-tertiary hover:underline"
              >
                Become an affiliate
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth grid */}
        <div>
          <h2 className="font-semibold text-sm mb-4">Contact Us</h2>
          <div className="flex flex-col gap-4">
            {/* Whatsapp */}
            <div className="flex items-center gap-3">
              <div className="h-5 w-5">
                <img
                  src="./images/social-icons/whatsapp-icon.png"
                  alt="Whatsapp icon"
                />
              </div>
              <div>
                <h3 className="text-tertiary font-normal text-sm">
                  Whatsapp us
                </h3>
                <a href="#" className="font-normal text-tertiary text-sm">
                  +77 858 1176 0999
                </a>
              </div>
            </div>

            {/* Call Center */}
            <div className="flex items-center gap-3">
              <div className="h-5 w-5">
                <img
                  src="./images/social-icons/call-center-icon.png"
                  alt="Call center icon"
                />
              </div>
              <div>
                <h3 className="text-tertiary font-normal text-sm">
                  Call Center
                </h3>
                <a href="#" className="font-normal text-tertiary text-sm">
                  +77 858 1176 0999
                </a>
              </div>
            </div>

            {/* Email us */}
            <div className="flex items-center gap-3">
              <div className="h-5 w-5">
                <img
                  src="./images/social-icons/email-icon.png"
                  alt="Email icon"
                />
              </div>
              <div>
                <h3 className="text-tertiary font-normal text-sm">Email us</h3>
                <a href="#" className="font-normal text-tertiary text-sm">
                  support@upticket.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto w-full pt-6 pb-4 flex  flex-col sm:flex-row sm:justify-between items-center border-t-[1px] border-t-border-secondary px-6">
        <p className="text-xs text-tertiary font-light tracking-wide">
          &copy; 2077 uticket.com All rights reserved.
        </p>

        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="text-xs text-tertiary hover:underline">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="text-xs text-tertiary hover:underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="text-xs text-tertiary hover:underline">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
