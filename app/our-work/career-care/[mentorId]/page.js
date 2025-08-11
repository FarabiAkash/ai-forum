'use client'
import CommonBanner from "@/components/Shared/CommonBanner";
import CustomBreadcrumbs from "@/components/Shared/CustomBreadcrumbs";
import { useParams } from "next/navigation"
import mentorsBannerBg from '@/public/assets/our-work/career-care/mentorBg.png'

const courses = [
    {
        id: 1,
        title: 'Career In Healthcare',
        description:
            'This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.',

        image: '/assets/our-work/career-care/c1.png',
        courseOutline: [
            {
                module: 'Module 1',
                title: 'Introduction to AI in Healthcare',
                topics: [
                    'What is AI? Key concepts (ML, NLP, Deep Learning)',
                    'Overview of AI applications in healthcare',
                    'Benefits and risks of AI in clinical practice'
                ]
            },
            {
                module: 'Module 2',
                title: 'Data in Healthcare AI',
                topics: [
                    'Types and sources of healthcare data',
                    'Data quality and preprocessing',
                    'Ethical issues around health data usage'
                ]
            },
            {
                module: 'Module 3',
                title: 'Clinical Applications of AI',
                topics: [
                    'Diagnostic tools (e.g., radiology, pathology)',
                    'Predictive analytics in patient care',
                    'AI in treatment personalization'
                ]
            },
            {
                module: 'Module 4',
                title: 'AI Tools & Techniques',
                topics: [
                    'Overview of popular AI frameworks and libraries',
                    'Introduction to building simple models',
                    'Understanding model evaluation and metrics'
                ]
            },
            {
                module: 'Module 5',
                title: 'Hands-On Practice',
                topics: [
                    'Guided project using real-world datasets',
                    'Model training and evaluation',
                    'Interpreting AI outputs in healthcare context'
                ]
            },
            {
                module: 'Module 6',
                title: 'Future of AI in Healthcare',
                topics: [
                    'Emerging trends and research areas',
                    'Regulatory challenges and policies',
                    'The evolving role of healthcare professionals with AI'
                ]
            }
        ],
        courseMentor: {
            name: 'Dr. Mahmudul Haque',
            qualifications: 'MBBS, MPH, PhD (Health Informatics)',
            role: 'Director, Center for Health Innovation & AI\nAssociate Professor, Department of Public Health Informatics,\nBangabandhu Sheikh Mujib Medical University (BSMMU)',
            expertise: [
                'AI in epidemiology and public health',
                'Clinical decision support systems (CDSS)',
                'EHR and health data infrastructure in LMICs',
                'Health data ethics and governance'
            ],
            title: 'Course Mentor',
            image: '/assets/our-work/ai-academy/mentor.png' // Replace this with actual image path or URL
        },
        category: 'skills'
    },
    {
        id: 2,
        title: 'Career In Business',
        description:
            'This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.',

        image: '/assets/our-work/career-care/c2.png',
        courseOutline: [
            {
                module: 'Module 1',
                title: 'Introduction to AI in Healthcare',
                topics: [
                    'What is AI? Key concepts (ML, NLP, Deep Learning)',
                    'Overview of AI applications in healthcare',
                    'Benefits and risks of AI in clinical practice'
                ]
            },
            {
                module: 'Module 2',
                title: 'Data in Healthcare AI',
                topics: [
                    'Types and sources of healthcare data',
                    'Data quality and preprocessing',
                    'Ethical issues around health data usage'
                ]
            },
            {
                module: 'Module 3',
                title: 'Clinical Applications of AI',
                topics: [
                    'Diagnostic tools (e.g., radiology, pathology)',
                    'Predictive analytics in patient care',
                    'AI in treatment personalization'
                ]
            },
            {
                module: 'Module 4',
                title: 'AI Tools & Techniques',
                topics: [
                    'Overview of popular AI frameworks and libraries',
                    'Introduction to building simple models',
                    'Understanding model evaluation and metrics'
                ]
            },
            {
                module: 'Module 5',
                title: 'Hands-On Practice',
                topics: [
                    'Guided project using real-world datasets',
                    'Model training and evaluation',
                    'Interpreting AI outputs in healthcare context'
                ]
            },
            {
                module: 'Module 6',
                title: 'Future of AI in Healthcare',
                topics: [
                    'Emerging trends and research areas',
                    'Regulatory challenges and policies',
                    'The evolving role of healthcare professionals with AI'
                ]
            }
        ],
        courseMentor: {
            name: 'Dr. Mahmudul Haque',
            qualifications: 'MBBS, MPH, PhD (Health Informatics)',
            role: 'Director, Center for Health Innovation & AI\nAssociate Professor, Department of Public Health Informatics,\nBangabandhu Sheikh Mujib Medical University (BSMMU)',
            expertise: [
                'AI in epidemiology and public health',
                'Clinical decision support systems (CDSS)',
                'EHR and health data infrastructure in LMICs',
                'Health data ethics and governance'
            ],
            title: 'Course Mentor',
            image: '/assets/our-work/ai-academy/mentor.png' // Replace this with actual image path or URL
        },
        category: 'skills'
    },
    {
        id: 3,
        title: 'Career In Technology',
        description:
            'This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.',

        image: '/assets/our-work/career-care/c3.png',
        courseOutline: [
            {
                module: 'Module 1',
                title: 'Introduction to AI in Healthcare',
                topics: [
                    'What is AI? Key concepts (ML, NLP, Deep Learning)',
                    'Overview of AI applications in healthcare',
                    'Benefits and risks of AI in clinical practice'
                ]
            },
            {
                module: 'Module 2',
                title: 'Data in Healthcare AI',
                topics: [
                    'Types and sources of healthcare data',
                    'Data quality and preprocessing',
                    'Ethical issues around health data usage'
                ]
            },
            {
                module: 'Module 3',
                title: 'Clinical Applications of AI',
                topics: [
                    'Diagnostic tools (e.g., radiology, pathology)',
                    'Predictive analytics in patient care',
                    'AI in treatment personalization'
                ]
            },
            {
                module: 'Module 4',
                title: 'AI Tools & Techniques',
                topics: [
                    'Overview of popular AI frameworks and libraries',
                    'Introduction to building simple models',
                    'Understanding model evaluation and metrics'
                ]
            },
            {
                module: 'Module 5',
                title: 'Hands-On Practice',
                topics: [
                    'Guided project using real-world datasets',
                    'Model training and evaluation',
                    'Interpreting AI outputs in healthcare context'
                ]
            },
            {
                module: 'Module 6',
                title: 'Future of AI in Healthcare',
                topics: [
                    'Emerging trends and research areas',
                    'Regulatory challenges and policies',
                    'The evolving role of healthcare professionals with AI'
                ]
            }
        ],
        courseMentor: {
            name: 'Dr. Mahmudul Haque',
            qualifications: 'MBBS, MPH, PhD (Health Informatics)',
            role: 'Director, Center for Health Innovation & AI\nAssociate Professor, Department of Public Health Informatics,\nBangabandhu Sheikh Mujib Medical University (BSMMU)',
            expertise: [
                'AI in epidemiology and public health',
                'Clinical decision support systems (CDSS)',
                'EHR and health data infrastructure in LMICs',
                'Health data ethics and governance'
            ],
            title: 'Course Mentor',
            image: '/assets/our-work/ai-academy/mentor.png' // Replace this with actual image path or URL
        },
        category: 'skills'
    }
]

const page = () => {
    const { mentorId } = useParams();
    const matchedItem = courses.find(item => item.id === Number(mentorId))
    const { title, image } = matchedItem
    return (
        <div>
            <CommonBanner
                title={title + ' Mentors'}
                description={'We shape policies and activate communities to build a stronger innovation landscape in Bangladesh through bold ideas, national benchmarks, real mentorship, and future-focused events.'}
                bannerImg={mentorsBannerBg}
            />
            <CustomBreadcrumbs
                rootRoute={'Home / Our Work / Career Care'}
                subRoute={title + ' Mentors'}
            />
        </div>
    )
}
export default page