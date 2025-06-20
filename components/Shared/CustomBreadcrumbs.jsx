const CustomBreadcrumbs = ({ rootRoute, subRoute }) => {
  return (
    <div className='p-5 max-w-7xl mx-auto'>
      <p className='text-[14px] leading-[16px] tracking-wider font-[400] text-[#717680]'>
        {rootRoute} /<span className='text-[#181D27]'> {subRoute}</span>
      </p>
    </div>
  )
}
export default CustomBreadcrumbs
