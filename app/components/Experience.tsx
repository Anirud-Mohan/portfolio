'use client'

import InteractiveTimelineExperience from './InteractiveTimelineExperience'
import SectionHeading from './SectionHeading'

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Selected roles and outcomes."
          description="A stark look at the work — responsibilities, impact, and tools."
        />
        <InteractiveTimelineExperience />
      </div>
    </section>
  )
}

export default Experience
