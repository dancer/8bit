import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";
import Book from '../components/Book';

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "8bit",
  description: "Here I come!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.className}`}>
        <video autoPlay loop muted playsInline className="fixed top-0 left-0 min-w-full min-h-full object-cover z-[-1] brightness-[40%] blur-[10px]">
          <source src="/images/as.mov" type="video/quicktime" />
          <source src="/images/as.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {children}
      </body>
    </html>
  );
}
