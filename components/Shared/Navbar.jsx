'use client'

import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

// Logos
import defaultLogo from '@/public/assets/AIFB-Logo-White.svg'
import registerLogo from '@/public/assets/AIFB-Logo-Blue.svg'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isRegisterPage = pathname.startsWith('/hackathon/register')

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showSolidNav = isRegisterPage || isScrolled

  const navItemClass = href =>
    `relative pb-1 ${
      pathname === href
        ? 'after:absolute after:bottom-[-28px] after:-left-0 after:h-[2px] after:w-full after:bg-[#3039E5] after:content-[""] after:rounded-full'
        : ''
    } hover:text-${showSolidNav ? 'gray-700' : 'gray-300'} transition-all`

  return (
    <header
      className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${
        showSolidNav
          ? 'bg-white text-black'
          : 'bg-[#0000001A] text-white border-b border-[#FFFFFF40]'
      }`}
    >
      <div className='max-w-7xl mx-auto py-4 px-4 2xl:px-0 flex justify-between items-center'>
        {/* Logo */}
        <div
          className='w-[150px] cursor-pointer'
          onClick={() => router.push('/')}
        >
          <Image
            className='w-full h-full object-contain'
            src={showSolidNav ? registerLogo : defaultLogo}
            alt='AI Forum Bangladesh Logo'
          />
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 font-medium uppercase text-sm relative mt-[10px]'>
          <a href='/' className={navItemClass('/')}>
            Home
          </a>
          <a href='/about-us' className={navItemClass('/about-us')}>
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
              window._dropdownTimeout = setTimeout(
                () => setWorkOpen(false),
                200
              )
            }}
          >
            <button
              onClick={() => setWorkOpen(!workOpen)}
              className={`flex items-center gap-1 ${navItemClass('/our-work')}`}
            >
              OUR WORK
              {workOpen ? (
                <FiChevronUp size={14} />
              ) : (
                <FiChevronDown size={14} />
              )}
            </button>

            {workOpen && (
              <div
                className='absolute top-full left-0 mt-2 bg-white text-black text-sm font-normal shadow-md rounded-sm py-3 w-64 z-50'
                onMouseEnter={() => clearTimeout(window._dropdownTimeout)}
                onMouseLeave={() => setWorkOpen(false)}
              >
                <a
                  href='/our-work/innovation-ecosystem'
                  className='block px-5 py-2 hover:bg-gray-100'
                >
                  Building Innovation Ecosystem
                </a>
                <a
                  href='/our-work/ai-academy'
                  className='block px-5 py-2 hover:bg-gray-100'
                >
                  AI Academy
                </a>
                <a
                  href='/our-work/career-care'
                  className='block px-5 py-2 hover:bg-gray-100'
                >
                  Career Care
                </a>
              </div>
            )}
          </div>

          <a href='/hackathon' className={navItemClass('/hackathon')}>
            Hackathon
          </a>
          <a href='/contact-us' className={navItemClass('/contact-us')}>
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-4 pb-4 ${
            showSolidNav ? 'bg-white text-black' : 'bg-black/90 text-white'
          }`}
        >
          <nav className='flex flex-col gap-4 uppercase text-sm font-medium'>
            <a href='/' className='hover:opacity-80'>
              Home
            </a>
            <a href='/about-us' className='hover:opacity-80'>
              About Us
            </a>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setWorkOpen(!workOpen)}
                className='flex justify-between items-center w-full hover:opacity-80'
              >
                <span>Our Work</span>
                {workOpen ? (
                  <FiChevronUp size={18} />
                ) : (
                  <FiChevronDown size={18} />
                )}
              </button>
              {workOpen && (
                <div className='pl-4 mt-2 flex flex-col gap-2 text-sm'>
                  <a
                    href='/our-work/innovation-ecosystem'
                    className='hover:opacity-80'
                  >
                    Building Innovation Ecosystem
                  </a>
                  <a href='/our-work/ai-academy' className='hover:opacity-80'>
                    AI Academy
                  </a>
                  <a href='/our-work/career-care' className='hover:opacity-80'>
                    Career Care
                  </a>
                </div>
              )}
            </div>

            <a href='/hackathon' className='hover:opacity-80'>
              Hackathon
            </a>
            <a href='/contact-us' className='hover:opacity-80'>
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
