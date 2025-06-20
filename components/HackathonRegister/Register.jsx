'use client'
import React, { useState } from 'react'
import InformationForm from './InformationForm';
import DescriptionInput from './DescriptionInput';
import toast from 'react-hot-toast';
import PPTXUploadBox from './PPTXUploadBox';

const Register = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLeader, setTeamLeader] = useState({ name: '', phone: '', email: '', role: '', institute: '' });
  const [teamMembers, setTeamMembers] = useState([
    { name: '', phone: '', email: '', role: '', institute: '' },
    { name: '', phone: '', email: '', role: '', institute: '' },
    { name: '', phone: '', email: '', role: '', institute: '' },
  ]);
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState('');
  const [file, setFile] = useState(null);

  // Handle changes for the team name input
  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  // Handle changes for team leader
  const handleTeamLeaderChange = (index, field, value) => {
    setTeamLeader(prev => ({ ...prev, [field]: value }));
  };

  // Handle changes for team members
  const handleTeamMembersChange = (index, field, value) => {
    setTeamMembers((prev) => {
      const updatedMembers = [...prev];
      updatedMembers[index] = { ...updatedMembers[index], [field]: value };
      return updatedMembers;
    });
  };

  // Handle deleting a team member
  const handleDeleteMember = (index) => {
    setTeamMembers((prev) => {
      const updatedMembers = [...prev];
      updatedMembers.splice(index, 1);
      return updatedMembers;
    });
  };

  // Handle adding a new team member
  const handleAddMember = () => {
    setTeamMembers([
      ...teamMembers,
      { name: '', phone: '', email: '', role: '', institute: '' },
    ]);
  };
  // Check if the delete button should be shown
  const isShowDeleteButton = teamMembers.length > 3;

  // Handle form submission
  const handleSubmit = async () => {
    const apiPromise = new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            resolve(data) // wait 1.5s before resolving
          }, 1500)
        })
        .catch(err => {
          setTimeout(() => {
            reject(err) // wait 1.5s before rejecting
          }, 1500)
        })
    })

    toast.promise(apiPromise, {
      loading: 'Submitting...',
      success: 'Submitted successfully!',
      error: 'Failed to submit!',
    }, {
      position: 'top-right',
      duration: 3000,
      reverseOrder: false
    })

    // Optional: wait for response if needed
    // const res = await apiPromise
    // const data = await res.json()
    // console.log(data)
    const data = {
      teamName,
      teamLeader,
      teamMembers,
      description,
      comments,
      file
    };
  }
  // Check if the submit button should be disabled
  const isSubmitDisabled =
    teamName.trim() === '' ||
    Object.values(teamLeader).some(val => val.trim() === '') ||
    teamMembers.some(member => Object.values(member).some(val => val.trim() === '')) ||
    description.trim() === '' || file === null;

  // Handle file selection for PPTX upload
  const handleFileSelect = (file) => {
    if (file && file.type !== 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      toast.error('Please upload a valid .pptx file');
      setFile(null);
    }
  };

  return (
    <div className="bg-white w-[1060px] mt-10 p-20 mb-10">
      <div className="mb-10">
        <label className="block text-base font-medium text-black mb-1 leading-[20px]">
          Team Name <span className="text-black">*</span>
          <span className="text-[#717680]">(max 50 characters)</span>
        </label>
        <input
          type="text"
          maxLength={50}
          value={teamName}
          onChange={handleTeamNameChange}
          placeholder="Your team name"
          className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-[#3039E5] focus:border-[#3039E5] text-sm"
        />
      </div>
      <h2 className="text-[#3039E5] text-base font-semibold uppercase tracking-wide">
        Team Member Information
      </h2>
      <InformationForm
        index={0}
        data={teamLeader}
        onChange={handleTeamLeaderChange}
        inputNameTitle={"Team Leader Name"}
        inputNamePlaceholder={"Team leader full name"}
      />
      <div className="flex items-center justify-end mb-6">
        <button
          className="bg-[#3039E5] cursor-pointer text-white px-4 py-2  transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed group disabled:hover:bg-[#3039E5] hover:bg-[#1a1f8c] active:bg-[#3039e586]"
          onClick={handleAddMember}
          disabled={teamMembers.length >= 5}
        >
          + Add Team Member
        </button>
      </div>
      {teamMembers.map((member, index) => (
        <InformationForm
          key={index}
          index={index}
          data={member}
          onChange={handleTeamMembersChange}
          inputNameTitle={`Team Member ${index + 1}`}
          inputNamePlaceholder={`Member ${index + 1} full name`}
          isShowDeleteButton={isShowDeleteButton}
          onDelete={() => handleDeleteMember(index)}
        />
      ))}
      <DescriptionInput label="Briefly describe any project ideas or areas of interest for the hackathon" value={description} onChange={setDescription} isRequired={true} placeholder={"Enter your project ideas or areas of interest"} warningText={"max 500 characters"} />
      <DescriptionInput label="Comments" value={comments} onChange={setComments} isRequired={false} placeholder={"Any additional comments "} warningText={"optional"} />
      <PPTXUploadBox onFileSelect={handleFileSelect} />
      <div className="flex items-center justify-center mb-6 mt-10">
        <button
          className="w-[176px] bg-[#3039E5] cursor-pointer text-white px-4 py-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed group disabled:hover:bg-[#3039E5] hover:bg-[#1a1f8c] active:bg-[#3039e586]"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          REGISTER
        </button>
      </div>
    </div>
  )
}

export default Register;