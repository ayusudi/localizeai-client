import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import SearchPage from "./pages/PlacesPage/SearchPage.jsx";
import ExplorePage from "./pages/PlacesPage/ExplorePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import Layout from "./pages/PlacesPage/Layout.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

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
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      // {
      //   path: "places",
      //   element: <Layout />,
      //   children: [
      //     {
      //       path: "",
      //       element: <SearchPage />,
      //     },
      //     {
      //       path: "explore",
      //       element: <ExplorePage />,
      //     },
      //   ],
      // },
      // {
      //   path: "places/:slug",
      //   element: <Layout />,
      //   children: [
      //     {
      //       path: "",
      //       element: <DetailPage />,
      //     },
      //     {
      //       path: "places/:slug/review",
      //       element: <PlacePage />,
      //     },
      //   ],
      // },
      // {
      //   path: "places/:slug/write-review",
      //   element: <PlacePage />,
      // },
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
