import React from "react";
import SubjectComponent from "../Notes/SubjectComponent";
import { profileLocked } from "../../utils/Constant";
import Navbar from "../../components/Navbar/Navbar";
import TutorialComponent from "./TutorialComponent";

const Refrences = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <img className=" px-4 " src={profileLocked} alt="error" />
          <span className=" absolute -mt-[4.4rem] ml-[42rem]">
            Sign To Continue..
          </span>
        </div>
        <div className=" flex justify-center py-6  gap-4">
          <span className=" text-3xl">Your</span>
          <div class="inline-block rounded-2xl  px-2 py-1 w-fit bg-[#20C93B]">
            <h1 class="inline-block text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl px-3">
              Tutorails
            </h1>
          </div>
          <input
            className=" w-30 px-10 border border-black rounded-full "
            placeholder="Your Serach"
            type="text"
          />
        </div>
        <div>
          <div className=" font-bold text-3xl flex  gap-5 justify-between px-28">
            <div className="py-2 border border-dashed rounded-xl border-black text-center w-[25rem] h-auto bg-[#F3F3F3]">
              Branch
            </div>
            <div className="py-2 border border-dashed  border-black rounded-xl  text-center w-[60rem] h-auto bg-[#F3F3F3]">
              Subject
            </div>
          </div>
          <div className=" gap-5 h-screen py-4 flex px-28 justify-between">
            <div className="flex flex-col gap-4 py-2 border border-dashed  border-black rounded-lg w-[25rem] h-auto bg-[#F3F3F3]">
              <div className=" ml-5">Computer Science Engineering</div>
              <div className=" ml-5">
                Electronics and Communication Engineering
              </div>
              <div className=" ml-5">Electrical Engineering</div>
              <div className=" ml-5">Mechanical Engineering</div>
              <div className=" ml-5">Civil Engineering</div>
            </div>
            <div className="py-2 border border-dashed overflow-y-scroll  border-black rounded-lg  text-center w-[60rem] h-auto bg-[#F3F3F3]">
              {[...Array(25)].map((_, index) => (
                <TutorialComponent key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refrences;
