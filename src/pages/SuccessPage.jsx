import { useNavigate, useParams } from "react-router-dom";

export default function SuccessPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="page bg-redwhite flex flex-col justify-center w-full px-4">
      <div className="flex-grow flex flex-col gap-10  items-center justify-center">
        <div className="flex flex-col gap-2.5 items-center">
          <h2 className="text-lg text-center">✅</h2>
          <h3 className="text-sm text-center">Review Posted!</h3>
          <p className="text-body-lg text-center w-5/6">
            Thank you for sharing your experience. Your review is now live.
          </p>
        </div>
      </div>
      <div className="h-50 flex flex-col items-center justify-center bg-white mx-auto w-full">
        <button
          onClick={() => navigate(`/places/${id}/reviews`)}
          className="text-heading-md p-3 rounded-full text-white bg-primary w-full max-w-80"
        >
          View Your Review
        </button>
      </div>
    </div>
  );
}
