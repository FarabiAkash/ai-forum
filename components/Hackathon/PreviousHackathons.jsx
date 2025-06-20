import hackathonData from '@/data/hackathonData'
import HackathonCard from './HackathonCard'

const PreviousHackathons = () => {
  const endedHackathons = hackathonData.filter(
    item => item.hackathonType === 'ended'
  )
  return (
    <div className='py-12 px-5 max-w-7xl mx-auto'>
      <h2 className='text-xl font-semibold mb-6 leading-[24px]'>
        Previous Hackathons
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4'>
        {endedHackathons.length > 0 && (
          <>
            {endedHackathons.map(item => (
              <HackathonCard key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
export default PreviousHackathons
