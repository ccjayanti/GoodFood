"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useCursor } from "../context/CursorContext";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const { cursorColor } = useCursor();
  // Check if it's a touch device
  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursor = cursorRef.current;
    // If device is touchable or cursor element
    // doesn't exist, stop here
    if (isTouchDevice || !cursor) {
      return;
    }
    // Using mousemove() to animate the element cursor
    // based on the mouse cursor position (x and y)
    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;
      // check if the mouse cursor is over some link or button
      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button");
      // using the GSAP power to animate some properties
      gsap.to(cursor, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: "power4",
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 3.5 : 1})`,
      });
    });
    // Using mouseleave() to animate the element cursor
    // when the mouse cursor is moved off the page
    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }, []);
  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none mix-blend-difference z-50 transition-colors duration-300 bg-sepia"
      style={{ backgroundColor: cursorColor }}
    />
  );
};

export default CustomCursor;
