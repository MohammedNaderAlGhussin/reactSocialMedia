import type { ButtonProps } from "./Button.types";

const Button = ({ content, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className="linear-primary py-2 text-white text-lg rounded-lg cursor-pointer"
    >
      {content}
    </button>
  );
};

export default Button;
