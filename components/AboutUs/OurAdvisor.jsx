import { advisors } from '@/data/advisorsData'
import SingleCard from './SingleCard'

const OurAdvisor = () => {
  return (
    <section className='py-12 bg-[#FAFAFA]'>
      <div className='max-w-7xl mx-auto px-5'>
        <h2 className='text-3xl font-bold text-center mb-4'>Our Advisors</h2>
        <p className='text-center text-gray-600 max-w-3xl mx-auto mb-10'>
          We're proud to be mentored by visionary leaders in AI, science,
          health, sustainability, and entrepreneurship, shaping our path with
          deep expertise and bold perspectives.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {advisors.map((advisor, index) => (
            <SingleCard
              key={index}
              name={advisor.name}
              image={advisor.image}
              description={advisor.description}
              isTeam={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurAdvisor
