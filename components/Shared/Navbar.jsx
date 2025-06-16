'use client'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import logo from '@/public/assets/AIFB_Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-black/10 text-white w-full z-50 fixed top-0 left-0 border-b-[0.5px] border-gray-300'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='h-10'>
          <Image
            className='w-full h-full object-contain'
            src={logo}
            alt='AI Forum Bangladesh Logo'
          />
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 font-medium uppercase text-sm'>
          <a href='#' className='hover:text-gray-300'>
            Home
          </a>
          <a href='#' className='hover:text-gray-300'>
            About Us
          </a>
          <a href='#' className='hover:text-gray-300'>
            Our Work
          </a>
          <a href='#' className='hover:text-gray-300'>
            Hackathon
          </a>
          <a href='#' className='hover:text-gray-300'>
            Contact Us
          </a>
        </nav>

        {/* Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-black bg-opacity-90 px-4 pb-4'>
          <nav className='flex flex-col gap-4 uppercase text-sm font-medium'>
            <a href='#' className='hover:text-gray-300'>
              Home
            </a>
            <a href='#' className='hover:text-gray-300'>
              About Us
            </a>
            <a href='#' className='hover:text-gray-300'>
              Our Work
            </a>
            <a href='#' className='hover:text-gray-300'>
              Hackathon
            </a>
            <a href='#' className='hover:text-gray-300'>
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
