import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import DeleteRequest from "./pages/DeleteRequest";
import Layout from "./pages/Layout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TopPage from "./pages/TopPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TopPage />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/delete-request",
        element: <DeleteRequest />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
