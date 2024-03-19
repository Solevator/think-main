import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main";
import { ErrorPage } from "../pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
