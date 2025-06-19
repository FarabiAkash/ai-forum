import Image from 'next/image'
import { LuBellRing } from 'react-icons/lu'
import { FaArrowRight } from 'react-icons/fa6'

const HackathonCard = ({
  hackathonBanner,
  hackathonType,
  hackathonTitle,
  hackathonSubtitle,
  hackathonDate,
  hackathonVenue
}) => {
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

  return (
    <div className='bg-[#FFFFFF] overflow-hidden border border-[#0000000D]'>
      <div className='p-4 sm:p-5 rounded-[1px]'>
        <Image
          src={hackathonBanner}
          alt={hackathonTitle}
          className='w-full h-48 object-cover rounded-[1px]'
          width={500}
          height={300}
        />

        {/* Content */}
        <div className='mt-3'>
          {/* Status Badge */}
          <div className='mb-1'>
            <span
              className={`inline-block text-xs font-medium px-2 py-1 rounded-[4px] ${
                badgeMap[hackathonType]?.className || 'text-gray-500'
              }`}
            >
              {badgeMap[hackathonType]?.label || ''}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className='text-[18px] font-bold text-[#040940] leading-[24px] mb-1'>
            {hackathonTitle}
          </h3>
          <p className='text-sm text-[#181D27] leading-[16px]'>
            {hackathonSubtitle}
          </p>

          {/* footer */}
          <div className='flex flex-wrap justify-between items-center'>
            {/* Date & Location */}
            <div className='mt-4 flex flex-col items-start text-sm text-[#717680] leading-[24px] font-normal'>
              <div className='flex items-center gap-1'>
                <FaArrowRight size={15} />
                {hackathonDate}
              </div>
              <div className='flex items-center gap-1'>
                <FaArrowRight size={15} />
                {hackathonVenue}
              </div>
            </div>

            {/* Button */}
            <div className='mt-4 text-right'>
              <button
                className={`min-w-[145px] px-4 py-[10px] ${
                  buttonMap[hackathonType]?.className ||
                  'bg-gray-100 text-gray-800'
                }`}
              >
                {buttonMap[hackathonType]?.icon}
                {buttonMap[hackathonType]?.label || 'Learn More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackathonCard
