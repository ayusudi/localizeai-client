import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function CardReview({ data }) {
  let { name, status, totalReview, star, date, text, image } = data;
  let calculateDay = dayjs(date).fromNow(true);
  return (
    <div className="bg-white rounded-xl flex flex-col gap-2 overflow-hidden justify-between">
      <div className="p-6 flex flex-col gap-2">
        <div className="flex gap-3">
          <img src={image} className="h-12 w-12 rounded-full" />
          <div className="flex flex-col">
            <p className="text-heading-md">{name}</p>
            <div className="text-body-md flex text-secondary gap-1.5">
              <p className="text-body-md">{status}</p>|
              <p>{totalReview} Review</p>
            </div>
          </div>
        </div>
        <div className="flex text-secondary gap-1">
          <div className="flex text-secondary gap-0.5">
            {new Array(star).fill("").map((el, i) => (
              <p key={i}>⭐</p>
            ))}
          </div>
          | <p className="text-body-lg">{calculateDay} ago</p>
        </div>
        <p className="text-body-lg text-secondary">{text}</p>
      </div>
      <img className="" src="/cafe-placeholder.png" alt="image" />
    </div>
  );
}
