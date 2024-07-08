import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Nav = () => {
  const button = useRef(null);
  const [height, setHeight] = useState();
  const linkArray = useRef([]);
  const location = useLocation();

  const links = [
    { icon: "a", name: "about", to: "/about" },
    { icon: "s", name: "services", to: "/services" },
    { icon: "w", name: "works", to: "/works" },
    { icon: "c", name: "contact", to: "/contact" },
  ];

  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link, { replace: true });
  };

  const handleMouseEnter = (idx) => {
    linkArray.current[idx].textContent = links[idx].name;
  };
  const handleMouseLeave = (idx) => {
    linkArray.current[idx].textContent = links[idx].icon;
  };

  return (
    <main className="capitalize flex flex-col items-center  fixed right-[5vw] backdrop-blur-lg  bottom-1/2 translate-y-1/2 z-30  rounded-md - justify-center gap-5">
      {links.map((link, idx) => (
        <div key={idx} className="flex">
          <a
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            ref={(el) => (linkArray.current[idx] = el)}
            onClick={() => handleClick(link.to)}
            key={link.name}
            className={`group w-24 font-primary cursor-pointer  transition duration-300  rounded-xl relative flex py-2 font-medium text-lg flex-col group justify-center  hover:text-lime-500
                items-center`}
          >
            {link.icon}
          </a>
        </div>
      ))}
    </main>
  );
};

export default Nav;
