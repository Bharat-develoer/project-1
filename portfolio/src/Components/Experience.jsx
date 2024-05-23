import React from "react";
import reactexpressjslogo from "../assets/reactexpressjslogo.png";
import reactnodejslogo from "../assets/reactnodejslogo.png";
import reactihtml7 from "../assets/reactihtml7.png";
import reactnextjslogo from "../assets/reactnextjslogo.png";
import reacticss8 from "../assets/reactcss8.png";
import reactlogo from "../assets/reactlogo.png";
import reactjs9 from "../assets/reactjs9.png";
import mogoDB from "../assets/mogoDB.png";
import reacttailwind from "../assets/reacttailwind.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: reactihtml7,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: reacticss8,
      title: "CSS",
      style: "shadow-blue-300",
    },
    {
      id: 3,
      src: reactjs9,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactlogo,
      title: "React",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: reacttailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: reactnextjslogo,
      title: "Next js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mogoDB,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: reactnodejslogo,
      title: "Nodejs",
      style: "shadow-green-800",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b  from-gray-900 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Technologyies that I Learning for MERN.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html logo" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
