import React from 'react'
import Card from '../Shared/Card'

const SectionBlock = ({ title, description, items, bgColor, titleColor, descColor, cardBgColor, cardTextColor }) => {
    return (
        <div className={`${bgColor} py-15`}>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h2 className={`font-bold text-[32px] leading-[48px] ${titleColor}`}>{title}</h2>
                <p
                    className={`text-[18px] leading-[24px] mt-5 ${descColor} w-[100%] md:w-[90%] lg:w-[65%] mx-auto`}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            image={item.image}
                            bgColor={cardBgColor}
                            textColor={cardTextColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionBlock