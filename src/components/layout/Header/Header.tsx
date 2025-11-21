import Logo from "../../common/Logo/Logo";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between px-5 bg-white lg:px-10 xl:px-15 fixed w-full top-0 left-0 min-h-[75px] shadow-md z-10">
      <Logo />
      <BurgerMenu />
      <Navbar />
    </header>
  );
};

export default Header;
