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
      className={`linear-primary py-2 text-white text-lg rounded-lg cursor-pointer shadow-primary-hv shadow-md mb-2 text-center disabled:opacity-50`}
    >
      {content}
    </button>
  );
};

export default Button;
