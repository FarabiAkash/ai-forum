import Image from 'next/image'
import AiAcademyImg from '@/public/assets/home/AIAcademy.jpg'
import { GoArrowRight } from 'react-icons/go'

const AiAcademy = () => {
  return (
    <section className='lg:relative bg-[#285473] px-5 lg:pt-24 py-4 sm:py-8 lg:pb-0 h-full lg:h-[504px]'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 relative z-10 gap-8 lg:gap-12'>
        {/* Left Text Content */}
        <div className='text-white lg:w-[520px] lg:mt-10'>
          <h2 className='text-2xl md:text-[40px] font-bold mb-4'>AI Academy</h2>
          <p className='text-sm md:text-[18px] leading-[24px] mb-6'>
            We empower learners with practical AI training, sector-focused
            workshops, and global-standard curricula—creating a dynamic
            knowledge hub where students, professionals, and institutions gain
            the skills to innovate, adapt, and lead in the AI-driven future
          </p>
          <a
            href='/our-work/ai-academy'
            className='inline-flex items-center gap-2 bg-[#FFFFFF26] text-white px-6 py-[12px]  text-sm font-semibold'
          >
            Learn More <GoArrowRight size={22} />
          </a>
        </div>

        {/* Right Image (Overlapping) */}
        <div className='lg:relative h-full w-full'>
          <div className=' right-0'>
            <div className='lg:absolute w-full h-auto  overflow-hidden'>
              <Image
                src={AiAcademyImg}
                alt='AI Academy Illustration'
                className='w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-109'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AiAcademy
