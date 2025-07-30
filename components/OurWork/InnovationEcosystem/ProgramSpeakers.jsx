import speakerImg from '@/public/assets/our-work/innovation-ecosystem/speaker.jpg'
import Image from 'next/image'
const speakers = [
  {
    name: 'Dr. Mahmudul Haque',
    title: 'MBBS, MPH, PhD (Health Informatics)',
    role: 'Director, Center for Health Innovation & AI\nAssociate Professor, Department of Public Health Informatics, Bangabandhu Sheikh Mujib Medical University (BSMMU)',
    image: speakerImg
  },
  {
    name: 'Dr. Mahmudul Haque',
    title: 'MBBS, MPH, PhD (Health Informatics)',
    role: 'Director, Center for Health Innovation & AI\nAssociate Professor, Department of Public Health Informatics, Bangabandhu Sheikh Mujib Medical University (BSMMU)',
    image: speakerImg
  },
  {
    name: 'Dr. Mahmudul Haque',
    title: 'MBBS, MPH, PhD (Health Informatics)',
    role: 'Director, Center for Health Innovation & AI\nAssociate Professor, Department of Public Health Informatics, Bangabandhu Sheikh Mujib Medical University (BSMMU)',
    image: speakerImg
  }
]

const ProgramSpeakers = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-6 sm:py-10 text-[#040940]'>
      <h2 className='text-xl sm:text-2xl font-semibold mb-8'>Speakers</h2>

      <div className='grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {speakers.map((speaker, index) => (
          <div key={index} className='bg-white  p-6 sm:p-[40px] text-center'>
            <Image
              src={speaker.image}
              alt={speaker.name}
              className='w-[160px] h-[160px] mx-auto rounded-full object-cover mb-8'
            />
            <h3 className='text-lg font-semibold text-[#040940]'>
              {speaker.name}
            </h3>
            <p className='text-base text-[#040940] mb-3'>{speaker.title}</p>
            <div className='mt-4 text-left'>
              <p className='text-base font-semibold mb-1 text-[#181D27]'>
                Current Role
              </p>
              <p className='text-base whitespace-pre-line text-[#717680]'>
                {speaker.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramSpeakers
