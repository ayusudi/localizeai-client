import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SwitchSearchExplore from "../../components/SwitchSearchExplore";
import { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { handleLogin } from "../../helpers/googleLogin";
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
  let [dataProfile, setDataProfile] = useState({
    username: "",
    email: "",
    profile: "",
  });
  const logout = () => {
    setDataProfile({
      username: "",
      email: "",
      profile: "",
    });
    localStorage.clear();
  };

  const login = () => {
    handleLogin(navigate).then((_) => {
      setDataProfile({
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        profile: localStorage.getItem("profile"),
      });
    });
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setDataProfile({
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        profile: localStorage.getItem("profile"),
      });
    }
  }, []);
  return (
    <div className="bg-redwhite page flex flex-col py-6">
      <SwitchSearchExplore
        checked={checkStatus}
        uncheckedLabel="Search"
        checkedLabel="Explore"
        handleToggle={() => changePage()}
      />
      <div className="absolute top-6  right-4">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              className="w-11 h-11  object-cover bg-transparent "
              alt="User settings"
              img={
                dataProfile.profile
                  ? "https://images.weserv.nl/?url=" + dataProfile.profile
                  : "/default.png"
              }
              rounded
            />
          }
        >
          {dataProfile.email ? (
            <Dropdown.Header>
              <span className="block text-body-xl font-medium">
                Hi @{dataProfile.username}
              </span>
              {dataProfile.email ? (
                <span className="block truncate text-body-xl">
                  {dataProfile.email}
                </span>
              ) : null}
            </Dropdown.Header>
          ) : null}

          {dataProfile.email ? (
            <>
              <Dropdown.Item>
                <p onClick={logout} className="text-body-xl text-semibold">
                  Logout
                </p>
              </Dropdown.Item>
            </>
          ) : (
            <Dropdown.Item>
              <p
                onClick={login}
                className="text-body-lg text-semibold flex min-w-[120px]"
              >
                Google Login
              </p>
            </Dropdown.Item>
          )}
        </Dropdown>
      </div>

      <Outlet />
    </div>
  );
}
