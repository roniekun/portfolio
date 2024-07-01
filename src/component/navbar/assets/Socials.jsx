import { linksData } from "../../../utils/data/linksData";

import React from "react";

const Socials = () => {
  return (
    <main className="gap-x-5 gap-y-3 flex flex-row justify-around relative mx-[10vw] overflow-hidden">
      {linksData.map((link, index) => (
        <div className="flex justify-evenly group relative" key={link.acn}>
          <a
            href={link.url}
            className={`relative fill-neutral-100 hover:opacity-90 w-7 h-7 justify-center flex items-center transition  opacity-1 uppercasexl px-1 uppercase  tracking-widest font-semibold`}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.acn}
          </a>
        </div>
      ))}
    </main>
  );
};

export default Socials;
