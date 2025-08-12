'use client'

import CommonBanner from "@/components/Shared/CommonBanner"
import { careersData } from "@/data/careersData";
import detailsBannerBg from '@/public/assets/our-work/career-care/detailsBanner.png'
import { useParams } from "next/navigation";

const page = () => {
    const { careerId } = useParams();

    let matchedItem = {};
    if (careerId) {
        matchedItem = careersData.section1.find(item => item.id === Number(careerId))
        if (!matchedItem) {
            matchedItem = careersData.section2.find(item => item.id === Number(careerId))
        }
    }
    const { title, description } = matchedItem
    return (
        <div className="bg-[#FAFAFA]">
            <CommonBanner
                title={title}
                description={description}
                bannerImg={detailsBannerBg}
            />
        </div>
    )
}
export default page