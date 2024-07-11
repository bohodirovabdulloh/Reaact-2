import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HomeProfile from '../components/HomeProfile'
import ThemeControler from '../components/ThemeControler'

const Home = () => {

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', 'dark')
  }, [])


  return (
    <>
      <header className='container mx-auto max-w-[80%] py-10 h-screen max-h-screen flex gap-5 '>
        <Navbar />
        <HomeProfile />
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </>
  )
}

export default Home