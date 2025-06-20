import h1Img from '@/public/assets/hackathon/h1.png'
import h2Img from '@/public/assets/hackathon/h2.png'
import h3Img from '@/public/assets/hackathon/h3.png'
import h4Img from '@/public/assets/hackathon/h4.png'
import h5Img from '@/public/assets/hackathon/h5.png'
import h6Img from '@/public/assets/hackathon/h6.png'

const hackathonData = [
    {
        id: 1,
        hackathonType: 'ongoing',
        daysLeft: '3 days left',
        hackathonTitle: 'CodeCure 2025: Innovating Digital Health',
        hackathonSubtitle:
            'Tackle pressing challenges in healthcare with tech-driven solutions that make an impact.',
        hackathonDate: 'May 18, 2025',
        hackathonVenue: 'Rajshahi University Auditorium, Rajshahi',
        hackathonBanner: h1Img,
        ctaLabel: 'Register',
        ctaType: 'primary',
        prize: {
            firstPlace: '$5,000',
            secondPlace: '$2,000',
            thirdPlace: '$1,000'
        },
        organizer: 'HealthHack Alliance in partnership with CMED'
    },
    {
        id: 2,
        hackathonType: 'upcoming',
        badge: 'Upcoming',
        hackathonTitle: 'CodeCure 2025: Innovating Digital Health',
        hackathonSubtitle:
            'Tackle pressing challenges in healthcare with tech-driven solutions that make an impact.',
        hackathonDate: 'May 18, 2025',
        hackathonVenue: 'Rajshahi University Auditorium, Rajshahi',
        hackathonBanner: h2Img,
        ctaLabel: 'Get Notified',
        ctaType: 'outline',
        prize: {
            firstPlace: '$5,000',
            secondPlace: '$2,000',
            thirdPlace: '$1,000'
        },
        organizer: 'HealthHack Alliance in partnership with CMED'
    },
    {
        id: 3,
        hackathonType: 'ended',
        badge: 'Event Ended',
        hackathonTitle: 'CodeCure 2024: AI in Diagnostics',
        hackathonSubtitle:
            'Exploring AI’s role in revolutionizing diagnostic accuracy and speed in hospitals.',
        hackathonDate: 'Nov 5, 2024',
        hackathonVenue: 'University of Dhaka, Dhaka',
        hackathonBanner: h3Img,
        ctaLabel: 'Gallery',
        ctaType: 'outline',
        prize: {
            firstPlace: '$5,000',
            secondPlace: '$2,000',
            thirdPlace: '$1,000'
        },
        organizer: 'AI Med Lab · CMED · MedTech Founders'
    },
    {
        id: 4,
        hackathonType: 'ended',
        badge: 'Event Ended',
        hackathonTitle: 'AgroHack 2024: Smart Farming Solutions',
        hackathonSubtitle:
            'Accelerating agri-tech innovations for sustainability and efficiency.',
        hackathonDate: 'Oct 12, 2024',
        hackathonVenue: 'BUET Auditorium Complex, Dhaka',
        hackathonBanner: h4Img,
        ctaLabel: 'Gallery',
        ctaType: 'outline',
        prize: {
            firstPlace: '$4,000',
            secondPlace: '$1,500',
            thirdPlace: '$800'
        },
        organizer: 'AgroTech Bangladesh & BRRI'
    },
    {
        id: 5,
        hackathonType: 'ended',
        badge: 'Event Ended',
        hackathonTitle: 'EduTech Sprint: Shaping Future Classrooms',
        hackathonSubtitle:
            'Creating solutions to transform education through adaptive learning and gamification.',
        hackathonDate: 'Sep 2, 2024',
        hackathonVenue: 'Brac University Campus, Dhaka',
        hackathonBanner: h5Img,
        ctaLabel: 'Gallery',
        ctaType: 'outline',
        prize: {
            firstPlace: '$3,500',
            secondPlace: '$1,200',
            thirdPlace: '$600'
        },
        organizer: 'Digital School Alliance & Brac EDU Lab'
    },
    {
        id: 6,
        hackathonType: 'ended',
        badge: 'Event Ended',
        hackathonTitle: 'FinHack 2024: Disrupting Financial Inclusion',
        hackathonSubtitle:
            'Innovating fintech solutions to reach underbanked communities in Bangladesh.',
        hackathonDate: 'Aug 10, 2024',
        hackathonVenue: 'North South University, Dhaka',
        hackathonBanner: h6Img,
        ctaLabel: 'Gallery',
        ctaType: 'outline',
        prize: {
            firstPlace: '$4,500',
            secondPlace: '$1,800',
            thirdPlace: '$1,000'
        },
        organizer: 'FinTech Bangladesh, NSU Business Club'
    }
]

export default hackathonData
