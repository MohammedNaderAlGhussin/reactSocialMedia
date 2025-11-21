import BurgerMenu from "../../components/common/BurgerMenu/BurgerMenu";
import Logo from "../../components/common/Logo/Logo";

const Profile = () => {
  return (
    <div className="min-h-screen bg-main-bg ">
      <header className="flex flex-row items-center justify-between px-5 bg-white lg:px-10 xl:px-15 fixed w-full top-0 left-0 min-h-[75px] shadow-md z-10">
        <Logo />
        <BurgerMenu />

        <nav className="hidden md:block">
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
          {/* Posts */}
          <div className="pb-5">
            <div className="bg-white mb-5 rounded-xl cursor-pointer pb-4">
              <div className="flex items-center p-4 pb-0">
                <img
                  src="https://easykey.uk/images/vgift/barry-avatar-400.png"
                  alt=""
                  className="w-9 h-9 rounded-full"
                />
                <p className="flex itmes-center flex-1 flex-wrap shrink-0  text-gray-800 font-medium ml-2">
                  Nader Al Ghussin
                  <span className="block text-sm leading-6 text-gray-400 sm:ml-0 md:ml-1">
                    @Nader Al Ghussin . Nov 11
                  </span>
                </p>
              </div>
              <div className="pl-8 xl:pl-16 pr-4 pt-2">
                <p className="w-auto font-medium text-gray-800 ">
                  Any fool can write code that a computer can understand. Good
                  programmers write code that humans can understand.
                  <br />
                  <br />
                  Experience is the name everyone gives to their
                  <a href="#" className="text-blue-400">
                    #mistakes
                  </a>
                  <br />
                  <br />
                  Simplicity is the soul of efficiency.
                </p>
                <img
                  className="rounded-2xl border border-gray-600 my-3 mr-2 w-full"
                  src="https://images.nature.com/original/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459150.jpg"
                  alt=""
                />
                <div className="flex justify-around items-center">
                  <div className="flex items-center text-xs text-gray-400 hover:text-blue-400 ">
                    likes 12.3 k
                  </div>

                  <div className="flex items-center  text-xs text-gray-400 hover:text-red-600">
                    comments 14 k
                  </div>
                  <div className="flex items-center  text-xs text-gray-400 hover:text-blue-400">
                    share
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*== Posts ==*/}
        </div>
      </div>
    </div>
  );
};

export default Profile;
