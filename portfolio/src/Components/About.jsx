import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-900  to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-gray-500">
          Innovative MERN Stack Developer with expertise in MongoDB, Express.js,
          React, and Node.js. Passionate about crafting modern, user-centric web
          applications with a focus on responsiveness and scalability. Dedicated
          to continuous learning and staying updated with the latest
          technologies. Committed to delivering high-quality solutions that meet
          client needs and exceed expectations. Seeking opportunities to
          collaborate on exciting projects and contribute to the ever-evolving
          tech landscape.
        </p>

        <br></br>

        <p className="text-xl text-gray-500"> 
          Innovative MERN Stack Developer with expertise in MongoDB, Express.js,
          React, and Node.js. Passionate about crafting modern, user-centric web
          applications with a focus on responsiveness and scalability. Dedicated
          to continuous learning and staying updated with the latest
          technologies. Committed to delivering high-quality solutions that meet
          client needs and exceed expectations. Seeking opportunities to
          collaborate on exciting projects and contribute to the ever-evolving
          tech landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
