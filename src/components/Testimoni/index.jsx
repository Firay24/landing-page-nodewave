import React from 'react'
import ItemTestimoni from './ItemTestimoni'
import Container from '../shared/Container'
import Title from '../shared/Title'
import { testimoniData } from '@/constants'

const Testimoni = () => {
  const duplicatedTestimoniData = [...testimoniData, ...testimoniData, ...testimoniData];
  return (
    <section>
      <Container
        id="testimoni"
        aria-label="Features for building a portfolio"
        className="py-14 sm:py-20"
      >
        <div className="max-w-2xl">
          <Title 
            title="Testimoni"
            className="text-2xl text-left font-bold"
          />
        </div>
        <div className='wrapper mt-8'>
          <div className='slider'>
            <div className='slide-track flex gap-x-3'>
              {duplicatedTestimoniData.map((testimoni, index) => (
                <ItemTestimoni key={index} {...testimoni} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimoni