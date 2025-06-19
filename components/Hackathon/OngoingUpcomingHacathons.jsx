import hackathonData from '@/data/hackathonData'
import HackathonCard from './HackathonCard'

const OngoingUpcomingHackathons = () => {
  const ongoingHackathons = hackathonData.filter(
    item => item.hackathonType === 'ongoing'
  )
  const upcomingHackathons = hackathonData.filter(
    item => item.hackathonType === 'upcoming'
  )
  return (
    <section className='py-4 px-5 max-w-7xl mx-auto'>
      <h2 className='text-xl font-semibold mb-6 leading-[24px]'>
        Ongoing & Upcoming Hackathons
      </h2>

      {/* Ongoing */}
      <div className='flex justify-between items-center'>
        {ongoingHackathons.length > 0 && (
          <>
            {ongoingHackathons.map(item => (
              <HackathonCard key={item.id} {...item} />
            ))}
          </>
        )}

        {/* Upcoming */}
        {upcomingHackathons.length > 0 && (
          <>
            {' '}
            {upcomingHackathons.map(item => (
              <HackathonCard key={item.id} {...item} />
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default OngoingUpcomingHackathons
