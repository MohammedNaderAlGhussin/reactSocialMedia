import React, { useState } from "react";
import type { InputProps } from "./Input.types";
import EyeIcon from "../../icons/EyeIcon";
import EyeSlachIcon from "../../icons/EyeSlachIcon";

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
              {showPassword ? <EyeIcon /> : <EyeSlachIcon />}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Input;
