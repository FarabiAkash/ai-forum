'use client'
import { useEffect, useState } from 'react'
import eventsImg1 from '@/public/assets/our-work/innovation-ecosystem/banner.jpg'

const ongoingEvent = {
  id: 1,
  title:
    'Virtual Event: Advancing Diagnostic Medicine: The Role of AI in Future Healthcare',
  time: '3:30 AM - 4:30 AM, May 16 +06',
  description: 'AI in Healthcare Virtual Event: Advancing Diagnost',
  image: eventsImg1,
  date: new Date(
    Date.now() +
      13 * 24 * 60 * 60 * 1000 +
      7 * 60 * 60 * 1000 +
      36 * 60 * 1000 +
      21 * 1000
  )
}

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const totalSeconds = Math.max(
        0,
        Math.floor((targetDate - new Date()) / 1000)
      )
      const days = Math.floor(totalSeconds / (3600 * 24))
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className='flex gap-4 text-white font-medium'>
      {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
        <div
          key={idx}
          className='text-center text-sm bg-[#FFFFFF1A] px-4 py-1 rounded-[1px]'
        >
          <div className='text-lg font-semibold'>
            {String(timeLeft[unit]).padStart(2, '0')}
          </div>
          <div className='uppercase text-xs'>
            {unit.slice(0, 3)}
            {unit === 'hours' && ' '}
          </div>
        </div>
      ))}
    </div>
  )
}

const InnovationDetailsBanner = () => {
  return (
    <div
      className='relative w-full sm:h-[640px] bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage: `url(${ongoingEvent.image.src})`
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content aligned to bottom */}
      <div className='relative z-10 max-w-7xl mx-auto px-5 h-full flex items-center pt-36 pb-5 sm:pb-10'>
        <div className='relative z-10 text-white'>
          <p className='text-sm sm:text-base text-white mb-2'>
            {ongoingEvent.time} · {ongoingEvent.description}
          </p>
          <h2 className='text-xl sm:text-2xl md:text-[32px] font-semibold sm:leading-[40px]'>
            {ongoingEvent.title}
          </h2>

          <hr className='w-full h-[1px] text-[#FFFFFF40] my-6' />

          <div className='flex flex-wrap justify-start gap-4 md:gap-12 items-center'>
            <Countdown targetDate={ongoingEvent.date} />

            <button className='bg-[#FFCF30] text-[#040940] px-6 py-4 text-sm font-semibold rounded-[1px] transition'>
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InnovationDetailsBanner
