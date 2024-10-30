import { useNavigate } from "react-router-dom";

export default function FailedPage() {
  const navigate = useNavigate();
  return (
    <div className="page bg-redwhite flex flex-col justify-center w-full px-4">
      <div className="flex-grow flex flex-col gap-10  items-center justify-center">
        <div className="flex flex-col gap-2.5 items-center">
          <h2 className="text-lg text-center">❌</h2>
          <h3 className="text-sm text-center">Submission Error</h3>
          <p className="text-body-lg text-center w-5/6">
            There was an error submitting the place. Please check the Google
            Maps link and try again.
          </p>
        </div>
      </div>
      <div className="h-60 flex flex-col items-center justify-center bg-white mx-auto w-full gap-3">
        <button
          onClick={() => navigate("/places/new")}
          className="text-heading-md p-3 rounded-full text-white bg-primary w-full max-w-80"
        >
          Retry
        </button>
        <button
          onClick={() => navigate("/places/123")}
          className="text-heading-md p-3 rounded-full  text-primary bg-primary-50 w-full max-w-80"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
