import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-primary text-white py-10 text-center">

      {/* 🔥 SOCIAL ICONS */}
      <div className="flex justify-center gap-6 mb-4 text-2xl">
  <a 
    href="https://www.facebook.com/share/18gVGVfRZb" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <FaFacebookF />
  </a>

  <a 
    href="https://www.instagram.com/aleatndc" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <FaInstagram />
  </a>

  <a 
    href="https://www.tiktok.com/@alifnds7?_r=1&_t=ZS-95TkrhuVM9J" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <FaTiktok />
  </a>
</div>

      {/* 🔥 NAV LINKS (ROUTING) */}
      <div className="flex justify-center gap-8 text-sm mb-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Me</Link>
        <Link to="/works" className="hover:underline">My Works</Link>
        <Link to="/#contact" className="hover:underline">
  Contact
</Link>
      </div>

      {/* 🔥 COPYRIGHT */}
      <p className="text-xs opacity-80">
        © {new Date().getFullYear()} Alea Nicole Tandoc. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer