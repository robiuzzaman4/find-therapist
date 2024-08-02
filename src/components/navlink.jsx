import { NavLink } from "react-router-dom";

const Navlink = ({ link }) => {
  return (
    <NavLink
      to={link.href}
      end={true}
      className={({ isActive }) =>
        `px-6 py-[14px] w-full flex items-center gap-[14px] border-l-[3px] text-base ${
          isActive ? "border-l-ft-black text-ft-black bg-ft-gray-300 font-medium" : "border-l-ft-white text-ft-gray-500 font-normal"
        }`
      }
    >
      <>{link.icon}</>
      <span>{link.label}</span>
    </NavLink>
  );
};

export default Navlink;
