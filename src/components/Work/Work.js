import React from "react";
import { Transition } from "react-transition-group";
import BallsBackground from "../BallsBackground/BallsBackground";
import ProjectList from "../ProjectList/ProjectList";

export default function Work({ in: inProp }) {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    display: "none",
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0, display: "flex" },
    entered: { opacity: 1, display: "flex" },
    exiting: { opacity: 0, display: "flex" },
    exited: { opacity: 1, display: "none" },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className="w-full h-full"
        >
          <BallsBackground position="-left-1/2" background="bg-gradient-to-b from-purple-500 to-pink-500" />
          <main className="w-full h-full flex justify-center max-h-screen">
            <ProjectList in={inProp} />
          </main>
        </div>
      )}
    </Transition>
  );
}
