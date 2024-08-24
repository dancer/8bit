import Book from "@/components/Book";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div className="fixed top-0 left-0 w-full overflow-hidden whitespace-nowrap text-white bg-black bg-opacity-90 z-50">
        <div className="relative flex overflow-x-hidden">
          <div className="py-1 animate-marquee flex items-center">
            <div className="marquee-content flex gap-20 items-center">
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Join Warp <span className="">Minigame coming soon!</span></span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span><span className="">Payroll and compliance</span> for startups.</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Find out more by <span className="">scrolling below</span></span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>We save you money <span className="">give us a chance!</span></span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Save an average <span className="">of $20K!</span></span>
                </div>
              </div>
              <div className="w-25"></div>
            </div>
          </div>
          <div className="absolute top-0 py-1 animate-marquee2 flex items-center">
            <div className="marquee-content flex gap-20 items-center">
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Join Warp <span className="">Minigame coming soon!</span></span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span><span className="">Payroll and compliance</span> for startups.</span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Find out more by <span className="">scrolling below</span></span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>We save you money <span className="">give us a chance!</span></span>
                </div>
              </div>
              <div className="marquee-text flex items-center">
                <div className="flex flex-row space-x-2">
                  <span>Save an average <span className="">of $20K!</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* buttons */}
      <div className="absolute top-10 right-4 z-50 flex gap-2">
        <a href="https://joinwarp.com/demo" className="nes-btn is-primary">Demo</a>
        <a href="https://joinwarp.com/invite" className="nes-btn is-success">Sign Up</a>
      </div>

{/* title/trophy */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <h1 className="text-4xl text-white font-bold mr-4 text-shadow">JOIN WARP</h1>
          <i className="nes-icon trophy is-large"></i>
        </div>
        <h2 className="text-xs text-white mt-2 text-shadow-sm">MINIGAME FOR GREAT MINDS</h2>
      </div>

<Book />

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

{/* octocat */}
        <section className="octocat absolute bottom-0 left-4 flex gap-2 items-center scale-50">
          <i className="nes-octocat animate"></i>
        </section>
      </div>
    </main>
  );
}