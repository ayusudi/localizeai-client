import { useState } from "react";
import PWABadge from "./PWABadge.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <>
      <Outlet />
      <PWABadge />
    </>
  );
}

export default App;
