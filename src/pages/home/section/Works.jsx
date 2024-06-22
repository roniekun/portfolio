import Cards from "../assets/Cards";
const Works = () => {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center relative font-primary ">
      <h1 className="text-sm mt-10 p-[2vw] font-secondary font-semibold capitalize">
        Projects
      </h1>
      <div className="flex my-5 relative w-full">
        <Cards />
      </div>
    </main>
  );
};

export default Works;
