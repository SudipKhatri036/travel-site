import React from "react";

function SearchFilters() {
  return (
    <div className="pt-1 px-[15px] flex items-center gap-4">
      {/* Filter btn component */}
      <button className="text-sm text-center p-3 border-b-[3px] border-b-transparent text-primary cursor-pointer hover:">
        <p className="text-tertiary">Best</p>
        <p className="inline-flex items-center justify-center gap-1">
          $382
          <span className=" w-1 h-1 rounded-full bg-brand"></span>
          21h 10m
        </p>
      </button>
      <span className="w-[1px] h-6 bg-disabledSubtle"></span>
      {/* Active filter btn */}
      <button className="text-sm text-center p-3 border-b-[3px] border-b-brand text-brand cursor-pointer ">
        <p className="text-brand">Recomended</p>
        <p className="inline-flex items-center justify-center gap-1">
          $382
          <span className=" w-1 h-1 rounded-full bg-brand"></span>
          21h 10m
        </p>
      </button>
      {/*  */}
      <span className="w-[1px] h-6 bg-disabledSubtle"></span>

      <button className="text-sm text-center p-3 border-b-[3px] border-b-transparent text-primary cursor-pointer">
        <p className="text-tertiary">Cheapest Price</p>
        <p className="inline-flex items-center justify-center gap-1">
          $382
          <span className=" w-1 h-1 rounded-full bg-primary"></span>
          21h 10m
        </p>
      </button>

      <span className="w-[1px] h-6 bg-disabledSubtle"></span>

      <button className="text-sm text-center p-3 border-b-[3px] border-b-transparent text-primary cursor-pointer hover:">
        <p className="text-tertiary">Cheapest Price</p>
        <p className="inline-flex items-center justify-center gap-1">
          $382
          <span className=" w-1 h-1 rounded-full bg-primary"></span>
          21h 10m
        </p>
      </button>
    </div>
  );
}

export default SearchFilters;
