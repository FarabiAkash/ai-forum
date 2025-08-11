const CareerCard = ({ image, title, description, dark }) => {
  return (
    <div
      className={`${
        dark ? 'bg-[#1B4C66] text-white' : 'bg-white text-black'
      } p-4 rounded shadow sm:w-[300px] h-[400px]`}
    >
      <img
        src={image}
        alt={title}
        className='w-full h-48 object-cover rounded mb-4'
      />
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-sm'>{description}</p>
    </div>
  )
}

export default CareerCard
