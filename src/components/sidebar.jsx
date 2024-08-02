import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { routeLinks, systemLinks } from "../constants";
import Navlink from "./navlink";

const Sidebar = () => {
  return (
    <div className="w-full sticky top-0 h-screen bg-background hidden lg:flex flex-col bg-ft-white border-r border-r-ft-gray-200">
      <Link to={"/dashboard"} className="pt-[55px] pb-[40px] w-fit mx-auto">
        <img
          src={logo}
          alt="logo"
          className="h-[45px] w-[109px] object-contain"
        />
      </Link>
      {/* route links */}
      <div className="flex flex-col items-start w-full">
        {routeLinks.map((link, i) => (
          <Navlink key={i} link={link} />
        ))}
      </div>
      {/* horizontal line */}
      <div className="py-6 px-4">
        <div className="h-px w-full bg-ft-gray-200" />
      </div>
      {/* system links */}
      <div className="flex flex-col items-start w-full">
        {systemLinks.map((link, i) => (
          <Navlink key={i} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
