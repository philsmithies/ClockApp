import React from "react";
import Image from "next/image";

const Clock = () => {
  return (
    <div className="flex flex-col text-left self-start pl-10">
      <div className="text-9xl text-white z-10">
        <p className="text-3xl pb-5 just">🌤 Good Morning, It's Currently</p>
        <p className="text-9xl text-white">11:26</p>
      </div>
    </div>
  );
};

export default Clock;
