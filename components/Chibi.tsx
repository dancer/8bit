"use client";
// components/Chibi.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Chibi = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('right');
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const speed = 5;
      switch(e.key) {
        case 'ArrowLeft':
        case 'a':
          setPosition(prev => ({ ...prev, x: prev.x - speed }));
          setDirection('left');
          break;
        case 'ArrowRight':
        case 'd':
          setPosition(prev => ({ ...prev, x: prev.x + speed }));
          setDirection('right');
          break;
        case 'ArrowUp':
        case 'w':
          setPosition(prev => ({ ...prev, y: prev.y - speed }));
          break;
        case 'ArrowDown':
        case 's':
          setPosition(prev => ({ ...prev, y: prev.y + speed }));
          break;
      }
      setFrame(prev => (prev + 1) % 4);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ position: 'absolute', left: position.x, top: position.y }}>
      <Image
        src={`/CHIBI/02_Runing/01_Run/${direction}${frame + 1}.png`}
        alt="Chibi character"
        width={64}
        height={64}
      />
    </div>
  );
};

export default Chibi;
