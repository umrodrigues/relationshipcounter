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
        <div className={styles.message}>
          <p>Oi amor, faz</p>
        </div>

        <div className={styles.days}>
            <p>Dias</p>
            <BoxTime value={days} />
        </div>
  
        <div className={styles.hours}>
            <p>Horas</p>
            <BoxTime value={hours} />
        </div>
  
        <div className={styles.minutes}>
            <p>Minutos</p>
            <BoxTime value={minutes} />
        </div>

        <div className={styles.seconds}>
          <p>Segundos</p>
          <BoxTime value={seconds} />
        </div>
        <div className={styles.message2}>
          <p>Que eu TE AMO</p>
        </div>
      </div>
    </>
  );
};

export default BoxTimeGroup;
