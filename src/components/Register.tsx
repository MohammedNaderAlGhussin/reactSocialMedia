import Facebook from "./../assets/icons/facebook.png";
import Gmail from "./../assets/icons/gmail.png";
import Logo from "./../assets/icons/logo.png";
import Input from "./common/Input/Input";
import type { InputProps } from "./common/Input/Input.types";

// Importing Svg Icons
import NameIcon from "./icons/NameIcon";
import EmailIcon from "./icons/EmailIcon";
import UsernameIcon from "./icons/UsernameIcon";
import PasswordIcon from "./icons/PasswordIcon";
import ConfirmPasswordIcon from "./icons/ConfirmPasswordIcon";

const Register = () => {
  const inputs: InputProps[] = [
    {
      id: "name",
      name: "name",
      labelText: "Full Name",
      placeholder: "Enter your full name",
      type: "text",
      icon: NameIcon,
    },
    {
      id: "email",
      name: "email",
      labelText: "Email Address",
      placeholder: "hello@example.com",
      type: "text",
      icon: EmailIcon,
    },
    {
      id: "user",
      name: "user",
      labelText: "Username",
      placeholder: "Choose a username",
      type: "text",
      icon: UsernameIcon,
    },
    {
      id: "password",
      name: "password",
      labelText: "Password",
      placeholder: "Enter your Password",
      type: "password",
      icon: PasswordIcon,
    },
    {
      id: "password",
      name: "password",
      labelText: "Confirm Password",
      placeholder: "Confirm your Password",
      type: "password",
      icon: ConfirmPasswordIcon,
    },
  ];

  // rendering inputs inside form
  const inputsList = inputs.map((input) => {
    return (
      <div className="flex flex-col gap-2">
        <Input key={input.id} {...input} />
      </div>
    );
  });

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
          {inputsList}
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
