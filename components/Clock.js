import React from "react";
import Image from "next/image";

const Clock = () => {
  return (
    <div className="text-9xl text-white z-10">
      <p className="text-3xl pb-5 just">🌤 Good Morning, It's Currently</p>
      <p className="text-9xl text-white">11:26</p>
    </div>
  );
};

export default Clock;
