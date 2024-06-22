import { useParams, Link, useLocation } from "react-router-dom";
import { useContext, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import Socials from "./assets/Socials";
import Clock from "./assets/Clock";
import Theme from "./assets/Theme";

const Navbar = () => {
  const { setToggleMenu, isToggleMenu } = useContext(DataContext);
  const location = useLocation();
  const menu = useRef(null);
  const linkItems = useRef(null);

  const links = [
    { name: "about", to: "/about" },
    { name: "services", to: "/services" },
    { name: "works", to: "/works" },
    { name: "contact", to: "/contact" },
  ];

  const handleClick = () => {
    setToggleMenu(!isToggleMenu);
  };

  return (
    <nav
      ref={menu}
      className="relative w-full flex h-full  brightness-90 flex-col gap-16 items-start justify-start overflow-hidden z-50 py-[10vw]"
    >
      <section
        ref={linkItems}
        className="flex flex-col w-fit justify-start relative mt-5 items-start text-xl h-auto gap-5 mx-[10vw] opacity-1"
      >
        {links.map((link, idx) => (
          <div
            key={idx}
            className="flex w-fit justify-start relative items-start group  overflow-hidden"
          >
            <Link
              to={link.to}
              onClick={handleClick}
              className={`z-10 relative bg-transparent cursor-pointer text-[4vh] font-medium uppercase font-primary 
                     flex text-balance h-[4vh] w-fit select-none ${
                       link.to === location.pathname && "text-lime-400"
                     } `}
            >
              {link.name}
              {/* <span className={`absolute -bottom-1 h-[3px] w-full  
                                    ${link.to===location.pathname ? 'bg-orange-500' : 'bg-gray-100'} rounded-lg scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left`}></span> */}
            </Link>
          </div>
        ))}
      </section>
      <section className=" relative flex flex-col gap-5 w-full">
        <Socials />
        <div className="relative flex w-full justify-between px-[5vw] my-10">
          <Theme />
          <Clock />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
