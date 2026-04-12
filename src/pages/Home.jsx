import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import WorkSection from "../components/WorkSection"
import ContactSection from "../components/ContactSection"

function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WorkSection />
      <ContactSection /> 
    </main>
  )
}

export default Home