import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Bento = () => {
  const {
    theme: { bg, textColorPrimary },
  } = useContext(ThemeContext);

  return (
    <section
      style={{ color: textColorPrimary, background: bg }}
      className={`z-10 min-h-screen w-full px-[5vw] flex flex-col`}
    >
      <div className="relative h-full w-full bg-neutral-300 flex-1"></div>
    </section>
  );
};

export default Bento;
