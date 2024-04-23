import Cards from "../assets/Cards"
const Works = () => {
  return (
         <div 
             className='w-full h-full bg-stone-500  flex flex-col justify-center items-center'>
            <h1 className='text-3xl mt-20 p-[2vw]  primary-font font-semibold uppercase'>Works</h1>
            <div className='md:self-end  p-[5vw] flex'>
            <Cards/>
            </div>
            </div>
  )
}

export default Works