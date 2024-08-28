import Book from "@/components/Book";
import RetroPayroll from "@/components/RetroPayroll";
import Image from "next/image";
import Customize from "@/components/Customize";
import Music from "@/components/Music";
import RetroFAQ from "@/components/RetroFAQ";
import Boss from "@/components/Boss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      {/* buttons */}
      <div className="absolute top-10 right-4 z-50 flex gap-2">
        <a href="https://joinwarp.com/demo" className="nes-btn is-primary">Demo</a>
        <a href="https://joinwarp.com/invite" className="nes-btn is-success">Sign Up</a>
      </div>
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap text-white bg-gradient-to-r from-black via-gray-800 to-black bg-opacity-60 z-50">
        <div className="relative flex overflow-x-hidden">
          <div className="py-1 animate-marquee flex items-center">
            <div className="marquee-content flex gap-20 items-center">
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                <span>Join Warp <span className="text-[#06c258]">Minigame coming soon!</span></span> <span className="align-top emoji">🎲</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                <span>Payroll and compliance <span className="text-[#06c258]">for startups.</span></span> <span className="align-top emoji">🎁</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                <span>Find out more by <span className="text-[#06c258]">scrolling below</span></span> <span className="align-top emoji">👇</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                <span>We save you money <span className="text-[#06c258]">give us a chance!</span></span> <span className="align-top emoji">💰</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                <span>Save an average <span className="text-[#06c258]">of $20K!</span></span> <span className="align-top emoji">💸</span>
                </div>
              </div>
              <div className="w-25"></div>
            </div>
          </div>
          <div className="absolute top-0 py-1 animate-marquee2 flex items-center">
            <div className="marquee-content flex gap-20 items-center">
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Join Warp <span className="text-[#06c258]">Minigame coming soon!</span></span> <span className="align-top emoji">🎲</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Payroll and compliance <span className="text-[#06c258]">for startups.</span></span> <span className="align-top emoji">🎁</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Find out more by <span className="text-[#06c258]">scrolling below</span></span> <span className="align-top emoji">👇</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>We save you money <span className="text-[#06c258]">give us a chance!</span></span> <span className="align-top emoji">💰</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Save an average <span className="text-[#06c258]">of $20K!</span></span> <span className="align-top emoji">💸</span>
                </div>
              </div>
            </div>
          </div>
        </div>      </div>
{/* title/trophy */}
<div className="flex flex-col items-center mb-16">
  <div className="flex items-center">
    <h1 className="text-8xl text-white font-bold mr-4 text-shadow-lg bubbly-text [-webkit-text-stroke:3px_white] font-extrabold">RETRO WARP</h1>
    <i className="nes-icon trophy is-large "></i>
  </div>
  <h2 className="text-xl text-white mt-2 text-shadow-md bubbly-text-sm [-webkit-text-stroke:1px_white]">MINIGAME FOR GREAT MINDS</h2>
</div>


<RetroPayroll />
<Book />
<Customize />
<Boss />
<RetroFAQ />

{/* /footer */}
      <div>
        <section className="icon-list absolute bottom-4 right-4 flex gap-2 items-center">
          <a
            href="https://x.com/joinwarp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon twitter"></i>
          </a>
          <a href="mailto:contact@joinwarp.com">
            <i className="nes-icon gmail"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/joinwarp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon linkedin"></i>
          </a>
        </section>
{/* music */}
      <Music />
      </div>
    </main>
  );
}