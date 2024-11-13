import { TextInput } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import axios from "axios";

export default function RegisterPage() {
  const baseUrl = import.meta.env.VITE_BASEURL + "/api/v1";
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState(true);
  const [isFetchDone, setIsFetchDone] = useState(false);
  const [username, setUsername] = useState("");
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  // Debounce function that triggers the API call
  const checkUsername = useCallback(
    debounce(async (input) => {
      try {
        setIsFetchDone(false);
        const { data } = await axios(
          `https://api.localizeai.online/api/v1/users/username_exists?username=${input}`
        );
        setIsFetchDone(true);
        setIsUsernameTaken(data);
      } catch (error) {
        console.error("Error checking username:", error);
      }
    }, 1000), // 1-second debounce
    []
  );

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const valid = /^[a-zA-Z0-9_]*$/.test(inputValue);

    setIsValid(valid);
    if (valid) {
      setUsername(inputValue);
      checkUsername(inputValue);
    } else {
      setUsername(inputValue); // Keeps track of the input but won't trigger the API call
    }
  };

  const confirmUsername = async (e) => {
    e.preventDefault();
    if (isFetchDone && !isUsernameTaken) {
      let { data } = await axios({
        url: baseUrl + "/users/username",
        method: "PUT",
        data: {
          username,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("username", data.username);
      localStorage.setItem("status_username", true);
      navigate("/places");
    }
  };

  return (
    <div>
      {greeting ? (
        <div className="page flex flex-col justify-center w-full">
          <div className="flex-grow flex flex-col gap-10 bg-gradient-to-t from-white to-[#FFB8B2] items-center justify-center">
            <img
              className="rounded-full w-32 h-32 object-cover"
              src={
                localStorage.getItem("access_token")
                  ? "https://images.weserv.nl/?url=" +
                    localStorage.getItem("profile")
                  : "/default.png"
              }
              alt="User Profile"
            />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-sm text-center">
                Hi, {localStorage.getItem("name")}! 👋
              </h3>
              <p className="text-body-lg text-center">
                Let's set up your profile to get started.
              </p>
            </div>
          </div>
          <div className="h-50 flex flex-col items-center justify-center bg-white mx-auto">
            <button
              onClick={() => setGreeting(false)}
              className="text-heading-md w-80 py-2.5 px-3 rounded-full text-white bg-primary"
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={confirmUsername}
          className="page flex flex-col justify-center w-full"
        >
          <div className="flex-grow flex flex-col gap-3 px-5 py-6 ">
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
            <div className="mt-2.5">
              <TextInput
                maxLength={12}
                theme={{
                  field: { input: { sizes: { md: "text-body-lg" } } },
                }}
                id="username"
                type="text"
                placeholder="Enter your username"
                required
                onChange={handleChange}
                color={
                  isFetchDone
                    ? isUsernameTaken
                      ? "failure"
                      : "success"
                    : "gray"
                }
                helperText={
                  !isValid ? (
                    <span className="!text-body-md text-danger">
                      Only letters, numbers, and underscores are allowed.
                    </span>
                  ) : isFetchDone ? (
                    isUsernameTaken ? (
                      <span className="!text-body-md text-danger">
                        This username is already taken.
                      </span>
                    ) : (
                      <></>
                    )
                  ) : username.length > 8 ? (
                    <span className="!text-body-md text-danger">
                      Username maximum 8 characters.
                    </span>
                  ) : null
                }
              />
            </div>
          </div>

          <div className="h-50 flex flex-col items-center justify-center">
            <button
              type="submit"
              className={
                "text-heading-md w-80 py-2.5 px-3 rounded-full " +
                (isFetchDone
                  ? isUsernameTaken
                    ? "bg-disable text-darkgray cursor-not-allowed"
                    : "text-white bg-primary"
                  : "bg-disable text-darkgray cursor-not-allowed")
              }
            >
              Confirm Username
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
