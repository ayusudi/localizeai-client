import { useState } from "react";
import PWABadge from "./PWABadge.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <PWABadge />
    </>
  );
}

export default App;
