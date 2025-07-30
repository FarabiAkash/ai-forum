const LimitedSpot = () => {
  return (
    <div className='bg-[#00000008] text-center mt-6 sm:mt-16'>
      <div className='max-w-7xl mx-auto px-5 py-6 sm:py-16'>
        <h2 className='text-2xl sm:text-[40px] font-bold text-[#040940] mb-3'>
          Limited Spots Available!
        </h2>
        <p className='text-sm sm:text-base text-[#717680] mb-6 max-w-xl mx-auto'>
          Free registration required to attend, complete the registration
          process to join.
        </p>

        <button className='bg-[#3039E5] hover:bg-[#2F2DE2] text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-[2px] transition'>
          FREE REGISTRATION
        </button>

        <p className='text-xs sm:text-sm text-[#717680] mt-4'>
          Having trouble to register{' '}
          <a href='#' className='underline text-[#2B2B2B] hover:text-[#3D3BFB]'>
            Contact Us
          </a>
        </p>
      </div>
    </div>
  )
}

export default LimitedSpot
