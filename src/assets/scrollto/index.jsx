import React from "react";
import { LuArrowUpToLine } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Scrollbtn = ({ scrollProgress }) => {
  const [showbtn, setShowbtn] = useState(false);
  const navigate = useNavigate();
  const button = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowbtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      if (showbtn) {
        gsap.fromTo(
          button.current,
          {
            scale: 0,
            duration: 0.3,
            ease: "power1.in",
          },
          { scale: 1 }
        );
      } else {
        gsap.to(button.current, {
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [showbtn] }
  );

  const handleClick = () => {
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <button
        ref={button}
        id="btn"
        onClick={handleClick}
        className="cursor-pointer scale-0 bg-white fixed z-20 bottom-10 rounded-full flex text-neutral-900 justify-center md:h-14 md:w-14 h-12 w-12 items-center shadow-2xl right-[5vw] shadow-glow hover:shadow-glow-hover transition duration-300  flex-col m-5"
      >
        <LuArrowUpToLine className="w-7 h-7 brightness-200" />
        {/* <span className="text-xs">{scrollProgress}%</span> */}
      </button>
    </>
  );
};

export default Scrollbtn;
