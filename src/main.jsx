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
import ExploreCategoryPage from "./pages/PlacesPage/ExploreCategoryPage";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import Layout from "./pages/PlacesPage/Layout.jsx";
import WritePage from "./pages/WritePage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import LayoutDetail from "./pages/DetailPage/Layout.jsx";
import ReviewPage from "./pages/DetailPage/ReviewPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import NewPlacePage from "./pages/NewPlacePage.jsx";
import FailedPage from "./pages/FailedPage.jsx";
import SuccessPlacePage from "./pages/SuccessPlacePage.jsx";

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
          return null;
        },
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
          {
            path: "explore/:category",
            element: <ExploreCategoryPage />,
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
              return null;
            } else {
              return redirect("/register");
            }
          }
          return redirect("/");
        },
      },
      {
        path: "places/failed",
        element: <FailedPage />,
      },
      {
        path: "places/success",
        element: <SuccessPlacePage />,
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
            path: "reviews",
            element: <ReviewPage />,
          },
        ],
      },
      {
        path: "places/:id/write-review",
        element: <WritePage />,
        loader: () => {
          if (localStorage.getItem("access_token")) {
            if (localStorage.getItem("status_username") === "true") {
              return null;
            } else {
              return redirect("/register");
            }
          }
          return redirect("/");
        },
      },
      {
        path: "places/:id/write-success",
        element: <SuccessPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
