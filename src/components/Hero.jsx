/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Container from './Container'
import Title from './Title'
import Button from './Button'
import Image from 'next/image'
import BgImage from '@/images/background.png'

const Hero = () => {
  return (
    <section
    id="home"
    className="overflow-hidden mt-12"
    >
      <Container>
        <div className='relative z-10 max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 flex'>
          {/* Right side */}
          <div className='relative z-10 max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 w-2/3'>
            <Title title='Make Your Own Website and Mobile Application With Nodewave' className="text-5xl" />
            <div className='mt-6 ml-2'>
              <Button href="#" variant="solid" className="rounded-full">
                Make an App
              </Button>
            </div>
            <p className='mt-6 text-lg text-white ml-2'>
              Create Mobile Applications and Websites for Companies or Your Business
              Have a transparent pricing, easy and straightforward development process
            </p>
          </div>
        </div>
      </Container>
      {/* Left side */}
      <div className="absolute top-0 right-0 bottom-0 left-0 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
        <Image src={BgImage} className="w-full h-full object-cover object-center" />
      </div>
    </section>
  )
}

export default Hero