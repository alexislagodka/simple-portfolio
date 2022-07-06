import React from "react";
import ProjectCard from "../../ProjectCard/ProjectCard";

export default function ProjectList() {
  return (
    <div className="overflow-auto w-full w-full md:w-4/5 xl:w-3/5 z-50">
      <div className="grid h-px">
        <ProjectCard picture="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
          <h2>Description</h2>
        </ProjectCard>
        <ProjectCard picture="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
          <h2>Description</h2>
        </ProjectCard>
        <ProjectCard picture="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
          <h2>Description</h2>
        </ProjectCard>
        <ProjectCard picture="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
          <h2>Description</h2>
        </ProjectCard>
      </div>
    </div>
  );
}
