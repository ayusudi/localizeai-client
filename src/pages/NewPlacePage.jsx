import axios from "axios";
import { TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPlacePage() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: import.meta.env.VITE_BASEURL + "/api/v1/places/requests",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        data: {
          url: input,
        },
      });
      navigate("/places/success");
    } catch (error) {
      navigate("/places/failed");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="page flex flex-col justify-center w-full"
    >
      <div className="flex-grow flex flex-col gap-3 px-5 py-6 ">
        <button className="h-12 w-12 mb-2 rounded-full border-[#D9D9D9] border flex justify-center items-center">
          <img src="/icon-back.svg" />
        </button>
        <h3 className="text-sm">Add Place Details</h3>
        <p className="text-body-lg">
          Please provide the Google Maps link for the place you want to add.
        </p>
        <div className="mt-2.5" action="" method="get">
          <TextInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            theme={{ field: { input: { sizes: { md: "text-body-lg" } } } }}
            id="place"
            type="text"
            placeholder="Enter Google Maps link here"
            required
          />
        </div>
      </div>
      <div className="h-32 flex flex-col items-center justify-center">
        <button
          type="submit"
          className="text-heading-md w-80 py-2.5 px-3 rounded-full text-white bg-primary"
        >
          Submit Place
        </button>
      </div>
    </form>
  );
}
