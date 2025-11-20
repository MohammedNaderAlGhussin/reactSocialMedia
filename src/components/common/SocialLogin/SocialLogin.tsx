import Facebook from "./../../../assets/icons/facebook.png";
import Gmail from "./../../../assets/icons/gmail.png";

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="px-2">
        <p className="text-center bg-sec-text w-full h-px relative ">
          <span className="text-sec-text bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1">
            Or continue with
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-around items-center gap-2">
        <div className="border-2 border-light-border flex flex-row justify-center items-center py-3 w-1/2  rounded-2xl gap-3 cursor-pointer">
          <img src={Gmail} alt="" className="w-5 h-5" />
          <p>Google</p>
        </div>
        <div className="border-2 border-light-border flex flex-row justify-center items-center  py-3 w-1/2 rounded-2xl gap-3 cursor-pointer">
          <img src={Facebook} alt="" className="w-5 h-5" />
          <p>Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
