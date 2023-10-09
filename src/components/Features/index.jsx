import React from 'react'
import Title from '../shared/Title'
import Container from '../shared/Container'
import { featuresData, serviceData } from '@/constants'
import ItemFetures from './ItemFetures'
import Image from 'next/image'

const Feature = () => {
  return (
    <section>
      <Container
        id="features"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <div className="mx-auto max-w-2xl sm:text-center">
          <Title 
            title="Applications that can be made"
            className="text-2xl text-center font-bold"
          />
        </div>
        <div className='flex flex-wrap gap-8 justify-center mt-8'>
          {
            featuresData.map((feature, index) => (
              <ItemFetures key={index} {...feature} />
            ))
          }
        </div>
        <div className='flex flex-wrap gap-3 justify-center mt-8'>
          {
            serviceData.map((service, index) => (
              <div key={index} className='flex items-center gap-x-1'>
                <Image src={service.icons} alt={`icons ${service.title}`} />
                <p className='text-xl font-semibold'>{service.title}</p>
              </div>
            ))
          }
          <div className='flex items-center'>
            <p className='text-xl font-semibold'>and many others</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Feature