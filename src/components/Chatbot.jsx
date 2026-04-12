import { useState, useEffect, useRef } from "react"
import { FaCommentDots } from "react-icons/fa"

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Alea's AI assistant How can I help you?", sender: "bot" }
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [displayText, setDisplayText] = useState("")

  const chatRef = useRef(null)

  // 🔥 AUTO SCROLL
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages, displayText])

  // 🔥 SMART REPLIES
  const getBotReply = (input, history) => {
    const msg = input.toLowerCase()
    const lastBot =
      history.filter((m) => m.sender === "bot").slice(-1)[0]?.text || ""

    if (msg.includes("hi") || msg.includes("hello")) {
      return "Hey there 👋 I'm here to help you explore Alea's portfolio!"
    }

    if (msg.includes("name")) {
      return "Her name is Alea Nicole Tandoc 😊"
    }

    if (msg.includes("skills")) {
      return "Alea specializes in UI/UX design, branding, and frontend development."
    }

    if (msg.includes("projects") || msg.includes("work")) {
      return "She has worked on website mockups, posters, and creative designs. Want to see them?"
    }

    if (msg.includes("yes") && lastBot.includes("see them")) {
      return "Awesome! Check out the 'My Works' section 👆"
    }

    if (msg.includes("contact")) {
      return "You can reach her through the contact section below 📩"
    }

    if (msg.includes("hire")) {
      return "Great choice 😎 Send a message through the contact form!"
    }

    return "Hmm 🤔 Try asking about skills, projects, or contact!"
  }

  // 🔥 TYPEWRITER EFFECT
  const typeText = (text) => {
    setDisplayText("")
    let i = 0

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(i))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        setTyping(false)

        setMessages((prev) => [...prev, { text, sender: "bot" }])
      }
    }, 15)
  }

  // 🔥 SEND MESSAGE
  const handleSend = (text) => {
    const userText = text || input
    if (!userText) return

    const userMsg = { text: userText, sender: "user" }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setTyping(true)

    setTimeout(() => {
      const reply = getBotReply(userText, messages)
      typeText(reply)
    }, 500)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* 🔥 BUTTON */}
      <button
  onClick={() => setOpen(!open)}
  className="text-white hover:scale-110 transition"
>
  <FaCommentDots size={32} />
</button>

      {/* 🔥 CHAT BOX */}
      {open && (
        <div className="mt-2 w-80 bg-[#1f1f1f] text-white p-4 rounded-xl shadow-2xl">

          {/* 🔥 MESSAGES */}
          <div
            ref={chatRef}
            className="h-60 overflow-y-auto mb-3 space-y-3 pr-2"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[75%] text-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* 🔥 TYPING */}
            {typing && (
              <div className="text-gray-400 text-sm px-2">
                {displayText || "Typing..."}
              </div>
            )}
          </div>

          {/* 🔥 SUGGESTIONS */}
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={() => handleSend("skills")}
              className="bg-gray-700 px-3 py-1 text-xs rounded-full hover:bg-gray-600"
            >
              Skills
            </button>
            <button
              onClick={() => handleSend("projects")}
              className="bg-gray-700 px-3 py-1 text-xs rounded-full hover:bg-gray-600"
            >
              Projects
            </button>
            <button
              onClick={() => handleSend("hire")}
              className="bg-gray-700 px-3 py-1 text-xs rounded-full hover:bg-gray-600"
            >
              Hire Me
            </button>
          </div>

          {/* 🔥 INPUT */}
          <div className="flex gap-2">
            <input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSend()
    }
  }}
  className="flex-1 px-3 py-2 text-sm text-black rounded-md outline-none"
  placeholder="Ask me anything..."
/>
            <button
              onClick={() => handleSend()}
              className="bg-primary px-4 py-2 rounded-md text-sm hover:opacity-90"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </div>
  )
}

export default ChatBot