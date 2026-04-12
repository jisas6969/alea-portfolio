import profile from "../assets/profile.png"
import { Link } from "react-router-dom"

function Hero() {

  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
    "InDesign",
  ]

  return (
    <section className="flex h-screen relative overflow-hidden bg-dark">

      {/* LEFT SPACE (20%) */}
<div className="w-[15%] bg-dark"></div>

{/* PURPLE SIDE (30%) */}
<div className="w-[40%] relative flex items-center justify-center bg-gradient-to-b from-[#6b2d4f] via-[#3a2230] to-[#1f1f1f]">

  {/* IMAGE CENTERED */}
  <img
    src={profile}
    alt="profile"
    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] scale-125 object-contain grayscale"
  />

  {/* TEXT CENTERED */}
  <div className="absolute bottom-28 left-0 w-full flex justify-center">

  <h1 className="leading-none z-10 text-center w-full flex flex-col items-center">

    <span className="block text-[110px] font-brunson tracking-[-3px] stroke-text text-center">
      VISUAL
    </span>

    <span className="block text-[123px] font-brunson text-white font-black text-center tracking-[-2px] -ml-[10px]">
  DESIGNER
</span>

  </h1>

</div>

</div>

      {/* RIGHT SIDE (50%) */}
      <div className="w-[50%] bg-dark text-white flex items-center pl-32 pr-20 relative">

        {/* TEXT BLOCK */}
        <div className="relative max-w-xl z-10">

          {/* OUTLINE SQUARE */}
          <div className="absolute -left-[160px] top-[-30px] w-44 h-44 border-[5px] border-[#853953] -z-10"></div>
          {/* SMALL TEXT */}
          <p className="text-[35px] font-brunson leading-[1.2] mb-6 tracking-tight">
  Hi, I'm Alea
</p>

          {/* TITLE */}
          <h2 className="text-[48px] font-brunson leading-[1.2] mb-6 tracking-tight">
            Designing Visuals That Stand Out
          </h2>

          {/* PARAGRAPH */}
          <p className="text-gray-400 mb-8 text-[15px] leading-[1.7] font-mont">
            I design clean, impactful visuals that help brands stand out and <br /> connect with their audience.
          </p>

          {/* BUTTON */}
          <Link
  to="/works"
  className="bg-primary px-8 py-3 text-sm font-semibold font-mont hover:opacity-80 transition rounded-sm inline-block"
>
  See my Works
</Link>
        </div>

        {/* TOP RIGHT DOT GRID */}
        <div className="absolute top-36 right-60 grid grid-cols-4 gap-4">
  {[...Array(12)].map((_, i) => {
    const col = i % 4

    return (
      <div
        key={i}
        className="w-3 h-3 rounded-full bg-white"
        style={{
          opacity: 0.3 + col * 0.25, // 👉 dark → bright (left to right)
        }}
      />
    )
  })}
</div>

        {/* BOTTOM DOT GRID */}
        <div className="absolute bottom-32 left-40 grid grid-cols-3 gap-3">
  {[...Array(12)].map((_, i) => {
    const row = Math.floor(i / 3)

    return (
      <div
        key={i}
        className="w-2.5 h-2.5 rounded-full bg-white"
        style={{
          opacity: 1 - row * 0.3, // 👉 top bright → bottom dark
        }}
      />
    )
  })}
</div>

        {/* BIG SQUARE */}
        <div className="absolute bottom-28 right-16 w-56 h-56 border-[4px] border-[#853953]"></div>

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