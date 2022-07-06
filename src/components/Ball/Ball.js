import React from "react";

export default function Ball({ position }) {
  return (
    <div className={`${position} absolute rounded-full h-12 w-12 bg-gradient-to-t from-violet-500 to-fuchsia-500`} />
  );
}
