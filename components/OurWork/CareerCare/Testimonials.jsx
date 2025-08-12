import { testimonials } from '@/data/testimonialsData'
import React, { useState } from 'react'

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(9)
  const isCollapsed = visibleCount < testimonials.length

  return (
    <div className='bg-white mt-10'>
      <section className='max-w-7xl mx-auto px-4 py-10'>
        <h2 className='text-center text-sm font-semibold tracking-wide text-blue-500 uppercase mb-10'>
          Testimonials
        </h2>

        <div className='relative'>
          {/* Cards grid */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
            {testimonials.slice(0, visibleCount).map((t, i) => (
              <div
                key={i}
                className=' border rounded-[1px] border-[#0000001A] p-4'
              >
                <p className='text-sm text-gray-500 mb-3'>{t.date}</p>
                <p className='text-gray-700 mb-4 leading-relaxed'>{t.text}</p>
                <p className='font-semibold text-gray-900'>{t.name}</p>
                <p className='text-sm text-gray-500'>{t.role}</p>
              </div>
            ))}
          </div>

          {/* Fade overlay */}
          {isCollapsed && (
            <div className='pointer-events-none absolute bottom-0 left-0 w-full h-[50%] md:h-100 bg-gradient-to-t from-white via-white/50 to-transparent'></div>
          )}
        </div>

        {/* Load more button */}
        {isCollapsed && (
          <div className='text-center mt-8 relative z-10'>
            <button
              onClick={() => setVisibleCount(testimonials.length)}
              className='px-5 py-2 text-xs font-medium text-[#717680] bg-[#0000000D] transition cursor-pointer'
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Testimonials
