const RegistrationBottom = () => {
  return (
    <section className='bg-[#00000008] py-16 text-center px-4 mt-16'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-2xl lg:text-[40px] font-bold text-[#040940] lg:leading-[48px] mb-4'>
          Registration Open!
        </h2>
        <p className='text-[#717680] text-base leading-[24px] mb-8'>
          CodeCure 2025 is your chance to solve real healthcare challenges,
          connect with industry leaders, and win exciting prizes. Whether you're
          a coder, designer, or visionary — this is where your ideas come to
          life.
        </p>

        <button className='bg-[#3039E5] text-white font-semibold text-sm px-8 py-3 rounded-[1px] mb-4 tracking-wide !cursor-pointer'>
          REGISTER NOW
        </button>

        <p className='text-sm leading-[16px] text-[#181D27] mb-3'>
          Spots are limited. Registration closes June 12, 2025
        </p>

        <p className='text-sm text-[#717680]'>
          Having trouble to register?{' '}
          <a href='#' className='text-[#717680] font-medium cursor-pointer'>
            Contact Us
          </a>
        </p>
      </div>
    </section>
  )
}

export default RegistrationBottom
