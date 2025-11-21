import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-3">
        <NavLink to="/home" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>
        <NavLink to="/" className="nav-link">
          Logout
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
