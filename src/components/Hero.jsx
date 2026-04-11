import profile from "../assets/profile.png"

function Hero() {

  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
    "InDesign",
  ]

  return (
    <section className="flex h-screen relative overflow-hidden bg-dark">

      {/* LEFT SPACE (10%) */}
      <div className="w-[10%] bg-dark"></div>

      {/* PURPLE SIDE (40%) */}
<div className="w-[40%] bg-primary relative flex items-center justify-center">

  {/* IMAGE CENTERED */}
  <img
    src={profile}
    alt="profile"
    className="absolute bottom-0 h-[95%] object-contain grayscale"
  />

  {/* TEXT CENTERED */}
  <div className="absolute bottom-11 text-center w-full flex flex-col items-center">

    <h1 className="leading-none z-10 text-center">
  <span className="block text-[160px] font-brunson tracking-[-4px] stroke-text">
    VISUAL
  </span>
  <span className="block text-[143px] font-brunson text-white tracking-[-4px] font-black">
    DESIGNER
  </span>
</h1>

  </div>

</div>

      {/* RIGHT SIDE (50%) */}
      <div className="w-[50%] bg-dark text-white flex items-center pl-32 pr-20 relative">

        {/* TEXT BLOCK */}
        <div className="relative max-w-xl">

          {/* OUTLINE SQUARE */}
          <div className="absolute -left-[190px] top-4 w-44 h-44 border-[4px] border-[#853953]"></div>

          {/* SMALL TEXT */}
          <p className="text-[35px] font-brunson leading-[1.2] mb-6 tracking-tight">
  Hi, I'm Alea
</p>

          {/* TITLE */}
          <h2 className="text-[48px] font-brunson leading-[1.2] mb-6 tracking-tight">
            Designing Visuals That Stand Out
          </h2>

          {/* PARAGRAPH */}
          <p className="text-gray-400-[60px] mb-8 text-[15px] leading-[1.7] font-mont">
            I design clean, impactful visuals that help brands stand out and connect with their audience.
          </p>

          {/* BUTTON */}
          <button className="bg-primary px-8 py-3 text-sm font-semibold font-mont hover:opacity-80 transition rounded-sm">
            See my Works
          </button>

        </div>

        {/* TOP RIGHT DOT GRID */}
        <div className="absolute top-28 right-20 grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        {/* BOTTOM DOT GRID */}
        <div className="absolute bottom-36 left-1/4 grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        {/* BIG SQUARE */}
        <div className="absolute bottom-16 right-16 w-44 h-44 border-[4px] border-[#853953]"></div>

      </div>

      {/* SKILLS BAR */}
      <div className="absolute bottom-0 left-0 w-full bg-primary py-4 overflow-hidden">

        <div className="marquee">
          <div className="track text-white text-base font-mont tracking-wide">

            {[...Array(10)].map((_, i) => (
              skills.map((skill, index) => (
                <span key={`${i}-${index}`} className="mx-10">
                  {skill}
                  <span className="mx-10">•</span>
                </span>
              ))
            ))}

          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero