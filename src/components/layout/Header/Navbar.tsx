import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { logoutThunk } from "../../../features/auth/authThunk";
import { showToast } from "../../../features/toast/toastSlice";
import HomeIcon from "../../icons/HomeIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import LogoutIcon from "../../icons/LogoutIcon";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const currentUser = localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user")!)
    : null;

  const handelLogOut = () => {
    dispatch(logoutThunk());
    dispatch(
      showToast({ type: "success", message: "Logged out successfully !" })
    );
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-3">
        <NavLink to="/home" className="nav-link">
          <HomeIcon />
        </NavLink>
        <NavLink to={`/profile/${currentUser.id}`} className="nav-link">
          <ProfileIcon />
        </NavLink>
        <NavLink to="/" className="nav-link" onClick={handelLogOut}>
          <LogoutIcon />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
