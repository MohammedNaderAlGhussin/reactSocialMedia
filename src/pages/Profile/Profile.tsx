import Logo from "../../components/common/Logo/Logo";

const Profile = () => {
  return (
    <div className="min-h-screen bg-main-bg ">
      <header className="flex flex-row items-center justify-between px-5 bg-white lg:px-10 xl:px-15 fixed w-full top-0 left-0 min-h-[75px] shadow-md z-10">
        <Logo />
        {/* <div className="relative">
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
            <div className=" px-2 py-3 absolute top-15 -right-2 w-50 text-center z-50 bg-white shadow-lg">
              <a href="#" className="burger-menu-link">
                Home
              </a>
              <a href="#" className="burger-menu-link">
                Profile
              </a>
              <a href="#" className="burger-menu-link">
                Logout
              </a>
            </div>
          )}
        </div> */}

        <nav>
          <ul className="flex gap-3">
            <li>
              <a href="" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Profile
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Profile
