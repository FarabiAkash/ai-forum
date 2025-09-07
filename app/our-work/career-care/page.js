import AICourses from "@/components/OurWork/CareerCare/AICourses"
import Careers from "@/components/OurWork/CareerCare/Careers"
import CommonBanner from "@/components/Shared/CommonBanner"
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs"

import bannerBg from '@/public/assets/our-work/career-care/banner.jpg'
import bannerLogo from '@/public/assets/our-work/career-care/bannerLogo.png'


const page = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <CommonBanner
                logo={bannerLogo}
                title={'logo'}
                description={'We shape policies and activate communities to build a stronger innovation landscape in Bangladesh through bold ideas, national benchmarks, real mentorship, and future-focused events.'}
                bannerImg={bannerBg}
            />
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work '}
                subRoute={'Career Care'}
            />
            <Careers />
            <AICourses />
        </div>
    )
}
export default page