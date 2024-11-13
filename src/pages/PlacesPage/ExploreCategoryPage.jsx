import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

export default function ExplorePage() {
  let { category } = useParams();
  const [placeholder, setPlaceHolder] = useState({});
  const [data, setData] = useState([]);
  useEffect(() => {
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
    let find = list.find((e) => e.key === category);
    setPlaceHolder(find);
    axios
      .get(
        import.meta.env.VITE_BASEURL +
          "/api/v1/places?category=" +
          find.underscore
      )
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  return (
    <div className="bg-white rounded-t-3xl border border-red-200 border-b-0 flex-1 mt-6 pt-5 gap-3 flex flex-col">
      <div>
        <div className="flex justify-between px-5 items-center">
          <h2 className="text-heading-lg">{placeholder.placeholder}</h2>
        </div>
      </div>
      {data.length ? (
        <div className="flex flex-wrap items-around justify-between gap-3 md:gap-5 w-full px-5">
          {data?.map((el) => (
            <Card el={el} key={el._id} />
          ))}
        </div>
      ) : (
        <div className="md:w-5/6 max-w-[480px] m-auto">
          <Lottie
            loop={true}
            animationData={loading}
            className="m-auto rounded-xl p-5 "
          />
        </div>
      )}
    </div>
  );
}
