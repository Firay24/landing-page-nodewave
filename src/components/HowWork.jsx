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
        className="py-14 sm:py-20 relative z-10"
      >
        <div className="max-w-2xl mx-auto sm:text-center">
          <Title 
            title="How We Work"
            className="text-2xl text-center font-bold"
          />
        </div>
        <div className='mt-8'>
          <div className="relative w-1/2 mx-auto">
            <div className='w-full h-full'>
              <Image src={bgContent} alt='image content' className='object-cover w-full h-full rounded-xl' />
            </div>
            <div className='absolute inset-0 items-center grid grid-cols-2 h-full p-4'>
              <div className='h-full'>
                <Image src={chatImg} alt='image content' className='h-full w-auto rounded'/>
              </div>
              <div className='text-white text-left p-4 flex flex-col justify-start h-full'>
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