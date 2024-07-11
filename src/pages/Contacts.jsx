import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CardTemplete from '../components/CardTemplete'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contacts = () => {
    const [data, setdata] = useState([
        {
            link:  'https://www.instagram.com/bakhadiroff.a/', linkName: "instagram", icon: <FaSquareInstagram className='text-pink shadow-info shadow-md' />
        },
        {
            link:  'https://t.me/Baxadirovv_07', linkName: "telegram", icon: <FaTelegram />
        },
        {
            link:  'https://bohodirovabdulloh560@gmail.com/', linkName: "gmail", icon: <CgMail />
        },
        {
            link:  '+998993710001', linkName: "phone", icon: <FaPhoneSquare />
        },
    ])
  return (
    <header className='container mx-auto max-w-[80%] py-10 h-screen max-h-screen flex gap-5 '>
    <Navbar />
    <div className='flex justify-between items-center w-full border-2 border-sky-400 p-10 mt-5 rounded-3xl shadow-inner shadow-sky-400 flex-wrap gap-5'>
    {data.map((item, key) => (
          <Link to={item.link} key={key} className='text-3xl rounded-lg flex items-center justify-center gap-2'>
            {item.icon}
            <p>{item.icon}</p>
          </Link>
        ))}
    </div>
  </header>
  )
}

export default Contacts