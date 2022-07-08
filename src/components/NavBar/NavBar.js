import React, { useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

export default function NavBar({ handleClick, activeLink, position }) {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (window.matchMedia("(min-width: 1280px)").matches) {
      if (position === "right") {
        gsap.to("nav", {
          position: "absolute",
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
    } else {
      gsap.set("nav",{
        position: "absolute",
        top: "initial",
        right: "initial"
      })
    }
  }, [position, width, height]);

  return (
    <nav className="absolute top-0 w-full xl:fixed xl:right-0 xl:w-48 xl:h-full flex justify-center items-center z-50">
      <ol className="flex xl:flex-col">
        <li className="px-3 py-6 text-4xl">
          <button
            className={`${
              activeLink === "Home" && "text-fuchsia-500 underline underline-offset-8"
            }`}
            onClick={() => handleClick("Home")}
          >
            Home
          </button>
        </li>
        <li className="px-3 py-6 text-4xl">
          <button
            className={`${
              activeLink === "Work" && "text-fuchsia-500 underline underline-offset-8"
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
