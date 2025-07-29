'use client';
import { useEffect, useState } from 'react';

interface TimeDifference {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useDateCounter = (startDate: Date): TimeDifference => {
  const [timeDiff, setTimeDiff] = useState<TimeDifference>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeDiff = () => {
      const now = new Date();
      let diffInMs = now.getTime() - startDate.getTime();

      const seconds = Math.floor((diffInMs / 1000) % 60);
      const minutes = Math.floor((diffInMs / (1000 * 60)) % 60);
      const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
      const daysTotal = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const years = Math.floor(daysTotal / 365);
      const days = daysTotal % 365;

      setTimeDiff({ years, days, hours, minutes, seconds });
    };

    calculateTimeDiff();
    const interval = setInterval(calculateTimeDiff, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return timeDiff;
};
