import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Works"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Work />} />
      </Routes>
    </>
  )
}

export default App