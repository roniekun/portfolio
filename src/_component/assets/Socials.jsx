import React from 'react';
import {linksData } from '../utils/linksData';

const Socials = ({footerStyles, navbarStyles}) => {
  return (
  <main 
    style={{...footerStyles, navbarStyles}} 
    className="gap-5 flex flex-wrap  relative p-2 px-5 mx-[5vw]">
      {linksData.map((link, index) => (
        <div className="flex justify-evenly gap-5" 
        key={link.acn}>
          <a
            style={{...navbarStyles}}
            href={link.url}
            className={`w-4 h-4 hover:scale-105 hover:opacity-85 transition fill-gray-900 bg-blend-difference`}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        </div>
      ))}
    </main>
  );
};

export default Socials;
