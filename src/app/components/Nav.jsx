"use client";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

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
            <ul className="flex flex-col space-y-4 items-center ">
              <li className="text-sage font-regular text-8xl justify-center flex flex-col items-center">
                <hr className="w-screen"></hr>
                <div className="text-xs font-sans flex justify-between w-full px-5 py-3">
                  <div>chapter</div>
                  <div>001</div>
                  <div>one</div>
                </div>
                <Link
                  to="why"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className=""
                >
                  why
                </Link>
              </li>

              <li className="text-sage font-regular text-8xl justify-center flex flex-col items-center">
                <hr className="w-screen"></hr>
                <div className="text-xs font-sans flex justify-between w-full px-5 py-3">
                  <div>chapter</div>
                  <div>002</div>
                  <div>two</div>
                </div>
                <Link
                  to="who"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  offset={-viewportHeight / 2}
                >
                  who
                </Link>
              </li>

              <li className="text-sage font-regular text-8xl justify-center flex flex-col items-center">
                <hr className="w-screen"></hr>
                <div className="text-xs font-sans flex justify-between w-full px-5 py-3">
                  <div>chapter</div>
                  <div>003</div>
                  <div>three</div>
                </div>
                <Link
                  to="what"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  offset={-viewportHeight / 2}
                >
                  what
                </Link>
              </li>

              <li className="text-sage font-regular text-8xl justify-center flex flex-col items-center">
                <hr className="w-screen"></hr>
                <div className="text-xs font-sans flex justify-between w-full px-5 py-3">
                  <div>chapter</div>
                  <div>004</div>
                  <div>four</div>
                </div>
                <Link
                  to="connect"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  offset={-viewportHeight / 2}
                >
                  connect
                </Link>
              </li>
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
