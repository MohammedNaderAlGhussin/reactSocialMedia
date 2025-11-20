// Importing components
import Button from "./common/Button/Button";
import Logo from "./common/Logo/Logo";
import Input from "./common/Input/Input";
import SocialLogin from "./common/SocialLogin/SocialLogin";

// Importing Types
import type { ButtonProps } from "./common/Button/Button.types";
import type { InputProps } from "./common/Input/Input.types";

// Importing Icons
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

  const button: ButtonProps = {
    content: "Sign In",
    type: "submit",
  };
  const inputsList = inputs.map((input) => {
    return <Input key={input.id} {...input} />;
  });
  return (
    <main className="linear h-screen flex justify-center items-center">
      <div className="form-container">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h1 className="form-title">SocailPluse</h1>
          <p className="text-sec-text text-center text-md md:text-lg">
            Welcome back, please login to your account
          </p>
        </div>
        <form className=" flex flex-col gap-4">
          <div className="flex flex-col gap-2">{inputsList}</div>
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
          <Button {...button} />
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
