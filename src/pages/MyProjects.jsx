import React from 'react'
import CardTemplete from '../components/CardTemplete'
import Navbar from '../components/Navbar'
import HomeProfile from '../components/HomeProfile'
import { Link } from 'react-router-dom'
import cargo from '../../public/cargo.png'


const MyProjects = () => {
  console.log(cargo)
  const projects = [
    { id: 1, title: 'Coffee Roasters', link: 'https://sca.uz/?gad_source=1&gclid=CjwKCAjw4ri0BhAvEiwA8oo6Fzoi1OrJvzOCuz0cUGx8vSk8ytF74mFUcpV3jXRW9i0b5enMRmxWUhoCyN0QAvD_BwE', rasm: "https://www.shutterstock.com/shutterstock/photos/1498553582/display_1500/stock-vector-vintage-classic-hand-drawing-of-roasting-coffee-machine-badge-design-vector-for-cafes-1498553582.jpg" },
    { id: 2, title: 'Tour-Project', link: 'https://bohodirovabdulloh.github.io/tour-project/', rasm: "./tour.png" },
    { id: 3, title: 'instagram-fishing', link: 'https://bohodirovabdulloh.github.io/proinstagram/', rasm: "./instagram.png" },
    { id: 4, title: 'burger', link: 'https://bohodirovabdulloh.github.io/burger/', rasm: "./burger.png" },
    { id: 5, title: 'cargo', link: 'https://bohodirovabdulloh.github.io/pilwmart/', rasm: "./pilwmart.png" },
  ]

  return (
    <header className='container mx-auto max-w-[80%] py-10 h-screen max-h-screen flex gap-5 '>
      <Navbar />
      <div className='flex justify-between items-center w-full border-2 border-sky-400 p-10 mt-5 rounded-3xl shadow-inner shadow-sky-400 flex-wrap gap-5'>
        {projects.map(item => (
          <CardTemplete link={item.link} rasm={item.rasm} title={item.title} />
        ))}
      </div>
    </header>
  )
}

export default MyProjects 