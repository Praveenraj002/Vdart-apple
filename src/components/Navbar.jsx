import { BiLogoApple } from "react-icons/bi";
import NavbarList from "./NavbarList";
import NavbarSmList from "./NavbarSmList";

const NavbarSm = () => {
  return (
    <>
      <div className="navbar-bg p-2">
        <div className="container mx-auto px-2">
          <div className="flex flex-row justify-between items-center">
            <BiLogoApple className="text-3xl text-gray-200 hover:text-white cursor-pointer" />
            <NavbarSmList />
          </div>
        </div>
      </div>
    </>
  );
};
const NavbarLg = () => {
  return (
    <div className="navbar-bg p-2">
      <div className="container mx-auto px-2">
        <div className="flex flex-row justify-between items-center">
          <BiLogoApple className="text-3xl text-gray-200 hover:text-white cursor-pointer" />
          <NavbarList />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <nav
        className="top-0 z-50 fixed w-screen bg-white drop-shadow-xl"
        id="navbar"
      >
        <div className="lg:hidden ">
          <NavbarSm />
        </div>
        <div className="hidden lg:block ">
          <NavbarLg />
        </div>
      </nav>
      s
    </>
  );
};

export default Navbar;
