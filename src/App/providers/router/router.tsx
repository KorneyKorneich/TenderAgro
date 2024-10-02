import { LandingPage } from "@/pages/LandingPage/LandingPage";
import { ShopPage } from "@/pages/ShopPage/ShopPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/shop",
      element: <ShopPage />,
    },
  ],
  { basename: "/TenderAgro/" }
);

