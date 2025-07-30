'use client'
import { useEffect, useState } from 'react'

const Countdown = ({ daysLeft }) => {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + daysLeft)

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
  }, [daysLeft])

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
          <div className='uppercase text-xs'>{unit.slice(0, 3)}</div>
        </div>
      ))}
    </div>
  )
}

const ProgramDetailsBanner = ({ item }) => {
  const hasDaysLeft = item.daysLeft && item.programType === 'ongoing'
  const daysNumber = hasDaysLeft ? parseInt(item.daysLeft) : 0

  return (
    <div
      className='relative w-full sm:h-[640px] bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage: `url(${item?.programBanner?.src})`
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-5 h-full flex items-center pt-36 sm:pt-72 pb-5 sm:pb-10'>
        <div className='relative z-10 text-white'>
          <p className='text-sm sm:text-base text-white mb-2'>
            {item.programDate} · {item.programSubtitle}
          </p>

          <h2 className='text-xl sm:text-2xl md:text-[32px] font-semibold sm:leading-[40px]'>
            {item.programTitle}
          </h2>

          <hr className='w-[85vw] 2xl:w-[70vw]  h-[1px] bg-[#FFFFFF40] my-6 border-0' />

          <div className='flex flex-wrap justify-start gap-4 md:gap-12 items-center'>
            {hasDaysLeft && <Countdown daysLeft={daysNumber} />}

            {item.programType === 'ongoing' && (
              <button className='bg-[#FFCF30] text-[#040940] px-6 py-4 text-sm font-semibold rounded-[1px] transition'>
                Register
              </button>
            )}

            {item.programType === 'upcoming' && (
              <button className='bg-[#FFCF30] text-[#040940] px-6 py-4 text-sm font-semibold rounded-[1px] transition'>
                Get Notified
              </button>
            )}

            {item.programType === 'ended' && (
              <button className='bg-[#E53030] text-[#ffffff] px-6 py-4 text-sm font-semibold rounded-[1px] transition'>
                Event Ended
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramDetailsBanner
