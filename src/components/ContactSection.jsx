import emailjs from "@emailjs/browser"
import { useRef, useState, useEffect } from "react"

function ContactSection() {
  const form = useRef()

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_dv3277b",
        "template_1goya8n",
        form.current,
        "_vej5Gx7DM9pcGzS3"
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
          form.current.reset()
        },
        (error) => {
          alert("Failed to send ❌")
          console.log(error)
          setLoading(false)
        }
      )
  }

  // 🔥 AUTO HIDE SUCCESS
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [success])

  return (
    <section
      id="contact"
      className="relative bg-dark py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-16 items-center px-6">

        {/* 🔥 LEFT - FORM */}
        <div className="relative ml-10">

          <div className="relative inline-block">

            {/* OUTER BORDER */}
            <div className="absolute -top-4 -left-4 w-full h-full border-[6px] border-primary z-0"></div>

            {/* INNER */}
            <div className="relative border-[3px] border-primary p-8 z-10">

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-8 text-white"
              >

                <input
  type="text"
  name="name"
  placeholder="Your Name"
  required
  className="w-full bg-transparent border-b border-gray-500 focus:border-primary outline-none py-3 placeholder-gray-400 transition"
/>

<input
  type="email"
  name="email"
  placeholder="Your Email"
  required
  className="w-full bg-transparent border-b border-gray-500 focus:border-primary outline-none py-3 placeholder-gray-400 transition"
/>

<textarea
  name="message"
  rows="3"
  placeholder="Your Message"
  required
  className="w-full bg-transparent border-b border-gray-500 focus:border-primary outline-none py-3 placeholder-gray-400 resize-none transition"
/>

                <div className="flex justify-center">
                  <button
  type="submit"
  className="bg-primary px-8 py-3 mt-6 tracking-wider uppercase text-sm hover:scale-105 hover:shadow-lg transition duration-300"
>
  Send Message
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

          {/* 🔥 TOP DOTS */}
          <div className="grid grid-cols-3 grid-rows-4 gap-2 w-fit mb-6 ml-12 relative -top-32">
            {[...Array(12)].map((_, i) => {
              const row = Math.floor(i / 3)
              const opacityLevels = [1, 0.75, 0.5, 0.2]

              return (
                <div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  style={{ opacity: opacityLevels[row] }}
                />
              )
            })}
          </div>

          <div className="relative -mt-24">

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
                />
              )
            })}
          </div>

        </div>
      </div>

      {/* 🔥 SUCCESS POPUP */}
      {success && (
        <div className="fixed bottom-10 right-10 bg-dark text-white px-6 py-4 rounded-lg shadow-2xl border border-primary flex items-center gap-3 animate-fadeIn">

          <span className="text-green-400 text-xl">✔</span>

          <p className="text-sm">
            Message sent successfully!
          </p>

          <button
            onClick={() => setSuccess(false)}
            className="ml-4 text-xs opacity-70 hover:opacity-100"
          >
            ✕
          </button>

        </div>
      )}
    </section>
  )
}

export default ContactSection