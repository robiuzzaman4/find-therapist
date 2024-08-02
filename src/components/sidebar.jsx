import logo from "../assets/icons/logo.svg";
import { routeLinks } from "../constants";
import Navlink from "./navlink";

const Sidebar = () => {
  return (
    <div className="w-full sticky top-0 h-screen bg-background hidden lg:flex flex-col bg-ft-white border-r border-r-ft-gray-200">
      <div className="pt-[55px] pb-[40px] w-fit mx-auto">
        <img
          src={logo}
          alt="logo"
          className="h-[45px] w-[109px] object-contain"
        />
      </div>
      {/* links */}
      <div className="flex flex-col items-start w-full">
        {routeLinks.map((link, i) => (
          <Navlink key={i} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
