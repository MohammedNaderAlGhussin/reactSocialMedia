import logo from "./../../../assets/icons/logo.png";

const Logo = () => {
  return (
    <div className="linear w-fit text-white px-4 py-3 rounded-xl shadow-primary-hv shadow-md">
      <img src={logo} alt="logo" className="w-8 h-8" />
    </div>
  );
};

export default Logo;
