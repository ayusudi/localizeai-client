import React from "react";
import Card from "../../components/Card";

function SlideCard() {
  return (
    <div className="overflow-x-auto flex gap-4 no-scrollbar h-[380px] px-4 py-3">
      {new Array(9).fill("").map((el, i) => (
        <div key={i} className="w-fit">
          <Card />
        </div>
      ))}
    </div>
  );
}

export default function ExplorePage() {
  return (
    <div className="bg-white rounded-t-3xl border border-red-200 border-b-0 flex-1 mt-6 pt-5 gap-4 flex flex-col">
      <div>
        <div className="flex justify-between px-5 items-center">
          <h2 className="text-heading-lg">Hidden Gems</h2>
          <button className="text-heading-md text-primary bg-primary-50 rounded-full px-2.5 py-1">
            See more
          </button>
        </div>
        <SlideCard />
      </div>
      <div>
        <div className="flex justify-between px-5 items-center">
          <h2 className="text-heading-lg">Work-Friendly Spots</h2>
          <button className="text-heading-md text-primary bg-primary-50 rounded-full px-2.5 py-1">
            See more
          </button>
        </div>
        <SlideCard />
      </div>
    </div>
  );
}
