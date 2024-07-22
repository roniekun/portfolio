import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'
import BackIcon from './svg/corner-up-left.svg?react'
import { motion, AnimatePresence } from 'framer-motion'

const Home = () => {
    const navigate = useNavigate()
    const { setToggleMenu, isToggleMenu, isScrolled } = useContext(DataContext)

    const handleClick = () =>{
         navigate('/')
         setToggleMenu(false)
                    window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
         });
    }
  return (
    <>
    <AnimatePresence>
      {!isToggleMenu &&
          <motion.button
              initial={{opacity: 0}}
              transition={{duration: .3, delay: .7}}
              animate={{opacity: 1}}
              className={`mix-blend-difference secondary-font relative text-xs text-zinc-700 uppercase z-10
              gap-1 items-center justify-center rounded-lg border border-gray-900 p-1 px-2 group hover:bg-zinc-200 
              transition`}
              onClick={handleClick}>
            <BackIcon className='w-5'/>
            return home
            </motion.button>
    }
    </AnimatePresence>
    </>
  )
}

export default Home