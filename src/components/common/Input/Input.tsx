import React from "react";
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
}: InputProps) => {
  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) return icon;
    const IconComponent = icon as React.ElementType;
    return <IconComponent />;
  };

  return (
    <>
      {type === "checkbox" ? (
        <>
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
            className="text-sec-text text-[12px] md:text-[13px]"
          >
            {labelText}
          </label>
        </>
      ) : (
        <>
          <label
            htmlFor={id}
            className="text-main-text flex items-center gap-1"
          >
            {renderIcon()}
            {labelText}
          </label>
          <input
            type={type}
            id={id}
            className="input"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </>
      )}
    </>
  );
};

export default Input;
