import React from "react";

export default function ProjectCard({ image, title, content, link }) {
  return (
    <div className="flex even:flex-row-reverse h-48 md:h-72 xl:h-80">
      <div className="w-full h-full">
        <img src={image} alt="wave" className="h-full w-full object-cover" />
      </div>
      <div className="w-full h-full">
        <div className="grid h-full p-2 md:p-4">
          <h2>{title}</h2>
          <p>{content}</p>
          <div>
            <a href={link}>Learn more &#x2192;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
