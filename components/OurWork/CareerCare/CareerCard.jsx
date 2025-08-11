const CareerCard = ({ image, title, description, dark }) => {
  return (
    <div
      className={`${
        dark ? 'bg-[#00000026] text-white' : 'bg-white text-black'
      } p-4 xl:w-[300px] h-[400px]`}
    >
      <img src={image} alt={title} className='w-full h-48 object-cover mb-4' />
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-sm'>{description}</p>
    </div>
  )
}

export default CareerCard
