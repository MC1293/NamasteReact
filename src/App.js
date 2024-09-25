import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestoMenu from "./components/RestoMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestoMenu from "./components/RestoMenu";

const AppLayout = () => {
  return (
    <div className="appcontainer">
      <Headers />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/menu/:id",
        element: <RestoMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
