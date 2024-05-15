import React from "react";
import myImage from "./images/avatar.jpg";

const Avatar = () => {
  return (
    <div className="rounded-sm  h-[500px] md:w-[500px] w-[calc(100vw-2rem)] flex overflow-hidden">
      <img
        className="object-cover top-0 brightness-75 filter"
        src={myImage}
        alt="avatar"
        placeholder="blur"
      />
    </div>
  );
};

export default Avatar;
