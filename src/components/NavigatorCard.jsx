function NavigatorCard({ imgSrc, title, btnTxt, gradientFrom, gradientTo }) {
  return (
    <div className="relative rounded-2xl min-h-[300px] md:min-h-full h-full overflow-hidden col-span-1 xs:col-span-2 md:col-span-1">
      <div className="absolute h-full w-full">
        <img
          src={imgSrc || "/images/featured/featured-img.png"}
          className="w-full h-full object-cover"
          alt="Featured"
        />
      </div>

      <div
        className={`absolute bottom-0 w-full mx-auto bg-gradient-to-b from-[${
          gradientFrom || "#53170500"
        }]  to-[${gradientTo || "#531705"}] p-4 pt-10`}
      >
        <p className="font-bold text-md text-white text-center">
          {title || ""}
        </p>
        <div className="flex items-center justify-center">
          <button className="w-full border-[1px] max-w-[200px] md:max-w-full  border-btn-secondary rounded-lg font-semibold text-sm py-2.5 px-3.5 mt-4 bg-border-secondary cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300 ">
            {btnTxt}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigatorCard;
