import Image from 'next/image'

const SingleCard = ({
  name,
  image,
  description,
  isTeam,
  setSelectedTeam,
  team
}) => {
  return (
    <div className='text-center mb-4'>
      <Image
        src={image}
        alt={name}
        className={`w-40 h-40 object-cover mx-auto mb-4 ${
          isTeam ? 'rounded-full' : 'rounded-md'
        }`}
      />
      <h3 className='text-lg font-semibold mb-2'>{name}</h3>
      <p className='text-gray-600 text-sm mb-2 line-clamp-2'>{description}</p>
      <a
        onClick={() => setSelectedTeam(team)}
        className='text-[#3039E5] font-medium cursor-pointer'
      >
        Continue Reading
      </a>
    </div>
  )
}

export default SingleCard
