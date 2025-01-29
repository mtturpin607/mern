import React, { useState, useEffect } from 'react';

const UpdatingClock = () => {
  const [time, setTime] = useState(new Date());
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  useEffect(() => {
    const timerId = setUpdateInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
        Current Time:
        {time.toLocaleTimeString('en-US', options)}
    </div>
  );
};

export default UpdatingClock;