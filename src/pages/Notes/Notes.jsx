import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { profileLocked } from "../../utils/Constant";
import SubjectComponent from "./SubjectComponent";
import { Link } from "react-router-dom";

const Notes = () => {
  return (
    <div className="vsm:max-sm:">
      <Navbar />
      <div>
        <div>
          <img className=" px-4 " src={profileLocked} alt="error" />
          <Link to="/signup1">
            <span className="vsm:max-sm:text-[8px] vsm:max-sm:-mt-5 ml-40 absolute sm:-mt-[4.4rem] sm:ml-[42rem]">
              Sign To Continue..
            </span>
          </Link>
        </div>
        <div className="vsm:max-sm:flex-col vsm:max-sm:items-center flex justify-center py-6  gap-4">
          <div className=" flex justify-center items-center gap-4">
            <span className=" text-3xl">Your</span>
            <div class="inline-block rounded-2xl  px-2 py-1 w-fit bg-[#20C93B]">
              <h1 class="inline-block text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl px-3">
                Notes
              </h1>
            </div>
          </div>
          <input
            className="vsm:max-sm: vsm:max-sm: w-30 px-10 border border-black rounded-full "
            placeholder="Your Serach"
            type="text"
          />
        </div>
        <div className="">
          <div className="vsm:max-sm:px-4 vsm:max-sm:text-2xl vsm:max-sm: font-bold text-3xl flex  gap-5 justify-between px-28">
            <div className="py-2 border border-dashed rounded-xl border-black text-center w-[25rem] h-auto bg-[#F3F3F3]">
              Branch
            </div>
            <div className="py-2 border border-dashed  border-black rounded-xl  text-center w-[60rem] h-auto bg-[#F3F3F3]">
              Subject
            </div>
          </div>
          <div className="vsm:max-sm: px-4 gap-5 h-screen py-4 flex sm:px-28 justify-between">
            <div className="vsm:max-sm:hidden flex flex-col gap-4 py-2 border border-dashed  border-black rounded-lg w-[25rem] h-auto bg-[#F3F3F3]">
              <div className="vsm:max-sm:px-2 font-medium sm:ml-5">Computer Science Engineering</div>
              <div className="vsm:max-sm:px-2 font-medium sm:ml-5">
                Electronics and Communication Engineering
              </div>
              <div className="vsm:max-sm:px-2 font-medium sm:ml-5">Electrical Engineering</div>
              <div className="vsm:max-sm:px-2 font-medium sm:ml-5">Mechanical Engineering</div>
              <div className="vsm:max-sm:px-2 font-medium sm:ml-5">Civil Engineering</div>
            </div>
            <div className="vsm:max-sm: flex flex-wrap py-2 border border-dashed overflow-y-scroll  border-black rounded-lg  text-center w-[60rem] h-auto bg-[#F3F3F3]">
              {[...Array(25)].map((_, index) => (
                <SubjectComponent key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
