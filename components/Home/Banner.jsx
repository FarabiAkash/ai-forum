import bgBanner from '@/public/assets/home/HomeBanner.jpg'
import { GoArrowRight } from 'react-icons/go'

const Banner = () => {
  return (
    <section
      className='relative w-full h-[640px] bg-cover bg-center bg-no-repeat flex items-start justify-center text-white'
      style={{
        backgroundImage: `url(${bgBanner.src})`
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent z-0' />

      {/* Content */}
      <div className='relative z-10 text-center px-4 mt-28 md:mt-[23rem]'>
        <h1 className='text-4xl md:text-5xl mb-4 font-[700] leading-[64px]'>
          Responsible AI for All
        </h1>
        <p className='text-md md:text-lg mb-6 leading-[24px]  font-sans text-center  max-w-[790px]'>
          AI Forum Bangladesh empowers youth with the skills, mindset, and
          purpose to thrive in an AI-driven world. From business to medicine to
          tech we’ll help you find your path and lead it.
        </p>
        <a
          href='#team'
          className='inline-flex items-center gap-2 px-6 py-[12px] border border-white text-white hover:bg-white hover:text-black transition text-sm font-semibold tracking-wide uppercase'
        >
          Explore Our Team <GoArrowRight size={22} />
        </a>
      </div>
    </section>
  )
}

export default Banner
