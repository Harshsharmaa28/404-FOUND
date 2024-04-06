import React from "react";
import { contactUsImage } from "../../utils/Constant";

const Contact = () => {
  return (
    <div className="flex items-center  justify-center ">
      <div className="flex flex-col justify-center items-center px-4 py-4 sm:px-10 sm:py-10 bg-[#F3F3F3] shadow-lg rounded-lg">
        {/* Top three lines with text */}
        <div className="mb-8 text-center">
          <div className="rounded-3xl m-auto px-2 py-1 w-fit bg-[#2097C9] ">
            <h1 className="text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl  px-3">
              Members
            </h1>
          </div>
          <h1 className="text-2xl pt-2 sm:text-3xl uppercase text-[#002F46] font-semibold mb-2">
            We’ve been waiting for you
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
        {/* Main content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center w-full">
          {/* Form section */}
          <div>
            <form className="space-y-4 px-5  md:px-10 w-full">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full border-2 rounded-xl border-black focus:outline-none focus:border-blue-500 p-2"
                  style={{ boxShadow: "4.38px 4.38px 0px 0px #000000" }}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  className="w-full rounded-xl border-black border-2 focus:outline-none focus:border-blue-500 p-2"
                  style={{ boxShadow: "4.38px 4.38px 0px 0px #000000" }}
                  required
                />
              </div>
              <div>
                <textarea
                  id="query"
                  name="query"
                  placeholder="Query"
                  rows="4"
                  className="w-full rounded-xl border-2 border-black  focus:outline-none focus:border-blue-500 p-2"
                  style={{ boxShadow: "4.38px 4.38px 0px 0px #000000" }}
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#F7AF4D] w-full text-black font-bold text-xl py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                  style={{ boxShadow: "4.38px 4.38px 0px 0px #000000" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Image section */}
          <div className="w-screen mx-10 lg:mx-36 ">
            <img
              src={contactUsImage}
              style={{ width: "400px", height: "500px" }}
              alt="Contact Us"
              className="rounded-lg"
            />
          </div>
          {/* <div
            className="w-screen mx-10 lg:mx-36
           sm:mt-0"
          >
            <video
              style={{ width: "400px", height: "500px" }}
              src={contactUsVideo}
              autoPlay
              loop
              muted
            ></video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
