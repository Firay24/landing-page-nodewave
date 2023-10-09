import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/images/logo/logo.png'
import clsx from 'clsx'

const Logo = ({ className, props }) => {
  return (
    <div>
      <Link href='/'>
        <Image 
          src={LogoImg} 
          alt='image logo' 
          className={clsx("w-[226px] h-auto", className)}
          {...props}
        />
      </Link>
    </div>
  )
}

export default Logo