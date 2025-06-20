import { CiTrophy } from 'react-icons/ci'
import { IoTrophyOutline } from 'react-icons/io5'

const WinnerCard = ({ prize, organizer }) => {
  return (
    <div className='bg-white text-black rounded-[2px] p-5 w-full  md:w-[400px] shadow-md md:translate-y-1/2'>
      {/* 1st Prize */}
      <div className='border-[1px] border-dashed border-[#3039E540] rounded-[2px] p-4 text-center bg-[#3039E50D] mb-4 flex justify-start items-center gap-5'>
        <div className='w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center'>
          <CiTrophy size={50} className='text-[#3039E5]' />
        </div>
        <div>
          <p className='text-base text-[#3039E5] font-medium text-left leading-[24px]'>
            For 1st Place
          </p>
          <h3 className='text-[24px] font-bold text-[#181D27] text-left'>
            Win {prize.firstPlace}
          </h3>
        </div>
      </div>

      {/* Runner-ups */}
      <div className='flex flex-wrap gap-4 justify-between items-center'>
        <div className='flex justify-start items-center gap-3'>
          <div className='flex justify-center items-center p-[10px] bg-[#FAFAFA]'>
            <IoTrophyOutline size={30} className='text-[#3039E5]' />
          </div>
          <div className='flex flex-col gap-1 justify-start'>
            <span className='text-[#717680] text-sm leading-[16px]'>
              1st Runner-up
            </span>
            <span className='text-[#181D27] text-[20px] leading-[24px] font-semibold'>
              {prize.secondPlace}
            </span>
          </div>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <div className='flex justify-center items-center p-[10px] bg-[#FAFAFA]'>
            <IoTrophyOutline size={30} className='text-[#3039E5]' />
          </div>
          <div className='flex flex-col gap-1 justify-start'>
            <span className='text-[#717680] text-sm leading-[16px]'>
              2nd Runner-up
            </span>
            <span className='text-[#181D27] text-[20px] leading-[24px] font-semibold'>
              {prize.thirdPlace}
            </span>
          </div>
        </div>
      </div>

      {/* Organizer */}
      <div className='mt-4 pt-4 border-t border-[#3039E533] text-xs text-[#181D27]'>
        <p className='font-semibold text-base leading-[24px]'>Organizer</p>
        <p className='text-sm font-normal leading-[24px]'>{organizer}</p>
      </div>
    </div>
  )
}
export default WinnerCard
