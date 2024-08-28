import React from 'react';
import Image from 'next/image';

const Customize: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-xl text-white font-extrabold mb-2 text-shadow-lg">
          CUSTOMIZABLE CHARACTERS
        </h2>
        <span className="text-gradient rotating-gradient gradient gradient-shadow lg:pl-3 relative -top-2">
        For Your Employees
        </span>
      </div>
      <div className="flex space-x-4">
        <div className="p-2 rounded-lg transform rotate-3">
          <Image src="/images/customize1.png" alt="Customizable character 1" width={150} height={150} className="rounded object-cover image-hover-grow" />
        </div>
        <div className="p-2 rounded-lg transform -rotate-3">
          <Image src="/images/customize2.png" alt="Customizable character 2" width={200} height={200} className="rounded object-cover image-hover-grow flip-horizontal" />
        </div>
      </div>
    </div>
  );
};


export default Customize;
