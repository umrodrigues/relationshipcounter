import React from "react";
import BoxTime from "../box-time/box-time";
import styles from './BoxTimeGroup.module.scss'



const BoxTimeGroup = () => {
  return (
    
    <>
    <div className= {styles.wrapper}>
    <BoxTime value={5} />
    <BoxTime value={10} />
    <p>:</p>
    <BoxTime value={5} />
    <BoxTime value={10} />
    <p>:</p>
    <BoxTime value={5} />
    <BoxTime value={10} />
    </div>
    </>  

  );
};

export default BoxTimeGroup;
