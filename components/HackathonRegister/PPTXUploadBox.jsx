'use client'
import { useRef } from 'react'

export default function PPTXUploadBox({ onFileSelect }) {
  const fileInputRef = useRef(null)

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file?.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      onFileSelect(file)
    } else {
      alert('Please upload a .pptx file')
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) onFileSelect(file)
  }

  return (
    <div className="flex flex-col space-y-1 mt-6">
      <label className="text-sm font-medium mb-2">
        Project brief presentation&nbsp;<span>*</span>
      </label>

      <div
        onClick={() => fileInputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="w-full h-40 bg-[#F6F7FE] border border-dashed border-[#3039E540] text-center text-gray-500 flex items-center justify-center cursor-pointer rounded-md transition hover:bg-blue-50"
      >
        <span>
          Drag and drop your <strong>.PPTX</strong> file or{' '}
          <span className="text-blue-600 underline">Click here</span>
        </span>
        <input
          type="file"
          accept=".pptx"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  )
}
