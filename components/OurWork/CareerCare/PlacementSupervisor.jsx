'use client'
import { useState } from 'react'
import Image from 'next/image'
import mentorImg from '@/public/assets/our-work/career-care/mentorImg.jpg'
import { CiStar } from 'react-icons/ci'
import EnrollModal from './EnrollModal'

const PlacementSupervisor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const details = [
    { label: 'Duration', value: '6 Months' },
    { label: 'Sessions', value: '12' },
    { label: 'Deadline', value: '16th May 2025' }
  ]
  const mentor = {
    image: mentorImg,
    header: 'RESEARCH SUPERVISOR',
    name: 'Dr. Mahmudul Haque',
    title: 'MBBS, MPH, PhD (Health Informatics)',
    role: `Director, Center for Health Innovation & AI
Associate Professor, Department of Public Health Informatics,
Bangabandhu Sheikh Mujib Medical University (BSMMU)`,
    expertise: [
      'AI in epidemiology and public health',
      'Clinical decision support systems (CDSS)',
      'EHR and health data infrastructure in LMICs',
      'Health data ethics and governance'
    ]
  }
  return (
    <>
      <div className='flex flex-col-reverse md:flex-col gap-8 lg:mt-[-12%] z-10 w-full md:w-[40%]'>
        <div className='bg-white p-6 sm:p-8 '>
          {/* Header */}
          <div className='flex items-center mb-6'>
            <span className='text-[#3039E5] text-sm font-semibold uppercase tracking-wide'>
              Global Research Placement
            </span>
            <div className='flex-1 h-px bg-gray-200 ml-2'></div>
          </div>

          {/* Details */}
          <div className='space-y-4 mb-6'>
            {details.map((item, idx) => (
              <div
                key={idx}
                className='flex items-center justify-between border-b last:border-b-0 border-gray-200 pb-3'
              >
                <div className='flex items-center space-x-3'>
                  <div className='p-1 border border-[#3039E5] flex items-center justify-center rounded-full'>
                    <CiStar
                      size={15}
                      className='text-[#3039E5]'
                      strokeWidth={1}
                    />
                  </div>
                  <span className='text-[#181D27] font-medium'>
                    {item.label}
                  </span>
                </div>
                <span className='text-[#717680]'>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Apply Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className='w-full bg-[#3039E5] hover:bg-[#2d3eb8] text-white py-3 rounded-sm text-sm font-semibold'
          >
            APPLY
          </button>
        </div>

        {/* Mentor Section */}
        <div className='bg-white p-6 sm:p-[40px] text-center'>
          {/* Header with lines */}
          <div className='flex items-center justify-center mb-8'>
            <div className='flex-1 h-px bg-gray-200'></div>
            <span className='mx-4 text-sm font-semibold text-[#3039E5] uppercase tracking-wide'>
              {mentor.header}
            </span>
            <div className='flex-1 h-px bg-gray-200'></div>
          </div>

          {/* Image */}
          <div>
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={200}
              height={200}
              className='mx-auto rounded-full object-cover mb-8'
            />
          </div>

          {/* Name and Title */}
          <h3 className='text-lg font-semibold text-[#040940]'>
            {mentor.name}
          </h3>
          <p className='text-base text-[#040940] mb-3'>{mentor.title}</p>

          {/* Current Role */}
          <div className='mt-4 text-left'>
            <p className='text-base font-semibold mb-1 text-[#181D27]'>
              Current Role
            </p>
            <p className='text-base text-[#717680] whitespace-pre-line'>
              {mentor.role}
            </p>
          </div>

          {/* Expertise */}
          <div className='text-left mt-4'>
            <p className='text-base font-semibold mb-1 text-[#181D27]'>
              Expertise
            </p>
            <ul className='list-disc list-inside ml-2 mt-2 space-y-1'>
              {mentor.expertise.map((item, idx) => (
                <li key={idx} className='text-[#717680] text-[16px]'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default PlacementSupervisor
