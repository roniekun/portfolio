import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cards } from "../utils/cards";
import { DataContext } from "../../../context/DataContext";

const Cards = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = (index) => {
    navigate(`/gallery/${index + 1}/`);
  };

  return (
    <main className="gap-10 place-items-center h-auto l group relative w-full  lg:grid lg:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
          className={`flex group my-5 flex-col w-full h-[500px]
          gap-5 relative border-2 contrast-100  cursor-pointer rounded-lg overflow-hidden`}
        >
          <img
            className="lg:w-11/12 w-full  relative border flex-1  self-center object-cover lg:mt-5"
            src=""
            alt="albumcover"
          />
          <div className="w-full px-[2vw] flex flex-col gap-2 self-center">
            <h1 className="text-md uppercase text-zinc-900  font-semibold">
              {card.title}
            </h1>
            <div className="flex gap-2 text-xs font-secondary self-start text-zinc-600 px-1">
              <p className="border">{card.tags.js}</p>
              <p className="border">{card.tags.css}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Cards;
