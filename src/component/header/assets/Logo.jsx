import { useContext, useLayoutEffect, useRef } from "react";
import { letters } from "../../../utils/letters";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import useWindowSize from "../../../hooks/useWIndowHooks/useWIndowSize";

const Logo = () => {
  const navigate = useNavigate();
  const logo = useRef(null);
  const { windowWidth } = useWindowSize();

  useLayoutEffect(() => {
    setTimeout(() => {
      let interval = null;
      let iteration = 0;
      const initialContent = logo.current.textContent;
      clearInterval(interval);
      interval = setInterval(() => {
        logo.current.textContent = logo.current.textContent
          .split("")
          .map((_, idx) => {
            if (idx < iteration) {
              return initialContent[idx];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= logo.current.textContent.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    }, 1000);
  }, [windowWidth]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <main
      onClick={handleClick}
      className="tracking-wide title-font font-primary 
     relative select-none cursor-pointer mx-[5vw] lg:mx-[2vw]"
    >
      <h1 ref={logo}>RONIECODE</h1>
    </main>
  );
};

export default Logo;
