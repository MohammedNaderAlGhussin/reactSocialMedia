// Importing components
import Button from "../../components/common/Button/Button";
import Logo from "../../components/common/Logo/Logo";
import Input from "../../components/common/Input/Input";
import SocialLogin from "../../components/common/SocialLogin/SocialLogin";
import AuthToggleLink from "../../components/common/AuthToggleLink/AuthToggleLink";

// Importing Types
import type { ButtonProps } from "../../components/common/Button/Button.types";
import type { InputProps } from "../../components/common/Input/Input.types";
import type { AuthItem } from "../../components/common/AuthToggleLink/AuthToggleLink.types";

// Importing Icons
import PasswordIcon from "../../components/icons/PasswordIcon";
import UsernameIcon from "../../components/icons/UsernameIcon";

const Login = () => {
  const inputs: InputProps[] = [
    {
      id: "username",
      name: "username",
      labelText: "Username",
      placeholder: "Enter your Username",
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

  const authLink: AuthItem = {
    text: "Don't have an account?",
    linkLabel: "Sign up",
    linkHref: "/register",
  };

  const inputsList = inputs.map((input) => {
    return <Input key={input.id} {...input} />;
  });

  return (
    <main className="linear h-screen flex justify-center items-center">
      <div className="form-container h-[670px]">
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
              className="text-primary duration-300 hover:text-primary-hv text-sm md:text-md hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <Button {...button} />
        </form>
        <SocialLogin />
        <AuthToggleLink {...authLink} />
      </div>
    </main>
  );
};

export default Login;
