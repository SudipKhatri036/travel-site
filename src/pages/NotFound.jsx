import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[800px] flex flex-col gap-4 items-center justify-center relative">
      <div className="absolute top-0 z-[-1] w-full">
        <img
          src="/notfound-img.jpg"
          alt="Not found image"
          className="w-full h-[650px] object-contain opacity-60"
        />
      </div>
      <h1 className="text-9xl tracking-tighter font-bold text-brand">404</h1>
      <p className="text-primary font-semibold tracking-wide">
        Page You are looking for not found!
      </p>
      <button
        className="px-[18px] py-2 border-2 bg-bg-primary rounded-lg shadow-xs text-white font-semibold text-md cursor-pointer hover:bg-transparent hover:border-bg-primary hover:text-tertiary transition-all duration-300"
        onClick={() => navigate("/")}
      >
        Go to home
      </button>
    </div>
  );
}

export default NotFound;
