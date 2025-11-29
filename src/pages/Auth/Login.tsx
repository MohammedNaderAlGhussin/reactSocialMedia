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
import { useAppDispatch, useAuthSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginThunk } from "../../features/auth/authThunk";
import ErrorMsg from "../../components/common/Error/ErrorMsg";
import { showToast } from "../../features/toast/toastSlice";
import ThemeToggle from "../../components/common/ThemeToggle/ThemeToggle ";

const Login = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAuthSelector();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const temp: Record<string, string> = {};

    if (!formData.username.trim()) temp.username = "Username is required";
    if (!formData.password.trim()) temp.password = "Password is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const res = await dispatch(loginThunk(formData));

    console.log(res);
    console.log(res.payload);

    if (loginThunk.fulfilled.match(res)) {
      console.log("LOGIN SUCCESS __");
      navigate("/home");
      dispatch(showToast({ type: "success", message: "You're logged in 🎉" }));
    } else {
      dispatch(
        showToast({
          type: "error",
          message: "Login failed",
        })
      );
    }
  };

  const inputs: InputProps[] = [
    {
      id: "username",
      type: "text",
      name: "username",
      labelText: "Username",
      placeholder: "Enter your Username",
      icon: UsernameIcon,
      value: formData.username,
      onChange: handleChange,
      error: errors.username || null,
    },
    {
      id: "password",
      name: "password",
      labelText: "Password",
      placeholder: "Enter your Password",
      type: "password",
      icon: PasswordIcon,
      value: formData.password,
      onChange: handleChange,
      error: errors.password || null,
      isPassword: true,
    },
  ];
  const checkbox: InputProps = {
    id: "remember",
    name: "remember",
    labelText: "Remember me",
    type: "checkbox",
    checked: formData.remember,
    onChange: handleChange,
  };

  const button: ButtonProps = {
    content: loading ? "Signing in..." : "Sign In",
    type: "submit",
    disabled: loading,
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
    <main className="linear min-h-screen flex justify-center items-center">
      <div className="form-container h-[670px] relative">
        <div className=" absolute top-3 right-3 ">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h1 className="form-title">SocialPulse</h1>
          <p className="text-sec-text text-center text-md md:text-lg">
            Welcome back, please login to your account
          </p>
        </div>
        <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
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
          {error && <ErrorMsg message={error} />}

          <Button {...button} />
        </form>
        <SocialLogin />
        <AuthToggleLink {...authLink} />
      </div>
    </main>
  );
};

export default Login;
