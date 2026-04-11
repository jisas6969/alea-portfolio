import logo from "../assets/logo.png"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center px-6 md:px-[10%] lg:px-[15%] py-6 text-white">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </Link>

        {/* NAV LINKS */}
        <ul className="flex gap-8 md:gap-12 items-center text-sm md:text-base font-semibold">

          {/* HOME */}
          <li className="group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          </li>

          {/* ABOUT */}
          <li className="group">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About Me
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          </li>

          {/* WORKS */}
          <li className="group">
            <NavLink
              to="/works"
              className={({ isActive }) =>
                `relative transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  My Works
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          </li>

          {/* CONTACT BUTTON */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-5 py-2.5 text-sm font-semibold rounded-sm transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-primary text-white hover:opacity-90"
                }`
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

      </nav>
    </header>
  )
}

export default Navbar