/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Container from '../shared/Container'
import Image from 'next/image'
import Logo from '@/images/logo/logo.png'
import { iconSosmed } from '@/constants'

const Footer = () => {
  return (
    <footer>
      <Container
        id="footer"
        aria-label="Features for building a portfolio"
        className="py-5 sm:py-8"
      >
        <div className='flex flex-col items-center text-center gap-y-4'>
          <Image src={Logo} alt='logo' className='w-56 h-auto' />
          <h4>PT NODEWAVE SOLUSI TEKNOLOGI</h4>
          <div>
            <p>Graha Pena Surabaya</p>
            <p>Jl. Ahmad Yani no. 88 Surabaya</p>
            <p>Phone : +62811258280</p>
            <p>Email : support@nodewave.id</p>
          </div>
          <div className='flex gap-x-3'>
            {
              iconSosmed.map((icon, index) => (
                <Image key={index} src={icon} alt='icon' />
              ))
            }
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer