import Logo from "../../common/Logo/Logo";
import ThemeToggle from "../../common/ThemeToggle/ThemeToggle ";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between px-5 bg-card-bg lg:px-10 xl:px-15 fixed w-full top-0 left-0 min-h-[75px] shadow-md z-10">
      <Logo />
      <Navbar />
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
