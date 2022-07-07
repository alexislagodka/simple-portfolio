import React from "react";
import { Transition } from "react-transition-group";
import Balls from "../Balls/Balls";
import ProjectList from "../ProjectList/ProjectList";

export default function Work({ in: inProp }) {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    display: "none",
    opacity: 0
  };

  const transitionStyles = {
    entering: { opacity: 0, display: "flex" },
    entered: { opacity: 1, display: "flex" },
    exiting: { opacity: 0, display: "flex"},
    exited: { opacity: 1, display: "none"}
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className="absolute w-full h-full flex justify-center"
        >
          <div className="absolute h-full w-full md:w-3/5 lg:w-2/5 left-0 -translate-x-1/2 flex justify-center items-center">
            <Balls gradient="from-purple-500 to-pink-500" />
          </div>
          <ProjectList in={inProp}/>
        </div>
      )}
    </Transition>
  );
}
