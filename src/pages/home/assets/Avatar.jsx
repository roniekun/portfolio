import React from "react";
import { useLayoutEffect } from "react";
import myImage from "./images/avatar.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Avatar = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: ".trigger-avatar",
      start: "center bottom",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(".trigger-avatar", {
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {},
      onLeave: () => {},
      onEnterBack: () => {},
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="trigger-avatar rounded-sm flex h-auto  top-0 scale-110 lg:w-[800px]">
      <img
        className="object-cover h-full w-full  relative"
        src={myImage}
        alt="display picture"
        placeholder="blur"
      />
    </div>
  );
};

export default Avatar;
