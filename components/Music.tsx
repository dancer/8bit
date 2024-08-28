"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Music() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = new Audio('/sounds/nostalgia.mp3');
    audioElement.volume = 0.25; 
    setAudio(audioElement);
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="music-icon absolute bottom-0 left-0 flex gap-2 items-center scale-50 cursor-pointer" onClick={toggleMusic}>
      <Image 
        src={isPlaying ? "/images/music.png" : "/images/music.png"} 
        alt="Music Icon" 
        width={200} 
        height={64} 
        className={isPlaying ? "" : ""}
      />
    </section>
  );
}
