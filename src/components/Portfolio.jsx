import React from "react";
import gamehub from "../assets/portfolio/gamehub_.png";
import reactWeather from "../assets/portfolio/weatherapp_.png";
import pong from "../assets/portfolio/pong_.png";
import classChat from "../assets/portfolio/classchat_.png";
import wip from "../assets/portfolio/wip.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gamehub,
      demoLink: "https://game-hub-xi-flame.vercel.app/",
      codeLink: "https://github.com/jthierry88/game-hub",
    },
    {
      id: 2,
      src: reactWeather,
      demoLink: "https://whats-weather.vercel.app/",
      codeLink: "https://github.com/jthierry88/weather-app",
    },
    {
      id: 3,
      src: pong,
      codeLink: "https://github.com/jthierry88/pong-game",
    },
    {
      id: 4,
      src: classChat,
      codeLink: "https://github.com/jthierry88/class-chat",
    },
    {
      id: 5,
      src: wip,
    },
    {
      id: 6,
      src: wip,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-2xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Check out some of the work I've done in various programming
            languages and frameworks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <button className="w-full h-full">Demo</button>
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <button className="w-full h-full">Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
