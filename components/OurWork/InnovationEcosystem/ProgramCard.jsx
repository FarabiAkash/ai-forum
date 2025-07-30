'use client'
import Image from 'next/image'
import { LuBellRing } from 'react-icons/lu'
import { FaArrowRight } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'

const ProgramCard = ({
  id,
  programBanner,
  programType,
  programTitle,
  programDate,
  programVenue
}) => {
  const router = useRouter()

  // Badge text and color
  const badgeMap = {
    ongoing: {
      label: '3 days left',
      className: 'text-[14px] font-[400] text-[#717680] !p-0'
    },
    upcoming: {
      label: 'Upcoming',
      className: 'bg-[#FFDA47] text-[#181D27] text-[12px]'
    },
    ended: { label: 'Event Ended', className: 'bg-[#FF47471A] text-[#FF4747]' }
  }

  // CTA button
  const buttonMap = {
    ongoing: {
      label: 'Register',
      className:
        'bg-[#3039E5] text-white font-semibold tracking-wide text-sm uppercase'
    },
    upcoming: {
      label: 'Get Notified',
      className:
        'bg-[#0000000D] text-[#040940] font-medium  text-sm flex justify-center items-center gap-2',
      icon: <LuBellRing />
    },
    ended: {
      label: 'GALLERY',
      className:
        'bg-[#0000000D] text-[#3039E5] text-sm font-semibold tracking-wide'
    }
  }

  //   const handleRegister = type => {
  //     if (type === 'Register') {
  //       router.push(`/program/register/${id}`)
  //     }
  //   }

  return (
    <div className='bg-[#FFFFFF] overflow-hidden border border-[#0000000D]'>
      <div className='p-4 sm:p-5 rounded-[1px]'>
        <Image
          src={programBanner}
          alt={programTitle}
          className='w-full h-48 object-cover rounded-[1px] cursor-pointer'
          width={500}
          height={300}
          onClick={() =>
            router.push(`/our-work/innovation-ecosystem/${id}/${programTitle}`)
          }
        />

        {/* Content */}
        <div className='mt-3'>
          {/* Status Badge */}
          <div
            className='mb-1  cursor-pointer'
            // onClick={() =>
            //   router.push(`/our-work/innovation-ecosystem/${id}/${programTitle}`)
            // }
          >
            <span
              className={`inline-block text-xs font-medium px-2 py-1 rounded-[4px] ${
                badgeMap[programType]?.className || 'text-gray-500'
              }`}
            >
              {badgeMap[programType]?.label || ''}
            </span>
          </div>

          {/* Title & Description */}
          <h3
            className='text-[18px] font-bold text-[#040940] leading-[24px] mb-1  cursor-pointer'
            onClick={() =>
              router.push(
                `/our-work/innovation-ecosystem/${id}/${programTitle}`
              )
            }
          >
            {programTitle}
          </h3>

          {/* footer */}
          <div className='flex  justify-between items-center'>
            {/* Date & Location */}
            {programType !== 'upcoming' && (
              <div className='mt-4 flex flex-col items-start text-sm text-[#717680] leading-[24px] font-normal cursor-pointer'>
                <div className='flex items-center gap-1'>
                  <FaArrowRight size={15} />
                  <span
                    className={`${programType === 'ended' && 'line-through'}`}
                  >
                    {programDate}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <FaArrowRight size={15} />
                  <span className='truncate max-w-[180px]'>
                    {programVenue.split(' ').slice(0, 3).join(' ') +
                      (programVenue.split(' ').length > 3 ? '...' : '')}
                  </span>
                </div>
              </div>
            )}

            {/* Button */}
            <div className='mt-4 text-right  !cursor-pointer'>
              <button
                className={` px-4 py-[10px] ${
                  buttonMap[programType]?.className ||
                  'bg-gray-100 text-gray-800'
                } ${programType === 'upcoming' ? 'w-90' : 'min-w-[145px]'}`}
              >
                {buttonMap[programType]?.icon}
                {buttonMap[programType]?.label || 'Learn More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard
