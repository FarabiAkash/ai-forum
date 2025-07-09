'use client'
import { advisors } from '@/data/advisorsData'
import SingleCard from './SingleCard'
import { useState } from 'react'
import CustomModal from './CustomModal'

const OurAdvisor = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState(null)

  return (
    <section className='py-12 bg-[#FAFAFA]'>
      <div className='max-w-7xl mx-auto px-5'>
        <h2 className='text-3xl font-bold text-center mb-4'>Our Advisors</h2>
        <p className='text-center text-gray-600 max-w-3xl mx-auto mb-10'>
          We're proud to be mentored by visionary leaders in AI, science,
          health, sustainability, and entrepreneurship, shaping our path with
          deep expertise and bold perspectives.
        </p>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-12'>
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className='w-full sm:w-[48%] lg:w-[30%] flex justify-center'
            >
              <SingleCard
                key={index}
                name={advisor.name}
                image={advisor.image}
                description={advisor.description}
                isTeam={false}
                setSelectedTeam={setSelectedAdvisor}
                team={advisor}
              />
            </div>
          ))}
        </div>
      </div>
      <CustomModal
        isOpen={!!selectedAdvisor}
        team={selectedAdvisor}
        onClose={() => setSelectedAdvisor(null)}
      />
    </section>
  )
}

export default OurAdvisor
