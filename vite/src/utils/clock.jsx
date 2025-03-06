import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  // State to store the current time
  const [time, setTime] = useState('');

  // Function to format the current date and time
  const getCurrentDateTimeFormatted = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} <> ${hours}:${minutes}:${seconds}`;
  };

  // useEffect to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentDateTimeFormatted());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', fontSize: '2em', textAlign: 'center', marginTop: '20px' }}>
      <div id="clock">{time}</div>
    </div>
  );
};

export default RealTimeClock;
