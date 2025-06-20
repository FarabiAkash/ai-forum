import Register from '@/components/HackathonRegister/Register'
import Banner from '@/components/Home/Banner'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner />
            <div className="bg-[#FAFAFA] min-h-screen flex flex-col items-center">
                <h2 className="text-center text-[40px] font-bold leading-[56px] text-[#3039E5] pt-20">
                    CodeCure 2025: Innovating Digital Health
                </h2>
                <p className="text-center font-[400] text-[18px] leading-[32px] text-[#181D27] pt-2">
                    Fill up the following forms to complete the registration
                </p>
                <Register />
            </div>
        </>
    )
}

export default page