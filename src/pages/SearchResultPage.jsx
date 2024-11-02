import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
function Card() {
  return (
    <div className="card overflow-hidden w-11/12  max-w-[380px] outline bg-white outline-primary-50 outline-2 rounded-2xl">
      <div className="pl-4 py-5">
        <h3 className="mb-2 text-heading-lg">Jakarta Brew</h3>
        <p className="mb-3 text-body-lg">Sudirman, Jakarta Selatan</p>
        <div className="overflow-x-auto flex gap-1 no-scrollbar">
          <div className="w-fit py-1 px-2 rounded-xl bg-primary-100">
            <p className="text-heading-sm text-primary text-nowrap cursor-default">
              Work-Friendly
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl bg-primary-100 cursor-default">
            <p className="text-heading-sm text-primary text-nowrap">
              Classic Vibes
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl bg-primary-100 cursor-default">
            <p className="text-heading-sm text-primary text-nowrap">
              Hidden Gem
            </p>
          </div>
        </div>
      </div>
      <div className="h-50">
        <Carousel
          pauseOnHover
          theme={{
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
              snap: "snap-x",
            },
            control: { base: "hidden" },
            indicators: {
              active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-white dark:bg-gray-800",
              },
              base: "h-2 w-2 rounded-full",
              wrapper:
                "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-2",
            },
          }}
        >
          <img
            src="/cafe-placeholder.png"
            alt="cafe-jakarta-brew"
            className="relative"
          />
          <img
            src="/cafe-placeholder.png"
            alt="cafe-jakarta-brew"
            className="relative"
          />
          <img
            src="/cafe-placeholder.png"
            alt="cafe-jakarta-brew"
            className="relative"
          />
          <img
            src="/cafe-placeholder.png"
            alt="cafe-jakarta-brew"
            className="relative"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default function SearchResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNotFound, setIsNotFound] = useState(false);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramValue = searchParams.get("q"); // replace 'yourParam' with your actual query param name
    if (paramValue && paramValue.toLowerCase().includes("not")) {
      setIsNotFound(true);
    }
  }, []);
  return (
    <div>
      <div className="flex flex-col page py-6">
        <form action="" className="flex px-5 items-center  gap-2">
          <button
            onClick={() => navigate("/places")}
            className="rounded-full flex justify-center items-center h-12 w-12 border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.4447 6.60384C15.2833 6.72573 14.8016 7.08963 14.5239 7.30636C13.9677 7.74043 13.2286 8.33354 12.4917 8.97335C11.7511 9.61639 11.0298 10.2919 10.4995 10.892C10.2337 11.1929 10.0316 11.4573 9.90013 11.6754C9.77645 11.8805 9.75073 12.0017 9.75073 12.0017C9.75073 12.0017 9.77645 12.1194 9.90012 12.3245C10.0316 12.5426 10.2337 12.807 10.4995 13.1079C11.0298 13.708 11.7511 14.3835 12.4917 15.0265C13.2286 15.6663 13.9677 16.2595 14.5239 16.6935C14.8016 16.9103 15.2827 17.2737 15.4441 17.3955C15.7776 17.6412 15.8495 18.1112 15.6039 18.4447C15.3583 18.7782 14.8888 18.8495 14.5552 18.6038L14.5527 18.6019C14.3834 18.4741 13.8844 18.0972 13.6011 17.876C13.0323 17.4322 12.2714 16.8217 11.5083 16.1592C10.7489 15.4999 9.97021 14.7742 9.37546 14.1011C9.07884 13.7654 8.81212 13.4251 8.6155 13.0989C8.43128 12.7933 8.25 12.4065 8.25 11.9999C8.25 11.5934 8.43129 11.2065 8.6155 10.901C8.81213 10.5748 9.07884 10.2345 9.37546 9.89881C9.97021 9.22569 10.7489 8.50002 11.5083 7.8407C12.2714 7.17815 13.0323 6.56772 13.601 6.12384C13.8846 5.90256 14.3836 5.52563 14.5525 5.39805L14.5547 5.3964C14.8882 5.15077 15.3582 5.22166 15.6038 5.55518C15.8495 5.88869 15.7782 6.3582 15.4447 6.60384Z"
                fill="#0D0D0D"
              />
            </svg>
          </button>
          <div className="flex-1 flex items-center border rounded-full p-1">
            <input
              className="flex-grow !outline-none ring-0 border-0 focus:!outline-none !ring-white focus:ring-offset-0"
              type="text"
              placeholder="What you're looking for"
            />
            <button
              type="submit"
              className="h-10 w-10 bg-primary rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0.75C4.61522 0.75 0.25 5.11522 0.25 10.5C0.25 15.8848 4.61522 20.25 10 20.25C12.4224 20.25 14.6385 19.3666 16.3437 17.9043L20.4697 22.0303C20.7626 22.3232 21.2374 22.3232 21.5303 22.0303C21.8232 21.7374 21.8232 21.2626 21.5303 20.9697L17.4043 16.8437C18.8666 15.1385 19.75 12.9224 19.75 10.5C19.75 5.11522 15.3848 0.75 10 0.75ZM1.75 10.5C1.75 5.94365 5.44365 2.25 10 2.25C14.5563 2.25 18.25 5.94365 18.25 10.5C18.25 15.0563 14.5563 18.75 10 18.75C5.44365 18.75 1.75 15.0563 1.75 10.5Z"
                  fill="#FEFEFE"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className="overflow-x-auto flex gap-1 no-scrollbar px-6 py-2.5">
          <div className="w-fit py-1 px-2 rounded-xl bg-primary-100">
            <p className="text-heading-sm text-primary text-nowrap cursor-default">
              Work-Friendly
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">
              Classic Vibes
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">
              Hidden Gem
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">
              Productive WFC
            </p>
          </div>
          <div className="w-fit py-1 px-2 rounded-xl border cursor-default">
            <p className="text-heading-sm text-secondary text-nowrap">
              Skena Kid
            </p>
          </div>
        </div>
        {isNotFound ? (
          <div className="flex flex-wrap flex-col md:flex-row flex-1 bg-gradient-to-t from-white to-[#FFB8B2] gap-4 md:gap-8 px-4 py-5 md:p-6 md:items-start items-center md:justify-center">
            <div className="flex flex-col max-w-[380px] w-11/12 bg-white rounded-xl overflow-hidden aspect-[353/374] h-auto">
              <img
                src="/map.png"
                alt="map"
                className="w-full aspect-3/2 object-cover"
              />
              <div className="py-3 px-4 md:p-4 flex flex-col justify-around flex-1">
                <div className="flex flex-col justify-center ">
                  <h2 className="text-heading-lg">No Place Found</h2>
                  <p className="text-body-lg">
                    We couldn't find any places matching your search.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => navigate("/places/123/write-review")}
                    htmlFor="dropzone-file"
                    className="w-full text-heading-md md:p-3 p-2.5 rounded-full text-white bg-primary text-center"
                  >
                    Add Your Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap flex-col md:flex-row flex-1 bg-gradient-to-t from-white to-[#FFB8B2] gap-4 md:gap-8 px-4 py-5 md:p-6 md:items-start items-center justify-center md:grid md:grid-cols-4">
            {new Array(16).fill("").map((el, i) => {
              return (
                <div
                  className="flex items-center justify-center"
                  key={i}
                  onClick={() => navigate("/places/123")}
                >
                  <Card />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
