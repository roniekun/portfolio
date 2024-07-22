import { linksData } from "../../../utils/data/linksData";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Socials = () => {
  const {
    theme: { textColorPrimary, bg },
    isLoadedTheme,
    loadedTheme: { loadedTextColor, loadedBg },
  } = useContext(ThemeContext);
  const linkRef = useRef(null);
  
  useLayoutEffect(() => {
    gsap.to(linkRef.current, {
      color: isLoadedTheme ? loadedTextColor : textColorPrimary,
      fill: isLoadedTheme ? loadedTextColor : textColorPrimary,
    });
  }, [isLoadedTheme, loadedBg, bg, loadedTextColor, textColorPrimary]);

  return (
    <main className="gap-x-5 gap-y-3 flex flex-row justify-around relative mx-[10vw] overflow-hidden">
      {linksData.map((link, index) => (
        <div className="flex justify-evenly group relative" key={link.acn}>
          <a
            ref={linkRef}
            href={link.url}
            style={{ color: textColorPrimary, fill: isLoadedTheme ? loadedTextColor : textColorPrimary }}
            className={`relative hover:opacity-90 w-8 h- justify-center flex items-center opacity-1 uppercasexl px-1 uppercase  tracking-widest font-semibold`}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        </div>
      ))}
    </main>
  );
};

export default Socials;
