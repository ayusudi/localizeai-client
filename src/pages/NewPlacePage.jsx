import { TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function NewPlacePage() {
  const navigate = useNavigate();
  return (
    <div className="page flex flex-col justify-center w-full">
      <div className="flex-grow flex flex-col gap-3 px-5 py-6 ">
        <button className="h-12 w-12 mb-2 rounded-full border-[#D9D9D9] border flex justify-center items-center">
          <img src="/icon-back.svg" />
        </button>
        <h3 className="text-sm">Add Place Details</h3>
        <p className="text-body-lg">
          Please provide the Google Maps link for the place you want to add.
        </p>
        <form className="mt-2.5" action="" method="get">
          <TextInput
            theme={{ field: { input: { sizes: { md: "text-body-lg" } } } }}
            id="username"
            type="text"
            placeholder="Enter Google Maps link here"
            required
          />
        </form>
      </div>
      <div className="h-50 flex flex-col items-center justify-center">
        <button
          onClick={() => navigate("/places/failed")}
          className="text-heading-md w-80 py-2.5 px-3 rounded-full text-white bg-primary"
        >
          Submit Place
        </button>
      </div>
    </div>
  );
}
