import Image from 'next/image'
import leftImg from '@/public/assets/our-work/innovation-ecosystem/leftImg.png'
import rightImg from '@/public/assets/our-work/innovation-ecosystem/rightImg.png'
import { MdKeyboardArrowRight } from 'react-icons/md'

const EcoCard = ({ item }) => {
  return (
    <div className='xl:w-[290px] bg-white rounded-[1px] flex flex-col justify-center items-center gap-4 px-4 py-6 lg:py-4'>
      <h3 className='text-[20px] sm:leading-[24px] font-semibold text-center'>
        {item.name}
      </h3>
      <p className='text-[#717680] text-[16px] sm:leading-[24px] font-normal text-center'>
        {item.desc}
      </p>
      <a
        href='#'
        className='flex justify-center items-center gap-2 text-[#717680] text-[15px] sm:leading-[24px]'
      >
        <span className='underline'>Learn more</span>
        <MdKeyboardArrowRight size={20} className='mt-1' />
      </a>
    </div>
  )
}

const EcosystemsContainer = ({ ecoSystems }) => {
  return (
    <div className='py-4 px-5 max-w-7xl mx-auto'>
      {/* top */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
        {/* left img */}
        <div className='w-full h-full'>
          <Image
            src={leftImg}
            alt='Building Innovation Ecosystem'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center'>
          {ecoSystems.length > 0 &&
            ecoSystems
              .slice(0, 4)
              .map(item => <EcoCard key={item.id} item={item} />)}
        </div>
      </div>

      {/* bottom */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 my-6 sm:my-10'>
        <div className='order-2 lg:order-1  grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center'>
          {ecoSystems.length > 0 &&
            ecoSystems
              .slice(4)
              .map(item => <EcoCard key={item.id} item={item} />)}
        </div>
        {/* right img */}
        <div className='w-full h-full order-1 lg:order-2'>
          <Image
            src={rightImg}
            alt='Building Innovation Ecosystem'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}
export default EcosystemsContainer
