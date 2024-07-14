import { forwardRef, useContext } from "react";
import Cards from "../assets/Cards";
import { ThemeContext } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";
const Works = forwardRef((props, ref) => {
  const {
    theme: { bg, textColorPrimary },
  } = useContext(ThemeContext);

  return (
    <section
      ref={ref}
      id={props.id}
      style={{ color: textColorPrimary, background: bg }}
      className={` w-full h-full flex flex-col justify-center items-center relative font-primary px-[5vw] lg:px-[10vw] py-[10vh]`}
    >
      <h1 className="text-xl uppercase font-semibold font-secondary">works</h1>
      <h2 className="text-lg mt-10 p-[2vw] font-secondary self-start font-semibold capitalize">
        Featured Projects
      </h2>
      <div className="flex my-5 relative w-full flex-col">
        <Cards />
        <Link
          to="/gallery"
          className="self-center font-medium border-b-2 border-neutral-800  px-1 text-base 
          leading-relaxed m-5"
        >
          Browse all works
        </Link>
      </div>
    </section>
  );
});

export default Works;
