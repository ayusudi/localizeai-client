import { useNavigate, useParams } from "react-router-dom";

export default function CardPursueWrite({ setIsShow }) {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full flex flex-col rounded-2xl gap-4 md:gap-5 items-center pb-6 md:pb-12">
      <div className="flex flex-col items-center w-full">
        <button onClick={() => setIsShow(false)} className="self-end m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.46967 0.46967C0.762564 0.176777 1.23744 0.176777 1.53033 0.46967L7 5.93934L12.4697 0.46967C12.7626 0.176777 13.2374 0.176777 13.5303 0.46967C13.8232 0.762564 13.8232 1.23744 13.5303 1.53033L8.06066 7L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L7 8.06066L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
              fill="#0D0D0D"
            />
          </svg>
        </button>
        <p className="text-xl">🌟</p>
      </div>
      <div>
        <h3 className="text-heading-lg text-center">
          Are you currently at this place?
        </h3>
        <p className="text-body-lg text-center">Write your review now!</p>
      </div>
      <button
        onClick={() => navigate(`/places/${id}/write-review`)}
        htmlFor="dropzone-file"
        className="w-5/6 max-w-80 text-heading-md py-2.5 px-3 rounded-full text-white bg-primary text-center"
      >
        {localStorage.getItem("access_token")
          ? "Add Your Review"
          : "Try to Login First"}
      </button>
    </div>
  );
}
