import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import EducationSection from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import CertificationsSection from "./components/CertificationSection"

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <CertificationsSection />
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

