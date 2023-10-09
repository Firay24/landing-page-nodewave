import React from 'react'
import Title from './Title'
import Container from './Container'
import { featuresData } from '@/constants'
import ItemFetures from './ItemFetures'

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
        <div className='flex gap-x-8 mt-8'>
          {
            featuresData.map((feature, index) => (
              <ItemFetures key={index} {...feature} />
            ))
          }
        </div>
      </Container>
    </section>
  )
}

export default Feature