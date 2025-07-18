import EcosystemsContainer from "@/components/OurWork/InnovationEcosystem/EcosystemsContainer"
import CommonBanner from "@/components/Shared/CommonBanner"
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs"
import bannerBg from '@/public/assets/our-work/innovation-ecosystem/banner.jpg'
import bannerLogo from '@/public/assets/our-work/innovation-ecosystem/bannerLogo.svg'

const ecoSystems = [
    {
        id: 1,
        name: 'Lab 2 Market',
        desc: 'Helping startups turn smart ideas into real businesses with expert-led, market-ready commercialization support.',
    },
    {
        id: 2,
        name: 'AI & Innovation Awards',
        desc: 'Celebrating bold innovators and connecting them with investors, recognition, and real opportunity.',
    },
    {
        id: 3,
        name: 'Innovation Direct',
        desc: 'We assess how future-ready your organization is and help you get there, step by step.'
    },
    {
        id: 4,
        name: 'AI & Innovation Awards',
        desc: 'We’re mapping how Bangladesh is innovating sector by sector to guide smarter policy, funding, and growth.'
    },
    {
        id: 5,
        name: 'Innovation Roadshow',
        desc: 'We bring AI to classrooms making it fun, hands-on, and meaningful for students and teachers across Bangladesh.',
    },
    {
        id: 6,
        name: 'Innovation Direct',
        desc: 'Step into AI festivals where your ideas can solve real problems and shape an innovative Bangladesh.'
    },
    {
        id: 7,
        name: 'Future of AI Summit',
        desc: 'Join the conversation that brings students, experts, and policymakers together to plan the future of AI in our country.'
    },
    {
        id: 8,
        name: 'START',
        desc: 'Flip through the stories, wins, and bold ideas that are driving Bangladesh’s AI movement.'
    }
]

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
        </div>
    )
}
export default page