import React from "react";
import myImage from "./images/avatar.jpg";

const Avatar = () => {
  return (
    <div className="rounded-md  h-[500px] md:w-[500px] w-[calc(100vw-2rem)] flex overflow-hidden">
      <img
        className="object-cover top-0"
        src={myImage}
        alt="avatar"
        placeholder="blur"
      />
    </div>
  );
};

export default Avatar;
