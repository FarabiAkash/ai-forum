import { GoPeople } from 'react-icons/go'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FaArrowTrendUp, FaRegFaceSmile } from 'react-icons/fa6'
import { FiFlag } from 'react-icons/fi'
import { IoFlashOutline } from 'react-icons/io5'

const HowWeWork = () => {
  const items = [
    {
      icon: <GoPeople size={24} className='text-[#3039E5]' />,
      title: 'Care about our team',
      desc: 'Understand what matters to our employees. Give them what they need to do their best work.'
    },
    {
      icon: <IoMdHeartEmpty size={24} className='text-[#3039E5]' />,
      title: 'Be excellent to each other',
      desc: 'No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.'
    },
    {
      icon: <FaArrowTrendUp size={24} className='text-[#3039E5]' />,
      title: 'Pride in what we do',
      desc: 'Value quality and integrity in everything we do. At all times. No exceptions.'
    },
    {
      icon: <FaRegFaceSmile size={24} className='text-[#3039E5]' />,
      title: "Don't #!&$ the customer",
      desc: "Understand customers' stated and unstated needs. Make them wildly successful."
    },
    {
      icon: <FiFlag size={24} className='text-[#3039E5]' />,
      title: 'Do the impossible',
      desc: 'Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"'
    },
    {
      icon: <IoFlashOutline size={24} className='text-[#3039E5]' />,
      title: 'Sweat the small stuff',
      desc: 'We believe the best products come from the best attention to detail. Sweat the small stuff.'
    }
  ]

  return (
    <section className='bg-[#FAFAFA] sm:py-20 px-5'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-2xl md:text-[36px] font-semibold leading-[44px] text-[#181D27] mb-3'>
          How we work?
        </h2>
        <p className='text-[#535862] mb-10 sm:mb-20 text-[20px] leading-[30px]'>
          Our shared values keep us connected and guide us as one team.
        </p>

        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {items.map((item, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center text-center px-4'
            >
              <div className='w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center mb-4'>
                {item.icon}
              </div>
              <h3 className='font-medium text-xl leading-[30px] mb-2 text-[#181D27]'>
                {item.title}
              </h3>
              <p className='text-base text-[#535862] leading-[24px]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
