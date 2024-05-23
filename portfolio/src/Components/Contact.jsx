import React from "react";

const Contact = () => {
  return (
    <div  name="contact"
            className=" w-full h-screen bg-gradient-to-b   from-black via-black to-gray-900 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit</p>
        </div>

        <div className="flex justify-center items-center" >
          <form
            action="https://getform.io/f/qblowmqa"
            method="POST"
           className="flex flex-col border-2  w-full md:w1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 mx-4 mt-4 bg-transparent border-2 rounded-lg text-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="my-4 mx-4 p-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
            />

            <textarea
              name="meassage"
              rows="10"
              placeholder="enter your Mesaage"
              className="p-2 mx-4 bg-transparent border-2 rounded-lg text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-l from from-cyan-500 to-purple-700 px-6 py-3 my-3 mx-auto flex items-center duration-300 hover:scale-110 text-2xl rounded-xl">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
