'use client';
import { useEffect, useState } from 'react';

interface TimeDifference {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useDateCounter = (startDate: Date): TimeDifference => {
  const [timeDiff, setTimeDiff] = useState<TimeDifference>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeDiff = () => {
      const now = new Date();
      const diffInMs = now.getTime() - startDate.getTime();

      const seconds = Math.floor((diffInMs / 1000) % 60);
      const minutes = Math.floor((diffInMs / (1000 * 60)) % 60);
      const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      setTimeDiff({ days, hours, minutes, seconds });
    };

    calculateTimeDiff();
    const interval = setInterval(calculateTimeDiff, 1000);

    return () => clearInterval(interval);
  }, []); 

  return timeDiff;
};

export default useDateCounter;
