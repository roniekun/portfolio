import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useLayoutEffect, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import Socials from "./assets/Socials";
import Clock from "./assets/Clock";
import Theme from "./assets/Theme";
import { ThemeContext } from "../../context/ThemeContext";
import gsap from "gsap";

const Navbar = () => {
  const {
    isScrolled,
    theme: { bg, textColorPrimary },
    isLoadedTheme,
    loadedTheme: { loadedBg, loadedTextColor },
  } = useContext(ThemeContext);

  const { setToggleMenu, isToggleMenu } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const linkItems = useRef(null);

  const links = [
    { name: "about", to: "/about" },
    { name: "services", to: "/services" },
    { name: "works", to: "/works" },
    { name: "contact", to: "/contact" },
  ];

  const handleClick = (link) => {
    setToggleMenu(!isToggleMenu);
    setTimeout(() => {
      navigate(link.to);
    }, 1000);
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    if (isToggleMenu) {
      tl.to(".nav", {
        width: "100vw",
        ease: "power2.inOut",
        duration: 1,
        onComplete: () => {
          gsap.set(".nav", { alignItems: "end" });
        },
      });
    } else {
      tl.to(".nav", {
        duration: 1,
        ease: "power2.inOut",
        left: "100%",
        width: 0,
        onComplete: () => {
          gsap.set(".nav", { left: 0, alignItems: "start" });
        },
      });
    }
  }, [isToggleMenu]);

  useLayoutEffect(() => {
    gsap.to(navRef.current, {
      backgroundColor: isLoadedTheme ? loadedBg : bg,
      color: isLoadedTheme ? loadedTextColor : textColorPrimary,
    });
  }, [
    isLoadedTheme,
    loadedBg,
    bg,
    loadedTextColor,
    textColorPrimary,
  ]);

  return (
    <nav
      ref={navRef}
      style={{ color: textColorPrimary, background: bg }}
      className={` nav fixed w-0 flex h-screen  flex-col gap-16 items-start justify-start z-30  transition   py-[10vw] font-secondary overflow-hidden `}
    >
      <section
        ref={linkItems}
        className="flex flex-col w-screen justify-start relative mt-5 items-start text-xl h-auto gap-5 p-[5vw] opacity-1"
      >
        {links.map((link, idx) => (
          <div
            key={idx}
            className="flex w-fit justify-start relative items-start group "
          >
            <a
              onClick={() => handleClick(link)}
              className={`z-10 relative bg-transparent cursor-pointer text-[4vh] font-semibold uppercase flex text-balance h-[4vh] w-fit select-none ${
                link.to === location.pathname && "text-lime-400"
              } `}
            >
              {link.name}
              {/* <span className={`absolute -bottom-1 h-[3px] w-full  
                                    ${link.to===location.pathname ? 'bg-orange-500' : 'bg-gray-100'} rounded-lg scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left`}></span> */}
            </a>
          </div>
        ))}
      </section>
      <section className="relative flex flex-col gap-5 w-screen">
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
