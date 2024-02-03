import React from 'react'

const Card = () => {
  return (
    <div className='max-w-sm sm:w-full p-5 bg-white border border-gray-100 rounded-lg shadow hover:shadow-lg'>
        <div>
            <h1 className='font-semibold text-sm'>Total Items</h1>
        </div>
        <div>
            <h1 className='font-medium text-lg'>200</h1>
        </div>
    </div>
  )
}

export default Card