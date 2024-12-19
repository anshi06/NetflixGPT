import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error/>
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <Error/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
