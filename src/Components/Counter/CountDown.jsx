import { useEffect, useState } from "react";
import axiosSecure from "./../../api/index";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [deadline, setDeadline] = useState(null);

  useEffect(() => {
    fetchDeadline();
  }, []);

  const fetchDeadline = async () => {
    try {
      const response = await axiosSecure.get("/deadline");
      if (response.status === 200) {
        setDeadline(new Date(response.data));
      } else {
        console.error("Failed to fetch deadline:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching deadline:", error);
    }
  };

  useEffect(() => {
    if (deadline) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const timeDiff = deadline - now;
        if (timeDiff > 0) {
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        } else {
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [deadline]);

  if (!deadline) {
    return <div>Loading...</div>;
  }

  // const setNewDeadline = async () => {
  //   try {
  //     await axiosSecure.post("/deadline");
  //     // fetchDeadline(); // Refresh the deadline after setting it
  //   } catch (error) {
  //     console.error("Error setting new deadline:", error);
  //   }
  // };
  return (
    <div className="flex gap-1 lg:gap-2 mt-4">
      <div className="border-2 px-4 py-1 border-dotted bg-black text-white font-bold text-xl rounded-full">
        {days}d
      </div>
      <span className="flex items-center font-bold text-xl">:</span>
      <div className="border-2 px-4 py-1 border-dotted bg-black text-white font-bold text-xl rounded-full">
        {hours}h
      </div>
      <span className="flex items-center font-bold text-xl">:</span>
      <div className="border-2 px-4 py-1 border-dotted bg-black text-white font-bold text-xl rounded-full">
        {minutes}m
      </div>
      <span className="flex items-center font-bold text-xl">:</span>
      <div className="border-2 px-4 py-1 border-dotted bg-black text-white font-bold text-xl rounded-full">
        {seconds}s
      </div>

      {/* <button onClick={setNewDeadline}>Set New Deadline</button> */}
    </div>
  );
};

export default CountDown;
