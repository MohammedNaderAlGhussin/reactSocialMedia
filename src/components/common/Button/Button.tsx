import type { ButtonProps } from "./Button.types";

const Button = ({ content, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className="linear-primary py-2 text-white text-lg rounded-lg cursor-pointer shadow-primary-hv shadow-md mb-2"
    >
      {content}
    </button>
  );
};

export default Button;
