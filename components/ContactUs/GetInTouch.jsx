'use client'

import Image from 'next/image'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import getInTouchImg from '@/public/assets/contact-us/getInTouch.png'
import toast from 'react-hot-toast'

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

const handleSubmit = async e => {
  e.preventDefault()

  if (!formData.agree) {
    toast.error('You must agree to the privacy policy.', {
      position: 'top-center'
    })
    return
  }

  toast.loading('Sending message...', { position: 'top-center' })

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,   // Your Service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,  // Your Template ID
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY    // Your Public Key
    )

    toast.dismiss()
    toast.success('Message sent successfully!', { position: 'top-center' })

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      agree: false
    })

    console.log('SUCCESS!', result.text)
  } catch (error) {
    toast.dismiss()
    toast.error('Failed to send message. Please try again.', {
      position: 'top-center'
    })
    console.error('FAILED...', error)
  }
}

  return (
    <section className='bg-white sm:py-16 px-5'>
      <div className='max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2  items-start sm:gap-12'>
        {/* Left: Form */}
        <div className='order-2 md:order-1'>
          <h2 className='text-2xl md:text-[36px] font-semibold md:leading-[44px] text-[#181D27] mb-2'>
            Get in touch
          </h2>
          <p className='text-[#717680] mb-8 text-[20px] leading-[30px]'>
            Our friendly team would love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='flex gap-4 flex-col sm:flex-row'>
              <div className='flex-1'>
                <label className='block text-base font-medium mb-1'>
                  First name
                </label>
                <input
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  type='text'
                  placeholder='First name'
                  className='w-full border border-[#717680] px-3 py-2 text-sm outline-none'
                  required
                />
              </div>
              <div className='flex-1'>
                <label className='block text-base font-medium mb-1'>
                  Last name
                </label>
                <input
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  type='text'
                  placeholder='Last name'
                  className='w-full border border-[#717680] px-3 py-2 text-sm outline-none'
                  required
                />
              </div>
            </div>

            <div>
              <label className='block text-base font-medium mb-1'>Email</label>
              <input
                name='email'
                value={formData.email}
                onChange={handleChange}
                type='email'
                placeholder='you@domain.com'
                className='w-full border border-[#717680] px-3 py-2 text-sm outline-none'
                required
              />
            </div>

            <div>
              <label className='block text-base font-medium mb-1'>
                Phone number
              </label>
              <input
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                type='tel'
                placeholder='01912 123456'
                className='w-full border border-[#717680] px-3 py-2 text-sm outline-none'
              />
            </div>

            <div>
              <label className='block text-base font-medium mb-1'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Write your message...'
                rows={5}
                className='w-full border border-[#717680] px-3 py-2 text-sm outline-none resize-none'
              />
            </div>

            <div className='flex items-center gap-2 text-[24px] text-[#717680]'>
              <input
                name='agree'
                type='checkbox'
                checked={formData.agree}
                onChange={handleChange}
                className='text-[#717680]'
              />
              <span className='text-base'>
                You agree to our friendly{' '}
                <a href='#' className='underline'>
                  privacy policy
                </a>
                .
              </span>
            </div>

            <button
              type='submit'
              className='w-full bg-[#3039E5] text-white py-2 text-sm font-semibold rounded hover:bg-blue-700 transition'
            >
              Send message
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className='relative w-full h-[300px] sm:h-[400px] md:h-[100%] mt-10 md:mt-0 order-1 md:order-2 mb-4 md:mb-0'>
          <Image
            src={getInTouchImg}
            alt='Get in touch team'
            fill
            className='object-cover lg:pl-16'
            placeholder='blur'
          />
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
