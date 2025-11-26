import { useAppDispatch, useAuthSelector } from "../../app/hooks";
import { useState } from "react";
import { registerThunk } from "../../features/auth/authThunk";
import { useNavigate } from "react-router-dom";

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
import { showToast } from "../../features/toast/toastSlice";

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
    terms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const temp: Record<string, string> = {};

    if (!form.name.trim()) temp.name = "Name is required";
    if (!form.email.trim()) temp.email = "Email is required";
    if (!form.username.trim()) temp.username = "Username is required";
    if (!form.password.trim()) temp.password = "Password is required";
    if (form.password !== form.confirmPassword)
      temp.confirmPassword = "Passwords do not match";
    if (!form.terms) temp.acceptedTerms = "You must accept Terms & Policy";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const res = await dispatch(
      registerThunk({
        username: form.username,
        password: form.password,
        name: form.name,
        email: form.email,
      })
    );
    if (registerThunk.fulfilled.match(res)) {
      console.log("REGISTER SUCCESS __");
      navigate("/home");
      dispatch(
        showToast({
          message: "Account created successfully 🎊",
          type: "success",
        })
      );
    } else {
      showToast({
        message: "Failed Creating An Account! ",
        type: "error",
      });
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
      error: errors.email,
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
      error: errors.username,
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
      error: errors.password,
    },
    {
      id: "confrim-password",
      name: "confirmPassword",
      labelText: "Confirm",
      placeholder: "Confirm your Password",
      type: "password",
      icon: ConfirmPasswordIcon,
      value: form.confirmPassword,
      onChange: handleChange,
      error: errors.confirmPassword,
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
    id: "terms",
    name: "terms",
    type: "checkbox",
    labelText: termsAndPolicy,
    checked: form.terms,
    onChange: handleChange,
    error: errors.acceptedTerms,
  };
  const button: ButtonProps = {
    content: loading ? "Signing up..." : "Sign Up",
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
