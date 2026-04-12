function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-dark pt-12 pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-16 items-center px-6">

        {/* 🔥 LEFT - FORM */}
        <div className="relative ml-10">

          <div className="relative inline-block">
            
            {/* 🔥 OUTER (offset square) */}
<div className="absolute -top-4 -left-4 w-full h-full border-[6px] border-primary z-0"></div>

{/* 🔥 INNER (main box) */}
<div className="relative border-[3px] border-primary p-8 z-10 bg-transparent">

              <form className="space-y-8 text-white">

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
                />

                <textarea
                  rows="3"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
                ></textarea>

                <div className="flex justify-center">
                  <button className="bg-primary px-6 py-2 mt-4 hover:opacity-90 transition">
                    Send
                  </button>
                </div>

              </form>

            </div>
          </div>

          {/* 🔥 LEFT DOTS */}
          <div className="hidden md:grid grid-cols-6 gap-2 absolute left-[-140px] bottom-10">
  {[...Array(18)].map((_, i) => {
    const col = i % 6
    const opacity = 0.2 + (col / 5) * 0.8

    return (
      <div
        key={i}
        className="w-3 h-3 rounded-full bg-white"
        style={{ opacity }}
      />
    )
  })}
</div>

        </div>

        {/* 🔥 RIGHT - TEXT */}
        <div className="text-white relative">

          {/* TOP DOTS */}
          <div className="grid grid-cols-3 grid-rows-4 gap-2 w-fit mb-6 ml-12 relative -top-32">
  {[...Array(12)].map((_, i) => {
    const row = Math.floor(i / 3) // 0 (top), 1, 2, 3 (bottom)

    const opacityLevels = [1, 0.75, 0.5, 0.2] // top → bottom
    const opacity = opacityLevels[row]

    return (
      <div
        key={i}
        className="w-2 h-2 bg-white rounded-full"
        style={{ opacity }}
      />
    )
  })}
</div>

          <div className="text-white relative -mt-24">

  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    Let’s Work Together!
  </h2>

  <p className="text-gray-300 mb-4 max-w-md">
    I’m available for freelance projects and collaborations. If you have an idea in mind, feel free to contact me.
  </p>

  <p className="text-gray-400">
    Email: tandocaleanicole@gmail.com
  </p>

</div>

          {/* 🔥 BOTTOM DOTS */}
          <div className="hidden md:grid [grid-template-columns:repeat(16,minmax(0,1fr))] gap-2 absolute right-[-330px] bottom-[-80px] w-[500px]">
  {[...Array(48)].map((_, i) => {
    const col = i % 16
    const opacity = 1 - (col / 15) * 0.8

    return (
      <div
        key={i}
        className="w-3 h-3 bg-white rounded-full"
        style={{ opacity }}
      ></div>
    )
  })}
</div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection