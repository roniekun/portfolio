import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const MarqueeSlider = () => {
  const { isScrolled } = useContext(DataContext);

  return (
    <Marquee
      className="w-full h-fit"
      autoFill
      direction={isScrolled ? "left" : "right"}
      speed={isScrolled ? 50 : 100}
    >
      <div className="uppercase text-3xl mx-5 text-lime-500">
        made by roniecode
      </div>
    </Marquee>
  );
};

export default MarqueeSlider;

// https://www.npmjs.com/package/react-fast-marquee
