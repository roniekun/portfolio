import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Header from '../component/header'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import PageAnimator from '../assets/anim/PageTransition'

const Notfound = () => {
  const { user, setTitle } = useContext(DataContext)
  const location = useLocation()

  useEffect(() => {
        location.title = "URL | Error 404"
        setTitle(`${location.title}`)
  }, [location.pathname])
  
  return (
    <PageAnimator>
    <main className='relative h-full w-screen flex flex-col justify-center items-center bg-gray-100'>
    <Header />
      <Navbar />
        <h1 className=' relative min-h-[800px] flex justify-center items-center text-zinc-800 lg:text-2xl font-bold text-center text-balance sm:text-xl'> 
            The page you're looking for can't be found. <br />
            Please check the URL.</h1>
        <section className='w-full'>
          <Footer />
        </section>
    </main>
    </PageAnimator>
  )
}

export default Notfound