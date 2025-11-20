import logo from "./../../../assets/icons/logo.png";

const Logo = () => {
  return (
    <div className="linear w-fit text-white px-5 py-3 mb-4 rounded-xl shadow-primary-hv shadow-md">
      <img src={logo} alt="" className="w-10 h-10" />
    </div>
  );
};

export default Logo;
