import React from "react";
import SelPresentation from "../SelfPresentation/SelPresentation";
import Balls from "../Balls/Balls";
import { Transition } from "react-transition-group";

export default function Home({ in: inProp }) {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: "none"
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
          className="w-full h-full flex justify-center"
        >
          <div className="relative w-full md:w-3/5 lg:w-2/5 flex align-center justify-center items-center">
            <SelPresentation />
            <Balls gradient="from-violet-500 to-fuchsia-500" />
          </div>
        </div>
      )}
    </Transition>
  );
}
