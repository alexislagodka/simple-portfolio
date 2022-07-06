import React from "react";

export default function ProjectCard({picture, children}) {
  return (
    <div className="flex even:flex-row-reverse h-48 md:h-72 xl:h-80">
      <div className="w-full h-full">
        <img
          src={picture}
          alt="wave"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
