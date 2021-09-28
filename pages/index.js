import Head from "next/head";
import Clock from "../components/Clock";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center 100 flex-col pb-10 bg-black">
      <Head>
        <title>Clock App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="align-self-start">
        <Quote />
      </div>
      <div>
        <Clock />
      </div>
    </div>
  );
}
