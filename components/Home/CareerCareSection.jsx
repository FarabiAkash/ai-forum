import { GoArrowRight } from 'react-icons/go'
import Image from 'next/image'
import careerImg from '@/public/assets/home/CareerCare.jpg'

const CareerCareSection = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-col'>
      <section className='bg-white text-center py-8 px-5 lg:pt-36 xl:pt-60 lg:pb-20  max-w-4xl mx-auto'>
        {/* Title */}
        <h2 className='text-2xl md:text-[40px] md:leading-[40px] font-bold text-[#040940] mb-4'>
          Career Care
        </h2>

        {/* Description */}
        <p className='text-sm md:text-[18px] font-medium text-[#717680] mb-6 leading-[24px] max-w-4xl mx-auto'>
          Whether you’re aiming for a dream job or a global research seat we
          help you get there. From local career shifts to international
          placements, we guide your next big move with purpose and strategy.
        </p>

        {/* Button */}
        <a
          href='#'
          className='inline-flex items-center gap-2 bg-[#0000000D] text-[#181D27] px-6 py-[12px] hover:bg-black hover:text-white transition text-sm font-semibold'
        >
          Learn More <GoArrowRight size={22} />
        </a>
      </section>
      <div className='lg:relative lg:mt-44 lg:h-[320px] bg-[#142328]'>
        <div className='overflow-hidden lg:absolute bottom-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[15%] w-full lg:max-w-5xl h-auto '>
          <Image
            src={careerImg}
            alt='career care image'
            className='w-full h-auto object-contain transition-transform duration-500 ease-in-out hover:scale-109'
          />
        </div>
      </div>
    </div>
  )
}

export default CareerCareSection
