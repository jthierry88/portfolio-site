import React from "react";
import MyImage from "../assets/jtsm.png";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-2xl mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm James, a Software Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">
            I enjoy building cool apps with aesthetically pleasing interfaces
            and top-notch functionality. I'm constantly learning new tricks of
            the trade and thrive on finding solutions to exciting challenges.
          </p>

          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 
            flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={MyImage}
            alt="my profile"
            className="rounded-2xl
          mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
