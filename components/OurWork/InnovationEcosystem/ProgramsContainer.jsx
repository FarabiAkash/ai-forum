'use client'
import { useEffect, useState } from 'react'
import ProgramCard from './ProgramCard'

const ProgramsContainer = ({ programs }) => {
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [programs])

  const filteredPrograms =
    filter === 'All'
      ? programs
      : programs.filter(program => program.programType === filter)

  const programTypes = ['All', ...new Set(programs.map(p => p.programType))]

  return (
    <div className='max-w-7xl mx-auto px-5 py-6 sm:py-10 '>
      {/* header */}
      <div className='flex flex-wrap gap-4 justify-between items-center'>
        <h1 className='text-[20px] sm:leading-[24px] font-semibold'>
          Programs
        </h1>
        <div className='flex flex-wrap gap-2 mb-4 sm:bg-[#0000000D]'>
          {programTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 text-sm font-medium capitalize cursor-pointer ${
                filter === type
                  ? 'bg-white text-black sm:m-[2px] border sm:border-none'
                  : 'text-[#717680] bg-[#0000000D] sm:bg-transparent'
              }`}
            >
              {type === 'ended' ? 'Completed' : type}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
        {loading
          ? [...Array(9)].map((_, i) => (
              <div
                key={i}
                className='animate-pulse space-y-4 p-4 border border-[#0000000D]'
              >
                <div className='h-40 bg-gray-300 rounded' />
                <div className='h-4 bg-gray-300 rounded w-3/4' />
                <div className='h-4 bg-gray-200 rounded w-1/2' />
                <div className='h-4 bg-gray-200 rounded w-1/3' />
              </div>
            ))
          : filteredPrograms?.map((program, idx) => (
              <ProgramCard
                key={idx}
                id={program.id}
                programBanner={program.programBanner}
                programType={program.programType}
                programTitle={program.programTitle}
                programDate={program.programDate}
                programVenue={program.programVenue}
              />
            ))}
      </div>
    </div>
  )
}
export default ProgramsContainer
