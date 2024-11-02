import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SwitchSearchExplore from "../../components/SwitchSearchExplore";
import { useEffect, useState } from "react";
export default function Layout() {
  let location = useLocation();
  const navigate = useNavigate();
  const [checkStatus, setCheckStatus] = useState(
    location.pathname === "/places" ? false : true
  );
  const changePage = () => {
    setCheckStatus(!checkStatus);
    if (location.pathname === "/places") navigate("/places/explore");
    else navigate("/places");
  };
  return (
    <div className="bg-redwhite page flex flex-col py-6">
      <SwitchSearchExplore
        checked={checkStatus}
        uncheckedLabel="Search"
        checkedLabel="Explore"
        handleToggle={() => changePage()}
      />
      <img
        className="absolute top-6 rounded-full w-11 h-11 object-cover right-4"
        src={"https://images.weserv.nl/?url=" + localStorage.getItem("profile")}
      />
      <Outlet />
    </div>
  );
}
