import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { cards } from '../utils/cards'

const Cards = () => {
  const navigate = useNavigate()
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick =(index)=>{
    navigate(`/gallery/${index+1}/`)
    setTimeout(() => {
           window.scrollTo({top: 0})
    });
  }

  return (
    <main  className='gap-10 place-items-center h-auto l group relative w-full lg:grid lg:grid-cols-2 font-secondary'>
    {cards.map((card, index)=>( 
    <div key={index}
        onClick={()=>handleClick(index)}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
         className={`flex group my-5 flex-col w-[calc(100vw-7vw)] h-[500px] lg:w-[700px] lg:h-[600px] md:h-[800px]  
          gap-5 relative border-2 contrast-100  cursor-pointer rounded-lg overflow-hidden`}>
        <img className='lg:w-11/12 w-full h-full relative border  self-center object-cover lg:mt-5' 
        src="" alt="albumcover" />
        <div className=' flex flex-col gap-2 self-center'>
         <h1 className='text-md uppercase text-zinc-900  font-semibold'>
          {card.title}
         </h1>
         <p  className='text-zinc-700'></p>
        </div>
        </div>
    ))}
    </main>
  )
}

export default Cards