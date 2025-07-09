import Image from 'next/image'
import innovationImg from '@/public/assets/home/Innovation.jpg'
import { GoArrowRight } from 'react-icons/go'

const InnovationSection = () => {
  return (
    <section className='relative bg-[#142328] text-white px-5 py-4 sm:py-8 lg:pt-36 lg:pb-20 overflow-visible'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 relative z-10 gap-4 lg:gap-12'>
        {/* Image Side */}
        <div className='relative'>
          <div className='lg:absolute lg:-top-24 w-full z-10 flex justify-center'>
            <div className='overflow-hidden lg:max-w-[600px] w-full'>
              <Image
                src={innovationImg}
                alt='Building Innovation Ecosystem'
                className='w-full h-auto object-contain transform transition-transform duration-500 ease-in-out hover:scale-109'
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className='flex items-center lg:px-4 py-6 lg:py-0 z-10'>
          <div className='max-w-lg  lg:mx-0 text-left'>
            <h2 className='text-3xl md:text-[40px] font-bold mb-4 leading-[48px]'>
              Building Innovation <br /> Ecosystem
            </h2>
            <p className='text-base md:text-lg font-medium mb-6 leading-[24px] text-gray-300'>
              We work on both fronts crafting the ideas that drive innovation,
              and activating the ecosystem by turning bold ideas into real-world
              action.
            </p>
            <a
              href='#team'
              className='inline-flex items-center gap-2 px-6 py-[12px] bg-[#FFFFFF26] text-white hover:bg-white hover:text-black transition text-sm font-semibold tracking-[2px] uppercase'
            >
              LEARN MORE <GoArrowRight size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InnovationSection
