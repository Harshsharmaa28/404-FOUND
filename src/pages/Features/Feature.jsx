import React from "react";
import { featureLeftImg, featureRightImg } from "../../utils/Constant";
import Feature2 from "./Feature2";

const Feature = () => {
  return (
    <div className="vsm:max-sm:hidden w-full  pt-5 ">
      <div className=" mx-auto text-center text-4xl bg-black text-white p-2 w-fit rounded-full flex  gap-10 my-5 px-20   ">
        <div>
          {" "}
          First{" "}
          <span
            className=" bg-[#AA76FF] rounded-xl my-1 "
            style={{
              border: "1.57px solid #000000",
              "box-shadow": "3.93px 3.93px 0px 0px #000000",
            }}
          >
            100
          </span>{" "}
          Registrations will have <span>50%</span> OFF{" "}
        </div>
        <div>
          <div className=" flex gap-5 text-black   ">
            <button className=" bg-[#F2DB0D] rounded-xl px-2 py-1  ">
              Download
            </button>
            <button className=" bg-[#FFFFFF] rounded-xl px-2 py-1  ">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <img src={featureLeftImg} alt="featureLeftImg" />
        <div className="text-center text-4xl font-bold text-[#002F46]">
          <h1>Unleash Your Skills,</h1>
          <h1>Get the knowledge</h1>
        </div>
        <img src={featureRightImg} alt="featureRightImg" />
      </div>
      <div className=" flex justify-between gap-10 w-full px-20 py-8 ">
        <div className="w-2/3 h-[35rem] flex flex-col justify-between  ">
          <div className="h-[17rem] bg-[#F94646] rounded-xl p-4  ">
            <div className=" flex flex-wrap px-10 text-white text-3xl border-2 border-black py-10    border-dashed  h-full rounded-xl    ">
              <span className=" font-bold">Discussions
              </span>
              Stop the solo grind, find your learning tribe! Here at Nexlearn, you'll connect and grow with a supportive community. Connect your peer group to level up your skills</div>
          </div>
          <div className="h-[17rem] bg-[#9681E8]  rounded-xl p-4   ">
            <div className="flex flex-wrap px-10 text-white text-3xl py-10 border-2 border-black    border-dashed  h-full rounded-xl    ">
              <span className=" font-bold">Mentorship and information</span>
              Nexlearn goes beyond exams! Master skills, discuss ideas with peers, and get expert mentorship for your dream career. We'll also notify you of scholarships, jobs, and more!</div>
          </div>
        </div>
        <div className="w-1/3 h-[35rem] bg-[#5F93F9] rounded-xl p-4  ">
          <div className=" border-2 border-black text-center  py-6 text-2xl  text-white  border-dashed  h-full rounded-xl    ">
            <span className="text-[2rem] font-bold text-center">Academics and Notes </span>

            Feeling overwhelmed? Conquer exams, master new skills, and explore career paths.




            Academics and Notes
            Browse our extensive FAQ section
            Get expert guidance
            Find you peer group or community
            Level up your skills
            Ace your exams

            Master any subject with our notes and video lectures
          </div>
        </div>
      </div>
      <div className=" py-5 ">
        <Feature2 />
      </div>
    </div>
  );
};

export default Feature;
