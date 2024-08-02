import notification from "../assets/icons/notification.svg";
import logoutarrow from "../assets/icons/logout-arrow.svg";
import { useContext } from "react";
import { AuthContext } from "../provider/auth-provider";
import { toast } from "sonner";
import avatar from "../assets/icons/avatar.svg";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  console.log("CURRENT USER: ", user);

  // handling logout functionality
  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("Log Out successfull!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="w-full bg-ft-white border-b border-b-ft-gray-200 py-6 px-[30px] flex items-center justify-between gap-4">
      {/* user info */}
      <div className="flex items-center gap-3">
        {/* avatar */}
        <div className="h-10 w-10 rounded-full border border-ft-gray-200 grid place-items-center bg-ft-white text-xl font-medium  cursor-pointer">
          <img
            src={user && user?.photoURL ? user?.photoURL : avatar}
            alt="user profile picture"
            className={`h-full w-full rounded-full object-cover ${
              !user?.photoURL && "p-1"
            }`}
          />
        </div>
        <div className="">
          <p className="text-[15px] font-medium text-ft-black">
            {user && user?.displayName ? user?.displayName : "N/A"}
          </p>
          <p className="text-sm font-normal text-ft-gray-500">
            {user && user?.email ? user?.email : "N/A"}
          </p>
        </div>
      </div>
      {/* notification and logout */}
      <div className="flex items-center gap-5">
        <button className="h-10 w-10 rounded-full border border-ft-gray-200 grid place-items-center">
          <img src={notification} alt="notification icon" className="h-5 w-5" />
        </button>
        <div className="w-px h-10 bg-ft-gray-200" />

        <button
          onClick={handleLogout}
          className="h-10 w-fit text-ft-red-500 text-base font-medium flex items-center justify-center gap-2.5"
        >
          <p>Logout</p>
          <div className="h-10 w-10 rounded-full bg-ft-red-100 grid place-items-center">
            <img src={logoutarrow} alt="logoutarrow icon" className="h-5 w-5" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
