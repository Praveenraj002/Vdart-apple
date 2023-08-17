import { BsSearch, BsBag } from "react-icons/bs";
import links from "../links";

const NavbarList = () => {
  return (
    <>
      <div className="text-gray-200 flex flex-row text-sm gap-8 font-light">
        {links.map((link) => {
          const { id, text } = link;
          return (
            <div key={id}>
              <a href="#" className="hover:text-white">
                {text}
              </a>
            </div>
          );
        })}
        <div className="hover:text-white cursor-pointer dropdown">
          <BsSearch />
        </div>
        <div className="hover:text-white cursor-pointer">
          <BsBag />
        </div>
      </div>
    </>
  );
};

export default NavbarList;
