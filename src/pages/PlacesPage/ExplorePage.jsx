import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import { DataContext } from "../../Contexts"; // Import the DataContext
import { useNavigate } from "react-router-dom";
function SlideCard({ keyname }) {
  const { explores } = useContext(DataContext) || {}; // Consume the context
  return (
    <div className="overflow-x-auto flex gap-4 no-scrollbar h-[380px] px-4 pb-3 pt-1">
      {explores[keyname] &&
        explores[keyname].slice(0, 8).map((el, i) => (
          <div key={i} className="w-fit">
            <Card el={el} />
          </div>
        ))}
    </div>
  );
}

export default function ExplorePage() {
  const navigate = useNavigate();
  const list = [
    {
      keyname: "Hidden Gem",
      placeholder: "Hidden Gems",
      key: "hidden-gem",
      underscore: "hidden_gem",
    },
    {
      keyname: "Work Friendly",
      placeholder: "Work-Friendly Spots",
      key: "work-friendly",
      underscore: "work_friendly",
    },
    {
      keyname: "Pet Friendly",
      placeholder: "Pet Dates",
      key: "pet-friendly",
      underscore: "pet_friendly",
    },
    {
      keyname: "Cozy Atmosphere",
      placeholder: "Cozy Atmosphere",
      key: "cozy-atmosphere",
      underscore: "cozy_atmosphere",
    },
    {
      keyname: "Classic Vibes",
      placeholder: "Classic Vibes",
      key: "classic-vibes",
      underscore: "classic_vibes",
    },
  ];
  return (
    <div className="bg-white rounded-t-3xl border border-red-200 border-b-0 flex-1 mt-6 pt-5 gap-3 flex flex-col">
      {list.map((el) => {
        return (
          <div key={el.keyname}>
            <div className="flex justify-between px-5 items-center">
              <h2 className="text-heading-lg">{el.placeholder}</h2>
              <button
                onClick={() => navigate(`/places/explore/${el.key}`)}
                className="text-heading-md text-primary bg-primary-50 rounded-full px-2.5 py-1"
              >
                See more
              </button>
            </div>
            <SlideCard keyname={el.underscore} />
          </div>
        );
      })}
    </div>
  );
}
