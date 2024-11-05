import React, { useEffect, useRef } from "react";
import { Carousel } from "flowbite-react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export default function Card({ cardKey, el }) {
  const navigate = useNavigate();
  const cardRef = useRef(null); // Reference to the card element

  useEffect(() => {
    const translateYValue = cardKey === 0 ? 0 : 8; // Adjust Y translation based on cardKey
    // GSAP animation
    gsap.to(cardRef.current, {
      y: translateYValue, // Change translateY to y
      duration: 0.2, // Animation duration
      ease: "power1.out", // Easing function
    });
  }, [cardKey]); // Runs when cardKey changes
  const format = (text) =>
    text.split(" ").slice(1, -2).join(" ").replace(/,$/, "");
  return (
    <div
      ref={cardRef} // Set the ref to the card element
      className="card overflow-hidden w-[300px] outline bg-white outline-primary-50 outline-2 rounded-2xl"
    >
      <div className="px-4 py-5">
        <h3
          onClick={() => navigate(`/places/${el.id}`)}
          className="cursor-pointer mb-2 text-heading-lg line-clamp-1"
        >
          {el.title || "Jakarta Brew"}
        </h3>
        <p
          onClick={() => navigate(`/places/${el.id}`)}
          className="cursor-pointer mb-3 text-body-lg line-clamp-1"
        >
          {el.plus_code ? format(el.plus_code) : "Jakarta"}
        </p>
        <div className="overflow-x-auto flex gap-1 no-scrollbar">
          {el.categories.map((e) => (
            <div key={e} className="w-fit py-1 px-2 rounded-xl bg-primary-100">
              <p className="capitalize text-heading-sm text-primary text-nowrap cursor-default">
                {e}
              </p>
            </div>
          ))}
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
          {el.images.slice(0, 4).map((e, index) => (
            <img
              key={index}
              src={"https://images.weserv.nl/?url=" + e}
              alt={"picture" + index + el.title}
              className="relative object-cover h-full"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
