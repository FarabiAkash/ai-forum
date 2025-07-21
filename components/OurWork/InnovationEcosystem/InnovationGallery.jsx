'use client'
import Image from 'next/image'
import { useState } from 'react'

import g1 from '@/public/assets/hackathon/g1.png'
import g2 from '@/public/assets/hackathon/g2.png'
import g3 from '@/public/assets/hackathon/g3.png'
import g4 from '@/public/assets/hackathon/g4.png'
import g5 from '@/public/assets/hackathon/g5.png'
import g6 from '@/public/assets/hackathon/g6.png'
import g7 from '@/public/assets/hackathon/g7.png'
import g8 from '@/public/assets/hackathon/g8.png'
import g9 from '@/public/assets/hackathon/g9.png'
import g10 from '@/public/assets/hackathon/g10.png'
import g11 from '@/public/assets/hackathon/g11.png'
import g12 from '@/public/assets/hackathon/g12.png'

const columns = [
  [g1, g2, g3],
  [g4, g5, g6],
  [g7, g8, g9],
  [g10, g11, g12]
]

const InnovationGallery = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)

  return (
    <section className='py-12 px-5 max-w-7xl mx-auto relative'>
      <div className='flex items-center gap-4 justify-center mb-6'>
        <div className='flex-grow border-t border-[#0000001A]'></div>
        <h2 className='text-sm font-normal text-[#717680] whitespace-nowrap'>
          Event Gallery
        </h2>
        <div className='flex-grow border-t border-[#0000001A]'></div>
      </div>

      {/* Collapsible Container */}
      <div
        className={`relative transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-full' : 'max-h-[800px]'
        } overflow-hidden`}
      >
        {/* Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {columns.map((col, colIndex) => (
            <div key={colIndex} className='flex flex-col gap-4'>
              {col.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className='relative w-full overflow-hidden rounded-[1px] cursor-pointer'
                  onClick={() => setPreviewImage(img.src)}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${colIndex}-${imgIndex}`}
                    className='w-full h-auto object-cover'
                    placeholder='blur'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Smooth Fade Overlay */}
        {!isExpanded && (
          <div className='absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/70 to-transparent pointer-events-none transition-opacity duration-300 z-10' />
        )}
      </div>

      {/* CTA Button */}
      {!isExpanded && (
        <div className='relative text-center mt-7 z-20'>
          <button
            onClick={() => setIsExpanded(true)}
            className='px-5 py-2 text-xs font-medium text-[#717680] bg-[#0000000D] transition'
          >
            LOAD MORE PHOTOS
          </button>
        </div>
      )}

      {/* Preview Modal */}
      {previewImage && (
        <div
          className='fixed inset-0 bg-black/90 z-[100] flex items-center justify-center'
          onClick={() => setPreviewImage(null)}
        >
          {/* Image Wrapper */}
          <div
            className='relative  w-screen h-screen flex items-start justify-center'
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setPreviewImage(null)}
              className='absolute top-4 right-4 text-white text-4xl z-50 cursor-pointer'
            >
              &times;
            </button>

            {/* Full Image */}
            <Image
              src={previewImage}
              alt='Preview'
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default InnovationGallery
