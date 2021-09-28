import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Clock = () => {
  const [time, setTime] = useState("");

  const getTime = () => {
    axios.get("https://worldtimeapi.org/api/ip/").then((time) => {
      console.log(time);
      setTime(moment(time.data.datetime).format("LT"));
    });
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <div className="text-9xl text-white z-10">
      <p className="text-3xl pb-5 just">🌤 Good Morning, It's Currently</p>
      <p className="text-9xl text-white">{time}</p>
    </div>
  );
};

export default Clock;
