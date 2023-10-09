/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import bgContent from '@/images/Rectangle39.png'
import Title from './Title'
import chatImg from '@/images/chat.png'
import bgSection from '@/images/bgContent.png'

const HowWork = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image src={bgSection} className="w-full h-full object-cover object-center" />
      </div>
      
      <Container
        id='howWork'
        aria-label="Features for building a portfolio"
        className="py-14 sm:py-20 md:py-20 relative z-10"
      >
        <div className="max-w-2xl mx-auto sm:text-center md:text-center">
          <Title 
            title="How We Work"
            className="text-2xl text-center font-bold"
          />
        </div>
        <div className='mt-8'>
          <div className="relative w-full md:w-1/2 mx:md-1/2 lg:md-1/2 mx-auto">
            <div className='w-full h-96 sm:h-full md:h-full'>
              <Image src={bgContent} alt='image content' className='object-cover w-full h-full rounded-xl' />
            </div>
            <div className='absolute inset-0 sm:inset-auto sm:right-0 sm:top-0 sm:bottom-0 md:right-0 md:top-0 md:bottom-0 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 p-4'>
              <div className='h-full mx-auto'>
                <Image src={chatImg} alt='image content' className='h-full w-auto rounded'/>
              </div>
              <div className='text-white text-center md:text-left sm:text-left p-4 flex flex-col justify-start h-full sm:flex md:flex'>
                <h3 className='text-xl font-bold'>Estimate</h3>
                <p className='mt-2 text-base'>Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowWork