import { TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState(true);
  return (
    <div>
      {greeting ? (
        <div className="h-screen flex flex-col justify-center w-full">
          <div className="flex-grow flex flex-col gap-10 bg-gradient-to-t from-white to-[#FFB8B2] items-center justify-center">
            <img
              className="rounded-full w-32 h-32 object-cover"
              src="https://static.standard.co.uk/2021/12/02/17/Guy20Berryman_Image20courtesy20of20Applied20Art20Forms.jpg?width=1200&auto=webp&quality=75&crop=5:3,smart"
            />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-sm text-center">Hi, Daniasyrofi! 👋</h3>
              <p className="text-body-lg text-center">
                Let's set up your profile to get started.
              </p>
            </div>
          </div>
          <div className="my-12 bg-white mx-auto">
            <button
              onClick={() => setGreeting(false)}
              className="text-heading-md w-80 py-2.5 px-3 rounded-full text-white bg-primary"
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div className="page flex flex-col justify-center w-full">
          <div className="flex-grow flex flex-col gap-2.5 px-5 py-2.5 ">
            <button
              onClick={() => setGreeting(true)}
              className="h-12 w-12 mb-2 rounded-full border-[#D9D9D9] border flex justify-center items-center"
            >
              <img src="icon-back.svg" />
            </button>
            <h3 className="text-sm">Create Your Username</h3>
            <p className="text-body-lg">
              Pick a unique username to personalize your experience.
            </p>
            <form className="mt-2.5" action="" method="get">
              <TextInput
                theme={{ field: { input: { sizes: { md: "text-body-lg" } } } }}
                id="username"
                type="text"
                placeholder="Enter your username"
                required
                helperText={
                  <p className="!text-body-md text-danger">
                    This username is already taken.
                  </p>
                }
              />
            </form>
          </div>
          <div className="my-12 mx-auto">
            <button
              onClick={() => navigate("/places")}
              className="text-heading-md w-80 py-2.5 px-3 rounded-full text-white bg-primary"
            >
              Confirm Username
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
