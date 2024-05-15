import React from "react";
import SendGmail from "../../assets/SendGmail";
import { useContext } from "react";
import Socials from "./assets/Socials";
import { DataContext } from "../../context/DataContext";

const Footer = () => {
  const { user } = useContext(DataContext);
  const date = new Date();

  const handleClick = (user) => {
    SendGmail(user);
  };

  return (
    <footer className="h-auto relative min-h-[400px] w-full  flex flex-col p-[5vw] py-20 font-primary bg-stone-950 gap-10">
      <section className="relative flex-col flex w-full h-full flex-wrap text-gray-300 justify-center items-center gap-7">
        <h3 className="font-medium text-md md:text-lg lg:leading-10 md:leading-9 leading-8">
          Thinking of a project?
        </h3>
        <h1 className="text-3xl uppercase">Reach out & share your vision</h1>
        <button
          onClick={handleClick}
          className="uppercase border rounded-full w-32 h-32 font-medium p-5"
        >
          send us <br /> note
        </button>
      </section>

      <section className="p-[2vw] flex justify-between relative primary-font  text-gray-300 w-full">
        <div className="">
          <Socials />
        </div>
        <div>
          <h2 className="text-right capitalize">
            all rights reserved <br />
            <span className="lowercase">
              roniecode&copy;{date.getUTCFullYear()}
            </span>
          </h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
