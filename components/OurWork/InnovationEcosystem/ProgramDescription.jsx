const ProgramDescription = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-6 sm:py-10 text-[#040940]'>
      <div className='bg-white p-5 sm:px-[80px] sm:py-[64px]'>
        {/* Event Details Link */}
        <p className='text-xs sm:text-sm font-semibold text-[#3B5AFE] uppercase mb-4'>
          Event Details
        </p>

        {/* Overview */}
        <div className='mb-6'>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>Overview</h2>
          <p className='text-base sm:text-lg text-[#181D27] sm:leading-[32px]'>
            Join us for an insightful virtual event exploring how Artificial
            Intelligence is transforming the landscape of diagnostic medicine.
            As healthcare increasingly integrates intelligent technologies, AI
            is becoming a powerful tool in disease detection, imaging analysis,
            predictive analytics, and decision support systems. This event will
            bring together healthcare professionals, AI researchers, tech
            innovators, and policymakers to discuss the future of diagnostics
            and the ethical, practical, and clinical implications of AI-driven
            care.
          </p>
        </div>

        {/* Key Topics */}
        <div className='mb-6'>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>
            Key Topics Covered
          </h2>
          <ul className='list-disc pl-5 text-base sm:text-lg text-[#181D27] space-y-1'>
            <li>
              How AI is enhancing accuracy and efficiency in diagnostic
              procedures
            </li>
            <li>Case studies of AI in radiology, pathology, and genomics</li>
            <li>
              Overcoming challenges: data privacy, bias, and regulatory concerns
            </li>
            <li>Human-AI collaboration in clinical settings</li>
            <li>
              The future of personalized diagnostics powered by machine learning
            </li>
          </ul>
        </div>

        {/* Who Should Attend */}
        <div className='mb-6'>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>
            Who Should Attend?
          </h2>
          <ul className='list-disc pl-5 text-base sm:text-lg text-[#181D27] space-y-1'>
            <li>Healthcare practitioners and clinicians</li>
            <li>Medical researchers and diagnosticians</li>
            <li>Health tech startups and AI developers</li>
            <li>Hospital administrators and decision-makers</li>
            <li>
              Students and academics in medicine, data science, and biomedical
              engineering
            </li>
          </ul>
        </div>

        {/* Event Format */}
        <div>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>
            Event Format
          </h2>
          <ul className='list-disc pl-5 text-base sm:text-lg text-[#181D27] space-y-1'>
            <li>Opening Remarks</li>
            <li>Keynote Sessions</li>
            <li>Expert Panel Discussion</li>
            <li>Live Q&A</li>
            <li>Networking Breakout Rooms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProgramDescription
