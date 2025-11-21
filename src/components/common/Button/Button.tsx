import { Link } from "react-router-dom";
import type { ButtonProps } from "./Button.types";

const Button = ({ content, type }: ButtonProps) => {
  return (
    <Link
      to={"/home"}
      className="linear-primary py-2 text-white text-lg rounded-lg cursor-pointer shadow-primary-hv shadow-md mb-2 text-center"
    >
      <button type={type} className="cursor-pointer">
        {content}
      </button>
    </Link>
  );
};

export default Button;
