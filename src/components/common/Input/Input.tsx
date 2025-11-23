import React from "react";
import type { InputProps } from "./Input.types";

const Input = ({
  id,
  labelText,
  type,
  placeholder,
  name,
  icon,
}: InputProps) => {
  const renderIcon = () => {
    if (!icon) return null;

    // if icon is already a React element (e.g. <Icon /> passed), render it directly
    if (React.isValidElement(icon)) return icon;

    // otherwise treat icon as a component (ElementType) and create it
    const IconComponent = icon as React.ElementType;
    return <IconComponent />;
  };

  return (
    <>
      {type === "checkbox" ? (
        <>
          <input type={type} id={id} name={name} className="w-[15px] sm:w-5" />
          <label
            htmlFor={id}
            className="text-sec-text text-[12px] md:text-[13px]"
          >
            {labelText}
          </label>
        </>
      ) : (
        <>
          <label htmlFor={id} className="text-main-text flex items-center">
            {renderIcon()}
            {labelText}
          </label>
          <input
            type={type}
            id={id}
            className="input"
            name={name}
            placeholder={placeholder}
          />
        </>
      )}
    </>
  );
};

export default Input;
