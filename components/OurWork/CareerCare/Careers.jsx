import { careersData } from '@/data/careersData'
import CareerLargeCard from './CareerLargeCard'
import CareerCard from './CareerCard'

const Careers = () => {
  return (
    <div className='space-y-12'>
      {/* Section 1 */}
      <div className='p-5 max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6'>
        {careersData.section1.map((item, index) =>
          item.type === 'large' ? (
            <CareerLargeCard key={index} {...item} />
          ) : (
            <CareerCard key={index} {...item} />
          )
        )}
      </div>

      {/* Section 2 */}
      <div className='bg-[#1B4C66]'>
        <div className='p-5 max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6'>
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
