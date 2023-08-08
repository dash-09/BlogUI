import React from 'react'

const Signup = () => {
    return (
      <div className="w-full py-16 text-black bg-[#fff] px-4">
        <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3  ">
          <div className=" col-span-2 my-4">
            <h1 className="md:text-3.5xl sm:text-2xl text-2xl font-bold md:py-4 ">
              Subscribe to my Blogs. Its Awwwsome
            </h1>
            <p> You will not regret. That's what she said</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
              <input
                type="email"
                placeholder="Enter Email"
                className="p-3 flex w-full rounded-md text-black"
              />
              <button className=" bg-[#7c56e6] w-[200px] rounded-full my-6 mx-auto py-3 font-semibold hover:bg-[#322075]">
                Nofify me !
              </button>
            </div>
          </div>
           
        </div>
      </div>
    );
}

export default Signup;