import { forwardRef, useContext } from "react";
import Cards from "../assets/Cards";
import { ThemeContext } from "../../../context/ThemeContext";
const Works = forwardRef((props, ref) => {
  const {
    theme: { bg, textColorPrimary },
  } = useContext(ThemeContext);

  return (
    <section
      ref={ref}
      id={props.id}
      style={{ color: textColorPrimary, background: bg }}
      className={` w-full h-full flex flex-col justify-cente r items-center relative font-primary px-[5vw] lg:px-[10vw] py-[10vh]`}
    >
      <h1 className="text-xl mt-10 p-[2vw] font-secondary font-semibold capitalize">
        Projects
      </h1>
      <div className="flex my-5 relative w-full">
        <Cards />
      </div>
    </section>
  );
});

export default Works;
