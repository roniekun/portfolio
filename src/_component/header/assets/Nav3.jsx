import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { letters } from "../../../utils/letters";

const Nav = () => {
  const button = useRef(null);
  const [height, setHeight] = useState();
  const linkArray = useRef([]);
  const location = useLocation();

  const links = [
    { name: "about", to: "/about" },
    { name: "services", to: "/services" },
    { name: "works", to: "/works" },
    { name: "contact", to: "/contact" },
  ];
  useEffect(() => {
    setTimeout(() => {
      linkArray.current.forEach((linkRef, idx) => {
        let interval = null;
        let iteration = 0;
        const initialContent = linkRef.textContent;
        clearInterval(interval);
        interval = setInterval(() => {
          linkRef.textContent = linkRef.textContent
            .split("")
            .map((_, idx) => {
              if (idx < iteration) {
                return initialContent[idx];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= linkRef.textContent.length) {
            clearInterval(interval);
          }
          iteration += 1 / 3;
        }, 30);
      });
    }, 700);
  }, []);

  const handleMouseEvent = (i, event) => {
    linkArray.current.forEach((linkRef, idx) => {
      if (i === idx) {
        let interval = null;
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
          linkRef.textContent = linkRef.textContent
            .split("")
            .map((_, idx) => {
              if (idx < iteration) {
                return event.target.dataset.value[idx];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= linkRef.textContent.length) {
            clearInterval(interval);
          }
          iteration += 1;
        }, 100);
      }
    });
  };

  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link, { replace: true });
  };

  return (
    <main className="uppercase flex flex-col items-center  fixed right-[5vw] backdrop-blur-lg  bottom-1/2 translate-y-1/2 z-30  rounded-md - justify-center m-5 gap-5">
      {links.map((link, idx) => (
        <div key={idx} className="flex">
          <a
            onMouseEnter={(e) => handleMouseEvent(idx, e)}
            onMouseLeave={(e) => handleMouseEvent(idx, e)}
            ref={(el) => (linkArray.current[idx] = el)}
            data-value={link.name}
            onClick={() => handleClick(link.to)}
            key={link.name}
            className={`group w-24 font-primary cursor-pointer   rounded-xl relative flex py-2 font-medium text-base flex-col group justify-center  hover:text-lime-500
                items-center`}
          >
            {link.name}
          </a>
        </div>
      ))}
    </main>
  );
};

export default Nav;
