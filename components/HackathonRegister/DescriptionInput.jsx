"use client";
import React from "react";;

const DescriptionInput = ({ label, value, onChange, isRequired, placeholder, warningText }) => {
    return (
        <div className="flex flex-col space-y-1 mt-6">
            <label className="text-base font-medium">
                {label}&nbsp; {isRequired && <span>*</span>}
                {warningText && <span className="text-gray-400 text-xs font-normal ml-1">({warningText})</span>}
            </label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                maxLength={isRequired ? 500 : undefined}
                rows={4}
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-[#3039E5] focus:border-[#3039E5] text-sm resize-none"
            />
        </div>
    );
};

export default DescriptionInput;
