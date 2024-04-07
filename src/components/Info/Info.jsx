import React from "react";
import { Growth } from "../../utils/Constant";
import Infodiv from "../Infodiv";

const Info = () => {
  return (
    <div className=" h-screen gap-4 px-4 flex flex-col">
      <div className=" rounded-lg h-[16rem] flex flex-col justify-center gap-6  bg-[#F3F3F3]">
        <div className="gap-5 flex justify-center">
          <span className=" text-5xl font-bold text-[#002F46]">Our</span>
          <span className=" h-[3rem] border-dotted border-2 px-6 py-2.5 border-black rounded-2xl bg-[#C9AE20]">
            TRENDS
          </span>
        </div>
        <div className=" mt-2 flex justify-between px-40 text-xl">
          <div className="items-center flex flex-col">
            <span className=" text-5xl font-bold text-[#4844EF]">1000+</span>
            <span className=" font-bold">Students</span>
          </div>
          <div className=" items-center flex flex-col">
            <span className=" text-5xl font-bold text-[#4844EF]">200+</span>
            <span className=" font-bold">Notes</span>
          </div>
          <div className="items-center flex flex-col">
            <span className=" text-5xl font-bold text-[#4844EF]">15+</span>
            <span className=" font-bold">Scholarship</span>
          </div>
          <div className="items-center flex flex-col">
            <span className=" text-5xl font-bold text-[#4844EF]">500+</span>
            <span className=" font-bold">Mentors</span>
          </div>
          <div className="items-center flex flex-col">
            <span className=" text-5xl font-bold text-[#4844EF]">100+</span>
            <span className=" font-bold">Colleges</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex rounded-lg bg-[#F3F3F3] h-screen">
        <div className=" flex justify-between">
          {/* <div className="flex flex-wrap px-20 py-36 justify-center min-w-[45rem] max-w-[45rem] text-[#002F46] font-bold text-5xl">
            Unlock Knowledge, Grow Skills Achieve Success
            <img src={Growth} alt="" />
          </div> */}
          <div className="flex flex-wrap px-24 py-36 justify-center min-w-[45rem] max-w-[45rem] text-[#002F46] font-bold text-5xl">
            Unlock Knowledge, Grow Skills Achieve Sucess
          </div>

          <div className=" py-4 justify-center gap-10 flex flex-wrap">
            <Infodiv />
            <Infodiv />
            <Infodiv />
            <Infodiv />

            {/* <div className=" rounded-lg w-[15rem] h-[15rem] ">
              <div className=" h-2/3 w-full bg-[#ECCDDC] "></div>
              <div className=" h-1/3 text-center w-full  ">
                <h1 className=" font-bold ">This is more about notes</h1>
                <p className=" text-xs ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
            <div className=" rounded-lg w-[15rem] h-[15rem] bg-[#ECCDDC]"></div>
            <div className=" rounded-lg w-[15rem] h-[15rem] bg-[#ECCDDC]"></div>
            <div className=" rounded-lg w-[15rem] h-[15rem] bg-[#ECCDDC]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
