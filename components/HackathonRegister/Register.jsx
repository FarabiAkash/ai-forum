'use client'
import React, { useState } from 'react'

const Register = () => {
  const [teamName, setTeamName] = useState('');

  const handleChange = (e) => {
    setTeamName(e.target.value);
  };
  return (
    <div className="bg-white w-[1060px] h-[1704px] mt-10 p-20">
      <div className="mb-4">
        <label className="block text-base font-medium text-black mb-1 leading-[20px]">
          Team Name <span className="text-black">*</span>
          <span className="text-[#717680]">(max 50 characters)</span>
        </label>
        <input
          type="text"
          maxLength={50}
          value={teamName}
          onChange={handleChange}
          placeholder="Your team name"
          className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>
    </div>
  )
}

export default Register