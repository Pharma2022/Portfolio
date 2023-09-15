import React from 'react'
import ViewCodeBtn from './Buttons/ViewCodeBtn'

const WorkLink = ({name,github,netlify,img}) => {

                return (
    
                    <div style={{backgroundImage:`url(${img})`}}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                    <div className='opacity-0 group-hover:opacity-80'>
                                        <span className='text-2xl font-bold text-center text-white tracking-wider'>
                                            {name}
                                        </span>
                                        <div className='pt-8 text-center'>
                                                <ViewCodeBtn href={netlify}>
                                                        Demo
                                                </ViewCodeBtn>
                                                <ViewCodeBtn href={github}>
                                                        Code
                                                </ViewCodeBtn>
                                            
                                        </div>
                                    </div>
                                </div>
  )
}

export default WorkLink