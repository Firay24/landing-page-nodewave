import React from 'react'

const ItemTestimoni = ({ className, name, details, props }) => {
  return (
    <div className={`bg-white p-2 slide text-gray-800 rounded-md w-1/3 flex flex-col justify-between ${className}`} {...props}>
      <p>{details}</p>
      <p className='text-[#00AD98] font-medium mt-2'>{name}</p>
    </div>
  )
}

export default ItemTestimoni