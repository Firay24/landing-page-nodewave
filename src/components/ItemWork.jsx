import React from 'react'
import Image from 'next/image'

const ItemWork = ({ className, img, bgImg, title, body }) => {
  return (
    <div className={`${className} relative w-[873px] h-[380px]`}>
      <div className='w-full h-full'>
        <Image src={bgImg} alt='image content' className='object-cover w-full h-full rounded-xl' />
      </div>
      <div className='absolute inset-0 grid grid-cols-3 items-center mx-2'>
        <div className='grid col-span-2'>
          <Image src={img} alt='image content' className='w-full h-full rounded'/>
        </div>
        <div className='text-white text-center p-4'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <p className='mt-2 text-base'>{body}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemWork