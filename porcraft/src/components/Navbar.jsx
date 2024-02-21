import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-24 h-12 rounded-lg bg-white items-center
      justify-center flex font-fold shadow-md"
      >
        <p className="green-gradient_text">Porcraft</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/modelsLibrary"
          className={({ isActive }) =>
            isActive ? "text-green-600" : "text-black"
          }
        >
          Models
        </NavLink>
        <NavLink
          to="/export"
          className={({ isActive }) =>
            isActive ? "text-green-600" : "text-black"
          }
        >
          Export
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive ? "text-green-600" : "text-black"
          }
        >
          Help
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
