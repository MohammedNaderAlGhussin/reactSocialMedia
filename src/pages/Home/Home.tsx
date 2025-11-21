import BurgerMenu from "../../components/common/BurgerMenu/BurgerMenu";
import Logo from "../../components/common/Logo/Logo";

const Home = () => {
  return (
    <div className="min-h-screen bg-main-bg relative">
      {/* overLay */}
      {/* <div className=" absolute top-0 left-0 w-full h-full bg-black/40"></div> */}
      <header className="flex flex-row items-center justify-between px-5 bg-white lg:px-10 xl:px-15 fixed w-full top-0 left-0 min-h-[75px] shadow-md z-10">
        <Logo />
        <BurgerMenu />

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
      <div className="container mx-auto py-5 px-3  xl:px-5 flex flex-row gap-5 mt-20">
        {/* Left */}
        <div className=" hidden md:block xl:w-1/5 xl:pr-4 w-30 h-fit shadow-lg p-3 bg-white rounded-xl sticky top-20 ">
          <h1 className="font-bold text-lg xl:pl-1 text-center xl:text-start">
            Menu
          </h1>
          <ul className="flex flex-col gap-2 px-2 xl:px-4 mt-4">
            <li className="menu-link">
              <span>👤</span>
              <p className="hidden xl:block">My Profile</p>
            </li>
            <li className="menu-link">
              <span>👥</span>
              <p className="hidden xl:block">Friends</p>
            </li>
            <li className="menu-link">
              <span>💬</span>
              <p className="hidden xl:block">Messages</p>
            </li>
            <li className="menu-link">
              <span>🔔</span>
              <p className="hidden xl:block">Notifications</p>
            </li>
            <li className="menu-link">
              <span>⚙️</span>
              <p className="hidden xl:block">Settings</p>
            </li>
          </ul>
        </div>
        {/*== Left ==*/}

        {/* Middle */}
        <div className="w-full xl:w-1/2 h-screen   rounded-xl">
          {/* Post Box */}
          <div className=" pb-3 bg-white mb-5 rounded-xl">
            <div className="flex p-4">
              <img
                src="https://easykey.uk/images/vgift/barry-avatar-400.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <textarea
                className="w-full  text-gray-900 p-2 resize-none focus:outline-none text-"
                placeholder="What's in your mind?"
              ></textarea>
            </div>
            <div className="flex p-4 w-full">
              <a href="" className="text-primary rounded-full p-2">
                image
              </a>
              <a href="" className="text-primary rounded-full p-2">
                face
              </a>
              <a
                href=""
                className=" bg-primary text-white duration-300 hover:bg-primary-hv font-bold flex items-center justify-center rounded-full px-5 py-2 ml-auto mr-1"
              >
                Post
              </a>
            </div>
          </div>
          {/*== Post Box ==*/}
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
        {/*== Middle ==*/}

        {/* Right */}
        <div className="p-3 xl:pr-4 bg-white rounded-xl hidden w-[30%] xl:block h-fit shadow-lg  ">
          <h1 className="font-bold text-lg pl-1">Suggestions</h1>
          <ul className="flex flex-col gap-2 px-4 mt-4">
            <li className="menu-link">
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
                  <p className="text-white">SK</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">Sarah Kim</h1>
                  <span className="text-sec-text text-sm">
                    3 mutual friends
                  </span>
                </div>
              </div>
            </li>
            <li className="menu-link">
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
                  <p className="text-white">MJ</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">Mike Johnson</h1>
                  <span className="text-sec-text text-sm">
                    5 mutual friends
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*== Right ==*/}
      </div>
    </div>
  );
};

export default Home;
