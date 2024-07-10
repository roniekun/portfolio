import React, { forwardRef } from "react";
import SendGmail from "../../assets/SendGmail";
import { useContext } from "react";
import Socials from "./assets/Socials";
import { DataContext } from "../../context/DataContext";

const Footer = forwardRef((props, ref) => {
  const { user } = useContext(DataContext);
  const date = new Date();

  const handleClick = (user) => {
    SendGmail(user);
  };

  return (
    <main
      ref={ref}
      className="relative h-screen"
      // style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-100vh)]">
          <footer className="relative  min-h-[800px] w-full  h-auto flex pt-[100px] p-[5vw] flex-col lg:p-[10vw] md:py-20 font-primary bg-stone-950 gap-10">
            <section className="relative flex-col flex w-full h-full flex-wrap text-blue-50 justify-center items-center gap-7">
              <h3 className="font-medium text-base md:text-lg text-lime-400 imelg:leading-10 md:leading-9 leading-8 mt-[5vw]">
                Thinking of a project?
              </h3>
              <h1 className="text-3xl uppercase font-black  flex md:text-left text-center ">
                Reach out & share your vision
              </h1>
              <button
                onClick={() => handleClick(user)}
                className="transiton duration-300 hover:text-lime-400 hover:border-lime-400 uppercase border rounded-full w-32 h-32 font-medium p-5"
              >
                send us <br /> note
              </button>
            </section>

            <section className="p-[2vw] flex justify-between  relative primary-font  text-gray-300 w-full">
              <div>
                <Socials />
              </div>
              <div className="h-full relative self-end">
                <h2 className="text-right capitalize ">
                  all rights reserved <br />
                  <span className="lowercase">
                    roniecode&copy;{date.getUTCFullYear()}
                  </span>
                </h2>
              </div>
            </section>
          </footer>
        </div>
      </div>
    </main>
  );
});

export default Footer;
