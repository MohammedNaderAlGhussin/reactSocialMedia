import Facebook from "./../assets/icons/facebook.png";
import Gmail from "./../assets/icons/gmail.png";
import Logo from "./../assets/icons/logo.png";

const Register = () => {
  return (
    <main className="linear h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center  container gap-5 mx-auto rounded-xl p-5 md:p-10 w-4/5 sm:w-2/3 md:w-3/5 lg:w-4/10 xl:w-3/9  overflow-y-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="linear w-fit text-white px-5 py-3 mb-4 rounded-xl shadow-xl">
            <img src={Logo} alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-main-text text-2xl font-bold mb-2">
            Create an account
          </h1>
          <div className="flex items-center gap-1">
            <p className="text-sec-text text-center text-md md:text-lg">
              Already have an account?
            </p>
            <a href="" className="text-primary">
              Log in
            </a>
          </div>
        </div>
        <form className=" flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="pass" className="text-main-text flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z"
                  fill="#6b7280"
                />
              </svg>
              Full Name
            </label>

            <input
              type="text"
              id="pass"
              className="input"
              placeholder="Enter your full name"
            />
          </div>
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
                fill="#6b7280"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
              >
                <path d="M12,1a11,11,0,0,0,0,22,1,1,0,0,0,0-2,9,9,0,1,1,9-9v2.857a1.857,1.857,0,0,1-3.714,0V7.714a1,1,0,1,0-2,0v.179A5.234,5.234,0,0,0,12,6.714a5.286,5.286,0,1,0,3.465,9.245A3.847,3.847,0,0,0,23,14.857V12A11.013,11.013,0,0,0,12,1Zm0,14.286A3.286,3.286,0,1,1,15.286,12,3.29,3.29,0,0,1,12,15.286Z" />
              </svg>
              Username
            </label>

            <input
              type="text"
              id="pass"
              className="input"
              placeholder="Choose a username"
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
          <div className="flex flex-col gap-1">
            <label htmlFor="pass" className="text-main-text flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-1"
              >
                <path
                  d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z"
                  stroke="#6b7280"
                  stroke-width="1.5"
                />
                <path
                  d="M9.5 12.4L10.9286 14L14.5 10"
                  stroke="#6b7280"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Confirm Password
            </label>

            <input
              type="text"
              id="pass"
              className="input"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex flex-row items-center gap-1">
            <input type="checkbox" id="remeber-me" className="" />
            <label
              htmlFor="remeber-me"
              className="text-sec-text text-sm md:text-md "
            >
              I agree to the{" "}
              <span className="text-primary cursor-pointer">
                Terms and Services{" "}
              </span>{" "}
              and{" "}
              <span className="text-primary cursor-pointer">
                Privacy Policy
              </span>
            </label>
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
        <div className="flex flex-row justify-between items-center gap-2">
          <div className="border-2 border-light-border flex flex-row justify-center items-center  py-3  w-1/2 rounded-2xl gap-3 cursor-pointer">
            <img src={Gmail} alt="" className="w-5 h-5" />
            <p>Google</p>
          </div>
          <div className="border-2 border-light-border flex flex-row justify-center items-center  py-3  w-1/2 rounded-2xl gap-3 cursor-pointer">
            <img src={Facebook} alt="" className="w-5 h-5" />
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
