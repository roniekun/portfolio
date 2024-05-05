import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles.module.css'
import { projects } from './data';

const CardStack = ({progress}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

 
  return (
    
    <div ref={container}
      className='mt-[50%] sticky top-0 flex items-center justify-center flex-col'>
       {projects.map( (project, i) => {
          const range=[i * .25, 1]
          const targetScale = 1 - ( (projects.length - i) * 0.05);
            const scale = useTransform(progress, range, [1, targetScale]);
   return (
      <motion.div 
        key={i}
        className='flex flex-col relative top-[25%] h-[500px] w-[1000px] p-[50px] rounded-xl origin-top transform '
        style={{backgroundColor: project.color, scale:scale , top:`calc(-5vh + ${i * 25}px)`}} >
        <h2 className='text-center text-xl m-0'>{project.title}</h2>
        <div >
          <div >
            <p className='text-lg'>{project.description}</p>
          </div>

          <div className='relative w-[40%] overflow-hidden' >
            <motion.div>
              <img className='object-cover'
                fill
                src={`/images/${project.src}`}
                alt="image" 
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
          )
              })
      }
    </div>
  )
}

export default CardStack