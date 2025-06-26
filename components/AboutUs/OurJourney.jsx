import Image from 'next/image'
import journeyImg from '@/public/assets/about-us/our-journey.jpg'

const OurJourney = () => {
  return (
    <section className='py-16 bg-[#FAFAFA]'>
      <div className='max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 items-center'>
        {/* Left Image */}
        <div className='w-full h-auto'>
          <Image
            src={journeyImg}
            alt='Our Journey'
            className='w-full h-full object-cover'
            placeholder='blur'
          />
        </div>

        {/* Right Content */}
        <div className='xl:p-6'>
          <p className='text-base leading-[24px] text-[#3039E5] font-semibold mb-2'>
            We’ve helped hundreds of companies
          </p>
          <h2 className='text-3xl md:text-[48px] font-bold text-[#181D27] lg:leading-[60px] mb-4'>
            We’re only just getting <br />
            started on our journey
          </h2>
          <p className='text-[#000000DE] text-[18px] mb-4 leading-[24px]'>
            AI Forum Bangladesh is an independent, non-profit organization
            dedicated to preparing the next generation for the era of Artificial
            Intelligence. We aim to bridge the gap between talent and
            opportunity by fostering innovation, building career pathways, and
            supporting meaningful ventures.
          </p>
          <p className='text-[#000000DE] text-[18px] leading-[24px]'>
            Our mission is to instill an innovative mindset, provide
            professional mentorship, and create accessible platforms for
            learning, experimentation, and collaboration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurJourney
