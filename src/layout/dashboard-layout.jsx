import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex-1 items-start lg:grid lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)] bg-red-200 min-h-screen w-full relative">
      {/* sidebar */}
      <div className="w-full sticky top-0 h-screen bg-background p-4 hidden lg:flex flex-col gap-8 bg-white">
        <h1 className="text-2xl font-medium">Hello 1</h1>
        <h1 className="text-2xl font-medium">Hello 2</h1>
        <h1 className="text-2xl font-medium">Hello 3</h1>
      </div>
      {/* outlet */}
      <div className="overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
