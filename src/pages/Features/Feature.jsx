import React from "react";
import { featureLeftImg, featureRightImg } from "../../utils/Constant";

const Feature = () => {
  return (
    <div className="  pt-5 ">
      <div className=" mx-auto text-center text-4xl bg-black text-white p-2 w-fit rounded-3xl flex  gap-10 my-5 px-20   ">
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
      <div className="flex justify-between gap-10 w-full px-20 py-10 ">
        <div className="w-2/3 h-[38rem] flex flex-col justify-between  ">
          <div className="h-[18rem] bg-[#F94646] rounded-xl p-4   ">
            <div className=" border-2 border-black    border-dashed  h-full rounded-xl    "></div>
          </div>
          <div className="h-[18rem] bg-[#9681E8]  rounded-xl p-4   ">
            <div className=" border-2 border-black    border-dashed  h-full rounded-xl    "></div>
          </div>
        </div>
        <div className="w-1/3 h-[38rem] bg-[#5F93F9] rounded-xl p-4  ">
          <div className=" border-2 border-black    border-dashed  h-full rounded-xl    "></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
