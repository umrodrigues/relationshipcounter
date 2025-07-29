'use client';
import React, { useEffect, useRef, useMemo  } from 'react';
import BoxTime from '../box-time/box-time';
import styles from './BoxTimeGroup.module.scss';
import confetti from 'canvas-confetti';
import { useDateCounter } from '@/hooks/useDateCounter';

export const BoxTimeGroup: React.FC = () => {
  const startDate = useMemo(() => new Date('2024-08-04'), []);
  const { years, days, hours, minutes, seconds } = useDateCounter(startDate);
  const confettiFiredRef = useRef(false);

  useEffect(() => {
    if (years >= 1 && !confettiFiredRef.current) {
      confettiFiredRef.current = true;
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  }, [years]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        <p>Oi amor, fazem</p>
      </div>

      {years > 0 && (
        <div className={styles.years}>
          <p>Ano</p>
          <BoxTime value={years} />
        </div>
      )}

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
  );
};


