"use client";
import React, { useState } from 'react';
import Page from './Page';
import Image from 'next/image';
import Link from 'next/link';

const Book: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  function formatContent(content: string) {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }
  
  const pages: React.ReactElement[] = [
    <Page key="page1" title="Join Warp" content="Payroll and compliance for startups.">
      <div style={{ position: 'absolute', bottom: '10px', left: '-20px', animation: 'float 3s ease-in-out infinite' }}>
        <Image src="/images/tinywarp.svg" alt="Tiny Warp" width={80} height={80} className="spinning-logo" />
      </div>
    </Page>,
    <Page key="page2" title="Payroll" content="Payroll and compliance are crucial aspects of running a startup. Warp simplifies these processes, ensuring you stay compliant with regulations while efficiently managing your team's payroll. Our platform automates tax calculations, handles benefits administration, and provides real-time reporting to keep your startup on track." />,
    <Page key="page3" title="Features" content={formatContent("• Automated payroll processing\n• Tax compliance management\n• Employee self-service portal\n• Integration with popular accounting software")} />,
    <Page key="page4" title="Growth" content="With Warp, you can focus on growing your business while we handle the complexities of payroll and compliance. Our expert team is always available to provide support and guidance, ensuring your startup's success." />,
    <Page key="page5" title="Global Payroll" content="Warp offers global payroll solutions, allowing you to easily manage international teams. We handle currency conversions, local tax regulations, and ensure compliance across multiple jurisdictions." />,
    <Page key="page6" title="Benefits Management" content={formatContent("Simplify your benefits administration with Warp:\n• Health insurance\n• Retirement plans\n• Paid time off tracking\n• Custom benefits packages")} />,
    <Page key="page7" title="Compliance" content="Stay compliant with ever-changing regulations. Warp keeps you up-to-date with local, state, and federal laws, handling tax filings, and generating required reports automatically." />,
    <Page key="page8" title="Why Choose Warp?" content={formatContent("• User-friendly interface\n• Dedicated customer support\n• Scalable solutions for growing startups\n• Secure and reliable platform\n• Continuous updates and improvements")}>
      <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
        <a href="https://joinwarp.com/demo" className="" style={{ color: 'lightgreen', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
          Get Started
        </a>
      </div>
    </Page>,   
  ];

  const flipPage = (direction: 'next' | 'prev') => {
    if ((direction === 'next' && currentPage < pages.length - 2) ||
        (direction === 'prev' && currentPage > 0)) {
      setIsFlipping(true);
      setFlipDirection(direction);
      // Immediately update the currentPage
      setCurrentPage(prevPage => direction === 'next' ? prevPage + 2 : prevPage - 2);
      // Reset flipping state after animation
      setTimeout(() => {
        setIsFlipping(false);
      }, 1000); // Match this with the CSS animation duration
    }
  };

  return (
    <div>
      <div className="book">
        <div className="book-content">
          <div className="page-spread">
            <div className={`page left-page ${isFlipping ? 'flipping' : ''}`}>
              {pages[currentPage]}
              <PageNumber current={currentPage + 1} total={pages.length} />
            </div>
            <div className={`page right-page ${isFlipping ? 'flipping' : ''}`}>
              {pages[currentPage + 1]}
              <PageNumber current={currentPage + 2} total={pages.length} />
            </div>
            {isFlipping && (
              <div className={`flipping-page ${flipDirection}`}>
                <div className="flipping-page-content front">
                  {flipDirection === 'next' ? pages[currentPage - 1] : pages[currentPage + 1]}
                </div>
                <div className="flipping-page-content back">
                  {flipDirection === 'next' ? pages[currentPage] : pages[currentPage + 2]}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="book-controls">
        <button className="nes-btn" onClick={() => flipPage('prev')} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          className="nes-btn"
          onClick={() => flipPage('next')}
          disabled={currentPage >= pages.length - 2}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Book;

const PageNumber: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="page-number font-mono">
    {current} / {total}
  </div>
);

