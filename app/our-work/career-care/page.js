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
                description={'Whether you’re aiming for a dream job or a global research seat, we help you get there.'}
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