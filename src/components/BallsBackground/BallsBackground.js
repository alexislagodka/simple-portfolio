import React from "react";
import Ball from "../Ball/Ball";

export default function BallsBackground({ position, background }) {
  return (
    <div className={`${position} absolute w-full h-full flex justify-center items-center -z-50`}>
      <div className="relative h-full md:w-3/5 lg:w-2/5">
        <div className="absolute w-full h-full flex justify-center items-center">
          <Ball
            name="masterball"
            size="h-64 w-64 md:w-96 md:h-96"
            background={background}
          />
        </div>
        <div className="absolute w-full h-full my-12 xl:my-0 invisible xl:visible">
          <Ball
            size="h-8 w-8 md:h-12 md:w-12"
            position="top-8 left-16 md:top-16 md:left-32"
            rotation="rotate-45"
            background={background}
          />
          <Ball
            size="h-8 w-8 md:h-12 md:w-12"
            position="top-16 right-8 md:top-32 md:right-16"
            rotation="rotate-45"
            background={background}
          />
          <Ball
            size="h-8 w-8 md:h-12 md:w-12"
            position="bottom-8 right-16 md:bottom-16 md:right-32"
            rotation="rotate-45"
            background={background}
          />
          <Ball
            size="h-8 w-8 md:h-12 md:w-12"
            position="bottom-16 left-8 md:bottom-32 md:left-16"
            rotation="rotate-45"
            background={background}
          />
        </div>
      </div>
    </div>
  );
}
