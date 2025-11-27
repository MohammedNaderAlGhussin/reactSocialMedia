import React, { useState } from "react";
import type { InputProps } from "./Input.types";

const Input = ({
  id,
  labelText,
  type,
  placeholder,
  name,
  icon,
  value,
  checked,
  onChange,
  error,
  isPassword,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const inputType =
    isPassword && !showPassword
      ? "password"
      : isPassword && showPassword
      ? "text"
      : type;

  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) return icon;
    const IconComponent = icon as React.ElementType;
    return <IconComponent />;
  };

  return (
    <>
      {type === "checkbox" ? (
        <div className="flex flex-col">
          <div className="flex gap-1 items-center ">
            <input
              type={type}
              id={id}
              name={name}
              checked={checked}
              onChange={onChange}
              className="w-[15px] sm:w-5"
            />
            <label
              htmlFor={id}
              className="text-sec-text text-[12px] md:text-[13px] block"
            >
              {labelText}
            </label>
          </div>
          {error && (
            <p className="text-red-500 text-[12px] mt-1 pl-5">{error}</p>
          )}
        </div>
      ) : (
        <div className="flex flex-col relative">
          <div className="flex gap-2 items-center">
            <label
              htmlFor={id}
              className="text-main-text flex items-center gap-1"
            >
              {renderIcon()}
              {labelText}
            </label>
            {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
          </div>

          <input
            type={inputType}
            id={id}
            className={`input pr-10 ${error ? "border-red-500" : ""}`} 
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />

          {/* Eye icon for password toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute  top-1/2 right-2  text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Input;
