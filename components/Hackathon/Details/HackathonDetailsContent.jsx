const HackathonDetailsContent = () => {
  return (
    <section className='max-w-6xl m-5 xl:mx-auto px-5 md:px-12 py-10 text-sm text-[#0B1F3A] bg-white md:mt-36 xl:mt-20'>
      <h3 className='text-xs text-blue-600 font-semibold mb-4 uppercase tracking-wide'>
        Hackathon Details
      </h3>

      {/* Overview */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Overview</h2>
        <p className='text-gray-700'>
          CodeCure 2025 is a 48-hour virtual hackathon focused on building
          innovative digital solutions to tackle critical challenges in the
          healthcare industry. From AI-powered diagnostics to patient management
          platforms, this is your chance to create real impact with your code.
        </p>
      </div>

      {/* Organizer */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Organized By</h2>
        <ul className='list-disc ml-5 text-gray-700 space-y-1'>
          <li>HealthHack Alliance</li>
          <li>
            In collaboration with CMED, MedTech Innovators, CareNet, and
            Tech4Health
          </li>
        </ul>
      </div>

      {/* Date & Time */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Date & Time</h2>
        <ul className='list-disc ml-5 text-gray-700 space-y-1'>
          <li>
            <strong>Hackathon Dates:</strong> June 15 – June 17, 2025
          </li>
          <li>
            <strong>Registration Deadline:</strong> June 12, 2025
          </li>
          <li>
            <strong>Duration:</strong> 48 hours (Kickoff at 10:00 AM GMT on June
            15)
          </li>
        </ul>
      </div>

      {/* Location */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Location</h2>
        <p className='text-gray-700'>
          International Convention City Bashundhara, Purbachal, Dhaka
        </p>
      </div>

      {/* Eligibility */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Eligibility</h2>
        <p className='text-gray-700'>
          Open to students, professionals, and startups globally. Solo or team
          participation (up to 4 members)
        </p>
      </div>

      {/* Tracks */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Themes / Tracks</h2>
        <ul className='list-disc ml-5 text-gray-700 space-y-1'>
          <li>AI in Diagnostics</li>
          <li>Telemedicine & Remote Care</li>
          <li>Mental Health & Wellness</li>
          <li>Healthcare Accessibility</li>
          <li>Health Data & Privacy</li>
        </ul>
      </div>

      {/* Prizes */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>🏆 Prizes</h2>
        <ul className='list-disc ml-5 text-gray-700 space-y-1'>
          <li>🥇 1st Place – $5,000 + Mentorship + Media Feature</li>
          <li>🥈 2nd Place – $3,000 + HealthTech Expo Pass</li>
          <li>🥉 3rd Place – $1,500 + Product Showcase Opportunity</li>
          <li>
            🎖️ Special Awards: Best UI/UX · Best Student Project · Most
            Impactful
          </li>
        </ul>
      </div>

      {/* Judging */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Judging Criteria</h2>
        <ul className='list-disc ml-5 text-gray-700 space-y-1'>
          <li>Innovation & Creativity – 25%</li>
          <li>Impact & Relevance – 25%</li>
          <li>Feasibility & Technical Execution – 25%</li>
          <li>Presentation & Demo – 25%</li>
        </ul>
      </div>

      {/* Timeline */}
      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Timeline</h2>
        <ul className='list-disc ml-5 text-gray-700 space-y-1'>
          <li>June 1-12: Registration Open</li>
          <li>June 13: Team Matching + Pre-event Workshop</li>
          <li>June 15 (10:00 AM GMT): Hacking Starts</li>
          <li>June 17 (10:00 AM GMT): Submission Deadline</li>
          <li>June 18-20: Judging</li>
          <li>June 21: Winners Announced</li>
        </ul>
      </div>

      {/* Rules */}
      <div>
        <h2 className='text-lg font-semibold mb-2'>Rules & Guidelines</h2>
        <ul className='list-disc ml-5 text-gray-700 space-y-1'>
          <li>All code must be written during the hackathon.</li>
          <li>Open-source tools and frameworks are allowed.</li>
          <li>Respectful collaboration and originality are required.</li>
          <li>Teams must submit a working prototype + 2-min demo video.</li>
        </ul>
      </div>
    </section>
  )
}

export default HackathonDetailsContent
