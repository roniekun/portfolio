import React, { useRef, useEffect } from "react";
import Avatar from "../assets/Avatar";
import splitString from "../../../assets/anim/SplitStrings";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Profile = () => {
  const profile = useRef(null);
  const avatarChars = useRef([]);
  const text2 = splitString(
    "A front-end developer advancing to transform your visions into Digital Masterpiece"
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: ".trigger-profile",
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        avatarChars.current.forEach((el) => {
          const randomDelay = Math.random(0.3, 3);
          gsap.to(el, {
            opacity: 1,
            duration: 0.3,
            delay: randomDelay,
          });
        });
      },
      onLeaveBack: () => {
        avatarChars.current.forEach((el) => {
          gsap.to(el, {
            opacity: 0,
          });
        });
      },
      onLeave: () => {
        console.log("leave");
      },
      onEnterBack: () => {
        console.log("entered back");
      },
    });

    return () => {
      trigger.kill();
    };
  }, [avatarChars.current]);

  return (
    <main
      ref={profile}
      className="relative w-full flex justify-center gap-y-5 items-center flex-col"
    >
      <div className="flex justify-center items-center w-full relative">
        <Avatar />
      </div>
      <div className="flex gap-2 self-center transform justify-center items-center mb-2">
        <span className="w-2 h-2 mb-1 rounded-full bg-lime-500" />
        <h3 className="uppercase text-sm  text-blue-100 font-secondary">
          Available for Freelance
        </h3>
      </div>
      <div className="trigger-profile flex relative items-center w-fit px-[5vw]  lg:w-[50%]">
        <h3 className="md:text-2xl text-xl leading-8    relative font-medium mx-2  text-center w-full  font-primary">
          {text2.map((char, idx) => (
            <span
              className={`opacity-0 relative ${
                idx > text2.length - 21 && "text-lime-400"
              }`}
              key={idx}
              ref={(el) => (avatarChars.current[idx] = el)}
            >
              {char}
              {idx === text2.length - 21 && <br />}
            </span>
          ))}
        </h3>
      </div>
    </main>
  );
};

export default Profile;
