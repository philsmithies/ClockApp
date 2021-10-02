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

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("Good Morning");
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
        }, 1000);
      });
    } catch (error) {
      console.log("time api not functioning correctly", err);
    }
  };

  const setNightMode = (currentHour) => {
    if (currentHour >= 3 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 15) {
      setGreeting("Good Afternoon");
    } else if (currentHour >= 15 && currentHour < 20) {
      setGreeting("Good Evening");
      setBackgroundImage("/bg-image-nighttime.jpg");
    } else if (currentHour >= 20 && currentHour < 3) {
      setGreeting("Good Night");
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
          <Loader type="ThreeDots" color="#fff" height={100} width={100} />
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
          <div className="flex flex-col h-full w-full justify-between md:pb-10 pl-5 md:pl-10 flex-nowrap">
            <div className="self-start pt-10">
              <Quote />
            </div>
            <div className="text-left w-full flex flex-col md:flex-row self-start justify-between pb-10">
              <Clock greeting={greeting} />
              <SeeMoreToggle toggleState={toggleState} scroll={scroll} />
            </div>
          </div>
        </div>
      )}
      {toggle && (
        <div className="text-left self-start justify-start w-full md:h-96">
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
