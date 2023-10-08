import React, { forwardRef } from 'react'
import clsx from 'clsx';
import Image from 'next/image';
import MobileIcon from '@/images/icons/mobile.png'
import { BsArrowRight } from "react-icons/bs";

const baseStyle = {
    solid:
      "justify-center py-12 px-10 text-sm font-semibold outline-2 outline-offset-2 h-full",
    outline:
      "justify-center py-12 px-5 border text-sm outline-2 outline-offset-2 h-full"
}

const variantStyles = {
  solid: {
    blue: "relative bg-blue-500 text-white",
    white:
      "bg-white text-gray-900 hover:bg-white/90",
    gray: "bg-[#00AD98] text-white hover:bg-gray-900",
  },
  outline: {
    white: "border-white text-white hover:bg-gray-950",
  },
};

const ItemProduct = forwardRef(function ItemProduct(
  { variant = "solid", color = "gray", className, ...props }, ref
) {
  className = clsx(
    baseStyle[variant],
    variantStyles[variant][color],
    className
  )

  return (
    <div ref={ref} className={`xl:flex lg:flex xl:items-center lg:items-center gap-x-6 ${className}`} {...props}>
      <Image src={MobileIcon} alt='icon mobile' className='h-[60px] w-[60px] mx-auto'  />
      <div className='xl:flex lg:flex text-center xl:text-left lg:text-left mt-3 xl:mt-0 lg:mt-0'>
        <div className='flex flex-col gap-y-2'>
          <h4 className='font-medium text-base'>Mobile Aps</h4>
          <p className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="flex items-end justify-center xl:justify-start lg:justify-start mt-3 xl:mt-0 lg:mt-0">
          <BsArrowRight />
        </div>
      </div>
    </div>
  )
})

export default ItemProduct