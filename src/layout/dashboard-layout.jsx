import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex-1 items-start lg:grid lg:grid-cols-[250px_minmax(0,1fr)]  min-h-screen w-full relative bg-ft-gray-400">
      {/* sidebar */}
      <Sidebar />
      {/* outlet */}
      <div className="overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
