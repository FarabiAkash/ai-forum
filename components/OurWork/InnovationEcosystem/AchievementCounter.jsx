import { GoArrowRight } from 'react-icons/go'

const stats = [
  { value: '5,000+', label: 'Students Trained' },
  { value: '300+', label: 'Projects Supported' },
  { value: '6', label: 'Divisions Reached' },
  { value: '40+', label: 'Research Placements' },
  { value: '25+', label: 'Startups Incubated' }
]

const AchievementCounter = () => {
  return (
    <section className='py-8 sm:py-16 px-5 max-w-7xl mx-auto '>
      <div className='flex flex-col justify-center items-center pb-10'>
        <h2 className='text-2xl md:text-[32px] font-bold text-[#040940 mb-4'>
          Building a Smarter Future, One Step at a Time
        </h2>
        <p className='text-[#717680] text-[18px] max-w-3xl text-center leading-[24px]'>
           Every number here tells a story of students empowered, startups
          launched, and ideas brought to life across Bangladesh.
        </p>
      </div>

      {/* Stat Cards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
        {stats.map((item, idx) => (
          <div key={idx} className='bg-white rounded-[1px] p-4 text-center'>
            <div className='text-[#3039E5] flex justify-center sm:my-4'>
              <GoArrowRight size={40} />
            </div>
            <div className='text-[24px] font-semibold leading-[32px] text-black'>
              {item.value}
            </div>
            <p className='text-sm text-[#717680] mt-1'>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AchievementCounter
