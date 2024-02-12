import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'
import PageTransition from '../../assets/anim/PageTransition'
import Header from '../../component/header'

const Notfound = () => {
  const { user, setTitle } = useContext(DataContext)
  const location = useLocation()

  useEffect(() => {
        location.title = "URL | Error 404"
        setTitle(`${location.title}`)
  }, [location.pathname])
  
  return (
    <PageTransition>
    <main className='relative h-full w-screen flex flex-col justify-center items-center bg-gray-100'>
    <div className='min-h-[800px] flex justify-center flex-col items-center text-yellow-500'>
        <h1 className='self-center text-4xl leading-loose'>404 Page not found</h1>
        <h1 className=' relative  flex justify-center items-center text-zinc-800 lg:text-xl font-bold text-center text-balance sm:text-lg'> 
            The page you're looking for can't be found. <br />
            Please check the URL.</h1>
    </div>
        <section className='w-full'>
          <Footer />
        </section>
    </main>
    </PageTransition>
  )
}

export default Notfound