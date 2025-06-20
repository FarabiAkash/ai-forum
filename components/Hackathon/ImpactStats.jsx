import { GoArrowRight } from 'react-icons/go'

const stats = [
  { value: '5,000+', label: 'Students Trained' },
  { value: '6', label: 'Divisions Reached' },
  { value: '40+', label: 'Research Placements' },
  { value: '25+', label: 'Startups Incubated' }
]

const ImpactStats = () => {
  return (
    <section className='py-8 sm:py-16 px-5 max-w-7xl mx-auto '>
      <div className='grid md:grid-cols-5 gap-8 items-center'>
        {/* Left Content */}
        <div className='md:col-span-2'>
          <h2 className='text-2xl md:text-[32px] font-bold text-[#040940 mb-4'>
            Building a Smarter Future, <br /> One Step at a Time
          </h2>
          <p className='text-[#717680] text-[18px] leading-[24px]'>
            Every milestone reflects our commitment to empowering youth,
            advancing innovation, and building an AI-ready Bangladesh.
          </p>
        </div>

        {/* Stat Cards */}
        <div className='md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {stats.map((item, idx) => (
            <div
              key={idx}
              className='bg-white rounded-md shadow-sm border border-gray-100 p-4 text-center'
            >
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
      </div>
    </section>
  )
}

export default ImpactStats
