import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { AlphaTest } from "./pages/AlphaTest";
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
        path: "/alphatest",
        element: <AlphaTest />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
