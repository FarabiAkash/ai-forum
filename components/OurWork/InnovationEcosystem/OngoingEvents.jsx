'use client'
import { useState, useEffect } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import eventsImg1 from '@/public/assets/our-work/innovation-ecosystem/banner.jpg'
import eventsImg2 from '@/public/assets/our-work/innovation-ecosystem/banner2.png'

const dummyEvents = [
  {
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
  },
  {
    id: 2,
    title: 'AI in Surgery: Innovation Through Robotics',
    time: '6:00 PM - 7:00 PM, May 25 +06',
    description: 'AI-Powered Robotic Surgery Symposium',
    image: eventsImg2,
    date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
  },
  {
    id: 2,
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
]

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

const OngoingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(
      prev => (prev - 1 + dummyEvents.length) % dummyEvents.length
    )
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % dummyEvents.length)
  }

  return (
    <div className='py-4 px-5 max-w-7xl mx-auto'>
      {/* Centered HR + Label */}
      <div className='flex justify-center items-center gap-4 mb-4'>
        <hr className='w-full h-[1px] bg-[#0000001A] border-none' />
        <span className='text-nowrap text-[#717680] text-[20px] sm:leading-[24px]'>
          Ongoing Events
        </span>
        <hr className='w-full h-[1px] bg-[#0000001A] border-none' />
      </div>

      {/* Carousel */}
      <div className='relative'>
        <div
          className='w-full h-[500px] sm:h-[500px] relative bg-cover bg-center overflow-hidden flex items-center px-24 sm:px-32'
          style={{
            backgroundImage: `url(${dummyEvents[currentIndex].image.src})`
          }}
        >
          {/* Overlay */}
          <div className='absolute inset-0 bg-black opacity-40 z-0' />

          {/* Content */}
          <div className='relative z-10 text-white'>
            <p className='text-sm sm:text-base text-white mb-2'>
              {dummyEvents[currentIndex].time} ·{' '}
              {dummyEvents[currentIndex].description}
            </p>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold leading-tight'>
              {dummyEvents[currentIndex].title}
            </h2>

            <hr className='w-full h-[1px] text-[#FFFFFF40] my-6' />

            <div className='flex flex-wrap justify-between gap-4 items-center'>
              <Countdown targetDate={dummyEvents[currentIndex].date} />

              <button className='bg-[#3039E5] text-white px-6 py-4 text-sm font-semibold rounded-[1px] transition'>
                REGISTER
              </button>
            </div>
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={handlePrev}
            className='absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FFFFFF40] flex justify-center items-center text-white cursor-pointer'
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className='absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8  bg-[#FFFFFF40] flex justify-center items-center text-white cursor-pointer'
          >
            <MdKeyboardArrowRight size={20} />
          </button>

          {/* Dots */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
            {dummyEvents.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-[8px] h-[8px]  cursor-pointer ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OngoingEvents
