import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#9A8873] font-bold p-2">
          EVERY BITE IT'S FULL OF JOY!
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Just taste and you'll learn the truth of true pleasure.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4x; text-x; font-bold py-4">
            Whether it is...
          </p>
          <Typed
            className="md:text-5xl sm:text-4x; text-x; font-bold md:pl-4 pl-2"
            strings={["Pizza", "Burger", "Pasta", "Salad"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#9A8873]">
          Trust us, it's worth a try
        </p>
        <button className="bg-[#37423D] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
