'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

const StayInLoop = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address', {
        position: 'top-right'
      })
      return
    }

    toast.success('Thanks for subscribing!', {
      position: 'top-right'
    })
    setEmail('')
  }

  return (
    <section className='bg-[#fbfafa] py-12 sm:py-16 px-4 xl:mt-56'>
      <div className='max-w-xl mx-auto text-center'>
        <h2 className='text-3xl md:text-[40px] md:leading-[48px] font-bold text-[#0B0C1A] mb-4'>
          Stay in the Loop
        </h2>
        <p className='text-[#717680] text-base leading-[24px] mb-8'>
          Get updates on upcoming events, new programs, and inspiring stories
          from Bangladesh’s AI future.
        </p>

        <div className='flex items-center justify-center gap-3 sm:gap-4 mb-2'>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full sm:w-[280px] px-4 py-3 border border-[#0000001A] bg-white  text-sm outline-none'
          />
          <button
            onClick={handleSubscribe}
            className='bg-[#3039E5] text-white text-sm font-semibold px-4 sm:px-6 py-3  hover:bg-blue-700 transition'
          >
            SUBSCRIBE
          </button>
        </div>
        <p className='text-sm text-[#717680]'>
          We care about your data in our{' '}
          <a href='#' className='underline font-medium'>
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default StayInLoop
