import { useNavigate, useParams } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import fetchDetail from "../helpers/fetchDetail";
import { format } from "../helpers/helperText";
import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const Component = ({ data }) => {
  return (
    <div className="card overflow-hidden max-w-[600px] w-11/12 outline bg-white outline-primary-50 outline-2 rounded-2xl">
      <div className="pl-4 py-5">
        <h3 className="mb-2 text-heading-lg">{data?.title}</h3>
        <p className="mb-3 text-body-lg">{format(data.plus_code)}</p>
        <div className="overflow-x-auto flex gap-1 no-scrollbar">
          {data.categories?.map((el) => {
            return (
              <div
                key={el}
                className="w-fit py-1 px-2 rounded-xl bg-primary-100"
              >
                <p className="text-heading-sm text-primary text-nowrap cursor-default">
                  {el}
                </p>
              </div>
            );
          })}
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
          {data.images.map((el, i) => {
            return (
              <img
                key={i}
                src={"https://images.weserv.nl/?url=" + el}
                alt="cafe-jakarta-brew"
                className="relative"
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default function WritePage() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchDetail(id)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" page flex flex-col pb-6">
      <div className="bg-white relative flex pt-6 pb-3 border-b-[1px] ">
        <button
          onClick={() => navigate("/places/" + id)}
          className="z-10 cursor-pointer mx-4 bg-white rounded-full flex justify-center items-center h-12 w-12 border"
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
        <h1 className="absolute w-full text-center text-heading-xl">
          Write Review
        </h1>
      </div>
      <div className="bg-gradient-to-t from-white to-[#FFB8B2] flex-grow flex flex-col items-center pt-4 gap-4">
        {isLoading ? (
          <Lottie
            loop={true}
            animationData={loading}
            style={{
              height: 300,
              aspectRatio: "4/2",
              background: "white",
            }}
            className="m-auto rounded-xl p-5"
          />
        ) : (
          <Component data={data} />
        )}
        <form className="flex-1 bg-white w-full flex justify-center">
          <div className="max-w-[600px] w-11/12  flex flex-col py-6 gap-4">
            <div>
              <h1 className="text-heading-xl">Share Your Experience</h1>
              <p className="text-body-lg">
                Let others know what made your visit special
              </p>
            </div>
            <div className="flex justify-around">
              <button className="text-lg">😠</button>
              <button className="text-lg">🙁</button>
              <button className="text-lg">😐</button>
              <button className="text-lg">🙂</button>
              <button className="text-lg">🤩</button>
            </div>
            <textarea
              rows={10}
              placeholder="Review Text"
              className="rounded-lg h-[300px] max-h-[300px] border-[#D9D9D9] outline-none ring-0 ring-offset-0 shadow-none focus:border-[#D9D9D9] focus:ring-transparent"
            ></textarea>
            <div className="m-auto h-40 w-full border rounded-xl flex flex-col justify-center gap-3 sm:gap-2.5 items-center">
              <p className="text-body-lg text-gray-500 w-10/12 text-center">
                Add photos to make your review more helpful.
              </p>
              <label
                htmlFor="dropzone-file"
                className="w-4/6 max-w-80 text-heading-md py-2.5 px-3 rounded-full text-white bg-primary text-center cursor-pointer"
              >
                Upload an Image
              </label>
              <input id="dropzone-file" type="file" className="hidden" />
            </div>
            <button
              onClick={() => navigate("/places/123/write-success")}
              className="text-heading-md p-3 rounded-full text-white bg-primary mt-2 w-5/6 max-w-80 m-auto"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
