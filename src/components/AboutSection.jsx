import profile from "../assets/ale.jpg"

function AboutSection() {
return ( <section className="relative bg-dark text-white min-h-screen flex items-center px-6 md:px-[8%] lg:px-[12%] overflow-hidden">

```
  {/* PURPLE STRIP */}
  <div className="absolute left-0 top-[52%] -translate-y-1/2 w-full h-[280px] 
bg-gradient-to-r from-[#1f1f1f] via-[#3d2135] to-[#5a2a4d]">
</div>

  {/* MAIN GRID */}
  <div className="relative grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="relative z-10 max-w-none mt-10 py-10">
        <div className="absolute -top-36 left-[480px] w-28 h-28 border-[5px] border-[#853953] -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-brunson mb-6 leading-tight whitespace-nowrap">
  Creative Mind Behind the Designs
</h2>

      <p className="text-gray-300 mb-6 leading-relaxed">
        I’m Alea, a passionate visual designer focused on creating bold and modern designs that communicate clearly and effectively.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed">
        I enjoy turning ideas into visually engaging experiences whether it’s branding, social media graphics, or digital content. My goal is to help brands stand out through clean, creative, and purposeful design.
      </p>


    </div>

    {/* RIGHT IMAGE */}
   <div className="relative flex justify-center -mt-16">

  {/* IMAGE (NASA LIKOD) */}
  <img
    src={profile}
    alt="profile"
    className="relative z-0 w-[320px] md:w-[380px] h-[580px] object-cover grayscale"
  />

  {/* FRAME (NASA HARAP) */}
  <div className="absolute top-8 left-[178px] w-[320px] md:w-[380px] h-[580px] border-[5px] border-[#853953] z-10"></div>

  {/* DOTS (TOP RIGHT - NASA HARAP) */}
  <div className="absolute -top-2 right-28 grid grid-cols-4 gap-3 z-10">
  {[...Array(12)].map((_, i) => {
    const col = i % 4

    return (
      <div
        key={i}
        className="w-3 h-3 bg-white rounded-full"
        style={{
          opacity: 0.3 + col * 0.25, // dark → light
        }}
      ></div>
    )
  })}
</div>

</div>

  </div>

  {/* DECORATIONS */}

  {/* TOP LEFT DOTS */}
  <div className="absolute top-36 left-[320px] grid grid-cols-3 gap-3">
  {[...Array(12)].map((_, i) => {
    const row = Math.floor(i / 3)

    return (
      <div
        key={i}
        className="w-4 h-4 bg-white rounded-full"
        style={{
          opacity: 0.3 + (3 - row) * 0.2, // bottom dark → top bright
        }}
      ></div>
    )
  })}
</div>

  

  {/* BOTTOM DOTS */}
  <div className="absolute bottom-20 right-1/2 grid grid-cols-4 gap-3">
  {[...Array(12)].map((_, i) => {
    const row = Math.floor(i / 4)

    return (
      <div
        key={i}
        className="w-3 h-3 bg-white rounded-full"
        style={{
          opacity: 0.3 + (2 - row) * 0.25, // bottom dark → top bright
        }}
      ></div>
    )
  })}
</div>

  {/* SQUARES */}

  <div className="absolute bottom-10 left-30 w-56 h-56 border-[5px] border-[#853953]"></div>

</section>


)
}

export default AboutSection
