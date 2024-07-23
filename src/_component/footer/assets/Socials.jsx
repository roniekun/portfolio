import { linksData } from "../../../utils/data/linksData";

const Socials = () => {
  return (
    <main className="md:gap-x-5 gap-x-2 flex lg:flex-wrap md:flex-row flex-col  relative">
      {linksData.map((link, idx) => (
        <div className="flex  group relative" key={link.acn}>
          <a
            href={link.url}
            className={`relative   fill-neutral-100 hover:text-lime-400 hover:opacity-90 w-fit h-7 text-sm justify-center flex items-center transition  opacity-1 uppercase px-1  leading-normal font-medium font-primary`}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </div>
      ))}
    </main>
  );
};

export default Socials;
