import Footer from "../../component/footer";
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
      <main className="">
        <div className="flex flex-col justify-center item-center min-h-[400px] bg-neutral-300">
          <h1 className="text-center text-2xl mb-10">About</h1>
          <MarqueeSlider />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default AboutUser;
