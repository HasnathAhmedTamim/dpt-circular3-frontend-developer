import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MasterPrice from "../pages/Home/MasterPrice/MasterPrice";
import CustomPrice from "../pages/Home/CustomPrice/CustomPrice";
import Calender from "../pages/Home/Calender/Calender";
import Reports from "../pages/Home/Reports/Reports";
// Creating a BrowserRouter instance using createBrowserRouter function
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/masterprice",
        element: <MasterPrice></MasterPrice>,
      },
      {
        path: "/customprice",
        element: <CustomPrice></CustomPrice>,
      },
      {
        path: "/calender",
        element: <Calender></Calender>,
      },
      {
        path: "/reports",
        element: <Reports></Reports>,
      },
    ],
  },
]);
