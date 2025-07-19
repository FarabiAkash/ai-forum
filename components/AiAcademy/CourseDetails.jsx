import Image from 'next/image';
import React from 'react'

const CourseDetails = ({ course }) => {
  const { courseOutline, courseMentor } = course;
  return (
    <div className="max-w-7xl mx-auto px-4 py-15">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start">
        {/* course outline */}
        <div className="bg-white px-10 py-10">
          <div className="flex items-end mb-6">
            <h2 className="text-[#3746e9] text-[14px] font-semibold mr-1 uppercase">Course Outline</h2>
            <hr className="flex-1 border-t border-black opacity-15" />
          </div>
          <div className="space-y-6">
            {courseOutline && courseOutline.map((mod, idx) => (
              <div key={mod.module}>
                <div className="mb-2 font-semibold text-[18px]">
                  {mod.module} {mod.title}
                </div>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  {mod.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="text-[#181D27] text-[16px]">{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* course mentor */}
        <div className="bg-white px-10 py-10 space-y-5">
          {/* Mentor info goes here */}
          <div className="flex items-center">
            <hr className="flex-1 border-t border-black opacity-15" />
            <h2 className="text-[#3746e9] text-[14px] font-semibold mr-2 ml-2 uppercase">Course Mentor</h2>
            <hr className="flex-1 border-t border-black opacity-15" />
          </div>
          <div className='flex justify-center flex-col items-center'>
            <Image
              src={courseMentor.image}
              alt={courseMentor.name}
              width={160}
              height={160}
              className='rounded-xl object-cover'
            />
            <div className='mt-4 text-center'>
              <h3 className='text-[#040940] text-[18px] font-semibold'>{courseMentor.name}</h3>
              <p className='text-[#040940] text-[16px]'>{courseMentor.qualifications}</p>
            </div>
          </div>
          <div>
            <p className='text-[#040940] text-[16px] font-semibold'>Current Role</p>
            <p className='text-[#717680] text-[16px]  leading-[20px] mt-2'>{courseMentor.role}</p>
          </div>
          <div>
            <p className='text-[#040940] text-[16px] font-semibold'>Expertise</p>
            <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
              {courseMentor.expertise.map((expertise, tIdx) => (
                <li key={tIdx} className="text-[#717680] text-[16px]">{expertise}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails