import React from "react";
import { Transition } from "react-transition-group";
import ProjectCard from "../ProjectCard/ProjectCard";
import { info } from "../../info/Info";

export default function ProjectList({ in: inProp }) {
  const duration = 600;
  const delay = 600;
  const bigscreen = window.matchMedia("(min-width: 768px)").matches;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out ${delay}ms`,
    display: "none",
  };

  const transitionStyles = {
    entering: { transform: bigscreen && "translateY(100%)", display: "block" },
    entered: { transform: bigscreen && "translateY(0)", display: "block" },
    exiting: { transform: bigscreen && "translateY(100%)", display: "block" },
    exited: { transform: bigscreen && "translateY(0)", display: "none" },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className="pt-24 xl:pt-0 overflow-auto w-full w-full md:w-4/5 xl:w-1/2 z-10"
        >
          <div className="grid h-px">
            {info.work.map((project, index) => (
              <ProjectCard
                image={project.image}
                title={project.title}
                content={project.content}
                link={project.link}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </Transition>
  );
}
