import React from "react";
import { IoMdDownload } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const SubjectComponent = () => {
  return (
    <div className="">
      <div
        className="vsm:max-sm:text-sm mx-4 my-4 py-3 md:px-20 flex  justify-between rounded-lg "
        style={{
          border: "2px solid #000000",
          "box-shadow": "4px 4px 0px 0px #000000",
        }}
      >
        <div className=" text-2xl font-semibold ">
          Introduction to Artificial Intelligence
        </div>
        <div className=" text-[#2F2F2F] pt-2 flex gap-7 ">
          <IoMdDownload className=" text-3xl " />
          <IoMdEye className=" text-3xl " />
        </div>
      </div>
    </div>
  );
};

export default SubjectComponent;
