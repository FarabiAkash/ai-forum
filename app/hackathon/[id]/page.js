'use client'

import { useParams } from 'next/navigation'
import hackathonData from '@/data/hackathonData'
import { GoCalendar, GoLocation } from 'react-icons/go'
import HackathonDetailsBanner from '@/components/Hackathon/Details/HackathonDetailsBanner'
import CustomBreadcrumbs from '@/components/Shared/CustomBreadcrumbs'
import HackathonDetailsContent from '@/components/Hackathon/Details/HackathonDetailsContent'
import RegistrationBottom from '@/components/Hackathon/Details/RegistrationBottom'

const HackathonDetailsPage = () => {
    const { id } = useParams()
    const hackathon = hackathonData.find(item => item.id === parseInt(id))

    if (!hackathon) {
        return <div className='p-10 text-center text-gray-500'>Hackathon not found</div>
    }

    const {
        hackathonTitle,
        hackathonSubtitle,
        hackathonDate,
        hackathonVenue,
        hackathonBanner,
        hackathonType,
        prize,
        organizer
    } = hackathon

    return (
        <section className='bg-[#FAFAFA]'>
            {/* Header */}
            <HackathonDetailsBanner
                hackathonBanner={hackathonBanner}
                hackathonTitle={hackathonTitle}
                hackathonType={hackathonType}
                prize={prize}
                organizer={organizer}
            />
            <CustomBreadcrumbs
                rootRoute={'Home / Hackathon'}
                subRoute={hackathonTitle}
            />

            <HackathonDetailsContent />
            <RegistrationBottom />
        </section>
    )
}

export default HackathonDetailsPage
