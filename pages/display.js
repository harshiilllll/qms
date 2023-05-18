import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/text");
        console.log(response.data.data.title);
        setText(response.data.data.title);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch initial data

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 seconds

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  return (
    <>
    <Head>
      <title>QMS - Display</title>
    </Head>
    <div className="items-center text-[1000%] justify-center w-full h-screen flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
      {text}
    </div>
    </>
  );
};

export default Display;
