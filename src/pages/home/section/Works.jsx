import Cards from "../assets/Cards"
const Works = () => {
  return (
         <div 
             className='w-full h-full bg-zinc-100 flex flex-col justify-center items-center'>
            <h1 className='text-2xl mt-20 p-[2vw] font-primary font-semibold uppercase'>Works</h1>
            <div className='flex my-5'>
            <Cards/>
            </div>
            </div>
  )
}

export default Works