import type { ButtonProps } from "./Button.types";

const Button = ({
  content,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`linear-primary py-2 text-white text-lg rounded-lg shadow-md mb-2 text-center w-full ${
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {content}
    </button>
  );
};

export default Button;
