import { careersData } from '@/data/careersData'
import CareerLargeCard from './CareerLargeCard'
import CareerCard from './CareerCard'

const Careers = () => {
  return (
    <div className='space-y-6'>
      {/* Section 1 */}
      <div className='p-5 max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 xl:gap-6'>
        {careersData.section1.map((item, index) =>
          item.type === 'large' ? (
            <CareerLargeCard key={index} {...item} />
          ) : (
            <CareerCard key={index} {...item} />
          )
        )}
      </div>

      {/* Section 2 */}
      <div className='bg-[#285473]'>
        <div className='px-5 py-10 sm:py-20 max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-4 xl:gap-6'>
          {careersData.section2.map((item, index) =>
            item.type === 'large' ? (
              <CareerLargeCard key={index} {...item} />
            ) : (
              <CareerCard key={index} {...item} />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Careers
