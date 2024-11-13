import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function CardReview({ data }) {
  let { name, rating, created_at, review, user } = data;
  const totalReview = user?.total_reviews || null;
  let image = data?.images[0];
  const username = data?.user?.username || "Google Review";
  let calculateDay = dayjs(created_at).fromNow(true);
  let status =
    typeof totalReview === "number"
      ? totalReview > 5
        ? "Active User"
        : "New User"
      : "";
  return (
    <div className="bg-white rounded-xl w-full flex flex-col gap-2 overflow-hidden justify-between">
      <div className="p-6 w-full flex flex-col gap-2">
        <div className="flex gap-3 w-full">
          <img
            src={
              user?.profile
                ? "https://images.weserv.nl/?url=" + user.profile
                : "/default.png"
            }
            className="h-12 w-12 object-cover rounded-full"
          />
          <div className="flex flex-col justify-center mb-1.5">
            <p className="text-heading-md">
              {username ? "@" + username : name}
            </p>
            {(user && (
              <div className="text-body-md flex text-secondary gap-1.5">
                <p className="text-body-md">{status}</p>|
                {(totalReview && <p>{totalReview} Review</p>) || null}
              </div>
            )) ||
              null}
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
        src={image ? "https://images.weserv.nl/?url=" + image : "./default.png"}
        alt="image"
      />
    </div>
  );
}
