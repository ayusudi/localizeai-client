import { useState } from "react";
import CardPursueWrite from "../../components/CardPursueWrite";
import CardReview from "../../components/CardReview";

export default function ReviewPage() {
  const [isShow, setIsShow] = useState(true);
  let list = [
    {
      name: "Sarah L.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgGtv6eDgM-k3C0Hq4RIRFIqB609ZkrOPew&s",
      status: "Newcomer",
      totalReview: 15,
      star: 4,
      date: "2024-10-28",
      text: "The ambiance here is amazing, perfect for a weekend chill.",
    },
    {
      name: "Lisa M.",
      image:
        "https://storage.googleapis.com/ares-profile-pictures/hd/lalisa.blackpink-f210dc109893ec38cc9a080dcdf584cd_hd.jpg",
      status: "Local Guide",
      totalReview: 25,
      star: 4,
      date: "2024-10-20",
      text: "Jakarta Brew has a great selection of both coffee and pastries. I particularly enjoyed the croissant, which was flaky and delicious. The seating area is comfortable, though it can get a bit crowded during peak hours. Overall, it's a fantastic place to unwind and enjoy some quality coffee.",
    },
    {
      name: "Andy P.",
      image:
        "https://pyxis.nymag.com/v1/imgs/bd3/54c/e5f01c522ff9eff9d86844203632e950cf-andrew-garfield.1x.rsquare.w1400.jpg",
      status: "Adventurer",
      totalReview: 100,
      star: 4,
      date: "2024-09-28",
      text: "Jakarta Brew has a great selection of both coffee and pastries. I particularly enjoyed the croissant, which was flaky and delicious. The seating area is comfortable, though it can get a bit crowded during peak hours. Overall, it's a fantastic place to unwind and enjoy some quality coffee.",
    },
    {
      name: "Lisa M.",
      image:
        "https://storage.googleapis.com/ares-profile-pictures/hd/lalisa.blackpink-f210dc109893ec38cc9a080dcdf584cd_hd.jpg",
      status: "Local Guide",
      totalReview: 25,
      star: 4,
      date: "2024-10-20",
      text: "Jakarta Brew has a great selection of both coffee and pastries. I particularly enjoyed the croissant, which was flaky and delicious. The seating area is comfortable, though it can get a bit crowded during peak hours. Overall, it's a fantastic place to unwind and enjoy some quality coffee.",
    },
    {
      name: "Andy P.",
      image:
        "https://pyxis.nymag.com/v1/imgs/bd3/54c/e5f01c522ff9eff9d86844203632e950cf-andrew-garfield.1x.rsquare.w1400.jpg",
      status: "Adventurer",
      totalReview: 100,
      star: 4,
      date: "2024-09-28",
      text: "Jakarta Brew has a great selection of both coffee and pastries. I particularly enjoyed the croissant, which was flaky and delicious. The seating area is comfortable, though it can get a bit crowded during peak hours. Overall, it's a fantastic place to unwind and enjoy some quality coffee.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-2 py-2.5">
        <div className="overflow-x-auto flex gap-1 no-scrollbar px-6 ">
          <div className="w-fit py-1 px-2 rounded-xl bg-primary-100">
            <p className="text-heading-sm text-primary text-nowrap cursor-default">
              All
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">5⭐</p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">4⭐</p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">3⭐</p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">2⭐</p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">1⭐</p>
          </div>
        </div>
        <div className="overflow-x-auto flex gap-1 no-scrollbar px-6 ">
          <div className="w-fit py-1 px-2 rounded-xl bg-primary-100">
            <p className="text-heading-sm text-primary text-nowrap cursor-default">
              Work-Friendly
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">
              Classic Vibes
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">
              Hidden Gem
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">
              Productive WFC
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">
              Skena Kid
            </p>
          </div>
        </div>
      </div>
      <div className="page md:p-6 p-4 flex flex-col items-center bg-gradient-to-t from-white to-[#FFB8B2] gap-4">
        {isShow ? <CardPursueWrite setIsShow={setIsShow} /> : <></>}
        <div className="flex flex-col md:flex-row gap-4 justify-start w-full  md:grid md:grid-cols-3  ">
          {list.map((el, i) => (
            <div key={i} className="grid-row-1 flex bg-white rounded-lg">
              <CardReview data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
