"use client";
import React, { useEffect, useState } from 'react'
import CustomBreadcrumbs from '@/components/Shared/CustomBreadcrumbs';
import bannerBg from '@/public/assets/our-work/ai-academy/course-details-banner.png'
import { Courses } from '@/data/CourseData';
import { useParams } from 'next/navigation';
import Card from '@/components/Shared/Card';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import CourseDetails from '@/components/AiAcademy/CourseDetails';
import AiAcademyBanner from '@/components/AiAcademy/AiAcademyBanner';

function getRandomCourses(allCourses, currentId, count = 3) {
  const others = allCourses.filter(c => c.id !== currentId);

  // Shuffle the array
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]];
  }

  return others.slice(0, count);
}


const page = () => {
  const { id } = useParams()
  const course = Courses.find(course => course.id == id);
  const [shuffled, setShuffled] = useState([]);
  // const otherCourses = course ? getRandomCourses(Courses, id, 3) : [];
  useEffect(() => {
    const shuffledList = getRandomCourses(Courses, id, 3);
    setShuffled(shuffledList);
  }, []);
  if (!course) {
    return <div className='p-10 text-center text-gray-500'>Course not found</div>
  }

  return (
    <div className="bg-[#FAFAFA]">
      <AiAcademyBanner
        bannerImg={bannerBg}
      >
        <div className="px-20 space-y-8">
          <h1 className='font-bold text-[48px] leading-[64px]'>AI for Healthcare Professionals</h1>
          <p>This initiative helps researchers commercialize ideas by assessing institutional readiness and mapping Bangladesh’s innovation landscape to drive growth.</p>
        </div>
        <div></div>
      </AiAcademyBanner>
      <CustomBreadcrumbs
        rootRoute={'Home / Our Work / Academy of AI'}
        subRoute={course.title}
      />

      <CourseDetails course={course} />

      {/* popular courses */}
      <div className="bg-[#FAFAFA] py-15">
        <div className="max-w-7xl px-4 mx-auto text-center">
          <div className="flex flex-row items-center justify-between mx-auto">
            <div className="font-semibold text-[20px] leading-[24px]">Popular AI Courses</div>
            <div className="opacity-60">
              <Link href={`/our-work/ai-academy`} className="flex items-center gap-2 transition-all">
                View All <IoIosArrowForward />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {shuffled?.map((item, index) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                bgColor="bg-white"
                textColor="text-black"
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page