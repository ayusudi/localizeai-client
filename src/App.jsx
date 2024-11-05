import { useEffect, useState } from "react";
import PWABadge from "./PWABadge.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
import { DataContext } from "./Contexts.js";
import fetchExplore from "./helpers/fetchExplores.js";
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    if (!data["Hidden Gem"]) {
      fetchExplore().then((result) => setData(result));
    }
  }, []);
  return (
    <DataContext.Provider value={{ explores: data }}>
      <Outlet />
      <PWABadge />
    </DataContext.Provider>
  );
}

export default App;
