import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Nav = () => {
  const button = useRef(null);
  const [height, setHeight] = useState();
  const linkArray = useRef([]);
  const onMouseLeaveRef = useRef();
  const onMouseEnterRef = useRef();
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
    if (links[idx] && linkArray.current[idx]) {
      let text = links[idx].name;
      let firstChar = text.charAt(0);
      let charactersArray = text.slice(1).split("");
      linkArray.current[idx].textContent = firstChar;

      const typeWriterEffect = (i) => {
        if (i < charactersArray.length) {
          linkArray.current[idx].textContent += charactersArray[i];
          onMouseEnterRef.current = setTimeout(
            () => typeWriterEffect(i + 1),
            30
          );
        }
      };

      typeWriterEffect(0);
    }
  };

  const handleMouseLeave = (idx) => {
    if (linkArray.current[idx]) {
      let text = links[idx].name;
      let firstChar = text.charAt(0);
      let remainingText = text.slice(1);

      const reverseTypeWriterEffect = (i) => {
        if (i >= 0) {
          linkArray.current[idx].textContent =
            firstChar + remainingText.substring(0, i);
          onMouseLeaveRef.current = setTimeout(
            () => reverseTypeWriterEffect(i - 1),
            30
          ); // Adjust the interval as needed
        }
      };

      reverseTypeWriterEffect(remainingText.length - 1);
    }
  };
  //   useEffect(() => {
  //     return () => {
  //       if (onMouseEnterRef ) {
  //         clearTimeout(onMouseEnterRef);
  //       }
  //     };
  //   }, [onMouseEnterRef]);

  // useEffect(() => {
  //   return () => {
  //     if (onMouseLeaveRef) {
  //       clearTimeout(onMouseLeaveRef)
  //     }
  //   };
  // }, [onMouseLeaveRef]);

  return (
    <main className="capitalize flex flex-col items-center  fixed right-[5vw]  w-24  bottom-1/2 translate-y-1/2 z-30  rounded-md - justify-center gap-5">
      {links.map((link, idx) => (
        <div
          key={idx}
          className="flex min-w-14 h-14 justify-center items-center rounded-full bg-neutral-100 bg-opacity-20"
        >
          <a
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            ref={(el) => (linkArray.current[idx] = el)}
            onClick={() => handleClick(link.to)}
            key={link.name}
            className={`group px-2 font-primary cursor-pointer  transition duration-300  rounded-xl relative flex py-2 font-medium text-lg flex-col group justify-center  hover:text-lime-500
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
