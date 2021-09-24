import Head from "next/head";
import Clock from "../components/Clock";

export default function Home() {
  return (
    <div className="flex justify-center items-center 100	">
      <Head>
        <title>Clock App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Clock />
    </div>
  );
}
