import React from 'react';
import chill from "./chill.png";
import four from "./four.png";
import five from "./five.png";

const Cards = () => {
  return (
    <div className="text-black w-full py-[8rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-3 rounded-lg bg-white hover:scale-105 duration-300 cursor-pointer">
          <img src={chill} alt="chill" className="w-20 mx-auto mt-[2rem] " />
          <h2 className="text-2xl font-bold text-center py-6">Single user</h2>
          <p className=" text-center text-3xl font-bold  ">1490 Rs</p>
          <div className="text-center font-medium py-2">
            <p className="py-2 mx-3">200 blogs per year</p>
            <p className="py-2 mx-3">1 granted User</p>
            <p className="py-2 mx-3"> Send Up to 500MB</p>
          </div>
          <button className="bg-[#7c56e6] w-[150px] h-[40px] rounded-2xl hover:scale-75 duration-300 mx-auto">
            {" "}
            Start Trial{" "}
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 rounded-lg bg-gray-200 hover:scale-105 duration-300 cursor-pointer md:my-0 my-8">
          <img src={four} alt="chill" className="w-20 mx-auto mt-[2rem] " />
          <h2 className="text-2xl font-bold text-center py-6">Four users</h2>
          <p className=" text-center text-3xl font-bold  ">2500 Rs</p>
          <div className="text-center font-medium py-2">
            <p className="py-2 mx-3">500 blogs per year</p>
            <p className="py-2 mx-3">4 granted User</p>
            <p className="py-2 mx-3"> Send Up to 1000MB</p>
          </div>
          <button className="bg-[#fff] text-[#301a96] w-[150px] h-[40px] rounded-2xl hover:scale-75 duration-300 mx-auto">
            {" "}
            Start Trial{" "}
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-3 rounded-lg bg-white hover:scale-105 duration-300 cursor-pointer">
          <img src={five} alt="chill" className="w-20 mx-auto mt-[2rem] " />
          <h2 className="text-2xl font-bold text-center py-6">Eight users</h2>
          <p className=" text-center text-3xl font-bold  ">4000 Rs </p>
          <div className="text-center font-medium py-2">
            <p className="py-2 mx-3">1000 blogs per year</p>
            <p className="py-2 mx-3">8 granted User</p>
            <p className="py-2 mx-3"> Send Up to 1500MB</p>
          </div>
          <button className="bg-[#7c56e6] w-[150px] h-[40px] rounded-2xl hover:scale-75 duration-300 mx-auto">
            {" "}
            Start Trial{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;