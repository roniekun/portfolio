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
    <div className='fixed md:right-5  bottom-[10%] px-7 py-5 w-fit z-40 shadow-md bg-gray-200 gap-1 flex flex-col justify-center items-center rounded-2xl mx-5 '>
    <span className='leading-snug text-md text-stone-700'>We use cookies to improve your browsing experience.</span>
    <button onClick={handleClick} className='p-2 px-5 text-sm bg-gray-950 text-gray-100 border w-fit rounded-2xl'>Accept</button>
    </div>
   } 
    </>
  )
}

export default Cookie