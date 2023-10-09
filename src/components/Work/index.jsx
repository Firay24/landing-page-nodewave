import React from 'react'
import ItemWork from './ItemWork'
import Container from '../shared/Container'
import Title from '../shared/Title'
import { workData } from '@/constants'

const Work = () => {
  const duplicatedWorkData = [...workData, ...workData, ...workData];
  return (
    <section>
      <Container
        id="work"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <div className="mx-auto max-w-2xl sm:text-center">
          <Title 
            title="Our Work"
            className="text-2xl text-center font-bold"
          />
        </div>
        <div className='wrapper mt-8'>
          <div className='slider'>
            <div className='slide-track flex gap-x-3'>
              {duplicatedWorkData.map((work, index) => (
                <ItemWork key={index} {...work} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Work