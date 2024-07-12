import { linksData } from "../../../utils/data/linksData";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

const Socials = () => {
  const {
    theme: { textColorPrimary },
  } = useContext(ThemeContext);
  return (
    <main className="gap-x-5 gap-y-3 flex flex-row justify-around relative mx-[10vw] overflow-hidden">
      {linksData.map((link, index) => (
        <div className="flex justify-evenly group relative" key={link.acn}>
          <a
            href={link.url}
            style={{ color: textColorPrimary, fill: textColorPrimary }}
            className={`relative hover:opacity-90 w-8 h-8 justify-center flex items-center opacity-1 uppercasexl px-1 uppercase  tracking-widest font-semibold`}
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
