import React, { useEffect } from "react";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/src/MotionPathPlugin";

export default function CircleSvg({ position }) {
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    // set initial svg position
    gsap.set("svg", {
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
    });

    // set rotation
    gsap.to(".el", {
      duration: 5,
      repeat: -1,
      ease: "none",
      motionPath: {
        path: ".path",
        type: "circle",
        align: ".path",
        autoRotate: 60,
        alignOrigin: [0.2, 1],
      },
    });
  }, []);

  useEffect(() => {
    if (position === "center") {
      gsap.to("svg", {
        position: "absolute",
        left: "50%",
        duration: 1,
      });
    }
    if (position === "left") {
      gsap.to("svg", {
        position: "absolute",
        left: 0,
        duration: 1,
      });
    }
  }, [position]);

  return (
    <svg
      width="100%"
      height="751"
      viewBox="0 0 751 751"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-z-50"
    >
      <circle cx="375.5" cy="375.5" r="375" stroke="url(#gradient)" />
      <path
        d="M0.5,375.5a375,375 0 1,0 750,0a375,375 0 1,0 -750,0"
        className="path"
      />
      <path
        d="M700.693 563.25C735.634 502.729 752.994 433.659 750.818 363.809C748.642 293.96 727.018 226.104 688.377 167.875L685.248 169.951C723.503 227.598 744.911 294.775 747.065 363.926C749.219 433.077 732.033 501.457 697.441 561.372L700.693 563.25Z"
        fill="#D9D9D9"
        className="el"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="751"
          y1="375"
          x2="0"
          y2="375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.995243" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
