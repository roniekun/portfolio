import React , {useState, useRef, useEffect} from 'react'

const Cookie = () => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 2000);
      
    }, [])
    
    const handleClick=()=> {
            setShowModal(false)
    }
  return (
    <>
   {showModal &&
    <div className='fixed right-0 mx-5 bottom-[15%] px-7 py-5 md:w-fit z-40 shadow-md bg-opacity-[90%] bg-gray-500 backdrop-blur-lg  gap-1 flex  justify-center items-center rounded-3xl'>
    <span className='leading-snug md:text-md text-sm text-black'>We use cookies to improve your browsing experience.</span>
    <button onClick={handleClick} className='p-2 px-3  text-xs bg-gray-950 text-gray-100 border-none w-fit rounded-2xl'>Accept</button>
    </div>
   } 
    </>
  )
}

export default Cookie