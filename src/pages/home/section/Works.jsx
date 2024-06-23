import { forwardRef } from "react";
import Cards from "../assets/Cards";
const Works = forwardRef((props,ref) => {
  return (
    <section
    ref={ref}
    id={props.id}
     className="w-full h-full flex flex-col justify-center items-center relative font-primary px-[5vw] lg:px-[10vw]">
      <h1 className="text-sm mt-10 p-[2vw] font-secondary font-semibold capitalize">
        Projects
      </h1>
      <div className="flex my-5 relative w-full">
        <Cards />
      </div>
    </section>
  );
});

export default Works;
