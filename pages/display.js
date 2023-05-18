import axios from "axios";
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
    <div className="flex items-center text-[26rem] justify-center w-full h-screen">
      {text}
    </div>
  );
};

export default Display;
