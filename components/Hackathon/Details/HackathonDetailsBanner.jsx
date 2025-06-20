import WinnerCard from './WinnerCard'

const HackathonDetailsBanner = ({
  hackathonBanner,
  hackathonType,
  hackathonTitle,
  prize,
  organizer
}) => {
  return (
    <div
      className='relative w-full sm:h-[640px] bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage: `url(${hackathonBanner.src})`
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content aligned to bottom */}
      <div className='relative z-10 max-w-7xl mx-auto px-5 h-full flex items-end pt-36 pb-5 sm:pb-10'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between w-full items-center md:items-end gap-8 md:gap-0'>
          {/* Left Side */}
          <div className='max-w-3xl'>
            <p className='text-sm text-white mb-2'>
              June 15 – June 17, 2025 · ICCB, Dhaka
            </p>
            <h1 className='text-3xl md:text-4xl font-bold leading-snug mb-4'>
              {hackathonTitle}
            </h1>

            {/* Countdown + Register */}
            <div className='flex flex-wrap justify-start gap-12 items-center'>
              <div className='flex flex-wrap items-center gap-4'>
                {['13', '07', '36', '21'].map((val, idx) => (
                  <div key={idx} className='flex items-center gap-4'>
                    <div className='text-center bg-[#FFFFFF1A] text-white px-4 py-2'>
                      <div className='text-lg font-semibold'>{val}</div>
                      <div className='text-xs text-gray-200'>
                        {['DAYS', 'HRS', 'MINS', 'SECS'][idx]}
                      </div>
                    </div>
                    {idx !== 3 && (
                      <span className='text-base font-semibold'>:</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Register button only for ongoing */}
              {hackathonType === 'ongoing' && (
                <button className='bg-[#FFCF30] hover:bg-yellow-500 transition text-black font-semibold px-6 py-[17px] rounded-[1px]'>
                  REGISTER NOW
                </button>
              )}
            </div>
          </div>

          {/* Right Side: Floating Prize Card */}
          <WinnerCard organizer={organizer} prize={prize} />
        </div>
      </div>
    </div>
  )
}

export default HackathonDetailsBanner
