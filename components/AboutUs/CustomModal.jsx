'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const CustomModal = ({ isOpen, onClose, team }) => {
  const modalRef = useRef()

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  if (!isOpen || !team) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4'>
      <div
        ref={modalRef}
        className='relative w-full max-w-5xl h-auto lg:h-[55vh] rounded-xl overflow-hidden flex flex-col md:flex-row'
      >
        {/* Image Top on Mobile, Centered on Desktop */}
        <div className='md:absolute md:right-[15%] md:top-1/2 md:-translate-y-1/2 z-10 flex justify-center mt-4 md:mt-0 '>
          <div className='bg-white rounded-2xl p-2 shadow-lg'>
            <Image
              src={team.image}
              alt={team.name}
              width={240}
              height={300}
              className='rounded-xl object-cover'
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='bg-white w-full md:w-[65%] p-6 md:p-12 lg:p-24 md:pr-28 flex flex-col justify-center mt-6 md:mt-0'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#3039E5] mb-4'>
            {team.name}
          </h2>
          <p className='text-gray-700 text-sm md:text-base whitespace-pre-line sm:text-justify'>
            {team.description}
          </p>
        </div>

        {/* Blue Section Right (only visible on md+) */}
        <div className='hidden md:block bg-[#3039E5] w-[30%]' />

        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 sm:right-16 text-white bg-[#3039E5] w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold z-20 cursor-pointer'
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default CustomModal
