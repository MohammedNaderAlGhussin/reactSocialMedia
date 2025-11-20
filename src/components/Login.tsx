import Logo from "./../assets/icons/logo.png";
import Input from "./common/Input/Input";
import type { InputProps } from "./common/Input/Input.types";
import SocialLogin from "./common/SocialLogin/SocialLogin";
import EmailIcon from "./icons/EmailIcon";
import PasswordIcon from "./icons/PasswordIcon";
const Login = () => {
  const inputs: InputProps[] = [
    {
      id: "email",
      name: "email",
      labelText: "Email Address",
      placeholder: "hello@example.com",
      type: "text",
      icon: EmailIcon,
    },
    {
      id: "password",
      name: "password",
      labelText: "Password",
      placeholder: "Enter your Password",
      type: "password",
      icon: PasswordIcon,
    },
  ];
  const checkbox: InputProps = {
    id: "remember",
    name: "remember",
    labelText: "Remember me",
    type: "checkbox",
  };
  const inputsList = inputs.map((input) => {
    return (
      <div className="flex flex-col gap-2">
        <Input key={input.id} {...input} />
      </div>
    );
  });
  return (
    <main className="linear h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center container gap-5 mx-auto rounded-xl p-5 md:p-10 w-4/5 sm:w-2/3 md:w-3/5 lg:w-4/10 xl:w-3/9  h-[670px]">
        <div className="flex flex-col items-center justify-center">
          <div className="linear w-fit text-white px-5 py-3 mb-4 rounded-xl shadow-xl">
            <img src={Logo} alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-main-text text-2xl font-bold">SocailPluse</h1>
          <p className="text-sec-text text-center text-md md:text-lg">
            Welcome back, please login to your account
          </p>
        </div>
        <form className=" flex flex-col gap-4">
          {inputsList}
          <div className="flex justify-between items-center">
            <div>
              <Input {...checkbox} />
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
        <SocialLogin />
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
