import { BsSearch, BsBag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavbarSmList = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="flex flex-row gap-6 text-gray-200 hover:text-white ">
        <BsSearch className="cursor-pointer" />
        <BsBag className="cursor-pointer" />
        <div onClick={toggleMenu}>
          {menu ? (
            <AiOutlineClose className="cursor-pointer" />
          ) : (
            <RxHamburgerMenu className="cursor-pointer" />
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarSmList;
