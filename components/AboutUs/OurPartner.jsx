import Image from 'next/image'
import company1 from '@/public/assets/about-us/company1.svg'
import company2 from '@/public/assets/about-us/company2.svg'
import company3 from '@/public/assets/about-us/company3.svg'
import company4 from '@/public/assets/about-us/company4.svg'
import company5 from '@/public/assets/about-us/company5.svg'

const OurPartner = () => {
  const companies = [
    { src: company1, alt: 'Layers' },
    { src: company2, alt: 'Sisyphus' },
    { src: company3, alt: 'Circooles' },
    { src: company4, alt: 'Catalog' },
    { src: company5, alt: 'Quotient' }
  ]

  return (
    <section className='py-14 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <p className='text-center text-gray-800 font-medium mb-10 text-sm sm:text-base'>
          From startups to the world’s largest companies
        </p>
        <div className='flex flex-wrap justify-center gap-10 md:gap-0 md:justify-between items-center  w-full'>
          {companies.map((company, index) => (
            <div key={index} className='w-[146px] h-[48px] relative'>
              <Image
                src={company.src}
                alt={company.alt}
                fill
                className='object-contain w-full h-full'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPartner
