import { useState, useEffect } from "react"

// 🔥 AUTO LOAD IMAGES
const socialMedia = Object.values(
  import.meta.glob("../assets/social-media/*", { eager: true })
).map((img) => img.default).sort()

const branding = Object.values(
  import.meta.glob("../assets/branding/*", { eager: true })
).map((img) => img.default).sort()

const website = Object.values(
  import.meta.glob("../assets/website/*", { eager: true })
).map((img) => img.default).sort()

const poster = Object.values(
  import.meta.glob("../assets/poster/*", { eager: true })
).map((img) => img.default).sort()

const projects = [
  { title: "Social Media Design", images: socialMedia },
  { title: "Branding Project", images: branding },
  { title: "Website Mockup", images: website },
  { title: "Poster Design", images: poster },
]

function WorkSection() {
  const [open, setOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // 🔥 HOVER STATES
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)

  // 🔥 SLIDESHOW
  useEffect(() => {
    if (hoveredIndex === null) return

    const interval = setInterval(() => {
      setPrevIndex(imageIndex)
      setImageIndex((prev) =>
        (prev + 1) % projects[hoveredIndex].images.length
      )
    }, 1500)

    return () => clearInterval(interval)
  }, [hoveredIndex, imageIndex])

  const next = () =>
    setCurrentIndex((prev) =>
      (prev + 1) % currentProject.images.length
    )

  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    )

  return (
    <div className="relative bg-[#1a1a1a] py-20 overflow-hidden">

      {/* 🔥 STRIPE */}
      <div className="absolute left-1/2 -translate-x-1/2 w-screen top-[55%] -translate-y-1/2 h-[40%] bg-primary/80 z-[1]"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* 🔥 HEADER */}
        <div className="relative text-center mb-16 px-4 text-white">

          {/* LEFT DOTS */}
          <div className="hidden md:grid grid-cols-12 gap-2 w-[370px] absolute left-[-240px] top-1/2 -translate-y-[85%]">
            {[...Array(36)].map((_, i) => {
              const col = i % 12
              const opacity = 0.2 + (col / 11) * 0.8
              return (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-white"
                  style={{ opacity }}
                />
              )
            })}
          </div>

          {/* RIGHT DOTS */}
          <div className="hidden md:grid grid-cols-12 gap-2 w-[370px] absolute right-[-240px] top-1/2 -translate-y-[85%]">
            {[...Array(36)].map((_, i) => {
              const col = i % 12
              const opacity = 1 - (col / 11) * 0.8
              return (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-white"
                  style={{ opacity }}
                />
              )
            })}
          </div>

          {/* TITLE */}
          <h2 className="whitespace-nowrap text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.15em] uppercase leading-none">
            DESIGN{" "}
            <span className="text-transparent stroke-text">
              SHOWCASE
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            A collection of my recent design projects and creative work.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentProject(project)
                setCurrentIndex(0)
                setOpen(true)
              }}
              onMouseEnter={() => {
                setHoveredIndex(index)
                setImageIndex(0)
                setPrevIndex(0)
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-[350px] md:h-[500px] lg:h-[550px] overflow-hidden cursor-pointer bg-dark"
            >

              {/* 🔥 PREVIOUS IMAGE */}
              {hoveredIndex === index && (
                <img
                  src={project.images[prevIndex]}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
                />
              )}

              {/* 🔥 CURRENT IMAGE */}
              <img
                src={
                  hoveredIndex === index
                    ? project.images[imageIndex]
                    : project.images[0]
                }
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
                ${
                  hoveredIndex === index
                    ? "opacity-100 scale-105"
                    : "opacity-0"
                }`}
              />

              {/* 🔥 OVERLAY */}
              <div className="absolute inset-0 bg-black/70 hover:bg-black/40 transition"></div>

              {/* 🔥 TEXT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center -translate-y-4 text-white z-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase">
  {project.title}
</h3>

                <span className="text-sm mt-2 opacity-60">
                  View more &gt;
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 🔥 MODAL */}
      {open && currentProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <button onClick={prev} className="absolute left-6 text-white text-4xl">
            ‹
          </button>

          <img
            src={currentProject.images[currentIndex]}
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />

          <button onClick={next} className="absolute right-6 text-white text-4xl">
            ›
          </button>

          <div className="absolute bottom-6 text-white text-sm">
            {currentIndex + 1} / {currentProject.images.length}
          </div>

        </div>
      )}
    </div>
  )
}

export default WorkSection