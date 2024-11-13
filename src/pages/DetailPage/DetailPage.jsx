import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { format, getOpeningHours, isOpen } from "../../helpers/helperText";
export default function DetailPage() {
  const [data, setData] = useOutletContext();

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="h-64 md:h-96 md:max-w-[580px]">
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
            {data?.images?.slice(0, 4).map((el, i) => (
              <img
                key={i}
                src={"https://images.weserv.nl/?url=" + el}
                alt="cafe-jakarta-brew"
                className="relative h-64 md:h-96 object-cover"
              />
            ))}
          </Carousel>
        </div>

        <div className="justify-center flex-grow p-4 flex flex-col gap-4">
          <div className="flex gap-2">
            {isOpen(data.open_hours, new Date()) ? (
              <p className="w-fit py-1 px-2 rounded-xl text-tertiary bg-tertiary-50 text-heading-md">
                Open
              </p>
            ) : (
              <p className="w-fit py-1 px-2 rounded-xl text-primarh bg-primary-100 text-heading-md">
                Close
              </p>
            )}

            <p className="w-fit py-1 px-2 rounded-xl text-tertiary bg-tertiary-50 text-heading-md">
              {getOpeningHours(data.open_hours)}
            </p>
          </div>
          <div>
            <h2 className="text-heading-xl">{data.title}</h2>
            <p className="text-body-lg mt-1">{format(data.plus_code)}</p>
          </div>
          <div className="overflow-x-auto flex gap-2 no-scrollbar">
            {data?.categories?.map((el) => (
              <div
                key={el}
                className="w-fit py-1 px-2 rounded-xl bg-primary-100"
              >
                <p className="text-heading-sm text-primary text-nowrap cursor-default">
                  {el}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-body-lg">{data.description || data.address}</p>
          </div>
          <a
            href={data.reviews_link}
            className="text-center self-end justify-end m-auto md:m-0 text-heading-md w-full py-2.5 px-3 rounded-full text-primary bg-primary-50"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
      </div>
      <div className="columns-2 md:columns-3 gap-4 py-4">
        {data?.images?.slice(5, 30).map((picture, index) => (
          <div key={index} className="mb-4 overflow-hidden">
            <img
              src={"https://images.weserv.nl/?url=" + picture}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
