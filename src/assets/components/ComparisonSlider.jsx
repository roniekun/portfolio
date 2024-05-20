import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Image1 from "./2.jpg";
import Image2 from "./3.jpg";

const ComparisonSlider = () => {
  return (
    <main className=" h-auto w-[800px] border rounded-sm">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={Image1} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={Image2} alt="Image two" />}
      />
    </main>
  );
};
export default ComparisonSlider;
