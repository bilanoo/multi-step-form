import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/index.tsx";
import { UserinformationStep } from "./pages/UserInformationStep/index.tsx";
import { PlanTypePage } from "./pages/PlanTypePage/index.tsx";
import { PickAddOnsPage } from "./pages/PickAddOnsPage/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserinformationStep />,
    errorElement: <ErrorPage />,
  },
  { path: "/step2", element: <PlanTypePage />, errorElement: <ErrorPage /> },
  { path: "/step3", element: <PickAddOnsPage />, errorElement: <ErrorPage /> },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
