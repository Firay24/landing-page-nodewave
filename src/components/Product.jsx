import React from 'react'
import Container from './Container'
import Title from './Title'
import Image from 'next/image'
import MobileImg from '@/images/mobiles.png'
import Button from './Button'
import ItemProduct from './ItemProduct'

const Mobile = () => {
  return (
    <div className='bg-white p-10 rounded-3xl'>
      <Image src={MobileImg} alt='mobiles ui' className='mx-auto' />
      <div className='text-gray-900 text-center mt-8'>
        <h3 className='text-2xl font-medium'>Mobile App</h3>
        <p>
          Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi 
          jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <Button href="#" variant="solid" className="rounded-full text-center">
          Pelajari Selengkapnya
        </Button>
      </div>
    </div>
  )
}

const Product = () => {
  return (
    <section>
      <Container
        id="mobileApp"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <div className=" mx-auto max-w-2xl sm:text-center">
          <Title 
            title="Our Product"
            className="text-2xl text-center"
          />
        </div>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 px-16 xl:px-24 lg:px-24 gap-5 mt-8'>
          <div className='flex flex-col items-center gap-5'>
            <ItemProduct variant="solid" color="white" className="rounded-3xl" />
            <ItemProduct variant="outline" color="white" className="rounded-3xl max-w-sm mx-auto" />
          </div>
          <div className='h-full'>
            <Mobile />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Product