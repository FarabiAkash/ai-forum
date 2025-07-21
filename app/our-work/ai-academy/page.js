import AiAcademyBanner from "@/components/AiAcademy/AiAcademyBanner"
import SectionBlock from "@/components/AiAcademy/SectionBlock"
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs"
import { Courses } from "@/data/CourseData"
import bannerBg from '@/public/assets/our-work/ai-academy/banner.png'
import bannerLogo from '@/public/assets/our-work/ai-academy/AI_ACADEMY_LOGO.PNG'
import Image from "next/image"

const page = () => {
    const professionalIntelligenceCourses = Courses.filter(course => course.category === 'professional');
    const skillsIntelligenceCourses = Courses.filter(course => course.category === 'skills');
    const startupIntelligenceCourses = Courses.filter(course => course.category === 'startup');
    return (
        <div className="bg-[#FAFAFA]">
            <AiAcademyBanner
                bannerImg={bannerBg}
            >
                <div className="px-20 space-y-8">
                    <Image src={bannerLogo} width={343} height={80} alt="AI Academy Logo" />
                    <p>This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping Bangladesh’s innovation landscape to drive growth.</p>
                </div>
                <div></div>

            </AiAcademyBanner>
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work '}
                subRoute={'AI Academy'}
            />

            {/* professional intelligence  */}
            <SectionBlock
                title="AI For Professional Intelligence"
                description="From AI competitions to founder masterclasses and innovation audits, our diverse programs are designed to spark ideas, build skills, and launch the next generation of changemakers."
                items={professionalIntelligenceCourses}
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
                items={skillsIntelligenceCourses}
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
                items={startupIntelligenceCourses}
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