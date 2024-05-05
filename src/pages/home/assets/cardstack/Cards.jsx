import { projects } from './data';
import CardStack from './CardStack';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Cards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <main ref={container}
      className='mt-[50vh] mb-[100vh]'
    >
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <CardStack key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}