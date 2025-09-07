'use client'
import Card from '@/components/Shared/Card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const courses = [
  {
    id: 1,
    title: 'Career In Healthcare',
    description:
      'This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping.',

    image: '/assets/our-work/career-care/c1.jpg',
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

    image: '/assets/our-work/career-care/c2.jpg',
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

    image: '/assets/our-work/career-care/c3.jpg',
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

function getRandomCourses (count = 3) {
  // Shuffle the array
  for (let i = courses.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[courses[i], courses[j]] = [courses[j], courses[i]]
  }

  return courses.slice(0, count)
}

const AICourses = () => {
  const [shuffled, setShuffled] = useState([])
  useEffect(() => {
    const shuffledList = getRandomCourses(3)
    setShuffled(shuffledList)
  }, [])
  return (
    <div className='bg-[#FAFAFA] pb-10'>
      <div className='p-5 max-w-7xl mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {shuffled?.map(item => (
          <div
            key={item.id}
            className={`text-left p-5 [&>h3]:mt-4 [&>p]:mt-4 [&>div]:mt-4 bg-white text-black `}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout='responsive'
              width={500}
              height={300}
              className='max-w-[370px] max-h-[185px]'
            />
            <h3 className='font-semibold'>{item.title}</h3>
            <p className='opacity-60'>{item.description}</p>
            <div className='opacity-60'>
              <Link
                href={`/our-work/career-care/${item.id}`}
                className={`flex items-center gap-2 transition-all`}
              >
                Learn More <IoIosArrowForward />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AICourses
