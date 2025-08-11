import MentorCard from './MentorCard'

const careerTypes = [
  'Career In Healthcare',
  'Career In Business',
  'Career In Technology'
]
const CareerMentors = ({ item }) => {
  return (
    <div className='p-5 max-w-7xl mx-auto'>
      <div className='flex flex-wrap gap-4 justify-between items-center'>
        <h1 className='text-[20px] sm:leading-[24px] font-semibold'>Mentors</h1>
        <div className='flex flex-wrap gap-2 mb-4 sm:bg-[#0000000D]'>
          {careerTypes.map(type => (
            <button
              key={type}
              //   onClick={() => setFilter(type)}
              className={`px-6 py-2 text-sm font-medium capitalize cursor-pointer ${
                item.title === type
                  ? 'bg-white text-black sm:m-[2px] border sm:border-none'
                  : 'text-[#717680] bg-[#0000000D] sm:bg-transparent'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between items-center gap-6 mt-4'>
        {/* {item?.courseMentor.map((mentor, idx) => (
        ))} */}
        <MentorCard mentor={item.courseMentor} />
        <MentorCard mentor={item.courseMentor} />
        <MentorCard mentor={item.courseMentor} />
      </div>
    </div>
  )
}
export default CareerMentors
