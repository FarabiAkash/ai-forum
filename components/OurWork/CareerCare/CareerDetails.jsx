const CareerDetails = () => {
  return (
    <div className='bg-white p-6 sm:px-[80px] sm:py-[64px] md:w-[65%]'>
      <p className='text-xs sm:text-sm font-semibold text-[#3B5AFE] uppercase mb-4'>
        Service Details
      </p>

      {/* Overview */}
      <div className='mb-6'>
        <h2 className='text-lg sm:text-xl font-semibold mb-2'>Overview</h2>
        <p className='text-base sm:text-lg text-[#181D27] sm:leading-[32px]'>
          The Global Research Placement is a premier career care initiative
          designed to connect students with international research opportunities
          under the mentorship of experienced professors. This program opens
          doors for students to work on cutting-edge academic or applied
          research projects, helping them build strong research profiles, gain
          global exposure, and prepare for competitive graduate programs or
          research-based careers.
        </p>
      </div>

      {/* Key Topics */}
      <div className='mb-6'>
        <h2 className='text-lg sm:text-xl font-semibold mb-2'>
          Why Choose Global Research Placement?
        </h2>
        <ul className='list-disc pl-5 text-base sm:text-lg text-[#181D27] space-y-1'>
          <li>
            Supervised by Leading Professors: Each student is matched with a
            professor or research mentor who provides personalized supervision
            and guidance throughout the project.
          </li>
          <li>
            Global Collaboration: Collaborate with international institutions,
            labs, and cross-cultural teams to gain real-world research
            experience.
          </li>
          <li>
            Career Acceleration: Enhance your academic profile with high-impact
            research outcomes, publications, or conference presentations.
          </li>
          <li>
            Graduate School Ready: Strengthen your applications for MS/PhD
            programs with verified research credentials and professional
            recommendations.
          </li>
        </ul>
      </div>

      {/* Who Should Attend */}
      <div className='mb-6'>
        <h2 className='text-lg sm:text-xl font-semibold mb-2'>
          What We Offer?
        </h2>
        <ul className='list-disc pl-5 text-base sm:text-lg text-[#181D27] space-y-1'>
          <li>
            <strong>Research Matching:</strong> Based on your interests and
            academic strengths, we connect you with suitable global research
            projects and mentors.
          </li>
          <li>
            <strong>Mentorship & Supervision:</strong> Work under direct
            guidance of faculty members from reputed institutions.
          </li>
          <li>
            <strong>Skill Development:</strong> Gain hands-on experience in
            research methodologies, data analysis, academic writing, and project
            management.
          </li>
          <li>
            <strong>Career Coaching:</strong> Workshops on publishing, academic
            networking, research ethics, and graduate school planning.
          </li>
        </ul>
      </div>

      {/* Event Format */}
      <div>
        <h2 className='text-lg sm:text-xl font-semibold mb-2'>
          Who Can Apply?
        </h2>
        <ul className='list-disc pl-5 text-base sm:text-lg text-[#181D27] space-y-1'>
          <li>What is AI? Key concepts (ML, NLP, Deep Learning)</li>
          <li>Overview of AI applications in healthcare</li>
          <li>Benefits and risks of AI in clinical practice</li>
        </ul>
      </div>
    </div>
  )
}
export default CareerDetails
