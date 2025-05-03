"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useCursor } from "../context/CursorContext";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const { cursorColor } = useCursor();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(typeof window !== "undefined" && "ontouchstart" in window);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (isTouchDevice || !cursor) return;

    const handleMouseMove = (e) => {
      const { target, x, y } = e;
      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button");

      gsap.to(cursor, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: "power4",
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        scale: isTargetLinkOrBtn ? 3.5 : 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // ✅ Cleanup function to remove event listeners when unmounting
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice]); // ✅ Added dependency

  return (
    <div
      ref={cursorRef}
      className="fixed -top-5 -left-5 w-4 h-4 rounded-full pointer-events-none  z-50 "
      style={{ backgroundColor: cursorColor }}
    />
  );
};

export default CustomCursor;
