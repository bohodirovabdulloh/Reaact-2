import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ThemeControler from '../components/ThemeControler'
import AboutProfile from '../components/AboutProfile'

const About = () => {

  const [SoftSkill, setSoftSkill] = useState(["Bilingaul or multilingual", "Databese management", "Adobe software suitle", "Data mixing", "Ux design", "Data"])
  const [HardSkills, setHardSkills] = useState(["Html", "CSS", "Responsive Web Site", "Adaptive Web Site", "Tailwind", "Ant-design", "MUI", "Chakra", "Bootstrap", "Reactstrap", "SCSS", "Vite", "Javascript", "Api", "React", "React Router", "Axios", "framer Motion", "Aos", "Styled-components", "Node.js"])
  const [Languages, setLanguages] = useState(["english", "Ozbek tili", "Rassiya"])




  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', 'dark')
  }, [])


  return (
    <>
      <header className='container mx-auto max-w-[80%] py-10 h-screen max-h-screen flex gap-5 '>
        <Navbar />


        <div className='w-4/5'>
          <ThemeControler />

          <div className='flex w-full border-2 border-sky-400 p-10 rounded-3xl shadow-inner shadow-sky-400 justify-between flex-col gap-5'>
            <h1 className='font-bold text-info'>About me</h1>
            <p className='text-info text-opacity-50 tracking-wide '>
              Hello My name is <span className='border-2  text-yellow-500 rounded-lg px-2 font-bold'>Abdullokh</span>, my surname is Boxodirov. I study in Mars IT School.
              I've been studying for 10 months now. 3 months in Starter and 6 months in Front-End and 2 months in React.
              I like to play video games Beamng.Drive, Pubg Mobile, Car Parking, I like to play Hacked games.
            </p>
          </div>
          <AboutProfile />

          <div className="flex gap-5">
            <div className='flex flex-wrap justify-between items-left w-full border-2 border-sky-400 p-10 mt-5 rounded-3xl shadow-inner shadow-sky-400 gap-5'>
              <h1>HardSkill</h1>
              <div className="flex flex-wrap gap-1">
                {
                  HardSkills.map(item => (
                    item.toLowerCase().includes('react') ? <div className='badge badge-warning'>{item}</div> : <div className='badge badge-primary'>{item}</div>
                  ))
                }
              </div>
            </div>

            <div className='flex justify-between items-left w-full border-2 border-sky-400 p-10 mt-5 rounded-3xl shadow-inner shadow-sky-400 flex-col gap-5'>
              <h1>SoftSkill</h1>
              <div className="">
                {
                  SoftSkill.map(item => (
                    item.toLowerCase().includes('data') ? <div className='badge badge-warning'>{item}</div> : <div className='badge badge-primary'>{item}</div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default About