import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold mb-4 md:mb-0">My Portfolio</h1>

        {/* Navigation */}
        <nav
          className={`w-full md:flex md:items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-gray-400">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-gray-400">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
