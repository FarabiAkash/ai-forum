import { GoPeople } from 'react-icons/go'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FaArrowTrendUp, FaRegFaceSmile } from 'react-icons/fa6'
import { FiFlag } from 'react-icons/fi'
import { IoFlashOutline } from 'react-icons/io5'

const HowWeWork = () => {
  const items = [
    {
      icon: <GoPeople size={24} className='text-[#3039E5]' />,
      title: 'Empower People First',
      desc: 'We champion youth, founders, and professionals with the support, resources, and belief they need to thrive in an AI-driven world.'
    },
    {
      icon: <IoMdHeartEmpty size={24} className='text-[#3039E5]' />,
      title: 'Build with Purpose',
      desc: 'We create what matters — real-world solutions that solve deep challenges, spark inclusive innovation, and empower the people who need it most.'
    },
    {
      icon: <FaArrowTrendUp size={24} className='text-[#3039E5]' />,
      title: 'Impact Globally',
      desc: 'We connect grassroots innovation with global standards — blending context, creativity, and strategic reach.'
    },
    {
      icon: <IoFlashOutline size={24} className='text-[#3039E5]' />,
      title: 'Chase Curiosity',
      desc: 'We don’t settle for answers — we chase questions. We test, tinker, and dive deep until something clicks. Curiosity is our method, discovery our habit.'
    },
    {
      icon: <FaRegFaceSmile size={24} className='text-[#3039E5]' />,
      title: 'Keep It Human',
      desc: "Tech is only powerful when it's meaningful. We build solutions that respect ethics, reflect empathy, and serve people."
    },

    {
      icon: <FiFlag size={24} className='text-[#3039E5]' />,
      title: 'Collaborate Over Compete',
      desc: 'We don’t gatekeep ideas. We share, co-create, and grow with partners, teams, and communities around us.'
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
