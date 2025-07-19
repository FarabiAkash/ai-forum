import Image from 'next/image'

const CommonBanner = ({ bannerImg, title, description, logo }) => {
  return (
    <section
      className='relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-start justify-center text-white'
      style={{
        backgroundImage: `url(${bannerImg.src})`
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent z-0' />

      {/* Content */}
      <div className='relative z-10 text-center px-4 top-1/2'>
        {title === 'logo' ? (
          <div className='w-[250px] h-[150px] mx-auto'>
            <Image
              src={logo}
              alt={description}
              className='w-full h-full object-cover'
            />
          </div>
        ) : (
          <h1 className='text-4xl md:text-5xl mb-4 font-[700] md:leading-[64px]'>
            {title}
          </h1>
        )}
        <p className='text-md md:text-lg mb-4 md:mb-6 md:leading-[24px]  font-sans text-center  max-w-[790px]'>
          {description}
        </p>
      </div>
    </section>
  )
}

export default CommonBanner
