// Import necessary React, React Router, and Tailwind components
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-400">
          OPEYEMI ONANUGA
        </Link>
      </div>

      {/* Navigation Links for Desktop */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li>
          <Link to="/home" className="hover:text-gray-400 hover:underline hover:decoration-2 hover:underline-offset-8">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400 hover:underline hover:decoration-2 hover:underline-offset-8">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-400 hover:underline hover:decoration-2 hover:underline-offset-8">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400 hover:underline hover:decoration-2 hover:underline-offset-8">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu for Tablet and Mobile */}
      <div className="md:hidden">
        <button
          className="text-gray-400 focus:outline-none"
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className='absolute top-16 left-0 w-full bg-slate-800 text-lg space-y-4 py-4 px-6 md:hidden'>
          <li>
            <Link to="/home"
            className="block text-white hover:text-grey-400 hover:underline hover:decoration-2 hover:underline-offset-8"
            onClick={toggleMenu}
            >
            Home
            </Link>
          </li>
          <li>
            <Link to="/home"
            className="block text-white hover:text-grey-400 hover:underline hover:decoration-2 hover:underline-offset-8"
            onClick={toggleMenu}
            >
            About Me
            </Link>
          </li>
          <li>
            <Link to="/home"
            className="block text-white hover:text-grey-400 hover:underline hover:decoration-2 hover:underline-offset-8"
            onClick={toggleMenu}
            >
            Projects
            </Link>
          </li>
          <li>
            <Link to="/home"
            className="block text-white hover:text-grey-400 hover:underline hover:decoration-2 hover:underline-offset-8"
            onClick={toggleMenu}
            >
            Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

// Tailwind CSS Required
// Make sure you have Tailwind CSS installed and configured in your React project.
// Add responsive breakpoints and classes for styling the Navbar to be mobile-friendly.
