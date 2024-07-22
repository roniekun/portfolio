import Footer from "../../_component/footer";
import { useEffect, useContext } from "react";
import PageTransition from "../../assets/anim/PageTransition";
import { DataContext } from "../../context/DataContext";
import { useLocation } from "react-router-dom";
import MarqueeSlider from "../../assets/components/MarqueeSlider";

const AboutUser = () => {
  const { setTitle, user, title } = useContext(DataContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top });
    location.title = "About";
    setTitle(`Author - ${user.title} `);
  }, [location.pathname]);

  return (
    <PageTransition>
      <main className="flex flex-col ">
        <section className="relative z-10 bg-red-500">
          <div className="flex relative flex-col justify-center item-center h-[800px] bg-black">
            <h1 className="text-center text-2xl mb-10">About</h1>
            <MarqueeSlider />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </PageTransition>
  );
};

export default AboutUser;
