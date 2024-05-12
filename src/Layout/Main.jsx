import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";



const Main = () => {
    return (
      <div className="">
        <div className="">
          <NavBar></NavBar>
        </div>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Main;