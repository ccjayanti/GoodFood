"use client";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const menuItems = [
  { id: "why", chapter: "001", title: "one" },
  { id: "who", chapter: "002", title: "two" },
  { id: "what", chapter: "003", title: "three" },
  { id: "connect", chapter: "004", title: "four" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Toggle the menu open and closed
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Run this only on the client side (after the component is mounted)
  useEffect(() => {
    setViewportHeight(window.innerHeight); // Set the height of the viewport
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="fixed top-0 left-0 w-full z-50 p-5 text-xs flex justify-between">
      <button
        className="bg-transparentBg text-ivory p-3 rounded-full uppercase"
        onClick={toggleMenu}
      >
        menu
      </button>
      <button className="bg-transparentBg text-ivory p-3 rounded-full uppercase">
        <Link
          to="connect"
          smooth={true}
          duration={500}
          offset={-viewportHeight / 2} // Use the state instead of window directly
        >
          Connect
        </Link>
      </button>

      {/* Full-Screen Overlay Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-ivory z-40 flex justify-center items-center overflow-auto"
          onClick={toggleMenu} // Close the menu when clicking outside
        >
          <div
            className="uppercase"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <ul className="flex flex-wrap justify-center items-center w-full h-full space-y-4 lg:space-y-0 lg:space-x-4">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="text-sage font-regular text-4xl sm:text-6xl lg:text-8xl w-full sm:w-auto flex-col justify-center items-center"
                >
                  <hr className="w-screen mb-4" />
                  <div className="text-xs font-sans flex justify-between w-full px-5 py-3">
                    <div>chapter</div>
                    <div>{item.chapter}</div>
                    <div>{item.title}</div>
                  </div>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                    offset={-viewportHeight / 2}
                    className="text-center"
                  >
                    {item.id}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-regular uppercase text-xs bg-sage text-ivory p-2 rounded-full"
              onClick={toggleMenu}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
