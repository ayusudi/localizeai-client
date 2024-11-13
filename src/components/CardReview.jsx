import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function CardReview({ data }) {
  let { name, rating, created_at, review } = data;
  const totalReview = 1;
  let image = data?.images[0];
  const username = data?.user?.username;
  let calculateDay = dayjs(created_at).fromNow(true);
  let status = totalReview > 5 ? "Active User" : "New User";
  return (
    <div className="bg-white rounded-xl w-full flex flex-col gap-2 overflow-hidden justify-between">
      <div className="p-6 w-full flex flex-col gap-2">
        <div className="flex gap-3 w-full">
          <img src={image} className="h-12 w-12 object-cover rounded-full" />
          <div className="flex flex-col">
            <p className="text-heading-md">
              {username ? "@" + username : name}
            </p>
            <div className="text-body-md flex text-secondary gap-1.5">
              <p className="text-body-md">{status}</p>|
              <p>{totalReview} Review</p>
            </div>
          </div>
        </div>
        <div className="flex text-secondary gap-1 w-full">
          <div className="flex text-secondary gap-0.5">
            {new Array(rating).fill("").map((el, i) => (
              <p key={i}>⭐</p>
            ))}
          </div>
          | <p className="text-body-lg">{calculateDay} ago</p>
        </div>
        <p className="text-body-lg text-secondary">{review}</p>
      </div>
      <img
        className="w-full h-auto object-covert"
        src={"https://images.weserv.nl/?url=" + image}
        alt="image"
      />
    </div>
  );
}
