import React from 'react'

import { portfolioArr } from '../data'
import WorkLink from './WorkLink'
import { nanoid } from 'nanoid'
const Work = () => {
  return (
    <div name='work' className='w-full h-full md:h-screen text-gray-300 bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            <div className='py-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                {/* Grid Item */}
                {portfolioArr.map(({name,github,netlify,img})=>(<WorkLink key={nanoid()} name={name} github={github} netlify={netlify} img={img}/>))}
                
            </div>
            
              
        </div>
    </div>
  )
}

export default Work