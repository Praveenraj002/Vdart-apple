import { BsSearch, BsBag } from "react-icons/bs";

const NavbarList = () => {
  return (
    <>
      <div className="text-gray-200 flex flex-row text-sm gap-8 font-light">
        <div>
          <a href="" className="hover:text-white">
            Store
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            Mac
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            Ipad
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            Iphone
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            Watch
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            AirPods
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            TV & Home
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            Entertainment
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            Accessories
          </a>
        </div>
        <div>
          <a href="" className="hover:text-white">
            Support
          </a>
        </div>
        <div className="hover:text-white cursor-pointer">
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
