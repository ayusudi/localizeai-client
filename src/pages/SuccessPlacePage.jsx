import { useNavigate, useParams } from "react-router-dom";

export default function SuccessPlacePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="page bg-redwhite flex flex-col justify-center w-full px-4">
      <div className="flex-grow flex flex-col gap-10  items-center justify-center">
        <div className="flex flex-col gap-2.5 items-center">
          <h2 className="text-lg text-center">✅</h2>
          <h3 className="text-sm text-center">Submission Success</h3>
          <p className="text-body-lg text-center w-5/6">
            Our team will review your request to add this location to our
            database. If it meets our criteria for hangout and dining spots, it
            will be included.
          </p>
          <p className="font-semibold mt-2">
            Thank you for suggesting a new place!
          </p>
        </div>
      </div>
      <div className="h-60 flex flex-col items-center justify-center bg-white mx-auto w-full gap-3">
        <button
          onClick={() => navigate("/places/explore")}
          className="text-heading-md p-3 rounded-full  text-primary bg-primary-50 w-full max-w-80"
        >
          Back to Explore
        </button>
      </div>
    </div>
  );
}
