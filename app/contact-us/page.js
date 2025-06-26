import GetInTouch from '@/components/ContactUs/GetInTouch'
import CommonBanner from '@/components/Shared/CommonBanner'
import bannerImg from '@/public/assets/contact-us/banner.jpg'
const page = () => {
    return (
        <>
            <CommonBanner
                title={'Contact Us'}
                description={'Learn more about the company and the team behind it.'}
                bannerImg={bannerImg}
            />
            <GetInTouch />
        </>
    )
}
export default page