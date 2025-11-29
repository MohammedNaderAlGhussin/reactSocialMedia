import { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
  const currntUser = localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user")!)
    : null;
  return (
    <>
      <div className="relative md:hidden">
        <button
          type="button"
          onClick={toggleMenu}
          className="items-center justify-center rounded-md p-2 text-gray-500 hover:bg-main-bg  focus:outline-2 focus:-outline-offset-1 focus:outline-primary cursor-pointer"
        >
          {show == true ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
        {show && (
          <div className=" px-2 py-3 absolute top-15 -right-2 w-50 text-center z-50 bg-card-bg shadow-lg">
            <Link to={"/home"} className="burger-menu-link">
              Home
            </Link>
            <Link to={`/profile/${currntUser.id}`} className="burger-menu-link">
              Profile
            </Link>
            <Link to={"/"} className="burger-menu-link">
              Logout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default BurgerMenu;
