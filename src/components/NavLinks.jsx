/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import { navData } from '@/constants/indes'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const NavLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <>
    {navData.map(({ _id, title, href }) => (
      <Link
        key={_id}
        href={href}
        className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-base transition-colors'
        onMouseEnter={() => setHoveredIndex(_id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === _id && (
            <motion.span
              className='absolute inset-0 rounded-lg bg-gray-800'
              layoutId='hoverBackground'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delat: 0.2 }
              }}
            />
          )}
        </AnimatePresence>
        <span className='relative z-10'>{title}</span>
      </Link>
    ))}
    </>
  )
}

export default NavLinks