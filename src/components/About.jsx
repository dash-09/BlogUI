import React from "react";
import code from "./code.png";
const About = () => {
  return (
    <div className="text-white bg-[#000300] py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={code} alt="" className="w-[400px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-purple-400 font-bold ">
           Adarsh Shukla
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Web Developer & Software Engineer
          </h1>
          <p>
            I am a 4th yr Information Technology student with a strong passion
            for technology. I am actively seeking opportunities to apply my
            knowledge and gain practical experience. Please take a moment to
            explore my projects, and I would be delighted to connect with you.
          </p>
          <button className=" bg-[#7c56e6] w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 font-semibold hover:bg-[#322075]">
            Read Blogs Bro !
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
