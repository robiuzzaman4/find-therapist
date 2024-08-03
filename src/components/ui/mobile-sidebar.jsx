import { useContext } from "react";
import { AuthContext } from "../../provider/auth-provider";
import avatar from "../../assets/icons/avatar.svg";
import { routeLinks, systemLinks } from "../../constants";
import Navlink from "../shared/navlink";

const MobileSidebar = ({ open, setOpen }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-ft-black/60"
          />
          <div className="w-[262px] min-h-screen bg-ft-white z-50 fixed top-0 right-0 bottom-0">
            {/* top section */}
            <div className="pt-[116px] pb-[48px] bg-ft-blue-500 px-4">
              {/* user info */}
              <div className="flex flex-col items-end gap-3">
                {/* avatar */}
                <div className="h-[74px] w-[74px] rounded-full border border-ft-gray-200 grid place-items-center bg-ft-white text-xl font-medium  cursor-pointer">
                  <img
                    src={user && user?.photoURL ? user?.photoURL : avatar}
                    alt="user profile picture"
                    className={`h-full w-full rounded-full object-cover ${
                      !user?.photoURL && "p-1"
                    }`}
                  />
                </div>
                <div className="">
                  <p className="text-2xl font-semibold text-ft-white text-end">
                    {user && user?.displayName ? user?.displayName : "N/A"}
                  </p>
                  <p className="text-xs font-normal text-ft-black text-end">
                    {user && user?.email ? user?.email : "N/A"}
                  </p>
                </div>
              </div>
            </div>
            {/* bottom section */}
            <div className="py-4 pr-4 bg-ft-white">
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
          </div>
        </>
      )}
    </>
  );
};

export default MobileSidebar;
