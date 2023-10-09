import React from 'react'
import Image from 'next/image'
import Button from './Button'

const ItemPrice = ({ className, img, title, isDiscount, before, after, price, icons }) => {
  return (
    <div className={`grid grid-cols-2 text-gray-900 ${className}`}>
      <div className='bg-white rounded-l-md p-4 flex flex-col items-center justify-center text-center'>
        <h4 className='text-3xl font-semibold'>{title}</h4>
        <div className='mt-4'>
          <p className='text-xl font-semibold'>Start From</p>
          {
            isDiscount ? (
              <p className='relative text-gray-600'>
                {before}
                <span className="absolute top-3 left-0 w-full h-0.5 bg-red-600 transform translate-y-1/2"></span>
                <span className='absolute top-0 -right-3'>
                  <Image src={icons} alt='icon sale' />
                </span>
              </p>

            ) : null
          }
          {
            isDiscount ? (
              <p className='font-medium'>{after}</p>
            ) : (
              <p className='font-medium'>{price}</p>
            )
          }
        </div>
        <div className='mt-4'>
          <Button href="#" variant="solid" className="rounded-full px-5">
            Order now
          </Button>
        </div>
      </div>
      <div>
        <Image src={img} alt={title} />
      </div>
    </div>
  )
}

export default ItemPrice