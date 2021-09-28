import React from "react";

const Slider = ({
  timezone = "UK",
  dayOfWeek = 5,
  dayOfYear = 295,
  weekNumber = 2,
}) => {
  return (
    <div className="bg-red-500 grid grid-flow-col grid-rows-2 gap-4 border-white">
      <div className="border-white h-44">
        <p> CURRENT TIMEZONE</p>
        <p> {timezone}</p>
      </div>
      <div className="border-white">
        <p> DAY OF THE WEEK</p>
        <p> {dayOfWeek}</p>
      </div>
      <div className="border-white">
        <p> DAY OF THE YEAR</p>
        <p> {dayOfYear}</p>
      </div>
      <div className="border-white">
        <p>WEEK NUMBER</p>
        <p> {weekNumber}</p>
      </div>
      <div className="border-white">5</div>
      <div className="border-white">6</div>
    </div>
  );
};

export default Slider;
