import React from "react";
/* import Typed from 'react-typed'; */

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#7c56e6] font-bold p-2 ">
          Hi there, I am Adarsh and I am a blogger
        </p>
        <h1 className="md:text-6xl sm:text-4xl text-5xl font-bold md:py-4 ">
          {" "}
          And You r doing Grt
        </h1>
        <div>
          <p className=" md:text-4xl sm:text-2.5xl text-xl font-bold py-3">
            Art, Charismatic, Amazing{" "}
          </p>
        </div>
        <p className="md:2xl text-xl font-bold text-gray-500 uppercase ">
          Our Imperfections are our beauty, they tell us who we are and what we
          can be. Embrace It.{" "}
        </p>
        <button className=" bg-[#7c56e6] w-[200px] rounded-md my-6 mx-auto py-3 font-semibold hover:bg-[#322075]">
          Read Blogs Bro !
        </button>
      </div>
    </div>
  );
};

export default Hero;
