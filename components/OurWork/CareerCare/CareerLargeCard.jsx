const CareerLargeCard = ({ image, title, description, dark }) => {
  return (
    <div
      className='relative shadow overflow-hidden h-[400px] flex items-end col-span-2'
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          dark ? 'bg-[#1B4C66]/60' : 'bg-black/40'
        }`}
      ></div>

      {/* Text content */}
      <div className='relative p-6 z-10 text-white'>
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default CareerLargeCard
