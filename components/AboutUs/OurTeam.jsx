'use client'
import { ourTeam } from '@/data/ourTeamData'
import SingleCard from './SingleCard'
import { useState } from 'react'
import CustomModal from './CustomModal'

const OurTeam = () => {
  const [selectedTeam, setSelectedTeam] = useState(null)
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-5'>
        <h2 className='text-3xl font-bold text-center mb-4'>Our Teams</h2>
        <p className='text-center text-gray-600 max-w-3xl mx-auto mb-10'>
          Meet the minds crafting AI Forum Bangladesh — where vision meets
          execution for a smarter, more innovative tomorrow.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 justify-items-center'>
          {ourTeam.map((member, index) => (
            <SingleCard
              key={index}
              name={member.name}
              image={member.image}
              description={member.description}
              isTeam={true}
              team={member}
              setSelectedTeam={setSelectedTeam}
            />
          ))}
        </div>
      </div>
      <CustomModal
        isOpen={!!selectedTeam}
        team={selectedTeam}
        onClose={() => setSelectedTeam(null)}
      />
    </section>
  )
}

export default OurTeam
