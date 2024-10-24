import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Card from "../components/Card";

export default function LandingPage() {
  const [cardKeys, setCardKeys] = useState(new Array(12).fill(false)); // Initialize keys for each card
  const [isMobile, setIsMobile] = useState(false); // State to check if it's mobile
  const containerRef = useRef(null); // Reference to the scroll container
  const directionRef = useRef(1); // Direction of scrolling (1 = right, -1 = left)
  const [isScrolling, setIsScrolling] = useState(true); // State to control scrolling

  // Effect to detect mobile screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust the breakpoint as needed

    const handleMediaChange = (e) => {
      setIsMobile(e.matches); // Update state based on media query
    };

    mediaQuery.addEventListener("change", handleMediaChange); // Listen for changes
    handleMediaChange(mediaQuery); // Initial check

    return () => mediaQuery.removeEventListener("change", handleMediaChange); // Clean up listener
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    const containerCenter = container.offsetWidth / 2; // Center of the viewport

    // Update card keys based on their position relative to the viewport center
    const updatedKeys = Array.from(container.children).map((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = (cardRect.left + cardRect.right) / 2;
      const distanceToCenter = cardCenter - containerCenter;

      // Assign keys based on position relative to the center of the viewport
      if (Math.abs(distanceToCenter) < cardRect.width / 2) {
        return 0; // Card is at the center
      } else if (
        distanceToCenter < 0 &&
        Math.abs(distanceToCenter) < cardRect.width * 1.5
      ) {
        return distanceToCenter / 100; // Card is before the center
      } else if (
        distanceToCenter > 0 &&
        Math.abs(distanceToCenter) < cardRect.width * 1.5
      ) {
        return distanceToCenter / 100; // Card is after the center
      } else {
        return false; // All other cards
      }
    });

    setCardKeys(updatedKeys); // Update the state with the new keys
  };

  const autoScroll = () => {
    const container = containerRef.current;
    const scrollAmount = 5; // Adjust this value for speed
    const maxScrollLeft = container.scrollWidth - container.clientWidth; // Maximum scroll left position

    if (directionRef.current === 1) {
      // Scroll right
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });

      // If reached the end, reverse direction
      if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
        directionRef.current = -1;
      }
    } else {
      // Scroll left
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      });

      // If reached the start, reverse direction
      if (container.scrollLeft - scrollAmount <= 0) {
        directionRef.current = 1;
      }
    }
  };

  useEffect(() => {
    const interval = isScrolling ? setInterval(autoScroll, 50) : null; // Control scrolling with interval
    return () => clearInterval(interval); // Clean up interval
  }, [isScrolling]);

  const handleMouseEnter = () => {
    setIsScrolling(false); // Stop scrolling on hover
  };

  const handleMouseLeave = () => {
    setIsScrolling(true); // Resume scrolling
  };

  return (
    <div className="relative">
      {!localStorage.getItem("FirstTime") && (
        <div className="z-50 page splash absolute bg-primary flex justify-items-center items-center">
          <img src="logo-text.png" className="m-auto " />
        </div>
      )}
      <div className="page overflow-hidden flex flex-col">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex overflow-x-scroll gap-5 p-4 no-scrollbar justify-center items-center bg-gradient-to-t from-white to-[#FFB8B2]"
        >
          {new Array(12).fill("").map((el, i) => {
            const cardKey = cardKeys[i];
            const rotation = isMobile
              ? cardKey === false
                ? 0
                : cardKey.toFixed(1)
              : 0;

            // Ensure rotation is a number for the animation
            const props = useSpring({
              transform: isMobile ? `rotate(${rotation}deg)` : "rotate(0deg)",
              config: { tension: 200, friction: 10 },
              from: { transform: "rotate(0deg)" }, // Start from 0 degrees
            });

            return (
              <animated.div
                key={i}
                style={props}
                className={`w-fit transition-transform duration-50 ease-out`}
              >
                <Card cardKey={isMobile ? cardKey : 0} />
              </animated.div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-5 my-6 md:flex-grow ">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-sm md:text-md text-center w-4/6 md:w-full">
              Discover Cafes and Create Moments
            </h3>
            <p className="text-body-lg md:text-body-xl text-center">
              Explore the best cafes and share your favorite places with
              friends.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-3">
            <button className="text-heading-md w-80 py-2.5 px-3 rounded-full text-white bg-primary">
              Login with Google
            </button>
            <button className="text-heading-md w-80 py-2.5 px-3 rounded-full text-primary bg-primary-50">
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
