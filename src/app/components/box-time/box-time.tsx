import React from 'react';
import styles from './Boxtime.module.scss';

interface BoxTimeProps {
  value: number;
}

const BoxTime: React.FC<BoxTimeProps> = ({ value }) => {
  return (
    <div className={styles.boxTime}>
      {value}
    </div>
  );
};

export default BoxTime;
