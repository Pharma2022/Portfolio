import React from 'react'
import ViewCodeBtn from './Buttons/ViewCodeBtn'

const WorkLink = ({name,github,netlify,img}) => {

    const imageLink= `../../public/workImg/${img}`

  return (
    
    <div style={{backgroundImage:`url(${imageLink})`}}  
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
   
   {/* Hover Effects */}
    <div className='opacity-0 group-hover:opacity-80'>
        <span className='text-2xl font-bold text-center text-white tracking-wider'>
            {name}
        </span>
        <div className='pt-8 text-center'>
            <a target='_blank' href={netlify}>
                <ViewCodeBtn>
                Demo
                </ViewCodeBtn>
            </a>
            <a target='_blank' href={github}>
                <ViewCodeBtn>
                Code
                </ViewCodeBtn>
            </a>
        </div>
    </div>
</div>
  )
}

export default WorkLink