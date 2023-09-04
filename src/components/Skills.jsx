import React from 'react'
import javascript from '../assets/javascript.png'
import firebase from '../assets/firebase.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'



const Skills = () => {
  return (
        <div  name='skills' className='h-full bg-[#0a192f]  text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                    <p className='py-4'>These are the frameworks/UI libraries  I have worked with</p>
                </div>
                <div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>

                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={javascript} alt='javascript' />
                            <p my-4>Javascript</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={react} alt='react' />
                            <p my-4>React</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={firebase} alt='firebase' /> 
                            <p my-4>Firebase</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={tailwind} alt='tailwind' />
                            <p my-4>Tailwind</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={python} alt='python' />
                            <p my-4>Python</p>
                        </div>

                        
                        
                          
                        
                        
                       
                    </div>
                </div>
            </div>
        </div>)



}

export default Skills