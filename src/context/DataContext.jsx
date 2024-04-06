import React, { createContext, useState, useEffect } from "react";
const DataContext = createContext()

const DataProvider = ({ children  }) => {

    const defaultColor = 'black'
    const defaultBgColor = 'transparent'

    const [title, setTitle] = useState(document.title)
    const [isLoading, setLoading] = useState(false)
    const [color, setColor] = useState(defaultColor)
    const [bgColor, setBgColor] = useState(defaultBgColor)
    const [isToggleMenu, setToggleMenu] = useState (false)
    const [isScrolled, setScrolled] = useState (false)
    const [currentScroll, setCurrentScroll] = useState(0)
    const [isMobile, setMobile] = useState(false)
    const [isDesktop, setDesktop] = useState(false)
    const [ scrollRef, setScrollRef ] = useState()
    const [ yProgress, setYProgress ] = useState(0)

    const user = {
      title: 'Ronie Benitez',
      name: 'Ronie Benitez',
      email: 'roniebenitez01@gmail.com',
      subject: 'Project Request'
    }
    useEffect(() => {
      setTimeout(() => {
              setLoading(true)
      }, 100);
    }, [isLoading])

    //dynamic document title
        useEffect(() => {
            document.title = title
        }, [title])

      //scrolling listener
        useEffect(() => {
          const handleScroll = () => {
              setScrolled(window.scrollY > currentScroll)
              setCurrentScroll(window.scrollY)     
          }

          window.addEventListener('scroll', handleScroll)

          return () => {
           window.removeEventListener('scroll', handleScroll)
          }
        }, [window.scrollY])
        

      // responsive screen size
        useEffect(() => {
                  const handleResize = () => {
                    setMobile(window.innerWidth <= 640 && window.innerWidth < 1024 )
                    setDesktop(window.innerWidth >= 1024)
                    setToggleMenu(false)
                }

                handleResize();

                window.addEventListener('resize', handleResize);

          return () => {
                window.removeEventListener('resize', handleResize)
          }
        }, [])


        
  return (
    <DataContext.Provider 
      value={{
              user,
              scrollRef,setScrollRef,
              defaultColor, defaultBgColor,
              color, bgColor, setColor, setBgColor,
              title, setTitle,
              isLoading, setLoading, 
              isScrolled,
              isMobile, setMobile,
              isDesktop, setDesktop,
              setToggleMenu, isToggleMenu,
              yProgress, setYProgress
              }}> 
              
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

// export const useStoredContext = () => { return useContext(DataContext)}