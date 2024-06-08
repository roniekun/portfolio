import React from "react";
import Marquee from "react-fast-marquee";

const Contact = () => {
  return (
    <main className="w-full flex justify-center flex-col items-center">
      <h1 className="font-semibold font-secondary text-sm capitalize">
        Contact
      </h1>

      <div className="md:w-1/2 relative mt-5 w-11/12    mx-[5vw]  ">
        <div className="w-full my-5">
          <h1 className="text-xl text-lime-500">
            Let's collaborate to transform your digital presence and drive
            engagement. Contact me today to start bringing your vision to life!
          </h1>
        </div>
        <form className="relative flex flex-col  p-[5vw] text-base leading-loose rounded-2xl border bg-neutral-50 border-neutral-300 bg-opacity-20 backdrop-blur-xl border-opacity-10">
          <label className="self-start" htmlFor="name">
            What's your name?
          </label>
          <input
            id="name"
            className="rounded-sm px-1 bg-transparent h-16 relative focus:outline-none"
            placeholder="Name"
            required
            type="text"
          />
          <label className="self-start" htmlFor="email">
            What is your email?
          </label>
          <input
            id="email"
            className="rounded-sm px-1 bg-transparent h-16 focus:outline-none"
            placeholder="Email"
            type="email"
          />
          <label className="self-start" htmlFor="message">
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="rounded-sm px-1 bg-transparent focus:outline-none"
            placeholder="Message"
            required
          ></textarea>
          <button
            className="border px-3 w-fit py-2 rounded-full uppercase text-sm"
            type="submit"
          >
            Submit Form
          </button>
        </form>
      </div>
      <Marquee className="my-5 absolute -z-10" autoFill direction="left">
        <h1 className="text-[10rem] font-medium text-white mx-5">
          Get in touch - Contact
        </h1>
      </Marquee>
    </main>
  );
};

export default Contact;
