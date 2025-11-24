import { useAppDispatch, useAuthSelector } from "../../app/hooks";
import { useState } from "react";
import { registerThunk } from "../../features/auth/authThunk";

// Importign components
import Input from "../../components/common/Input/Input";
import Logo from "../../components/common/Logo/Logo";
import Button from "../../components/common/Button/Button";
import SocialLogin from "../../components/common/SocialLogin/SocialLogin";
import ErrorMsg from "../../components/common/Error/ErrorMsg";
import AuthToggleLink from "../../components/common/AuthToggleLink/AuthToggleLink";

// Importign types
import type { InputProps } from "../../components/common/Input/Input.types";
import type { ButtonProps } from "../../components/common/Button/Button.types";
import type { AuthItem } from "../../components/common/AuthToggleLink/AuthToggleLink.types";

// Importing Svg Icons
import NameIcon from "../../components/icons/NameIcon";
import EmailIcon from "../../components/icons/EmailIcon";
import UsernameIcon from "../../components/icons/UsernameIcon";
import PasswordIcon from "../../components/icons/PasswordIcon";
import ConfirmPasswordIcon from "../../components/icons/ConfirmPasswordIcon";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAuthSelector();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return <ErrorMsg message="Passwords do not match" />;
    }

    const res = await dispatch(
      registerThunk({
        username: form.username,
        password: form.password,
        name: form.name,
        email: form.email,
      })
    );
    if (res.meta.requestStatus === "fulfilled") {
      console.log("REGISTER SUCCESS — redirect here");
      navigate("/home");
    }
  };
  const inputs: InputProps[] = [
    {
      id: "name",
      name: "name",
      labelText: "Full Name",
      placeholder: "Enter your full name",
      type: "text",
      icon: NameIcon,
      value: form.name,
      onChange: handleChange,
    },
    {
      id: "email",
      name: "email",
      labelText: "Email Address",
      placeholder: "hello@example.com",
      type: "text",
      icon: EmailIcon,
      value: form.email,
      onChange: handleChange,
    },
    {
      id: "username",
      name: "username",
      labelText: "Username",
      placeholder: "Choose a username",
      type: "text",
      icon: UsernameIcon,
      value: form.username,
      onChange: handleChange,
    },
    {
      id: "password",
      name: "password",
      labelText: "Password",
      placeholder: "Enter your Password",
      type: "password",
      icon: PasswordIcon,
      value: form.password,
      onChange: handleChange,
    },
    {
      id: "confrim-password",
      name: "confirmPassword",
      labelText: "Confirm Password",
      placeholder: "Confirm your Password",
      type: "password",
      icon: ConfirmPasswordIcon,
      value: form.confirmPassword,
      onChange: handleChange,
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
    disabled: loading,
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">{inputsList}</div>
          <div className="flex flex-row items-center gap-1">
            <Input {...checkbox} />
          </div>
          {error && <ErrorMsg message={error} />}
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
