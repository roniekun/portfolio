import React from "react";

const Contact = () => {
  return (
    <main className="w-full flex justify-center sticky top-0 flex-col items-center ">
      <h1 className="font-semibold font-secondary text-sm capitalize mt-20">
        Contact
      </h1>

      <div className="relative rounded-2xl border mt-5 w-11/12  bg-opacity-25  mx-[5vw]">
        <form class="relative flex flex-col gap-y-1 p-[5vw] text-lg leading-loose outline-none">
          <label class="self-start" for="name">
            What's your name?
          </label>
          <input
            id="name"
            class="rounded-sm px-1 bg-transparent h-16 relative "
            placeholder="Name"
            required
            type="text"
          />
          <label class="self-start" for="email">
            What is your email?
          </label>
          <input
            id="email"
            class="rounded-sm px-1 bg-transparent h-16 "
            placeholder="Email"
            type="email"
          />
          <label class="self-start" for="message">
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            class="rounded-sm px-1 bg-transparent"
            placeholder="Message"
            required
          ></textarea>
          <button class="border px-3 w-fit py-2" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
