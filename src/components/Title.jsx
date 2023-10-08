/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import HeadIcon from '@/images/icons/mdi_head-idea.png'
import CodeIcon from '@/images/icons/ph_code-bold.png'

const Title = ({ title, className, isHero = false, ...props }) => {
  return (
    <h2
      className={clsx("tracking-tight text-white leading-[60px]", className)}
      {...props}
    >
      {
        isHero ? (<Image src={CodeIcon} className='w-6' />) : null
      }
      {
        isHero ? (
          <div className='ml-2'>
            {title}
            <Image src={HeadIcon} className="inline-block ml-2" />
          </div>
        ) : title
      }
    </h2>
  )
}

export default Title