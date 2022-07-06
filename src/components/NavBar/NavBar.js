import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function NavBar({ handleClick, activeLink, position }) {
  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      if (position === "right") {
        gsap.to("nav", {
          position: "absolute",
          left: "initial",
          right: 0,
          duration: 1,
        });
      }

      if (position === "left") {
        let masterballWidth = gsap.getProperty(".masterball", "width");

        gsap.to("nav",{
          position: "absolute",
          right: window.screen.width-(masterballWidth),
          duration: 1,
        });
      }
    }
  }, [position]);

  return (
    <nav className="sticky md:fixed top-0 w-full md:right-0 md:w-48 md:h-full flex justify-center items-center z-50">
      <ol className="flex md:flex-col">
        <li className="px-3 py-6 text-4xl">
          <button
            className={`${
              activeLink === "Home" && "text-fuchsia-500 underline"
            }`}
            onClick={() => handleClick("Home")}
          >
            Home
          </button>
        </li>
        <li className="px-3 py-6 text-4xl">
          <button
            className={`${
              activeLink === "Work" && "text-fuchsia-500 underline"
            }`}
            onClick={() => handleClick("Work")}
          >
            Work
          </button>
        </li>
      </ol>
    </nav>
  );
}
