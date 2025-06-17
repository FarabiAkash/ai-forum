import Image from 'next/image'
import logo from '@/public/assets/AIFB-Logo-Blue.svg'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-white text-sm text-gray-600 px-4'>
      {/* Top Footer */}
      <div className='max-w-7xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-16'>
        {/* Logo & Description */}
        <div className='col-span-2'>
          <Image
            src={logo}
            alt='AI Forum Bangladesh Logo'
            className='w-40 mb-4'
          />
          <p className='text-gray-500'>
            AI Forum Bangladesh is an independent
            <br /> NGO that promotes AI for everyone.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className='font-medium text-gray-500 mb-2'>Company</h4>
          <ul className='space-y-2 text-gray-700 font-medium'>
            <li>
              <a href='#' className='hover:text-black'>
                About us
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Work */}
        <div className='w-[350px]'>
          <h4 className='font-medium text-gray-500 mb-2'>Our Work</h4>
          <ul className='space-y-2 text-gray-700 font-medium'>
            <li>
              <a href='#' className='hover:text-black'>
                Building Innovation Ecosystem
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Career Care
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Academy of Intelligences
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className='font-medium text-gray-500 mb-2'>Social</h4>
          <ul className='space-y-2 text-gray-700 font-medium'>
            <li>
              <a href='#' className='hover:text-black'>
                Twitter
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-black'>
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className='font-medium text-gray-500 mb-2'>Legal</h4>
          <ul className='space-y-2 text-gray-700 font-medium'>
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
      <div className='bg-gray-50 py-4 px-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
          <p className='text-xs text-gray-500'>
            © 2025 AI Forum Bangladesh. All rights reserved.
          </p>
          <div className='flex gap-4 text-gray-400 text-lg md:justify-end'>
            <a href='#' className='hover:text-black'>
              <FaXTwitter />
            </a>
            <a href='#' className='hover:text-black'>
              <FaLinkedinIn />
            </a>
            <a href='#' className='hover:text-black'>
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
