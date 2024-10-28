import { Carousel } from "flowbite-react";
export default function DetailPage() {
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
            <img
              src="/cafe-placeholder.png"
              alt="cafe-jakarta-brew"
              className="relative h-64 md:h-96 object-cover"
            />
            <img
              src="/cafe-placeholder.png"
              alt="cafe-jakarta-brew"
              className="relative h-64 md:h-96 object-cover"
            />
            <img
              src="/cafe-placeholder.png"
              alt="cafe-jakarta-brew"
              className="relative h-64 md:h-96 object-cover"
            />
            <img
              src="/cafe-placeholder.png"
              alt="cafe-jakarta-brew"
              className="relative h-64 md:h-96 object-cover"
            />
          </Carousel>
        </div>

        <div className="justify-center flex-grow p-4 flex flex-col gap-4">
          <div className="flex gap-2">
            <p className="w-fit py-1 px-2 rounded-xl text-tertiary bg-tertiary-50 text-heading-md">
              Open
            </p>
            <p className="w-fit py-1 px-2 rounded-xl text-tertiary bg-tertiary-50 text-heading-md">
              Daily from 8 AM - 10 PM
            </p>
          </div>
          <div>
            <h2 className="text-heading-xl">Jakarta Brew</h2>
            <p className="text-body-lg mt-1">
              Jl. Sudirman No. 25, Jakarta, Indonesia
            </p>
          </div>
          <div className="overflow-x-auto flex gap-2 no-scrollbar">
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
          <div>
            <p className="text-body-lg">
              A cozy and modern cafe located in the heart of Jakarta, known for
              its freshly brewed coffee, friendly atmosphere, and comfortable
              seating perfect for work or relaxation.
            </p>
          </div>
          <button className="self-end justify-end m-auto md:m-0 text-heading-md w-full py-2.5 px-3 rounded-full text-primary bg-primary-50">
            View on Google Maps
          </button>
        </div>
      </div>
    </div>
  );
}
