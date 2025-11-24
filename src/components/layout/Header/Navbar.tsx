import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { logoutThunk } from "../../../features/auth/authThunk";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const handelLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-3">
        <NavLink to="/home" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>
        <NavLink to="/" className="nav-link" onClick={handelLogOut}>
          Logout
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
