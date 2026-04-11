import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-8 text-white absolute w-full z-50">

      <img src={logo} alt="logo" className="h-8" />

      <ul className="flex gap-12 items-center text-sm font-medium">

        <li className="relative cursor-pointer group">
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white"></span>
        </li>

        <li className="cursor-pointer hover:text-gray-300 transition">
          About Me
        </li>

        <li className="cursor-pointer hover:text-gray-300 transition">
          My Works
        </li>

        <li className="bg-primary px-6 py-2.5 hover:opacity-90 transition cursor-pointer text-sm font-semibold rounded-sm">
          Contact
        </li>

      </ul>

    </nav>
  )
}

export default Navbar
