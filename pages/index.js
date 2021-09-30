import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Head from "next/head";
import Loader from "react-loader-spinner";
import { useState, useEffect, useRef, StrictMode } from "react";
import Clock from "../components/Clock";
import Scroll from "react-scroll";
import Quote from "../components/Quote";
import Slider from "../components/Slider";
import SeeMoreToggle from "../components/SeeMoreToggle";
import axios from "axios";
import Image from "next/image";
import moment from "moment";
StrictMode = false;

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeZone, setTimeZone] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [dayOfYear, setDayOfYear] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(
    "/bg-image-daytime.jpg"
  );

  const scroll = Scroll.animateScroll;
  const sliderEl = useRef(null);
  const toggleState = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  // use a custom hook replace this
  const getTime = () => {
    try {
      axios.get("https://worldtimeapi.org/api/ip/").then((time) => {
        setNightMode(moment(time.data.datetime).format("HH"));
        setTimeZone(time.data.timezone);
        setDayOfWeek(time.data.day_of_week);
        setDayOfYear(time.data.day_of_year);
        setWeekNumber(time.data.week_number);
        // extra time for the content to load in
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
    } catch (error) {
      console.log("time api not functioning correctly", err);
    }
  };

  const setNightMode = (currentHour) => {
    if (currentHour > 5 && currentHour < 18) {
      setBackgroundImage("/bg-image-daytime.jpg");
    } else {
      setBackgroundImage("/bg-image-nighttime.jpg");
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
      {loading ? (
        <div className="w-full h-screen flex flex-row bg-black justify-center items-center">
          <Loader type="Puff" color="#fff" height={100} width={100} />
        </div>
      ) : (
        <div className="w-full h-screen flex flex-row">
          <Image
            src={backgroundImage}
            layout="fill"
            objectFit="cover"
            objectPosition="cover"
            className="-z-10 brightness-50"
          />
          <div className="flex flex-col h-full w-full justify-between pb-10 pl-10 flex-nowrap">
            <div className="self-start pt-10">
              <Quote />
            </div>
            <div className="text-left w-full flex self-start justify-between pb-10">
              <Clock />
              <SeeMoreToggle toggleState={toggleState} scroll={scroll} />
            </div>
          </div>
        </div>
      )}
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
