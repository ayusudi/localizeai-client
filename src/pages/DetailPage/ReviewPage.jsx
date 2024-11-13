import { useEffect, useState } from "react";
import CardPursueWrite from "../../components/CardPursueWrite";
import CardReview from "../../components/CardReview";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ReviewPage() {
  const [isShow, setIsShow] = useState(true);
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [temp, setTemp] = useState([]);
  let [listFilter, setListFilter] = useState([
    {
      id: 0,
      text: "All",
      active: true,
    },
    {
      id: 5,
      text: "5⭐",
      active: false,
    },
    {
      id: 4,
      text: "4⭐",
      active: false,
    },
    {
      id: 3,
      text: "3⭐",
      active: false,
    },
    {
      id: 2,
      text: "2⭐",
      active: false,
    },
    {
      id: 1,
      text: "1⭐",
      active: false,
    },
  ]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.localizeai.online/api/v1/places/${id}/reviews`,
    }).then(({ data }) => {
      setTemp(data);
      setList(data);
    });
  }, []);

  const filter = (n) => {
    let listFilterTemp = [...listFilter];
    let filternya = listFilterTemp.map((el) => {
      if (el.id === n) {
        return { ...el, active: true };
      } else {
        return { ...el, active: false };
      }
    });
    setListFilter(filternya);
    if (!n) {
      setTemp(list);
    } else {
      let dataTemp = [...list].filter((el) => el.rating === n);
      setTemp(dataTemp);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2 py-2.5">
        <div className="overflow-x-auto flex gap-1 no-scrollbar px-5 ">
          {listFilter.map((el) => {
            return (
              <div
                key={el.text}
                onClick={() => filter(el.id)}
                className={
                  el.active
                    ? "cursor-pointer w-fit py-1 px-2 rounded-xl bg-primary-100 text-primary "
                    : "cursor-pointer w-fit py-1 px-2 rounded-xl border cursor-default text-secondary"
                }
              >
                <p className="text-heading-sm text-nowrap cursor-default text-nowrap">
                  {el.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="page md:p-6 p-4 flex flex-col items-center bg-gradient-to-t from-white to-[#FFB8B2] gap-4">
        {isShow ? <CardPursueWrite setIsShow={setIsShow} /> : <></>}
        <div className="flex flex-col md:flex-row gap-4 justify-start w-full  md:grid md:grid-cols-3  ">
          {temp.map((el, i) => (
            <div key={i} className="grid-row-1 flex bg-white rounded-xl">
              <CardReview data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
