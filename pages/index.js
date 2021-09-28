import Head from "next/head";
import Clock from "../components/Clock";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center 100 flex-row pb-10 bg-black">
      <Head>
        <title>Clock App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col h-full justify-between pl-10">
        <div className="self-start pt-10">
          <Quote />
        </div>
        <div className="text-left self-end justify-end pb-10">
          <Clock />
        </div>
      </div>
    </div>
  );
}
