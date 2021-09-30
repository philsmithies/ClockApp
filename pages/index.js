import Head from "next/head";
import { useState, useEffect, useRef } from "react";
var Scroll = require("react-scroll");
import Clock from "../components/Clock";
import Quote from "../components/Quote";
import Slider from "../components/Slider";
import SeeMoreToggle from "../components/SeeMoreToggle";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [timeZone, setTimeZone] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [dayOfYear, setDayOfYear] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [isRotated180, setIsRotated180] = useState(true);

  const seeMoreEl = useRef(null);
  const sliderEl = useRef(null);
  const scroll = Scroll.animateScroll;

  const toggleState = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const viewMore = () => {
    const seeMore = seeMoreEl.current; // corresponding DOM node
    if (isRotated180) {
      toggleState();
      scroll.scrollToBottom({
        duration: 100,
      });
      seeMore.className = "animate-spin transform rotate-180";
      setTimeout(() => {
        seeMore.className = "";
      }, 1000);
      setIsRotated180(false);
    } else {
      scroll.scrollToTop({
        duration: 100,
      });
      seeMore.className = "animate-spin";
      setTimeout(() => {
        seeMore.className = "rotate-180";
        toggleState();
      }, 500);
      setIsRotated180(true);
    }
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
      <div className="w-full h-screen flex flex-row">
        {/* <Image
          src="/bg-image-daytime.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="cover"
          className="-z-10"
        /> */}
        <div className="flex flex-col h-full	 w-full justify-between pb-10 pl-10  flex-nowrap bg-black">
          <div className="self-start pt-10">
            <Quote />
          </div>
          <div className="text-left w-full flex self-start justify-between pb-10">
            <Clock />
            /// components
            <div className="flex flex-row align-center p-2 mr-10">
              <div className="self-center flex flex-row bg-white rounded-full py-2.5 px-5">
                <p className="text-black self self-center font-bold text-2xl pr-4">
                  More
                </p>
                <img
                  className="self-center hover:cursor-pointer"
                  src="/icon-arrow-up.svg"
                  alt="Up Arrow"
                  onClick={viewMore}
                  ref={seeMoreEl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggle && (
        <div className="text-left self-start justify-start w-full h-96">
          <Slider
            timezone={timeZone}
            dayOfWeek={dayOfWeek}
            dayOfYear={dayOfYear}
            weekNumber={weekNumber}
            ref={sliderEl}
          />
        </div>
      )}
    </>
  );
}
