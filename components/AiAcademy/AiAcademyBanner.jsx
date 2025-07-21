
const AiAcademyBanner = ({ bannerImg, children }) => {
    return (
        <section
            className='relative w-full h-[700px] bg-cover bg-center bg-no-repeat flex items-start justify-center text-white'
            style={{
                backgroundImage: `url(${bannerImg.src})`
            }}
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent z-0' />

            {/* Content */}
            <div className='relative z-10 top-1/3 grid grid-cols-2 gap-8 max-w-7xl mx-auto place-items-center'>
                {/* section1 */}
                {/* section2 */}
                {children}
            </div>
        </section>
    )
}

export default AiAcademyBanner