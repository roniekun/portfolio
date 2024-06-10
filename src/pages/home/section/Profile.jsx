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
      },
      onEnterBack: () => {
      },
    });

    return () => {
      trigger.kill();
    };
  }, [avatarChars.current]);

  return (
    <main
      ref={profile}
      className="relative w-full overflow-hidden h-auto  flex-col"
    >
      <div className="relative flex flex-col  h-[500px] justify-end items-center">
        <Avatar />

        <div className="trigger-profile flex relative items-center w-fit px-[5vw] my-10  lg:w-[50%]">
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
      </div>
    </main>
  );
};

export default Profile;
