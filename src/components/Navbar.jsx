import React, { useState } from 'react'
import Logo from '../assets/logo1.png'

import {FaBars,FaTimes,FaLinkedin,FaGithub, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Navbar = () => {


    const [nav,setNav]=useState(false)

    const handleClick=()=>setNav(prev=>!prev)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: "50px"}} />
        </div>
        
        {/* Menu */}
 
            <ul className='hidden md:flex'>
                <li className='py-6'>
                    <Link  to="/" >
                        Home
                    </Link>
                </li>
                <li className='py-6'>
                    <Link  to="/about" >
                        About
                    </Link>
                </li>
                <li className='py-6'>
                    <Link  to="/skills" >
                        Skills
                    </Link>
                </li>
                <li className='py-6'>
                    <Link  to="/work" >
                        Work
                    </Link>
                </li>
                <li className='py-6'>
                    <Link  to="/contact" >
                        Contact
                    </Link>
                </li>
               
            </ul>
   

        {/* Hamburger */}
     
        <div onClick={handleClick} className='md:hidden z-10'>{nav?<FaTimes/> :<FaBars/>}</div>
     
        {/* mobile menu */}
        <ul className={nav? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' :'hidden'}>
                <li  className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="/" >
                        Home
                    </Link>
                </li>
                <li  className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="/about" >
                        About
                    </Link>
                </li>
                <li  className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="/skills" >
                        Skills
                    </Link>
                </li>
                <li  className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="/work" >
                        Work
                    </Link>
                </li>
                <li  className='py-6 text-4xl'>
                    <Link onClick={handleClick}  to="/contact" >
                        Contact
                    </Link>
                </li>
        </ul>


        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
            <ul>
                <li className={ `${styles.socialIcon} bg-blue-600`}>
                    <a className={styles.socialLink} href="/">
                    Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className={`${styles.socialIcon} bg-[#333333]`}>
                    <a className={styles.socialLink} href="/">
                    Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className={`${styles.socialIcon} bg-[#6fc2b0]`}>
                    <a className={styles.socialLink} href="/">
                    Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className={`${styles.socialIcon} bg-[#565f69]`}>
                    <a className={styles.socialLink} href="/">
                    CV <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
               
            </ul>

        </div>

     </div>


  )
}

export default Navbar

const styles= {
    socialIcon:`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300`,
    socialLink:`flex justify-between items-center w-full text-gray-300`
}