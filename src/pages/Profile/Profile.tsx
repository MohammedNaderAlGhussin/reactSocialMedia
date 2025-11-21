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
      <div className=" container mx-auto py-5 px-3  xl:px-5 flex flex-row gap-5 mt-20">
        <div className="mx-auto w-full md:w-3/4 lg:w-2/3">
          {/* Profile */}
          <div className=" pb-3 bg-white mb-5 rounded-xl relative">
            <div className="linear rounded-t-xl h-40"></div>
            {/* Avatar */}
            <div className="hidden sm:flex w-25 h-25 border-2 border-white rounded-full linear  text-white  items-center justify-center text-2xl  absolute top-28 left-5 xl:left-10">
              JD
            </div>
            {/*== Avatar ==*/}
            <div className="container mx-auto w-1/2 lg:w-[65%] flex flex-col gap-4 items-sart mt-5  pb-4">
              <div className="">
                <h1 className="font-bold text-2xl">John Doe</h1>
                <p className="text-sec-text">@johndoe</p>
              </div>
              <div className="">
                <ul className="flex gap-3 font-bold text-xl">
                  <li>
                    <p>245</p>
                    <span className="text-sec-text text-sm font-normal">
                      Posts
                    </span>
                  </li>
                  <li>
                    <p>1.2k</p>
                    <span className="text-sec-text text-sm font-normal">
                      Followers
                    </span>
                  </li>
                  <li>
                    <p>892</p>
                    <span className="text-sec-text text-sm font-normal">
                      Following
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-3 mt-3">
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hv duration-300 cursor-pointer">
                  Edit Profile
                </button>
                <button className="bg-main-bg  px-4 py-2 rounded-md hover:bg-gray-400 hover:text-white cursor-pointer duration-300">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
          {/*== Profile ==*/}
         
        </div>
      </div>
    </div>
  );
};

export default Profile;
