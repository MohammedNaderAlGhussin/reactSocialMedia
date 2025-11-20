// Importign components
import Input from "./common/Input/Input";
import Logo from "./common/Logo/Logo";
import Button from "./common/Button/Button";
import SocialLogin from "./common/SocialLogin/SocialLogin";

// Importign types
import type { InputProps } from "./common/Input/Input.types";
import type { ButtonProps } from "./common/Button/Button.types";

// Importing Svg Icons
import NameIcon from "./icons/NameIcon";
import EmailIcon from "./icons/EmailIcon";
import UsernameIcon from "./icons/UsernameIcon";
import PasswordIcon from "./icons/PasswordIcon";
import ConfirmPasswordIcon from "./icons/ConfirmPasswordIcon";
import type { AuthItem } from "./common/AuthToggleLink/AuthToggleLink.types";
import AuthToggleLink from "./common/AuthToggleLink/AuthToggleLink";

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
      id: "confrim-password",
      name: "confrim-password",
      labelText: "Confirm Password",
      placeholder: "Confirm your Password",
      type: "password",
      icon: ConfirmPasswordIcon,
    },
  ];

  const termsAndPolicy = (
    <span>
      I agree to the{" "}
      <span className="text-primary cursor-pointer">Terms and Services </span>{" "}
      and <span className="text-primary cursor-pointer">Privacy Policy</span>
    </span>
  );
  const checkbox: InputProps = {
    id: "terms-policy",
    name: "terms-policy",
    type: "checkbox",
    labelText: termsAndPolicy,
  };
  const button: ButtonProps = {
    content: "Sign Up",
    type: "submit",
  };
  const authLink: AuthItem = {
    text: "Already have an account?",
    linkLabel: "Log in",
    linkHref: "/login",
  };

  // rendering inputs inside form
  const inputsList = inputs.map((input) => {
    return <Input key={input.id} {...input} />;
  });

  return (
    <main className="linear h-screen flex justify-center items-center">
      <div className="form-container">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h1 className="form-title">Create an account</h1>
          <AuthToggleLink {...authLink} />
          {/* <div className="flex items-center gap-1">
            <p className="text-sec-text text-center text-md md:text-lg">
              Already have an account?
            </p>
            <a href="" className="text-primary">
              Log in
            </a>
          </div> */}
        </div>
        <form className=" flex flex-col gap-4">
          <div className="flex flex-col gap-2">{inputsList}</div>
          <div className="flex flex-row items-center gap-1">
            <Input {...checkbox} />
          </div>
          <Button {...button} />
        </form>
        <div className="px-2">
          <SocialLogin />
        </div>
      </div>
    </main>
  );
};

export default Register;
