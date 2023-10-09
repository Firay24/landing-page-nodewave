import React from 'react'
import Title from '../shared/Title'
import Container from '../shared/Container'
import { priceData } from '@/constants'
import ItemPrice from './ItemPrice'

const Prices = () => {
  return (
    <section>
      <Container
        id="price"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <div className="mx-auto max-w-2xl sm:text-center">
          <Title 
            title="Start Creating Websites or Mobile Apps For You Now"
            className="text-2xl text-center font-bold"
          />
        </div>
        <div className='flex flex-wrap gap-8 justify-center mt-8'>
          {
            priceData.map((price, index) => (
              <ItemPrice key={index} {...price} />
            ))
          }
        </div>
      </Container>
    </section>
  )
}

export default Prices