import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import cplus from "../assets/cplus.png";
import csharp from "../assets/csharp.png";
import mongo from "../assets/mongo.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJS",
      style: "shadow-green-300",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: cplus,
      title: "C++",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: csharp,
      title: "C#",
      style: "shadow-violet-400",
    },
    {
      id: 10,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-600",
    },
    {
      id: 11,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: java,
      title: "Java",
      style: "shadow-blue-300",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit pb-20"
    >
      <div className="max-w-screen-2xl mx-auto p-4 pt-20 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Here are the technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
