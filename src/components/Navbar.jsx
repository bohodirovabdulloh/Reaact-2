import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Navbar = () => {

    let location = useLocation();

    console.log("location: ", location.pathname);


    const linkHandler = (path) => {
        return location.pathname === path ? "list-item text-primary" : "list-item";
    };



    return (
        <nav className='flex items-center justify-between py-10 flex-col h-full w-1/5 shadow-lg shadow-sky-400 rounded-2xl'>
            <Link to="/">
                <img src="./logo.png" alt="" className='size-40' />
            </Link>

            <ul className='flex flex-col gap-5' >
                <li className={linkHandler('/')}>
                    <Link to="/">Home</Link>
                </li>
                <li className={linkHandler('/about')}>
                    <Link to="/about">About</Link>
                </li>
                <li className={linkHandler('/projects')}>
                    <Link to="/myprojects">My projects</Link>
                </li>
                <li className={linkHandler('/contact')}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='flex mt-10 gap-5 '>
                <Link>
                    <FaInstagramSquare />
                </Link>

                <Link>
                    <FaTelegram />
                </Link>

            </div>
        </nav>
    )
}

export default Navbar