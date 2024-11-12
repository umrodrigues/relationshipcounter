'use client';
import React, { useRef, useState } from 'react';
import styles from './BackgroundMusic.module.scss';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); 
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/musicfundo.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <button className={styles.buttonSet} onClick={handlePlayPause}>
        {isPlaying ? 'Pausar <3' : 'Clique aqui <3'}
      </button>
    </>
  );
};

export default BackgroundMusic;
