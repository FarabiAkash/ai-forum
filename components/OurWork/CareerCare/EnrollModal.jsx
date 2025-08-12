'use client'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const EnrollModal = ({ isOpen, onClose }) => {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true)
      document.body.style.overflow = 'hidden'
    } else {
      setShowAnimation(false)
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = e => {
    e.preventDefault()
    toast.success('Successfully enrolled!', {
      position: 'top-right'
    })
    onClose()
  }

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={` fixed inset-0 bg-[#00000033] flex items-center justify-center z-50 transition-opacity duration-300 ${
        showAnimation ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-md shadow-lg w-[90%] max-w-md p-6 relative transform transition-all duration-300 ${
          showAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'
          onClick={onClose}
        >
          ✕
        </button>

        {/* Header */}
        <h2 className='text-[#3039E5] text-sm font-semibold uppercase mb-4 border-b pb-2'>
          Get Enrolled
        </h2>

        {/* Form */}
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium mb-1'>Full Name</label>
            <input
              type='text'
              placeholder='Your full name'
              className='w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3039E5]'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>
              Phone Number
            </label>
            <input
              type='tel'
              placeholder='Your phone number'
              className='w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3039E5]'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>
              Email Address
            </label>
            <input
              type='email'
              placeholder='Your email address'
              className='w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3039E5]'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-[#3039E5] hover:bg-[#2d3eb8] text-white py-2 rounded-sm text-sm font-semibold'
          >
            Enroll
          </button>
        </form>
      </div>
    </div>
  )
}

export default EnrollModal
