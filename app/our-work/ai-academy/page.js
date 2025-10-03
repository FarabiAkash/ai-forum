import AiAcademyBanner from "@/components/AiAcademy/AiAcademyBanner"
import SectionBlock from "@/components/AiAcademy/SectionBlock"
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs"
import { Courses } from "@/data/CourseData"
import bannerBg from '@/public/assets/our-work/ai-academy/banner.jpg'
import bannerLogo from '@/public/assets/our-work/ai-academy/ai-academy-logo.png'
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
                    <p>We help you grow with AI—whether you're building your career, upskilling with the right tools, or launching your own startup.</p>
                </div>
                <div></div>

            </AiAcademyBanner>
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work '}
                subRoute={'AI Academy'}
            />

            {/* professional intelligence  */}
            <SectionBlock
                title="AI for Professionals"
                description="Grow the skills to lead, teach, and work with AI—built for today’s educators, doctors, and decision-makers."
                items={professionalIntelligenceCourses}
                bgColor="bg-[#FAFAFA]"
                titleColor="text-black"
                descColor="text-[#717680]"
                cardBgColor="bg-white"
                cardTextColor="text-black"
            />

            {/* AI Intelligence & Skills */}
            <SectionBlock
                title="AI Technique Tutorial"
                description="For data analysts, strategy consultants, digital marketers, and operations leads aiming to master real-world analytics and decision tools."
                items={skillsIntelligenceCourses}
                bgColor="bg-[#285473]"
                titleColor="text-white"
                descColor="text-white"
                cardBgColor="bg-[#00000026]"
                cardTextColor="text-white"
            />

            {/* Start-up Intelligence  */}
            <SectionBlock
                title="Start-up Masterclass"
                description="Take your startup idea from spark to pitch—with AI tools, real mentors, and a demo day to launch your vision."
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