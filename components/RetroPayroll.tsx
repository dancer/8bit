"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RetroPayroll: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Coming soon . . .';
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (isTyping) {
        if (index < fullText.length) {
          setText(fullText.substring(0, index + 1));
          setIndex(prevIndex => prevIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (index > 0) {
          setText(fullText.substring(0, index - 1));
          setIndex(prevIndex => prevIndex - 1);
        } else {
          setIsTyping(true);
        }
      }
    }, 150);

    return () => clearInterval(typingEffect);
  }, [isTyping, index]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex items-center justify-between space-x-8 relative">
      {/* Left section: Manage Your Payroll */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image src="/images/game.png" alt="Console" width={140} height={100} className="pixelated" />
          <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>
        <div className="with-title w-200 p-4">
          <p className="title text-l text-white text-shadow mb-2">MANAGE YOUR PAYROLL</p>
          <p className="text-l text-white text-shadow-sm mb-4">IN A RETRO WAY</p>
          <div className="absolute items-center justify-center">
            <p className="text-custom-green text-sm font-bold w-full">{text}{showCursor ? '|' : ''}</p>
          </div>
        </div>
      </div>

      {/* Right section: We Help Your Startup */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image src="/images/heart.png" alt="Console" width={140} height={100} className="pixelated" />
          <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>
        <div className="with-title w-200 p-4">
          <p className="title text-l text-white text-shadow mb-2">WE HELP YOUR STARTUPS</p>
          <p className="text-l text-white text-shadow-sm mb-4">JOIN OUR BATTLE</p>
          <div className="absolute items-center justify-center">
          <a href="https://joinwarp.com/demo" className="" style={{ color: '#4CAF50' }}>
          Get Started
        </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroPayroll;
