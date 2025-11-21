import { Link } from "react-router-dom";
import type { AuthItem } from "./AuthToggleLink.types";

const AuthToggleLink = ({ text, linkHref, linkLabel }: AuthItem) => {
  return (
    <p className={`text-center text-sm md:text-[16px] text-sec-text `}>
      <span>
        {text}{" "}
        <Link to={linkHref} className="text-primary hover:underline">
          {linkLabel}
        </Link>
      </span>
    </p>
  );
};

export default AuthToggleLink;
