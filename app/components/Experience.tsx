'use client'

import InteractiveTimelineExperience from './InteractiveTimelineExperience'
import SectionHeading from './SectionHeading'

const Experience = () => {
  return (
    <section id="experience" className="section-shell relative z-0">
      <div className="page-shell relative z-10">
        <SectionHeading
          eyebrow="Experience"
          title="A more cinematic look at the work."
          description="Selected roles, outcomes, and technologies presented as a cleaner futuristic timeline."
        />
        <InteractiveTimelineExperience />
      </div>
    </section>
  )
}

export default Experience

