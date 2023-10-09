import React from 'react'
import Image from 'next/image'

const ItemFetures = ({ className, icons, title, body, points }) => {
  return (
    <div className={className}>
      <div className='flex gap-x-2 items-center'>
        <Image src={icons} alt='icon features' className='w-8 h-8' />
        <h4 className='text-xl font-semibold'>{title}</h4>
      </div>
      <div className='mt-4'>
        <p>{body}</p>
      </div>
      <div className='ml-4 mt-4'>
        <ul>
          {points.map((point, index) => (
            <li key={index} className='list-disc'>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ItemFetures