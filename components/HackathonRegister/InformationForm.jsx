"use client";
import React from 'react';
import { MdOutlineDelete } from "react-icons/md";
const InformationForm = ({ index, data, onChange, inputNameTitle, inputNamePlaceholder, isShowDeleteButton=false, onDelete=() => {} }) => {

    return (
        <div className="space-y-4 mt-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                    <label className="text-base font-medium mb-1 flex items-center">
                        {inputNameTitle}&nbsp;<span>*</span>
                        {isShowDeleteButton && (
                            <button
                                type="button"
                                onClick={() => onDelete(index)}
                                className="text-red-500 hover:text-red-600 transition cursor-pointer"
                            >
                                <MdOutlineDelete size={16} />
                            </button>
                        )}
                    </label>
                    <input
                        type="text"
                        placeholder={inputNamePlaceholder}
                        value={data.name}
                        onChange={(e) => onChange(index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-[#3039E5] focus:border-[#3039E5] text-sm"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-base font-medium mb-1">
                        Phone Number&nbsp;<span>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        value={data.phone}
                        onChange={(e) => onChange(index, 'phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-[#3039E5] focus:border-[#3039E5] text-sm"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-base font-medium mb-1">
                        Email&nbsp;<span>*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={data.email}
                        onChange={(e) => onChange(index, 'email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-[#3039E5] focus:border-[#3039E5] text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-base font-medium mb-1">
                        Role&nbsp;<span>*</span>
                    </label>
                    <select
                        value={data.role}
                        onChange={(e) => onChange(index, 'role', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-[#3039E5] focus:border-[#3039E5] text-sm"
                    >
                        <option value="">Select option</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Project Manager">Project Manager</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-base font-medium mb-1">
                        Institute/Company&nbsp;<span>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Institute or company name"
                        value={data.institute}
                        onChange={(e) => onChange(index, 'institute', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-[#3039E5] focus:border-[#3039E5] text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default InformationForm;
