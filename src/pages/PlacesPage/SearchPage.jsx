import { useState } from "react";
import SwitchIcon from "../../components/SwitchIcon";

export default function SearchPage() {
  const [checkStatus, setCheckStatus] = useState(false);
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <div className="text-lg mb-2.5">🔎</div>
        <h3 className="text-sm">Find Your Perfect Spot</h3>
        <p className="text-body-lg">Discover the best places for you</p>
        <div>
          <SwitchIcon
            checked={checkStatus}
            uncheckedIcon={
              <svg
                className="z-10 absolute right-[12px]"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5C12.9013 20.5 15.1049 19.6536 16.8287 18.2429L20.7929 22.2071C21.1834 22.5976 21.8166 22.5976 22.2071 22.2071C22.5976 21.8166 22.5976 21.1834 22.2071 20.7929L18.2429 16.8287C19.6536 15.1049 20.5 12.9013 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5ZM2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5Z"
                />
              </svg>
            }
            checkedIcon={
              <svg
                className="z-10 absolute left-2.5"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
              >
                <path d="M8.5063 2.49975C9.05844 2.48717 9.49584 2.02937 9.48326 1.47723C9.47068 0.925085 9.01288 0.487684 8.46074 0.500265C5.69134 0.563365 3.64878 0.806827 2.21166 2.23896C0.944782 3.50145 0.612202 5.2195 0.501257 7.45033C0.473824 8.00194 0.898749 8.47134 1.45035 8.49877C2.00195 8.5262 2.47136 8.10128 2.49879 7.54968C2.60692 5.37538 2.92972 4.34692 3.62342 3.65563C4.42642 2.85541 5.66249 2.56454 8.5063 2.49975Z" />
                <path d="M14.5393 0.500265C13.9872 0.487684 13.5294 0.925085 13.5168 1.47723C13.5042 2.02937 13.9416 2.48717 14.4937 2.49975C17.3376 2.56454 18.5736 2.85541 19.3766 3.65563C20.0703 4.34692 20.3931 5.37538 20.5013 7.54968C20.5287 8.10128 20.9981 8.5262 21.5497 8.49877C22.1013 8.47134 22.5262 8.00194 22.4988 7.45033C22.3878 5.2195 22.0553 3.50145 20.7884 2.23896C19.3513 0.806827 17.3087 0.563365 14.5393 0.500265Z" />
                <path d="M2.49879 15.4503C2.47136 14.8987 2.00195 14.4738 1.45035 14.5012C0.898748 14.5287 0.473824 14.9981 0.501257 15.5497C0.612202 17.7805 0.944783 19.4986 2.21166 20.761C3.64878 22.1932 5.69134 22.4366 8.46074 22.4997C9.01288 22.5123 9.47068 22.0749 9.48326 21.5228C9.49584 20.9706 9.05844 20.5128 8.5063 20.5003C5.66249 20.4355 4.42642 20.1446 3.62342 19.3444C2.92972 18.6531 2.60692 17.6246 2.49879 15.4503Z" />
                <path d="M22.4988 15.5497C22.5262 14.9981 22.1013 14.5287 21.5497 14.5012C20.9981 14.4738 20.5287 14.8987 20.5013 15.4503C20.3931 17.6246 20.0703 18.6531 19.3766 19.3444C18.5736 20.1446 17.3376 20.4355 14.4937 20.5003C13.9416 20.5128 13.5042 20.9706 13.5168 21.5228C13.5294 22.0749 13.9872 22.5123 14.5393 22.4997C17.3087 22.4366 19.3513 22.1932 20.7884 20.761C22.0553 19.4986 22.3878 17.7805 22.4988 15.5497Z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0001 5.5C7.96249 5.5 5.50006 7.96243 5.50006 11C5.50006 14.0376 7.96249 16.5 11.0001 16.5C12.1576 16.5 13.2315 16.1424 14.1176 15.5317L15.793 17.2071C16.1835 17.5976 16.8166 17.5976 17.2072 17.2071C17.5977 16.8166 17.5977 16.1834 17.2072 15.7929L15.5318 14.1175C16.1425 13.2315 16.5001 12.1575 16.5001 11C16.5001 7.96243 14.0376 5.5 11.0001 5.5ZM7.50006 11C7.50006 9.067 9.06706 7.5 11.0001 7.5C12.9331 7.5 14.5001 9.067 14.5001 11C14.5001 12.933 12.9331 14.5 11.0001 14.5C9.06706 14.5 7.50006 12.933 7.50006 11Z"
                />
              </svg>
            }
            handleToggle={(state) => setCheckStatus(state)}
          />
        </div>
        <div className="w-full ">
          {checkStatus ? (
            <form className="m-auto h-40 w-5/6 max-w-[360px] border rounded-xl flex flex-col justify-center gap-3 sm:gap-2.5 items-center">
              <p className="text-body-lg text-gray-500 w-10/12 text-center">
                Upload an image, and we'll help find similar places.
              </p>
              <label
                for="dropzone-file"
                className="w-5/6 text-heading-md py-2.5 px-3 rounded-full text-white bg-primary text-center"
              >
                Upload an Image
              </label>
              <input id="dropzone-file" type="file" className="hidden" />
            </form>
          ) : (
            <form className="m-auto h-40 w-5/6 max-w-[360px]">
              <div className="flex items-center border rounded-full p-1">
                <input
                  className="flex-grow !outline-none ring-0 border-0 focus:!outline-none !ring-white focus:ring-offset-0"
                  type="text"
                  placeholder="Type in what you're looking for"
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
          )}
        </div>
      </div>
    </div>
  );
}
