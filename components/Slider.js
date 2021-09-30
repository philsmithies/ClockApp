import React from "react";

const Slider = ({ timezone, dayOfWeek, dayOfYear, weekNumber }) => {
  return (
    <div className="shadow-inner pt-10 pb-10 pl-5 md:pl-0 md:pb-0 bg-gray-800 flex flex-col items-start md:items-center md:grid md:grid-flow-col md:h-full md:grid-rows-1 md:gap-4 border-white justify-evenly">
      <div>
        <div className="border-white pb-5">
          <p className="text-white text-2xl font-normal leading-loose">
            CURRENT TIMEZONE
          </p>
          <p className="text-white text-4xl font-extrabold "> {timezone}</p>
        </div>
        <div className="border-white">
          <p className="text-white text-2xl font-normal leading-loose">
            DAY OF THE WEEK
          </p>
          <p className="text-white text-4xl font-extrabold"> {dayOfWeek}</p>
        </div>
      </div>
      <div class="hidden md:block md:border-2 divide-solid border-white h-48" />
      <div>
        <div className="border-white pb-5">
          <p className="text-white text-2xl font-normal leading-loose ">
            DAY OF THE YEAR
          </p>
          <p className="text-white text-4xl font-extrabold "> {dayOfYear}</p>
        </div>
        <div className="border-white">
          <p className="text-white text-2xl font-normal leading-loose">
            WEEK NUMBER
          </p>
          <p className="text-white text-4xl font-extrabold "> {weekNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
