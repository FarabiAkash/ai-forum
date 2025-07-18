import CommonBanner from "@/components/Shared/CommonBanner"
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs"
import bannerBg from '@/public/assets/our-work/innovation-ecosystem/banner.jpg'
import bannerLogo from '@/public/assets/our-work/innovation-ecosystem/bannerLogo.svg'

const page = () => {
    return (
        <div>
            <CommonBanner
                logo={bannerLogo}
                title={'logo'}
                description={'We shape policies and activate communities to build a stronger innovation landscape in Bangladesh through bold ideas, national benchmarks, real mentorship, and future-focused events.'}
                bannerImg={bannerBg}
            />
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work '}
                subRoute={'Building Innovation Ecosystem'}
            />
        </div>
    )
}
export default page