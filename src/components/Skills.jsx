import React from 'react'
import javascript from '../assets/javascript.png'
import firebase from '../assets/firebase.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'
import pandas from '../assets/pandas.png'


const GridItem=({src,text,...props})=>(<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img src={src} alt={text} className='w-20 h-20 mx-auto' {...props}/>
<p  className='my-4' >{text}</p>
</div>
)

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'> These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <GridItem src={javascript} text={'Javascript'}/>
                        <GridItem src={react} text={'React'}/>
                        <GridItem src={firebase} text={'Firebase'}/>
                        <GridItem src={tailwind} text={'Tailwind'}/>
                        <GridItem src={python} text={'Python'}/>
                        <GridItem src={pandas} text={'Pandas'}/>
                      
        </div>
    </div>
  </div>)



}

export default Skills