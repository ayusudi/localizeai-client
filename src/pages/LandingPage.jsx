import React, { useState, useEffect, useRef } from "react";
import { animated } from "react-spring";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
import app from "../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function LandingPage() {
  const baseUrl = "https://localizeai-server-da6245e547aa.herokuapp.com";
  const [cardKeys, setCardKeys] = useState(new Array(12).fill(false)); // Initialize keys for each card
  const [isMobile, setIsMobile] = useState(false); // State to check if it's mobile
  const containerRef = useRef(null); // Reference to the scroll container
  const directionRef = useRef(1); // Direction of scrolling (1 = right, -1 = left)
  const [isScrolling, setIsScrolling] = useState(true); // State to control scrolling
  const navigate = useNavigate();
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
    if (!isMobile) {
      const interval = isScrolling ? setInterval(autoScroll, 50) : null; // Control scrolling with interval
      return () => clearInterval(interval); // Clean up interval
    }
  }, [isScrolling, isMobile]);

  const handleMouseEnter = () => {
    setIsScrolling(false); // Stop scrolling on hover
  };

  const handleMouseLeave = () => {
    setIsScrolling(true); // Resume scrolling
  };

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const token = await result.user.getIdToken();
        return axios.post(`${baseUrl}/users/login`, { id_token: token });
      })
      .then(({ data }) => {
        console.log("Server response:", data);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        localStorage.setItem("status_username", data.status_username);
        localStorage.setItem("name", data.name);
        localStorage.setItem("profile", data.profile);
        localStorage.setItem("access_token", data.access_token);
        navigate("/register");
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error during login:", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email; // optional chaining
        const credentialError = GoogleAuthProvider.credentialFromError(error);
        console.error("Error details:", {
          errorCode,
          errorMessage,
          email,
          credentialError,
        });
      });
  };

  return (
    <div className="relative">
      {!localStorage.getItem("FirstTime") && (
        <div className="z-50 page splash absolute bg-primary flex justify-items-center items-center">
          <img src="logo-text.png" className="m-auto " />
        </div>
      )}
      <div className="page overflow-hidden flex flex-col ">
        {isMobile ? (
          <div className="md:hidden py-3 bg-gradient-to-t from-white to-[#FFB8B2] flex-1 justify-center items-center flex ">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                scale: 0.8,
                slideShadows: false,
              }}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {new Array(9).fill("").map((el, i) => (
                <SwiperSlide key={i}>
                  <Card />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div
            ref={containerRef}
            onScroll={handleScroll}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hidden md:flex overflow-x-scroll gap-5 p-4 no-scrollbar justify-center items-center bg-gradient-to-t from-white to-[#FFB8B2]"
          >
            {new Array(12).fill("").map((el, i) => {
              const cardKey = cardKeys[i];

              return (
                <animated.div
                  key={i}
                  className={`w-fit transition-transform duration-50 ease-out`}
                >
                  <Card cardKey={isMobile ? cardKey : 0} />
                </animated.div>
              );
            })}
          </div>
        )}

        <div className="flex flex-col items-center justify-center gap-4 md:gap-5 my-6 md:flex-grow flex-1">
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
            <button
              onClick={handleLogin}
              className="text-heading-md w-80 py-2.5 px-3 rounded-full text-white bg-primary"
            >
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
