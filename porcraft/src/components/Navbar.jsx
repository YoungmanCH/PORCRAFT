import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header ">
      <NavLink
        to="/"
        className="w-24 h-12 rounded-lg bg-transparent  items-center
      justify-center flex font-fold "
      >
        <p className=" text-xl text-zinc-100">Porcraft</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium ml-0 w-full"></nav>
    </header>
  );
};

export default Navbar;
