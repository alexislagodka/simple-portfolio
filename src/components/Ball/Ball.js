import React from "react";

export default function Ball({ name, background, position, size, rotation }) {
  return (
    <div className={`absolute rounded-full ${name} ${background} ${position} ${size} ${rotation}`} />
  );
}
