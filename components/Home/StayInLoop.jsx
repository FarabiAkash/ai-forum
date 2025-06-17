const StayInLoop = () => {
  return (
    <section className='bg-[#00000008] px-4 py-20 text-center lg:mt-50 xl:mt-80'>
      <div className='max-w-xl mx-auto'>
        {/* Heading */}
        <h2 className='text-2xl md:text-[40px] md:leading-[48px] font-bold text-[#040940]'>
          Stay in the Loop
        </h2>

        {/* Description */}
        <p className='text-sm md:text-base text-[#717680] mb-8'>
          Get updates on upcoming events, new programs, and inspiring stories
          from <br className='hidden sm:block' />
          Bangladesh’s AI future.
        </p>

        {/* Email input + Button */}
        <form
          //   onSubmit={e => e.preventDefault()}
          className='flex flex-col sm:flex-row items-center justify-center gap-3'
        >
          <input
            type='email'
            placeholder='Enter your email'
            className='px-4 py-[10px] w-full sm:w-[340px] focus:outline-none bg-white border border-[#0000001A] text-[#A4A7AE]'
          />
          <button
            type='submit'
            className='bg-[#3039E5] text-white px-6 py-[10px] text-base font-semibold uppercase hover:bg-[#2f2dff] transition'
          >
            Subscribe
          </button>
        </form>

        {/* Privacy note */}
        <p className='text-xs text-gray-500 mt-4'>
          We care about your data in our{' '}
          <a href='#' className='underline hover:text-black'>
            privacy policy
          </a>
        </p>
      </div>
    </section>
  )
}

export default StayInLoop
