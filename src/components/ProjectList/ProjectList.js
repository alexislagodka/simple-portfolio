import React from "react";
import { Transition } from "react-transition-group";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectList({ in: inProp }) {
  const duration = 600;
  const delay = 600;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out ${delay}ms`,
    transform: "translateY(100%)",
  };

  const transitionStyles = {
    entering: { transform: "translateY(100%)" },
    entered: { transform: "translateY(0)" },
    exiting: { transform: "translateY(100%)" },
    exited: { transform: "translateY(0)" },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className="py-24 xl:py-0 overflow-auto w-full w-full md:w-4/5 xl:w-1/2 z-50"
        >
          <div className="grid h-px">
            <ProjectCard picture="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
              <h2>ABC</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <a href="#">Learn more &#x2192;</a>
              </div>
            </ProjectCard>
            <ProjectCard picture="https://images.unsplash.com/photo-1589307004173-3c95204d00ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
              <h2>ABC</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Learn more &#x2192;</p>
            </ProjectCard>
            <ProjectCard picture="https://images.unsplash.com/photo-1607457597191-8ed4e870ceca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
              <h2>ABC</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Learn more &#x2192;</p>
            </ProjectCard>
            <ProjectCard picture="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
              <h2>ABC</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Learn more &#x2192;</p>
            </ProjectCard>
            <ProjectCard picture="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
              <h2>ABC</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </ProjectCard>
          </div>
        </div>
      )}
    </Transition>
  );
}
