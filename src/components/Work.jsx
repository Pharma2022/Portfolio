import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RestaurantImg from '../assets/restaurant.png'
import Basketball from '../assets/basketball-scorecard.png'
import PasswordGenerator from '../assets/password-generator.png'
import ViewCodeBtn from './Buttons/ViewCodeBtn'
import UnitConverter from '../assets/unitConverter.png'
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
                <div style={{backgroundImage:`url(${Basketball})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Basketball ScoreBoard
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href="https://shahs-basketball-score-board.netlify.app/">
                                <ViewCodeBtn>
                                Demo
                                </ViewCodeBtn>
                            </a>
                            <a target='_blank' href="https://github.com/Pharma2022/basketball-score-board">
                                <ViewCodeBtn>
                                Code
                                </ViewCodeBtn>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${PasswordGenerator})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Password Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href="https://shahs-password-generator.netlify.app/">
                                <ViewCodeBtn>Demo</ViewCodeBtn>
                            </a>
                            <a target='_blank' href="https://github.com/Pharma2022/password-generator/">
                                <ViewCodeBtn>Code</ViewCodeBtn>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${RestaurantImg})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Shah's Diner
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href="https://shahs-diner.netlify.app">
                                <ViewCodeBtn>Demo</ViewCodeBtn>
                            </a>
                            <a target='_blank' href="https://github.com/Pharma2022/restaurant-order-react">
                                <ViewCodeBtn>Code</ViewCodeBtn>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${UnitConverter})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="http://shahs-unit-converter.netlify.app/">
                                <ViewCodeBtn>Demo</ViewCodeBtn>
                            </a>
                            <a href="https://github.com/Pharma2022/unitConverter/">
                                <ViewCodeBtn>Code</ViewCodeBtn>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <ViewCodeBtn>Demo</ViewCodeBtn>
                            </a>
                            <a href="/">
                                <ViewCodeBtn>Code</ViewCodeBtn>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${WorkImg})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <ViewCodeBtn>Demo</ViewCodeBtn>
                            </a>
                            <a href="/">
                                <ViewCodeBtn>Code</ViewCodeBtn>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            
              
        </div>
    </div>
  )
}

export default Work