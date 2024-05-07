import Cards from "../assets/Cards"
const Works = () => {
  return (
         <main
             className='w-full h-full bg-zinc-100 flex flex-col justify-center items-center'>
            <h1 className='text-sm mt-10 p-[2vw] font-secondary font-semibold capitalize'>Featured Works</h1>
            <div className='flex my-5'>
            <Cards/>
            </div>
            </main>
  )
}

export default Works