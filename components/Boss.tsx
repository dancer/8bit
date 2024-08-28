import Image from "next/image";

const Boss = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="lg:col-span-2 text-center overflow-hidden mb-8">
        <div className="mx-auto lg:inline-block leading-none text-shadow tilt-up">
          <div className="text-bold text-white text-[26px] lg:text-[70px] [-webkit-text-stroke:4px_white] px-5">
            ELIMINATE YOUR
          </div>
          <div 
            className="text-gradient text-l rotating-gradient gradient gradient-shadow text-[65px] lg:text-[90px] px-5 w-full text-red-500 py-4 [-webkit-text-stroke:3px_white] font-extrabold"
          >
            Competition
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-[-60px]">
        <div className="mr-8">
          <div className="text-white">
            <p className="text-lg">A COMPANY? AN EMPLOYEE?</p>
          </div>
          <div className="text-white mt-4">
            <p className="text-l bubbly-textW bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text font-extrabold">
              SEARCH AND DESTROY!!!
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image src="/images/shoot.gif" alt="Boss" width={400} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Boss;