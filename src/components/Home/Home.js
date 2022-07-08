import React from "react";
import SelPresentation from "../SelfPresentation/SelPresentation";
import { Transition } from "react-transition-group";
import BallsBackground from "../BallsBackground/BallsBackground";

export default function Home({ in: inProp }) {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: "none",
  };

  const transitionStyles = {
    entering: { opacity: 0, display: "block" },
    entered: { opacity: 1, display: "block" },
    exiting: { opacity: 0, display: "block" },
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
          className="HOME w-full h-full"
        >
          <BallsBackground background="bg-gradient-to-b from-purple-500 to-pink-500" />
          <main className="relative h-full flex justify-center items-center max-w-lg">
            <SelPresentation />
          </main>
        </div>
      )}
    </Transition>
  );
}
