import React from "react";
import { Growth } from "../../utils/Constant";
import Infodiv from "./Infodiv";

const Info = () => {
  return (
    <div className="vsm:max-sm: h-auto gap-4 px-4 flex flex-col">
      <div className="vsm:max-sm:mt-8 rounded-lg h-[16rem] flex flex-col justify-center gap-6  bg-[#F3F3F3]">
        <div className="gap-5 flex justify-center">
          <span className=" text-5xl font-bold text-[#002F46]">Our</span>
          <span className=" h-[3rem] border-dotted border-2 px-6 py-2.5 border-black rounded-2xl bg-[#C9AE20]">
            TRENDS
          </span>
        </div>
        <div className="vsm:max-sm:px-4 mt-2 flex justify-between px-40 text-xl">
          <div className="items-center flex flex-col">
            <span className="vsm:max-sm:text-xl text-5xl font-bold text-[#4844EF]">1000+</span>
            <span className="vsm:max-sm:text-sm font-bold">Students</span>
          </div>
          <div className=" items-center flex flex-col">
            <span className="vsm:max-sm:text-xl text-5xl font-bold text-[#4844EF]">200+</span>
            <span className="vsm:max-sm:text-sm font-bold">Notes</span>
          </div>
          <div className="vsm:max-sm:hidden items-center flex flex-col">
            <span className="vsm:max-sm:text-xl text-5xl font-bold text-[#4844EF]">15+</span>
            <span className="vsm:max-sm:text-sm font-bold">Scholarship</span>
          </div>
          <div className="items-center flex flex-col">
            <span className="vsm:max-sm:text-xl text-5xl font-bold text-[#4844EF]">500+</span>
            <span className="vsm:max-sm:text-sm font-bold">Mentors</span>
          </div>
          <div className="items-center flex flex-col">
            <span className="vsm:max-sm:text-xl text-5xl font-bold text-[#4844EF]">100+</span>
            <span className="vsm:max-sm:text-sm font-bold">Colleges</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex rounded-lg vsm:max-sm:h-auto bg-[#F3F3F3] h-screen">
        <div className="vsm:max-sm:flex-col vsm:max-sm:flex-wrap flex justify-between">
          <div className="vsm:max-sm:text-2xl vsm:max-sm:px-0 vsm:max-sm:py-6 vsm:max-sm:text-center flex flex-wrap px-24 sm:py-36 justify-center sm:min-w-[45rem] sm:max-w-[45rem] text-[#002F46] font-bold text-5xl">
            Unlock Knowledge, Grow Skills Achieve Sucess
          </div>

          <div className="vsm:max-sm: py-4 justify-center gap-10 flex flex-wrap">
            <Infodiv />
            <Infodiv />
            <Infodiv />
            <Infodiv />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
