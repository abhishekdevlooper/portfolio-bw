import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
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
      </div>
    </header>
  );
};

export default Header;
