"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ title, description, image, bgColor, textColor, id }) => {
    return (
        <div key={id} className={`text-left p-5 [&>h3]:mt-4 [&>p]:mt-4 [&>div]:mt-4 ${bgColor} ${textColor} `}>
            <Image src={image} alt={title} layout="responsive" width={500} height={300} />
            <h3 className='font-semibold'>{title}</h3>
            <p className="opacity-60">{description}</p>
            <div className='opacity-60'>
                <Link href={`/our-work/ai-academy/course-details/${id}`} className={`flex items-center gap-2 transition-all`}>
                    Learn More <IoIosArrowForward />
                </Link>
            </div>
        </div>
    )
}

export default Card