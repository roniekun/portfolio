import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

   const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila',
  };

  return (
    <main className='flex flex-col gap-1 font-primary font-medium relative'>
        <span className='uppercase text-[10px]'>local time</span>
        <h1 className='text-sm lowercase '>
        {currentTime.toLocaleTimeString([], timeOptions)}
        </h1>
    </main>
  );
}

export default Clock;
