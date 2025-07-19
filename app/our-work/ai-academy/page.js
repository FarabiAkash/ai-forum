import SectionBlock from "@/components/AiAcademy/SectionBlock"
import CommonBanner from "@/components/Shared/CommonBanner"
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs"
import bannerBg from '@/public/assets/our-work/ai-academy/banner.png'
import bannerLogo from '@/public/assets/our-work/innovation-ecosystem/bannerLogo.svg'

const page = () => {
    const professionalIntelligence = [
        {
            title: "AI For Healthcare Professionals",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-healthcare-professionals",
            image: "/assets/our-work/ai-academy/professional1.png"
        },
        {
            title: "AI For Business Professionals",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-business-professionals",
            image: "/assets/our-work/ai-academy/professional2.png"
        },
        {
            title: "AI For Educators",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-educators",
            image: "/assets/our-work/ai-academy/professional3.png"
        }
    ]

    const skillsIntelligence = [
        {
            title: "Creative AI Tools",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-healthcare-professionals",
            image: "/assets/our-work/ai-academy/skills1.png"
        },
        {
            title: "Analytical AI Tools",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-business-professionals",
            image: "/assets/our-work/ai-academy/skills2.png"
        },
        {
            title: "Research On AI",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-educators",
            image: "/assets/our-work/ai-academy/skills3.png"
        }
    ]

    const startupIntelligence = [
        {
            title: "Launchpad Mentorship",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-healthcare-professionals",
            image: "/assets/our-work/ai-academy/startup1.png"
        },
        {
            title: "WIPO Curriculum",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-business-professionals",
            image: "/assets/our-work/ai-academy/startup2.png"
        },
        {
            title: "HSIL Venture Incubation",
            description: "This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.",
            link: "/our-work/ai-academy/ai-for-educators",
            image: "/assets/our-work/ai-academy/startup3.png"
        }
    ]
    return (
        <div className="bg-[#FAFAFA]">
            <CommonBanner
                logo={bannerLogo}
                title={'AI Academy'}
                description={'We shape policies and activate communities to build a stronger innovation landscape in Bangladesh through bold ideas, national benchmarks, real mentorship, and future-focused events.'}
                bannerImg={bannerBg}
            />
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work '}
                subRoute={'AI Academy'}
            />

            {/* professional intelligence  */}
            <SectionBlock
                title="AI For Professional Intelligence"
                description="From AI competitions to founder masterclasses and innovation audits, our diverse programs are designed to spark ideas, build skills, and launch the next generation of changemakers."
                items={professionalIntelligence}
                bgColor="bg-[#FAFAFA]"
                titleColor="text-black"
                descColor="text-[#717680]"
                cardBgColor="bg-white"
                cardTextColor="text-black"
            />

            {/* AI Intelligence & Skills */}
            <SectionBlock
                title="AI Intelligence & Skills"
                description="From AI competitions to founder masterclasses and innovation audits, our diverse programs are designed to spark ideas, build skills, and launch the next generation of changemakers."
                items={skillsIntelligence}
                bgColor="bg-[#285473]"
                titleColor="text-white"
                descColor="text-white"
                cardBgColor="bg-[#00000026]"
                cardTextColor="text-white"
            />

            {/* Start-up Intelligence  */}
            <SectionBlock
                title="Start-up Intelligence"
                description="From AI competitions to founder masterclasses and innovation audits, our diverse programs are designed to spark ideas, build skills, and launch the next generation of changemakers."
                items={startupIntelligence}
                bgColor="bg-[#FAFAFA]"
                titleColor="text-black"
                descColor="text-[#717680]"
                cardBgColor="bg-white"
                cardTextColor="text-black"
            />
        </div>
    )
}
export default page