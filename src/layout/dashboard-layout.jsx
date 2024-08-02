import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const DashboardLayout = () => {
  return (
    <div className="flex-1 items-start lg:grid lg:grid-cols-[250px_minmax(0,1fr)]  min-h-screen w-full relative">
      {/* sidebar */}
      <div className="w-full sticky top-0 h-screen bg-background p-4 hidden lg:flex flex-col gap-8 bg-ft-white border-r border-r-ft-gray-200">
        <h1 className="text-2xl font-medium">Hello 1</h1>
        <h1 className="text-2xl font-medium">Hello 2</h1>
        <h1 className="text-2xl font-medium">Hello 3</h1>
      </div>
      {/* outlet */}
      <div className="overflow-hidden">
        <Navbar/>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
