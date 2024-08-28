"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who is Warp payroll built for?",
    answer: "Warp is designed for startups and small businesses looking for efficient payroll solutions."
  },
  {
    question: "Who can I run payroll for using Warp?",
    answer: "With Warp, you can run payroll for both employees and contractors in the United States."
  },
  {
    question: "Does Warp pay and file all taxes for me?",
    answer: "Yes, Warp handles all tax payments and filings on your behalf, ensuring compliance and saving you time."
  },
  {
    question: "Why should I use Warp?",
    answer: "Warp offers a streamlined, user-friendly payroll experience tailored for modern businesses, with excellent support and time-saving features."
  },
  {
    question: "Why should I switch to Warp?",
    answer: "Switching to Warp can simplify your payroll processes, reduce errors, and potentially save you money through efficient automation and expert support."
  },
  {
    question: "How long does it take to onboard to Warp?",
    answer: "The onboarding process with Warp is quick and efficient, typically taking less than a week to get you up and running."
  },
  {
    question: "How easy is it to migrate to Warp?",
    answer: "Migrating to Warp is designed to be as smooth as possible, with our team guiding you through each step of the process to ensure a seamless transition."
  },
  {
    question: "What is warp retro?",
    answer: "Warp Retro brings a fun, 8-bit twist to payroll management, letting you handle your finances with a nostalgic flair. Experience the future of payroll with a retro touch – coming soon!"
  }
];

const RetroFAQ: React.FC = () => {
  const [openFAQs, setOpenFAQs] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prevOpenFAQs => {
      const newOpenFAQs = new Set(prevOpenFAQs);
      if (newOpenFAQs.has(index)) {
        newOpenFAQs.delete(index);
      } else {
        newOpenFAQs.add(index);
      }
      return newOpenFAQs;
    });
  };

  return (
    <div className="with-title is-centered">
      <h2 className="title text-white text-4xl text-center mb-8">FAQ</h2>
      <div className="flex flex-wrap mt-4">
        <div className="w-1/2 pr-2">
          {faqData.slice(0, 4).map((item, index) => (
            <div key={index} className="mb-4">
              <div 
                className="nes-btn is-primary w-[500px] text-left flex flex-col items-start relative text-sm"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="pr-8">{item.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${openFAQs.has(index) ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </div>
                {openFAQs.has(index) && (
                  <div className="mt-2 pt-2 border-t border-gray-200 w-full">
                    <p className="text-xs text-left">{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 pl-2">
          {faqData.slice(4).map((item, index) => (
            <div key={index + 4} className="mb-4">
              <div 
                className="nes-btn is-primary w-[500px] text-left flex flex-col items-start relative text-sm" 
                onClick={() => toggleFAQ(index + 4)}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="pr-8">{item.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${openFAQs.has(index + 4) ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </div>
                {openFAQs.has(index + 4) && (
                  <div className="mt-2 pt-2 border-t border-gray-200 w-full">
                    <p className="text-xs text-left">{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetroFAQ;