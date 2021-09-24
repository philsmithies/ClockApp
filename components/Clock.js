import React from "react";

const Clock = () => {
  return (
    <div className="w-full bg-indigo-900 h-screen flex justify-center items-center 100 flex-col">
      <p className="text-3xl text-white pb-5 just">
        🌤 Good Morning, It's Currently
      </p>
      <p className="text-9xl text-white">11:26</p>
    </div>
  );
};

export default Clock;
