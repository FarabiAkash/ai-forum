import OngoingUpcomingHackathons from '@/components/Hackathon/OngoingUpcomingHacathons'
import CommonBanner from '@/components/Shared/CommonBanner'
import CustomBreadcrumbs from '@/components/Shared/CustomBreadcrumbs'
import bannerImg from '@/public/assets/hackathon/banner.png'
const page = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <CommonBanner
                title={'Innovate. Compete. Build the Future.'}
                description={'Join a global community of innovators and creators competing to solve real-world challenges through code, design, and bold ideas.'}
                bannerImg={bannerImg}
            />
            <CustomBreadcrumbs
                rootRoute={'Home'}
                subRoute={'Hackathon'}
            />
            <OngoingUpcomingHackathons />
        </div>
    )
}
export default page