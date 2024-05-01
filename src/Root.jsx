import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen z-50">
            <Outlet/>
            </div>
           <div className="z-10">
           <Footer/>
           </div>
        </div>
    );
};

export default Root;
