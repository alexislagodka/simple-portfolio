import React from "react";
import { info } from "../../info/Info";

export default function SelPresentation() {
  const { presentation } = info;
  return (
    <div className="absolute p-2 md:left-20 lg:left-40 xl:left-60 w-56 sm:w-96">
      <h1 className="p-2">{presentation.title}</h1>
      <h3 className="py-4">{presentation.subtitle}</h3>
      <p>{presentation.content}</p>
    </div>
  );
}
