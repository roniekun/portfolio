import React from "react";

const Contact = () => {
  return (
    <main className="w-full flex justify-center flex-col items-center">
      <h1 className="font-semibold font-secondary text-sm capitalize">
        Contact
      </h1>

      <div className="relative rounded-2xl border border-neutral-400 mt-5 w-11/12  bg-opacity-10  mx-[5vw]  bg-white  backdrop-blur-lg">
        <form className="relative flex flex-col gap-y-1 p-[5vw] text-lg leading-loose outline-none">
          <label className="self-start" htmlFor="name">
            What's your name?
          </label>
          <input
            id="name"
            className="rounded-sm px-1 bg-transparent h-16 relative "
            placeholder="Name"
            required
            type="text"
          />
          <label className="self-start" htmlFor="email">
            What is your email?
          </label>
          <input
            id="email"
            className="rounded-sm px-1 bg-transparent h-16 "
            placeholder="Email"
            type="email"
          />
          <label className="self-start" htmlFor="message">
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="rounded-sm px-1 bg-transparent"
            placeholder="Message"
            required
          ></textarea>
          <button className="border px-3 w-fit py-2" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
