import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "8bit",
  description: "Here I come!",
  
};

import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../images/mario.ico" type="image/x-icon" />
      </head>
      <body className={`${pressStart2P.className}`}>
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 min-w-[calc(100%+40px)] min-h-[calc(100%+40px)] object-cover -translate-x-1/2 -translate-y-1/2 brightness-[40%] blur-[10px]">
            <source src="/images/as.mov" type="video/quicktime" />
            <source src="/images/as.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {children}
      </body>
    </html>
  );
}

