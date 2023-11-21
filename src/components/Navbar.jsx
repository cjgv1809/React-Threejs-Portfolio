import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="absolute top-0 right-0 left-0 w-full flex items-center z-10 p-5">
      <NavLink
        to="/"
        className="w-10 h-10 p-3 rounded-lg bg-white items-center justify-center flex shadow-md text-2xl font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition duration-300 ease-in-out"
      >
        CG
      </NavLink>
      <nav className="flex justify-end items-center font-medium space-x-6 w-full">
        <NavLink
          to="/about"
          className="group text-gray-900 transition-all duration-300 ease-in-out px-1 py-1 rounded-md"
        >
          <span className="font-semibold bg-left-bottom bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About
          </span>
        </NavLink>
        <NavLink
          to="/projects"
          className="group text-gray-900 transition-all duration-300 ease-in-out px-1 py-1 rounded-md"
        >
          <span className="font-semibold bg-left-bottom bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Projects
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className="group text-gray-900 transition-all duration-300 ease-in-out px-1 py-1 rounded-md"
        >
          <span className="font-semibold bg-left-bottom bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
