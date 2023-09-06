import React, { useState } from 'react'


import {FaBars,FaTimes,FaLinkedin,FaGithub, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'


const NavLink=({children,isMobile,to=`/`,onClick=()=>{}})=>{
    return (
        <li  className={`py-6  ${isMobile?"text-4xl":""}`}>
        <Link onClick={onClick}  to={to} >
            {children}
        </Link>
    </li>
    )

}

const SocialIcon=({children,bgColor,href='/'})=>{
    return (
        <li className={ `${styles.socialIcon} ${bgColor}`}>
             <a className={styles.socialLink} href={href}>
                {children}
             </a>
        </li>
    )

}


const Navbar = () => {


    const [nav,setNav]=useState(false)

    const handleClick=()=>setNav(prev=>!prev)

    const navArr=[{children:'Home',to:'/'},{children:'About',to:'/about'},{children:'Skills',to:'/skills'},{children:'Work',to:'/work'},{children:'Contact',to:'/contact'}]
  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300`}>
        <div>
            
            <h2 className={`text-pink-500 font-semibold italic`}>Shah Aowal</h2>
        </div>
        
        {/* Menu */}
 
            <ul className='hidden md:flex'>
                {navArr.map(({children,to})=><NavLink key={nanoid()} to={to}>{children}</NavLink>)}
               
            </ul>
   

        {/* Hamburger */}
     
        <div onClick={handleClick} className='md:hidden z-10'>{nav?<FaTimes/> :<FaBars/>}</div>
     
        {/* mobile menu */}
        <ul className={nav? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' :'hidden'}>
        {navArr.map(({children,to})=><NavLink key={nanoid()} to={to} isMobile={true} onClick={handleClick}>{children}</NavLink>)}
               
        </ul>


        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
            <ul>
                <SocialIcon bgColor={`bg-blue-600`}>
                    Linkedin <FaLinkedin size={30}/>
                </SocialIcon>
                <SocialIcon bgColor={`bg-[#333333]`}>
                    Github <FaGithub size={30}/>
                </SocialIcon>
               <SocialIcon bgColor={`bg-[#6fc2b0]`}>
                    Email <HiOutlineMail size={30}/>
               </SocialIcon>
                <SocialIcon>
                    CV <BsFillPersonLinesFill size={30}/>
                </SocialIcon> 
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


