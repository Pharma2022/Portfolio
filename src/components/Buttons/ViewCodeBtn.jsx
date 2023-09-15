import React from 'react'

const ViewCodeBtn = ({children,...rest}) => {
  return (
      <a target='_blank' {...rest}>
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>{children}</button>
      </a>
  )
}

export default ViewCodeBtn