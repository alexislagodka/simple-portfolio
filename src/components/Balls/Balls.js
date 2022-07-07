import React from "react";

export default function Balls({gradient}) {
  return (
    <div className="absolute t-0 w-full h-full flex justify-center items-center">
      <div className={`masterball absolute flex justify-center items-center rounded-full h-64 w-64 md:w-96 md:h-96 bg-gradient-to-t ${gradient}`} />
      <div className={`absolute top-8 left-16 md:top-16 md:left-32 rounded-full h-8 w-8 md:h-12 md:w-12 bg-gradient-to-t ${gradient}`} />
      <div className={`absolute top-16 right-8 md:top-32 md:right-16 rounded-full h-8 w-8 md:h-12 md:w-12 bg-gradient-to-t ${gradient}`} />
      <div className={`absolute bottom-8 right-16 md:bottom-16 md:right-32 rounded-full h-8 w-8 md:h-12 md:w-12 bg-gradient-to-t ${gradient}`} />
      <div className={`absolute bottom-16 left-8 md:bottom-32 md:left-16 rounded-full h-8 w-8 md:h-12 md:w-12 bg-gradient-to-t ${gradient}`} />
    </div>
  );
}
