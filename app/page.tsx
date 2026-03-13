import Hero from './components/Hero'
import Projects from './components/Projects'
import EducationSection from './components/Education'
import Experience from './components/Experience'
import CertificationsSection from "./components/CertificationSection"
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <EducationSection />
      <Projects />
      <CertificationsSection />
      <Contact />
    </>
  )
}

