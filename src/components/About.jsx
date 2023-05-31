import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-xl p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline
          border-b-4 border-gray-500"
          >
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My love of computers started when I was 13 years old and my family
          purchased a PC for the first time. I quickly became proficient and
          well-versed in various technologies as time progressed, even going as
          far as building my own PC which was a greatly informative and
          rewarding experience.
        </p>

        <br />

        <p className="text-xl">
          It was in 2017 that I made the decision to return to college to pursue
          a Bachelor's degree in Computer Science. During my time there I
          learned valuable skills related to programming and design, as well as
          associated best practices. These concepts helped establish a strong
          foundation that I have been able to continuously build upon through
          undertaking personal projects within my varied interests.
        </p>
      </div>
    </div>
  );
};

export default About;
