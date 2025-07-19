"use client"
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ title, description, link, image, key , bgColor, textColor }) => {
    return (
        <div key={key} className={`text-left p-5 [&>h3]:mt-4 [&>p]:mt-4 [&>div]:mt-4 ${bgColor} ${textColor} `}>
            <img src={image} alt={title} />
            <h3 className='font-semibold'>{title}</h3>
            <p className="opacity-60">{description}</p>
            <div className='opacity-60'>
                <Link href={link} className={`flex items-center gap-2 transition-all`}>
                    Learn More <IoIosArrowForward />
                </Link>
            </div>
        </div>
    )
}

export default Card