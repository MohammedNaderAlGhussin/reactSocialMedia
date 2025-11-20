import type { AuthItem } from "./AuthToggleLink.types";

const AuthToggleLink = ({ text, linkHref, linkLabel }: AuthItem) => {
  return (
    <p className={`text-center text-sm text-sec-text `}>
      <span>
        {text}{" "}
        <a href={linkHref} className="text-primary hover:underline">
          {linkLabel}
        </a>
      </span>
    </p>
  );
};

export default AuthToggleLink;
