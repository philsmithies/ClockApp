import Head from "next/head";
import { useState, useEffect } from "react";
import Clock from "../components/Clock";
import Quote from "../components/Quote";
import Slider from "../components/Slider";
import axios from "axios";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [timeZone, setTimeZone] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [dayOfYear, setDayOfYear] = useState("");
  const [weekNumber, setWeekNumber] = useState("");

  const toggleState = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const getTime = () => {
    try {
      axios.get("https://worldtimeapi.org/api/ip/").then((time) => {
        setTimeZone(time.data.timezone);
        setDayOfWeek(time.data.day_of_week);
        setDayOfYear(time.data.day_of_year);
        setWeekNumber(time.data.week_number);
      });
    } catch (error) {
      console.log("time api not functioning correctly", err);
    }
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <>
      <Head>
        <title>Clock App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full h-screen flex items-center 100 flex-row bg-black">
        <div className="flex flex-col h-full w-full justify-between pb-10 pl-10  flex-nowrap">
          <div className="self-start pt-10">
            <Quote />
          </div>
          <div className="text-left self-start justify-start pb-10">
            <Clock />
            <button
              className="text-white border-2 p-1 mt-2"
              onClick={toggleState}
            >
              Toggle
            </button>
          </div>
        </div>
      </div>
      {toggle && (
        <div className="text-left self-start justify-start w-full h-96 bg-red-500">
          <Slider
            timezone={timeZone}
            dayOfWeek={dayOfWeek}
            dayOfYear={dayOfYear}
            weekNumber={weekNumber}
          />
        </div>
      )}
    </>
  );
}
