import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import Invalid from "./assets/Invalid";
import Footer from "../../component/footer";
import PageTransition from "../../assets/anim/PageTransition";

const Gallery = () => {
  const { user, setTitle } = useContext(DataContext);
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
      <main className="min-h-screen bg-black text-white">
        <div className="h-screen flex place-items-center justify-center ">
          {isValid ? (
            <div className="h-full w-full flex flex-col justify-center items-center z-10 bg-black">
              <h1 className="text-2xl lg:text-3xl "> Featured Posts {id}</h1>
              <p>Display grid of images*</p>
            </div>
          ) : (
            <Invalid />
          )}
        </div>
        <section>
          <Footer />
        </section>
      </main>
    </PageTransition>
  );
};

export default Gallery;
