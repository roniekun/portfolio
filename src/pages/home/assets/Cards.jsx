import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { cardData } from '../utils/cardData'

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
    <main  className='space-y-5  place-items-center h-auto l group relative w-full'>
    {cardData.map((card, index)=>( 
    <div key={index}
        onClick={()=>handleClick(index)}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
         className={`flex group flex-col w-[calc(100vw-50px)] h-[500px] lg:w-[calc(100vw-500px)] lg:h-[600px] md:h-[800px]  
         ${hoveredItem !== index ? 'group-hover:contrast-50': ''} gap-5 relative border contrast-100 border-black  
         cursor-pointer`}>
        <img className='lg:w-11/12 w-full h-5/6 relative border border-zinc-400 self-center object-cover mt-2' 
        src="" alt="thumbnail" />
        <div className='px-[2vw]'>
         <h1 className='text-lg capitalize text-zinc-900'>
          {card.title}
         </h1>
         <p  className='text-zinc-700'>{card.disc}</p>
        </div>
        </div>
    ))}
    </main>
  )
}

export default Cards