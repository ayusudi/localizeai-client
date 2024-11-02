import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import SearchPage from "./pages/PlacesPage/SearchPage.jsx";
import ExplorePage from "./pages/PlacesPage/ExplorePage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import Layout from "./pages/PlacesPage/Layout.jsx";
import WritePage from "./pages/WritePage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import LayoutDetail from "./pages/DetailPage/Layout.jsx";
import ReviewPage from "./pages/DetailPage/ReviewPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import NewPlacePage from "./pages/NewPlacePage.jsx";
import FailedPage from "./pages/FailedPage.jsx";

//  /
//  /register
//  /search
//  /search?q=
//  /explore
// /places/:slug
// /places/:slug/reviews
// component request access
// component form review
// component success

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
        loader: () => {
          if (localStorage.getItem("access_token")) {
            if (localStorage.getItem("status_username") === "true") {
              return redirect("/places");
            } else {
              return redirect("/register");
            }
          }
          return null
        }
      },
      {
        path: "register",
        element: <RegisterPage />,
        loader: () => {
          if (localStorage.getItem("access_token")) {
            if (localStorage.getItem("status_username") === "true") {
              return redirect("/places");
            } else {
              return null;
            }
          } else {
            return redirect("/places");
          }
        },
      },
      {
        path: "places",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <SearchPage />,
          },
          {
            path: "explore",
            element: <ExplorePage />,
          },
        ],
      },
      {
        path: "places/search",
        element: <SearchResultPage />,
      },
      {
        path: "places/new",
        element: <NewPlacePage />,
        loader: () => {
          if (localStorage.getItem("access_token")) {
            if (localStorage.getItem("status_username") === "true") {
              return null
            } else {
              return redirect("/register");
            }
          }
          return redirect("/");
        }
      },
      {
        path: "places/failed",
        element: <FailedPage />,
      },
      {
        path: "places/:id",
        element: <LayoutDetail />,
        children: [
          {
            path: "",
            element: <DetailPage />,
          },
          {
            path: "review",
            element: <ReviewPage />,
          },
        ],
      },

      {
        path: "places/:slug/write-review",
        element: <WritePage />,
        loader: () => {
          if (localStorage.getItem("access_token")) {
            if (localStorage.getItem("status_username") === "true") {
              return null
            } else {
              return redirect("/register");
            }
          }
          return redirect("/");
        }
      },
      {
        path: "places/:slug/write-success",
        element: <SuccessPage />,
      },
      // {
      //   path: "profile",
      //   element: <ProfilePage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
