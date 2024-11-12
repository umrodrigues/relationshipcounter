'use client';

import React from 'react';
import BoxTime from '../box-time/box-time';
import styles from './BoxTimeGroup.module.scss';
import useDateCounter from '@/hooks/useDateCounter';

const BoxTimeGroup: React.FC = () => {
  const startDate = new Date('2024-08-04'); 
  const { days, hours, minutes, seconds } = useDateCounter(startDate);

  return (
    <>
    <div className={styles.wrapper}>
        <div className={styles.days}>
            <p>dias</p>
            <BoxTime value={days} />
        </div>
        <p>:</p>
        <div className={styles.hours}>
            <p>horas</p>
            <BoxTime value={hours} />
        </div>
        <p>:</p>
        <div className={styles.minutes}>
            <p>minutos</p>
            <BoxTime value={minutes} />
        </div>
      <p>:</p>
      <div className={styles.seconds}>
      <p>segundos</p>
      <BoxTime value={seconds} />
      </div>
     
    </div>
    </>
  );
};

export default BoxTimeGroup;
