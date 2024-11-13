import { useEffect, useState } from "react";
import CardPursueWrite from "../../components/CardPursueWrite";
import CardReview from "../../components/CardReview";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ReviewPage() {
  const [isShow, setIsShow] = useState(true);
  const { id } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3000/api/v1/places/${id}/reviews`,
    }).then(({ data }) => {
      setList(data);
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-2 py-2.5">
        <div className="overflow-x-auto flex gap-1 no-scrollbar px-5 ">
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
      </div>
      <div className="page md:p-6 p-4 flex flex-col items-center bg-gradient-to-t from-white to-[#FFB8B2] gap-4">
        {isShow ? <CardPursueWrite setIsShow={setIsShow} /> : <></>}
        <div className="flex flex-col md:flex-row gap-4 justify-start w-full  md:grid md:grid-cols-3  ">
          {list.map((el, i) => (
            <div key={i} className="grid-row-1 flex bg-white rounded-xl">
              <CardReview data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
