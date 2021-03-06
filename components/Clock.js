import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Clock = ({ greeting }) => {
  const [time, setTime] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [location, setLocation] = useState("");

  const getTime = () => {
    try {
      axios.get("https://worldtimeapi.org/api/ip/").then((time) => {
        // console.log(time);
        setAbbreviation(time.data.abbreviation);
        setTime(moment(time.data.datetime).format("HH:mm"));
        try {
          axios
            .get(`https://freegeoip.app/json/${time.data.client_ip}`)
            .then((location) => {
              // console.log(location);
              setLocation(location);
            });
        } catch (error) {
          console.log("location api not functioning correctly", err);
        }
      });
    } catch (error) {
      console.log("time api not functioning correctly", err);
    }
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <div className="text-9xl text-white z-10">
      <div className="flex flex-nowrap h-8 items-center">
        <img src="/icon-sun.svg" alt="Sun" />
        <p className="text-xl md:text-3xl pl-3">{greeting}, It's Currently</p>
      </div>

      {time && location && (
        <div>
          <p className="text-8xl md:text-9xl text-white font-bold pt-3 md:pt-0">
            {time}
            <span className="block md:inline text-2xl md:text-6xl font-thin pl-1 pb-2 md:pl-6">
              {abbreviation}
            </span>
          </p>
          <p className="text-2xl md:text-3xl font-light pl-2">
            {" "}
            in {location.data.city.toUpperCase()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Clock;
