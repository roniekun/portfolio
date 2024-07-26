import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { ThemeContext } from "../../context/ThemeContext";
import Invalid from "./assets/Invalid";
import Footer from "../../_component/footer";
import PageTransition from "../../assets/anim/PageTransition";
import TextSlider from "../../assets/anim/TextSlider";

const Gallery = () => {
  const { user, setTitle } = useContext(DataContext);
  const {
    theme: { textColorPrimary, bg },
  } = useContext(ThemeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // dynamic title
  useEffect(() => {
    location.title = "Gallery";
    setTitle(`${location.title} - ${user.title}`);
    window.scrollTo({ top });
  }, [location.pathname]);

  const isValid = Number(id) <= 4 || !id;

  return (
    <PageTransition>
      <main className="relative min-h-screen flex-col font-primary">
        <section
          style={{ backgroundColor: bg, color: textColorPrimary }}
          className="min-h-screen relative flex flex-col place-items-center justify-center overflow-hidden"
        >
          {isValid ? (
            <div className="relative h-full w-full flex flex-col justify-center items-center">
              <h1 className="text-2xl lg:text-3xl "> Featured Posts {id}</h1>
              <p>Display grid of images*</p>
            </div>
          ) : (
            <Invalid />
          )}
          <TextSlider
            title="nothing to display - nothing to display - nothing to display - nothing to display -  nothing to display - nothing to display - nothing to display - nothing to display -"
            position="relative"
            speed="0.05"
            size="50"
          />
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Gallery;
