'use client'

import React, { useState } from 'react'
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Image from 'next/image'
import logo from '@/public/assets/AIFB-Logo-White.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [active, setActive] = useState('Home')

  const navItemClass = label =>
    `relative pb-1 ${
      active === label ? 'border-b-2 border-indigo-500' : ''
    } hover:text-gray-300`

  return (
    <header className='bg-black/10 text-white w-full z-50 fixed top-0 left-0 border-b-[0.5px] border-gray-300'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='w-[150px] h-[40px]'>
          <Image
            className='w-full h-full object-cover'
            src={logo}
            alt='AI Forum Bangladesh Logo'
          />
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 font-medium uppercase text-sm relative'>
          <a
            href='#'
            onClick={() => setActive('Home')}
            className={navItemClass('Home')}
          >
            Home
          </a>
          <a
            href='#'
            onClick={() => setActive('About Us')}
            className={navItemClass('About Us')}
          >
            About Us
          </a>

          {/* Dropdown */}
          <div
            className='relative'
            onMouseEnter={() => {
              clearTimeout(window._dropdownTimeout)
              setWorkOpen(true)
            }}
            onMouseLeave={() => {
              // Delay closing so user can move into dropdown
              window._dropdownTimeout = setTimeout(
                () => setWorkOpen(false),
                200
              )
            }}
          >
            <button
              onClick={() => {
                setWorkOpen(!workOpen)
                setActive('Our Work')
              }}
              className={`flex items-center gap-1 ${navItemClass('Our Work')}`}
            >
              Our Work{' '}
              {workOpen ? (
                <FiChevronUp size={14} />
              ) : (
                <FiChevronDown size={14} />
              )}
            </button>

            {/* Dropdown Menu */}
            {workOpen && (
              <div
                className='absolute top-full left-0 mt-2 bg-white text-black text-sm font-normal shadow-md rounded-sm py-3 w-64 z-50'
                onMouseEnter={() => clearTimeout(window._dropdownTimeout)}
                onMouseLeave={() => setWorkOpen(false)}
              >
                <a href='#' className='block px-5 py-2 hover:bg-gray-100'>
                  Building Innovation Ecosystem
                </a>
                <a href='#' className='block px-5 py-2 hover:bg-gray-100'>
                  AI Academy
                </a>
                <a href='#' className='block px-5 py-2 hover:bg-gray-100'>
                  Career Care
                </a>
              </div>
            )}
          </div>

          <a
            href='/hackathon'
            onClick={() => setActive('Hackathon')}
            className={navItemClass('Hackathon')}
          >
            Hackathon
          </a>
          <a
            href='#'
            onClick={() => setActive('Contact Us')}
            className={navItemClass('Contact Us')}
          >
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
