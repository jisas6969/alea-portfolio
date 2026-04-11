import Navbar from "../components/Navbar"
import AboutSection from "../components/AboutSection"

function About() {
  return (
    <div className="bg-dark text-white min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* ABOUT CONTENT */}
      <main className="pt-24">
        <AboutSection />
      </main>

    </div>
  )
}

export default About