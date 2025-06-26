import HowWeWork from "@/components/AboutUs/HowWeWork"
import OurJourney from "@/components/AboutUs/OurJourney"
import OurPartner from "@/components/AboutUs/OurPartner"
import CommonBanner from "@/components/Shared/CommonBanner"
import bannerImg from '@/public/assets/about-us/banner.jpg'

const page = () => {
    return (
        <>
            <CommonBanner
                title={'About the company'}
                description={'Learn more about the company and the team behind it.'}
                bannerImg={bannerImg}
            />
            <OurJourney />
            <OurPartner />
            <HowWeWork />
        </>
    )
}
export default page