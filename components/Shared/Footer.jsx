import Image from 'next/image'
import logo from '@/public/assets/AIFB-Logo-Blue.svg'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
      <div className='bg-white text-sm text-gray-600 px-5'>
        {/* Top Footer */}
        <div className='max-w-7xl mx-auto py-12 flex flex-wrap justify-start md:justify-around 2xl:justify-between items-center gap-8 sm:gap-16 2xl:gap-10'>
          {/* Logo & Description */}
          <div>
            <Image
              src={logo}
              alt='AI Forum Bangladesh Logo'
              className='w-40 '
            />
            <p className='text-[#717680] text-base leading-[24px]'>
              AI Forum Bangladesh is an independent organisation
              <br />
              that promotes responsible AI for everyone.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className='font-semibold text-[#717680] mb-2 leading-[20px]'>
              Company
            </h4>
            <ul className='space-y-2 font-semibold text-[#535862] mb-2 leading-[20px]'>
              <li>
                <a href='/about-us' className='hover:text-black'>
                  About us
                </a>
              </li>
              <li>
                <a href='/our-work/career-care' className='hover:text-black'>
                  Careers
                </a>
              </li>
              <li>
                <a href='/contact-us' className='hover:text-black'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h4 className='font-semibold text-[#717680] mb-2 leading-[20px]'>
              Our Work
            </h4>
            <ul className='space-y-2 font-semibold text-[#535862] mb-2 leading-[20px]'>
              <li>
                <a
                  href='/our-work/innovation-ecosystem'
                  className='hover:text-black'
                >
                  Building Innovation Ecosystem
                </a>
              </li>
              <li>
                <a href='/our-work/career-care' className='hover:text-black'>
                  Career Care
                </a>
              </li>
              <li>
                <a href='/our-work/ai-academy' className='hover:text-black'>
                  Academy of Intelligences
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className='font-semibold text-[#717680] mb-2 leading-[20px]'>
              Social
            </h4>
            <ul className='space-y-2 font-semibold text-[#535862] mb-2 leading-[20px]'>
              <li>
                <a
                  href='https://www.linkedin.com/company/aiforumbd/'
                  target='_blank'
                  className='hover:text-black'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/aiforumbd.official'
                  target='_blank'
                  className='hover:text-black'
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className='font-semibold text-[#717680] mb-2 leading-[20px]'>
              Legal
            </h4>
            <ul className='space-y-2 font-semibold text-[#535862] mb-2 leading-[20px]'>
              <li>
                <a href='#' className='hover:text-black'>
                  Terms
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-black'>
                  Privacy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-black'>
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
      <div className='bg-gray-50 py-4 px-5'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-base text-[#717680] text-center md:text-left'>
            © 2025 AI Forum Bangladesh. All rights reserved.
          </p>
          <div className='flex gap-4 text-[#A4A7AE] text-lg'>
            <a href='#' className='hover:text-black'>
              <FaXTwitter size={22} />
            </a>
            <a
              href='https://www.linkedin.com/company/aiforumbd/'
              target='_blank'
              className='hover:text-black'
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href='https://www.facebook.com/aiforumbd.official'
              target='_blank'
              className='hover:text-black'
            >
              <FaFacebookF size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
