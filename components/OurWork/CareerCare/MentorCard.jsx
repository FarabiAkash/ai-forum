import Image from 'next/image'

const MentorCard = ({ mentor }) => {
  return (
    <div className='bg-white  p-6 sm:p-[40px] text-center'>
      <Image
        src={mentor.image}
        alt={mentor.name}
        width={200}
        height={200}
        className='w-[160px] h-[160px] mx-auto rounded-full object-cover mb-8'
      />
      <h3 className='text-lg font-semibold text-[#040940]'>{mentor.name}</h3>
      <p className='text-base text-[#040940] mb-3'>{mentor.title}</p>
      <div className='mt-4 text-left'>
        <p className='text-base font-semibold mb-1 text-[#181D27]'>
          Current Role
        </p>
        <p className='text-base  text-[#717680]'>{mentor.role}</p>
      </div>

      <div className='text-left mt-4'>
        <p className='text-base font-semibold mb-1 text-[#181D27]'>Expertise</p>
        <ul className='list-disc list-inside ml-2 mt-2 space-y-1'>
          {mentor.expertise.map((expertise, tIdx) => (
            <li key={tIdx} className='text-[#717680] text-[16px]'>
              {expertise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default MentorCard
