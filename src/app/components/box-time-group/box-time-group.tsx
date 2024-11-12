'use client';

import React from 'react';
import BoxTime from '../box-time/box-time';
import styles from './BoxTimeGroup.module.scss';
import useDateCounter from '@/hooks/useDateCounter';

const BoxTimeGroup: React.FC = () => {
  const startDate = new Date('2024-08-04'); 
  const { days, hours, minutes, seconds } = useDateCounter(startDate);

  return (
    <div className={styles.wrapper}>
      <BoxTime value={days} />
      <p>:</p>
      <BoxTime value={hours} />
      <p>:</p>
      <BoxTime value={minutes} />
      <p>:</p>
      <BoxTime value={seconds} />
    </div>
  );
};

export default BoxTimeGroup;
