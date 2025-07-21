import AchievementCounter from "@/components/OurWork/InnovationEcosystem/AchievementCounter"
import EcosystemsContainer from "@/components/OurWork/InnovationEcosystem/EcosystemsContainer"
import OngoingEvents from "@/components/OurWork/InnovationEcosystem/OngoingEvents"
import CommonBanner from "@/components/Shared/CommonBanner"
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs"
import { ecoSystems } from "@/data/innovationEcosystems"
import bannerBg from '@/public/assets/our-work/innovation-ecosystem/banner.jpg'
import bannerLogo from '@/public/assets/our-work/innovation-ecosystem/bannerLogo.svg'


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
                subRoute={'Building Innovation Ecosystem'}
            />
            <EcosystemsContainer
                ecoSystems={ecoSystems}
            />

            <OngoingEvents />
            <AchievementCounter />

        </div>
    )
}
export default page