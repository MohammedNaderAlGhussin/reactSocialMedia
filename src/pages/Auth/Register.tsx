// Importign components
import Input from "../../components/common/Input/Input";
import Logo from "../../components/common/Logo/Logo";
import Button from "../../components/common/Button/Button";
import SocialLogin from "../../components/common/SocialLogin/SocialLogin";

// Importign types
import type { InputProps } from "../../components/common/Input/Input.types";
import type { ButtonProps } from "../../components/common/Button/Button.types";

// Importing Svg Icons
import NameIcon from "../../components/icons/NameIcon";
import EmailIcon from "../../components/icons/EmailIcon";
import UsernameIcon from "../../components/icons/UsernameIcon";
import PasswordIcon from "../../components/icons/PasswordIcon";
import ConfirmPasswordIcon from "../../components/icons/ConfirmPasswordIcon";
import type { AuthItem } from "../../components/common/AuthToggleLink/AuthToggleLink.types";
import AuthToggleLink from "../../components/common/AuthToggleLink/AuthToggleLink";

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
        </div>
        <form className="flex flex-col gap-4">
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
