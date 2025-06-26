import { GoMail } from 'react-icons/go'
import { MdPhone } from 'react-icons/md'
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5'

const VisitUs = () => {
  return (
    <section className='bg-[#00000008] py-16 px-5'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl md:text-[40px] md:leading-[48px] font-bold text-[#040940] mb-3'>
          We’d love your visit
        </h2>
        <p className='text-[#717680] mb-10 sm:mb-24 text-base leading-[24px]'>
          Our friendly team is always ready to welcome you.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm'>
          {/* Email */}
          <div className='flex flex-col items-center'>
            <div className='w-12 h-12 shadow rounded-full bg-white  flex items-center justify-center mb-4'>
              <GoMail className='text-[#3039E5]' size={24} />
            </div>
            <h3 className='text-base font-semibold text-[#181D27] mb-1'>
              Email
            </h3>
            <p className='mb-1 text-[#717680]'>
              Our friendly team is here to help.
            </p>
            <a
              href='mailto:hi@untitledui.com'
              className='text-[#3039E5] font-semibold text-base leading-[24px]'
            >
              hi@untitledui.com
            </a>
          </div>

          {/* Office */}
          <div className='flex flex-col items-center'>
            <div className='w-12 h-12 shadow rounded-full bg-white  flex items-center justify-center mb-4'>
              <IoLocationOutline className='text-[#3039E5]' size={24} />
            </div>
            <h3 className='text-base font-semibold text-[#181D27] mb-1'>
              Office
            </h3>
            <p className='mb-1 text-[#717680]'>
              Come say hello at our office HQ.
            </p>
            <p className='text-[#3039E5] font-semibold text-base leading-[24px] text-center'>
              100 Smith Street
              <br />
              Collingwood VIC 3066 AU
            </p>
          </div>

          {/* Phone */}
          <div className='flex flex-col items-center'>
            <div className='w-12 h-12 shadow rounded-full bg-white  flex items-center justify-center mb-4'>
              <IoCallOutline className='text-[#3039E5]' size={24} />
            </div>
            <h3 className='text-base font-semibold text-[#181D27] mb-1'>
              Phone
            </h3>
            <p className='mb-1 text-[#717680]'>Mon–Fri from 8am to 5pm.</p>
            <a
              href='tel:+1555000000'
              className='text-[#3039E5] font-semibold text-base leading-[24px]'
            >
              +1 (555) 000–0000
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitUs
