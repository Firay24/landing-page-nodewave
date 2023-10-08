"use client";
import React from 'react'
import Container from './Container'
import Logo from './Logo'
import NavLinks from './NavLinks'
import Button from './Button';

const Header = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* logo */}
          <div className='relative z-10 items-center gap-16'>
            <Logo />
          </div>
          {/* navlinks and Butoon */}
          <div className='flex gap-x-6'>
            <div className='hidden lg:flex lg:gap-10 items-center'>
              <NavLinks />
            </div>
            <div className='flex items-center gap-6'>
              <Button href="#" variant="solid" className="hidden lg:block rounded-full">
                Make an App
              </Button>
            </div>
          </div>
          {/* mobile navlinks */}
        </Container>
      </nav>
    </header>
  )
}

export default Header