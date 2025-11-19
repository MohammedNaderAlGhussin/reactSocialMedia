import Facebook from "./../assets/icons/facebook.png";
import Gmail from "./../assets/icons/gmail.png";
import Logo from "./../assets/icons/logo.png";
const Login = () => {
  // sm: @media (min-width: 640px)
  // md: @media (min-width: 768px)
  // lg: @media (min-width: 1024px)
  // xl: @media (min-width: 1280px)
  // 2xl: @media (min-width: 1536px)
  return (
    <main className="linear h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center container gap-5 mx-auto rounded-xl p-5 md:p-10 w-4/5 sm:w-2/3 md:w-3/5 lg:w-4/10 xl:w-3/9  h-[670px]">
        <div className="flex flex-col items-center justify-center">
          <div className="linear w-fit text-white px-6 py-2 mb-4 rounded-xl">
            <img src={Logo} alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-main-text text-2xl font-bold">SocailPluse</h1>
          <p className="text-sec-text text-center text-md md:text-lg">
            Welcome back, please login to your account
          </p>
        </div>
        <form className=" flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-main-text ">
              <svg
                viewBox="0 0 20 20"
                className="w-5 h-5 text-sec-text inline mr-2"
                fill="currentColor"
              >
                <path d="M10 11.474L0 2.649V14H20V2.649L10 11.474ZM10.001 8.812L0 0V-1H20V0L10.001 8.812Z" />
              </svg>
              Email Address
            </label>

            <input
              type="text"
              id="email"
              className="input"
              placeholder="hello@example.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pass" className="text-main-text flex items-center">
              <svg
                viewBox="0 0 48 48"
                className="w-5 h-5 text-sec-text inline mr-1"
                fill="currentColor"
              >
                <path d="M24,25.28a3.26,3.26,0,0,0-1.64,6.07V36h3.32V31.35a3.28,3.28,0,0,0,1.61-2.8v0A3.27,3.27,0,0,0,24,25.28Z" />
                <rect
                  x="7.38"
                  y="17.77"
                  width="33.23"
                  height="25.73"
                  rx="4.32"
                />
                <path d="M13.35,17.77V15.16a10.66,10.66,0,0,1,21.32,0v2.61" />
              </svg>
              Password
            </label>

            <input
              type="text"
              id="pass"
              className="input"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox" id="remeber-me" className="w-5" />
              <label
                htmlFor="remeber-me"
                className="text-sec-text text-sm md:text-md"
              >
                Remeber me
              </label>
            </div>
            <a
              href=""
              className="text-primary duration-300 hover:text-primary-hv text-sm md:text-md"
            >
              Forgot password?
            </a>
          </div>
          <button className="linear py-2 text-white text-lg rounded-lg cursor-pointer">
            Sign In
          </button>
        </form>
        <div className="px-2">
          <p className="text-center bg-sec-text w-full h-[1px] relative ">
            <span className="text-sec-text bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1">
              Or continue with
            </span>
          </p>
        </div>
        <div className="flex flex-row justify-around items-center">
          <div className="border-2 border-light-border flex flex-row justify-center items-center px-3 py-3 md:px-5  rounded-2xl gap-3 cursor-pointer">
            <img src={Gmail} alt="" className="w-5 h-5" />
            <p>Google</p>
          </div>
          <div className="border-2 border-light-border flex flex-row justify-center items-center px-3 py-3 md:px-5 rounded-2xl gap-3 cursor-pointer">
            <img src={Facebook} alt="" className="w-5 h-5" />
            <p>Facebook</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center text-sm md:text-md">
          <p className="text-sec-text">Don't have an account?</p>
          <a href="" className="text-primary cursor-pointer">
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
